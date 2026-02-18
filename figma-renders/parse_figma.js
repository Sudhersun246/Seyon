const fs = require('fs');
const path = require('path');

const baseDir = 'D:/Seyon/react-app/figma-renders';

function rgbaToHex(c, opacity = 1.0) {
  const r = Math.round((c.r || 0) * 255);
  const g = Math.round((c.g || 0) * 255);
  const b = Math.round((c.b || 0) * 255);
  const hex = '#' + [r, g, b].map(v => v.toString(16).padStart(2, '0').toUpperCase()).join('');
  return { hex, alpha: (c.a || 1) * opacity };
}

function extractNodeTree(node, depth = 0, results = []) {
  const indent = '  '.repeat(depth);
  const name = node.name || 'unnamed';
  const ntype = node.type || 'unknown';
  const bbox = node.absoluteBoundingBox || {};
  const w = bbox.width || 0;
  const h = bbox.height || 0;
  const x = bbox.x || 0;
  const y = bbox.y || 0;

  results.push(`${indent}${ntype}: "${name}" (${w}x${h}) at (${x},${y})`);

  // Fills
  const fills = node.fills || [];
  for (const f of fills) {
    if (f.visible !== false) {
      if (f.type === 'SOLID') {
        const { hex, alpha } = rgbaToHex(f.color || {}, f.opacity != null ? f.opacity : 1);
        results.push(`${indent}  Fill: ${hex} alpha=${alpha.toFixed(2)}`);
      } else if (f.type === 'GRADIENT_LINEAR') {
        const stops = f.gradientStops || [];
        results.push(`${indent}  Gradient Linear: ${stops.length} stops`);
        for (const s of stops) {
          const { hex } = rgbaToHex(s.color || {});
          results.push(`${indent}    Stop ${(s.position || 0).toFixed(2)}: ${hex} a=${(s.color?.a || 1).toFixed(2)}`);
        }
        if (f.gradientHandlePositions) {
          results.push(`${indent}    Handles: ${JSON.stringify(f.gradientHandlePositions)}`);
        }
      } else if (f.type === 'GRADIENT_RADIAL') {
        const stops = f.gradientStops || [];
        results.push(`${indent}  Gradient Radial: ${stops.length} stops`);
        for (const s of stops) {
          const { hex } = rgbaToHex(s.color || {});
          results.push(`${indent}    Stop ${(s.position || 0).toFixed(2)}: ${hex} a=${(s.color?.a || 1).toFixed(2)}`);
        }
      } else if (f.type === 'IMAGE') {
        results.push(`${indent}  Fill: IMAGE ref=${f.imageRef || ''} scaleMode=${f.scaleMode || ''}`);
      }
    }
  }

  // Effects
  const effects = node.effects || [];
  for (const e of effects) {
    if (e.visible !== false) {
      const c = e.color || {};
      const { hex } = rgbaToHex(c);
      const offset = e.offset || {};
      results.push(`${indent}  Effect: ${e.type} color=${hex} a=${(c.a || 0).toFixed(3)} offset=(${offset.x || 0},${offset.y || 0}) blur=${e.radius || 0} spread=${e.spread || 0}`);
    }
  }

  // Corner radius
  if (node.cornerRadius) {
    results.push(`${indent}  BorderRadius: ${node.cornerRadius}`);
  }
  if (node.rectangleCornerRadii && JSON.stringify(node.rectangleCornerRadii) !== '[0,0,0,0]') {
    results.push(`${indent}  CornerRadii: [${node.rectangleCornerRadii.join(',')}]`);
  }

  // Text style
  const style = node.style || {};
  if (ntype === 'TEXT' && Object.keys(style).length > 0) {
    results.push(`${indent}  Text: "${node.characters || ''}"`);
    results.push(`${indent}  Font: ${style.fontFamily || ''} weight=${style.fontWeight || ''} size=${style.fontSize || ''}px`);
    results.push(`${indent}  LineHeight: ${style.lineHeightPx || ''}px letterSpacing=${style.letterSpacing || 0} align=${style.textAlignHorizontal || ''}`);
    results.push(`${indent}  TextCase: ${style.textCase || 'ORIGINAL'} Decoration: ${style.textDecoration || 'NONE'}`);
  }

  // Layout
  if (node.layoutMode) {
    const isp = node.itemSpacing || 0;
    const pl = node.paddingLeft || 0;
    const pr = node.paddingRight || 0;
    const pt = node.paddingTop || 0;
    const pb = node.paddingBottom || 0;
    results.push(`${indent}  Layout: ${node.layoutMode} gap=${isp} counterAxis=${node.counterAxisAlignItems || ''} primaryAxis=${node.primaryAxisAlignItems || ''}`);
    if (pl || pr || pt || pb) {
      results.push(`${indent}  Padding: L=${pl} R=${pr} T=${pt} B=${pb}`);
    }
  }

  // Strokes
  const strokes = node.strokes || [];
  for (const s of strokes) {
    if (s.visible !== false && s.color) {
      const { hex } = rgbaToHex(s.color);
      results.push(`${indent}  Stroke: ${hex} weight=${node.strokeWeight || 1} align=${node.strokeAlign || ''}`);
    }
  }

  // Boolean operation
  if (node.booleanOperation) {
    results.push(`${indent}  BooleanOp: ${node.booleanOperation}`);
  }

  // Fill geometry (clip paths)
  if (node.fillGeometry && (ntype === 'BOOLEAN_OPERATION' || ntype === 'VECTOR')) {
    for (const g of node.fillGeometry) {
      const p = g.path || '';
      if (p.length > 300) {
        results.push(`${indent}  FillGeometry: ${p.substring(0, 300)}...`);
      } else {
        results.push(`${indent}  FillGeometry: ${p}`);
      }
    }
  }

  // Clips content
  if (node.clipsContent) {
    results.push(`${indent}  ClipsContent: true`);
  }

  // Opacity
  if (node.opacity != null && node.opacity !== 1) {
    results.push(`${indent}  Opacity: ${node.opacity}`);
  }

  // Children
  for (const child of (node.children || [])) {
    extractNodeTree(child, depth + 1, results);
  }

  return results;
}

function processSection(filename, nodeId, sectionName) {
  const filepath = path.join(baseDir, filename);
  const data = JSON.parse(fs.readFileSync(filepath, 'utf-8'));
  const node = data.nodes[nodeId].document;
  const results = [
    '',
    '='.repeat(80),
    `SECTION: ${sectionName} (node ${nodeId})`,
    '='.repeat(80),
  ];
  extractNodeTree(node, 0, results);
  return results.join('\n');
}

const sections = [
  ['header_raw.json', '236:410', 'Header'],
  ['hero_raw.json', '236:331', 'Hero'],
  ['services_raw.json', '236:434', 'Services+Projects'],
  ['team_raw.json', '236:472', 'Team/MeetExperts'],
  ['cta_raw.json', '236:522', 'CTA/Contact'],
  ['footer_raw.json', '236:577', 'Footer'],
];

let allOutput = [];
for (const [filename, nodeId, sectionName] of sections) {
  try {
    const output = processSection(filename, nodeId, sectionName);
    allOutput.push(output);
  } catch (e) {
    allOutput.push(`\nERROR processing ${sectionName}: ${e.message}`);
  }
}

const outPath = path.join(baseDir, 'parsed_specs.txt');
fs.writeFileSync(outPath, allOutput.join('\n'), 'utf-8');
console.log('Done! Output saved to parsed_specs.txt');
console.log('Total chars:', allOutput.join('\n').length);
