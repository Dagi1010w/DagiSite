import { useState } from 'react';

const Skills = () => {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const skillCategories = [
    {
      title: 'Frontend',
      skills: [
        { name: 'React', level: 95, color: 'from-blue-500 to-cyan-500' },
        { name: 'TypeScript', level: 90, color: 'from-blue-600 to-blue-400' },
        { name: 'Next.js', level: 85, color: 'from-gray-800 to-gray-600' },
        { name: 'Tailwind CSS', level: 92, color: 'from-teal-500 to-cyan-500' },
        { name: 'Vue.js', level: 80, color: 'from-green-500 to-emerald-500' },
      ]
    },
    {
      title: 'Backend',
      skills: [
        { name: 'Laravel', level: 88, color: 'from-green-600 to-green-400' },
        { name: 'Python', level: 85, color: 'from-yellow-500 to-blue-500' },
        { name: 'MySQL', level: 82, color: 'from-blue-700 to-blue-500' },
        { name: 'MongoDB', level: 80, color: 'from-green-700 to-green-500' },
        { name: 'GraphQL', level: 75, color: 'from-pink-500 to-purple-500' },
      ]
    },
    {
      title: 'Tools & Others',
      skills: [
        { name: 'Git', level: 90, color: 'from-orange-600 to-red-500' },
        { name: 'Docker', level: 78, color: 'from-blue-600 to-blue-400' },
        { name: 'AWS', level: 75, color: 'from-orange-500 to-yellow-500' },
        { name: 'Figma', level: 85, color: 'from-purple-500 to-pink-500' },
        { name: 'Jest', level: 80, color: 'from-red-600 to-orange-500' },
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              My <span className="gradient-text">Skills</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Technologies and tools I use to bring ideas to life
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="space-y-6">
                {/* Category Title */}
                <div className="text-center">
                  <h3 className="text-2xl font-semibold text-foreground mb-2">
                    {category.title}
                  </h3>
                  <div className="w-16 h-1 bg-gradient-to-r from-indigo-500 to-amber-500 mx-auto rounded-full"></div>
                </div>

                {/* Skills List */}
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="group"
                      onMouseEnter={() => setHoveredSkill(`${categoryIndex}-${skillIndex}`)}
                      onMouseLeave={() => setHoveredSkill(null)}
                    >
                      {/* Skill Card */}
                      <div className="glass p-4 rounded-lg hover-glow transition-all duration-300 cursor-pointer">
                        {/* Skill Header */}
                        <div className="flex justify-between items-center mb-3">
                          <span className="font-medium text-foreground">{skill.name}</span>
                          <span className="text-sm text-muted-foreground">{skill.level}%</span>
                        </div>

                        {/* Progress Bar */}
                        <div className="relative">
                          <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                            <div
                              className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out`}
                              style={{
                                width: hoveredSkill === `${categoryIndex}-${skillIndex}` ? `${skill.level}%` : '0%'
                              }}
                            />
                          </div>
                          
                          {/* Animated glow effect */}
                          {hoveredSkill === `${categoryIndex}-${skillIndex}` && (
                            <div
                              className={`absolute top-0 h-2 bg-gradient-to-r ${skill.color} rounded-full opacity-50 blur-sm transition-all duration-1000 ease-out`}
                              style={{ width: `${skill.level}%` }}
                            />
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Additional Info */}
          <div className="mt-16 text-center">
            <div className="glass p-8 rounded-2xl max-w-4xl mx-auto">
              <h3 className="text-2xl font-semibold text-foreground mb-4">
                Always Learning
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Technology evolves rapidly, and I'm committed to staying current with the latest trends 
                and best practices. I regularly explore new frameworks, attend tech conferences, and 
                contribute to open-source projects to expand my skill set.
              </p>
              
              {/* Currently Learning */}
              <div className="mt-6">
                <h4 className="text-lg font-medium text-foreground mb-3">Currently Exploring:</h4>
                <div className="flex flex-wrap justify-center gap-3">
                  {['Rust', 'WebAssembly', 'Three.js', 'Blockchain', 'AI/ML'].map((tech, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium border border-primary/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background decorations */}
      <div className="absolute top-10 left-10 w-20 h-20 border border-accent/20 rounded-lg rotate-12 opacity-50"></div>
      <div className="absolute bottom-10 right-10 w-16 h-16 bg-primary/10 rounded-full opacity-50"></div>
    </section>
  );
};

export default Skills;