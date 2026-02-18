import json
import sys
import os

def rgba_to_hex(c, opacity=1.0):
    r = int(c.get('r', 0) * 255)
    g = int(c.get('g', 0) * 255)
    b = int(c.get('b', 0) * 255)
    a = c.get('a', 1.0)
    return f"#{r:02X}{g:02X}{b:02X}", a * opacity

def extract_node_tree(node, depth=0, results=None):
    if results is None:
        results = []

    indent = "  " * depth
    name = node.get('name', 'unnamed')
    ntype = node.get('type', 'unknown')
    bbox = node.get('absoluteBoundingBox', {})
    w = bbox.get('width', 0)
    h = bbox.get('height', 0)
    x = bbox.get('x', 0)
    y = bbox.get('y', 0)

    line = f"{indent}{ntype}: \"{name}\" ({w}x{h}) at ({x},{y})"
    results.append(line)

    # Fills
    fills = node.get('fills', [])
    for f in fills:
        if f.get('visible', True) is not False:
            ftype = f.get('type')
            if ftype == 'SOLID':
                c = f.get('color', {})
                hex_color, alpha = rgba_to_hex(c, f.get('opacity', 1.0))
                results.append(f"{indent}  Fill: {hex_color} alpha={alpha:.2f}")
            elif ftype == 'GRADIENT_LINEAR':
                stops = f.get('gradientStops', [])
                results.append(f"{indent}  Gradient Linear: {len(stops)} stops")
                for s in stops:
                    c = s.get('color', {})
                    hex_color, _ = rgba_to_hex(c)
                    results.append(f"{indent}    Stop {s.get('position',0):.2f}: {hex_color} a={c.get('a',1):.2f}")
                handles = f.get('gradientHandlePositions', [])
                if handles:
                    results.append(f"{indent}    Handles: {handles}")
            elif ftype == 'GRADIENT_RADIAL':
                stops = f.get('gradientStops', [])
                results.append(f"{indent}  Gradient Radial: {len(stops)} stops")
                for s in stops:
                    c = s.get('color', {})
                    hex_color, _ = rgba_to_hex(c)
                    results.append(f"{indent}    Stop {s.get('position',0):.2f}: {hex_color} a={c.get('a',1):.2f}")
            elif ftype == 'IMAGE':
                results.append(f"{indent}  Fill: IMAGE ref={f.get('imageRef','')}")

    # Effects
    effects = node.get('effects', [])
    for e in effects:
        if e.get('visible', True):
            c = e.get('color', {})
            hex_color, _ = rgba_to_hex(c) if c else ('#000000', 1)
            offset = e.get('offset', {})
            results.append(f"{indent}  Effect: {e.get('type')} color={hex_color} a={c.get('a',0):.3f} offset=({offset.get('x',0)},{offset.get('y',0)}) blur={e.get('radius',0)} spread={e.get('spread',0)}")

    # Corner radius
    cr = node.get('cornerRadius')
    rcr = node.get('rectangleCornerRadii')
    if cr:
        results.append(f"{indent}  BorderRadius: {cr}")
    if rcr and rcr != [0,0,0,0]:
        results.append(f"{indent}  CornerRadii: {rcr}")

    # Text style
    style = node.get('style', {})
    if style and ntype == 'TEXT':
        chars = node.get('characters', '')
        results.append(f"{indent}  Text: \"{chars}\"")
        results.append(f"{indent}  Font: {style.get('fontFamily','')} weight={style.get('fontWeight','')} size={style.get('fontSize','')}px")
        results.append(f"{indent}  LineHeight: {style.get('lineHeightPx','')}px letterSpacing={style.get('letterSpacing','')} align={style.get('textAlignHorizontal','')}")
        results.append(f"{indent}  TextCase: {style.get('textCase','ORIGINAL')} Decoration: {style.get('textDecoration','NONE')}")

    # Layout
    lm = node.get('layoutMode')
    if lm:
        isp = node.get('itemSpacing', 0)
        pl = node.get('paddingLeft', 0)
        pr = node.get('paddingRight', 0)
        pt = node.get('paddingTop', 0)
        pb = node.get('paddingBottom', 0)
        caa = node.get('counterAxisAlignItems', '')
        paa = node.get('primaryAxisAlignItems', '')
        results.append(f"{indent}  Layout: {lm} gap={isp} align={caa}/{paa}")
        if any([pl, pr, pt, pb]):
            results.append(f"{indent}  Padding: L={pl} R={pr} T={pt} B={pb}")

    # Strokes
    strokes = node.get('strokes', [])
    for s in strokes:
        if s.get('visible', True) is not False:
            c = s.get('color', {})
            if c:
                hex_color, _ = rgba_to_hex(c)
                sw = node.get('strokeWeight', 1)
                results.append(f"{indent}  Stroke: {hex_color} weight={sw}")

    # Boolean operation
    bo = node.get('booleanOperation')
    if bo:
        results.append(f"{indent}  BooleanOp: {bo}")

    # Fill geometry (for clip paths)
    fg = node.get('fillGeometry', [])
    if fg and ntype in ('BOOLEAN_OPERATION', 'VECTOR'):
        for g in fg:
            path = g.get('path', '')
            if len(path) > 200:
                results.append(f"{indent}  FillGeometry: {path[:200]}...")
            else:
                results.append(f"{indent}  FillGeometry: {path}")

    # Clips content
    if node.get('clipsContent'):
        results.append(f"{indent}  ClipsContent: true")

    # Children
    for child in node.get('children', []):
        extract_node_tree(child, depth + 1, results)

    return results

def process_section(filename, node_id, section_name):
    with open(filename, 'r') as f:
        data = json.load(f)

    node = data['nodes'][node_id]['document']
    results = [f"\n{'='*80}", f"SECTION: {section_name} (node {node_id})", f"{'='*80}"]
    extract_node_tree(node, 0, results)
    return "\n".join(results)

sections = [
    ('header_raw.json', '236:410', 'Header'),
    ('hero_raw.json', '236:331', 'Hero'),
    ('services_raw.json', '236:434', 'Services+Projects'),
    ('team_raw.json', '236:472', 'Team/MeetExperts'),
    ('cta_raw.json', '236:522', 'CTA/Contact'),
    ('footer_raw.json', '236:577', 'Footer'),
]

base_dir = r'D:\Seyon\react-app\figma-renders'
all_output = []

for filename, node_id, section_name in sections:
    filepath = os.path.join(base_dir, filename)
    try:
        output = process_section(filepath, node_id, section_name)
        all_output.append(output)
    except Exception as e:
        all_output.append(f"\nERROR processing {section_name}: {e}")

with open(os.path.join(base_dir, 'parsed_specs.txt'), 'w', encoding='utf-8') as f:
    f.write("\n".join(all_output))

print("Done! Output saved to parsed_specs.txt")
print(f"Total lines: {sum(len(o.split(chr(10))) for o in all_output)}")
