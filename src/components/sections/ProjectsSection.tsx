import { Link } from 'react-router-dom'
import project1 from '@/assets/images/projects/project-1.jpg'
import project2 from '@/assets/images/projects/project-2.jpg'
import project3 from '@/assets/images/projects/project-3.jpg'

const projects = [
  {
    id: 'project-1',
    image: project1,
    title: 'Skyline Office Tower',
    category: 'Commercial',
    location: 'Downtown Miami',
    description: 'A 32-story modern office tower featuring sustainable design and cutting-edge amenities.',
  },
  {
    id: 'project-2',
    image: project2,
    title: 'Ocean View Residences',
    category: 'Residential',
    location: 'Miami Beach',
    description: 'Luxury waterfront residential complex with 120 units and world-class facilities.',
  },
  {
    id: 'project-3',
    image: project3,
    title: 'Metro Shopping Center',
    category: 'Retail',
    location: 'Coral Gables',
    description: 'A 200,000 sq ft retail destination with modern architecture and open-air design.',
  },
]

export function ProjectsSection(): React.ReactElement {
  return (
    <section className="w-full py-[100px] bg-white" aria-labelledby="projects-heading">
      <div className="max-w-[1200px] mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-[60px]">
          <span className="font-['Space_Grotesk'] font-semibold text-[14px] uppercase tracking-[3px] text-[#DF440E]">
            Our Portfolio
          </span>
          <h2
            id="projects-heading"
            className="mt-[16px] font-['Space_Grotesk'] font-bold text-[44px] leading-[52px] tracking-[-0.5px] text-[#0A1A3A]"
          >
            Featured{' '}
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage: 'linear-gradient(90deg, #FF8902 0%, #FF6900 50%, #FB2C37 100%)',
              }}
            >
              Projects
            </span>
          </h2>
          <p className="mt-[16px] max-w-[600px] mx-auto font-['Space_Grotesk'] font-normal text-[16px] leading-[28px] text-[#4A5568]">
            Explore some of our most notable projects that showcase our expertise and
            commitment to excellence.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px]">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group rounded-[16px] overflow-hidden border border-[#E2E8F0] hover:shadow-xl transition-all duration-300"
            >
              {/* Image */}
              <div className="relative h-[260px] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Category Badge */}
                <div className="absolute top-[16px] left-[16px] px-[14px] py-[6px] rounded-[8px] bg-[#DF440E] backdrop-blur-sm">
                  <span className="font-['Space_Grotesk'] font-medium text-[12px] uppercase tracking-[1px] text-white">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-[24px]">
                <div className="flex items-center gap-[6px] mb-[8px]">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      stroke="#DF440E"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      stroke="#DF440E"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span className="font-['Space_Grotesk'] font-normal text-[13px] text-[#DF440E]">
                    {project.location}
                  </span>
                </div>
                <h3 className="font-['Space_Grotesk'] font-bold text-[20px] leading-[28px] text-[#0A1A3A] mb-[8px]">
                  {project.title}
                </h3>
                <p className="font-['Space_Grotesk'] font-normal text-[14px] leading-[24px] text-[#4A5568]">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-[50px]">
          <Link
            to="/projects"
            className="inline-flex items-center gap-[10px] bg-[#DF440E] rounded-[10px] px-[30px] py-[14px] group"
          >
            <span className="font-['Space_Grotesk'] font-medium text-[16px] leading-[16px] text-white">
              View All Projects
            </span>
            <div className="w-[28px] h-[28px] rounded-[14px] bg-white flex items-center justify-center">
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                className="transform -rotate-45"
              >
                <path
                  d="M5 12H19M19 12L12 5M19 12L12 19"
                  stroke="#DF440E"
                  strokeWidth="2"
                  strokeLinecap="square"
                />
              </svg>
            </div>
          </Link>
        </div>
      </div>
    </section>
  )
}
