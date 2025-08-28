import { useState } from 'react';
import { ExternalLink, Github, Eye, Code } from 'lucide-react';

const Projects = () => {
  const [filter, setFilter] = useState('all');
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const projects = [
    {
      id: 1,
      title: 'Food Delivery App',
      description: 'A modern food delivery app built with Laravel, Vue, and Inertia.js featuring real-time order tracking, user authentication, and a responsive design.',
      image: 'https://demo-source.imgix.net/mountains.jpg?w=600&h=400&fit=crop',
      category: 'fullstack',
      technologies: ['Vue.js', 'Laravel', 'MySql', 'Inertia', 'Tailwind CSS'],
      liveUrl: '#',
      githubUrl: 'https://github.com/Dagi1010w/DagiBite',
      featured: true
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop',
      category: 'frontend',
      technologies: ['React', 'TypeScript', 'Socket.io', 'Framer Motion'],
      liveUrl: '#',
      githubUrl: 'https://github.com/Dagi1010w/Expense-Tracker',
      featured: true
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description: 'A beautiful weather dashboard with location-based forecasts, interactive maps, and detailed weather analytics.',
      image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=600&h=400&fit=crop',
      category: 'frontend',
      technologies: ['Vue.js', 'Chart.js', 'OpenWeather API', 'CSS3'],
      liveUrl: '#',
      githubUrl: '/',
      featured: false
    },
    {
      id: 4,
      title: 'API Gateway Service',
      description: 'A scalable API gateway built with Node.js and Express, featuring rate limiting, authentication, and request routing.',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop',
      category: 'backend',
      technologies: ['Node.js', 'Express', 'Redis', 'Docker', 'JWT'],
      liveUrl: '#',
      githubUrl: '/',
      featured: false
    },
    {
      id: 5,
      title: 'Social Media Analytics',
      description: 'A comprehensive analytics dashboard for social media metrics with real-time data visualization and reporting.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
      category: 'fullstack',
      technologies: ['React', 'Python', 'PostgreSQL', 'D3.js', 'AWS'],
      liveUrl: '#',
      githubUrl: '/',
      featured: true
    },
    {
      id: 6,
      title: 'Mobile Banking App',
      description: 'A secure mobile banking application with biometric authentication, transaction history, and budget tracking.',
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop',
      category: 'mobile',
      technologies: ['React Native', 'Firebase', 'Plaid API', 'Expo'],
      liveUrl: '#',
      githubUrl: '/',
      featured: false
    }
  ];

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'fullstack', label: 'Full Stack' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'backend', label: 'Backend' },
    { id: 'mobile', label: 'Mobile' }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              A showcase of my recent work and personal projects
            </p>

            {/* Filter Buttons */}
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setFilter(category.id)}
                  className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                    filter === category.id
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-secondary text-secondary-foreground hover:bg-primary/10 hover:text-primary'
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className="group relative"
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                {/* Project Card */}
                <div className="glass rounded-2xl overflow-hidden hover-glow transition-all duration-500 hover:scale-105">
                  {/* Project Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    
                    {/* Featured Badge */}
                    {project.featured && (
                      <div className="absolute top-4 left-4 px-3 py-1 bg-accent text-accent-foreground text-xs font-medium rounded-full">
                        Featured
                      </div>
                    )}

                    {/* Overlay with Actions */}
                    <div className={`absolute inset-0 bg-black/60 flex items-center justify-center space-x-4 transition-opacity duration-300 ${
                      hoveredProject === project.id ? 'opacity-100' : 'opacity-0'
                    }`}>
                      <button className="p-3 bg-primary text-primary-foreground rounded-full hover:scale-110 transition-transform duration-200">
                        <Eye className="w-5 h-5" />
                      </button>
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="p-3 bg-secondary text-secondary-foreground rounded-full hover:scale-110 transition-transform duration-200">
                        <Github className="w-5 h-5" />
                      </a>
                      <button className="p-3 bg-accent text-accent-foreground rounded-full hover:scale-110 transition-transform duration-200">
                        <ExternalLink className="w-5 h-5" />
                      </button>
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.slice(0, 3).map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full border border-primary/20"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="px-3 py-1 bg-muted text-muted-foreground text-xs font-medium rounded-full">
                          +{project.technologies.length - 3}
                        </span>
                      )}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex space-x-3">
                      <button className="flex items-center space-x-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors duration-200">
                        <ExternalLink className="w-4 h-4" />
                        <span>Live Demo</span>
                      </button>
                      <button className="flex items-center space-x-2 px-4 py-2 border border-border text-foreground rounded-lg text-sm font-medium hover:bg-secondary transition-colors duration-200">
                        <Code className="w-4 h-4" />
                        <span>Code</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* View More Button */}
          <div className="text-center mt-12">
            <a href='https://github.com/Dagi1010w' className="px-8 py-4 border border-border text-foreground rounded-lg font-medium hover:bg-secondary transition-all duration-300 hover:scale-105">
              View All Projects on GitHub
            </a>
          </div>
        </div>
      </div>

      {/* Background decorations */}
      <div className="absolute top-20 right-20 w-32 h-32 border border-primary/10 rounded-full opacity-30"></div>
      <div className="absolute bottom-20 left-20 w-24 h-24 bg-accent/5 rounded-lg rotate-45 opacity-30"></div>
    </section>
  );
};

export default Projects;