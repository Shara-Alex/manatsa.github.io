// src/components/Skills.tsx
import React from 'react';
import { FaCode, FaDatabase, FaCloud, FaTools, FaPalette, FaServer } from 'react-icons/fa';
import { SiTypescript, SiJavascript, SiPython, SiJava, SiReact, SiTailwindcss, SiNodedotjs, SiExpress, SiMongodb, SiPostgresql, SiDocker, SiKubernetes, SiAmazonaws, SiGit, SiFigma, SiJira } from 'react-icons/si';

const skills = [
  {
    name: "Programming",
    icon: <FaCode className="text-xl" />,
    items: [
      { name: "TypeScript", icon: <SiTypescript className="text-blue-500" /> },
      { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
      { name: "Python", icon: <SiPython className="text-blue-400" /> },
      { name: "Java", icon: <SiJava className="text-red-500" /> }
    ]
  },
  {
    name: "Frontend",
    icon: <FaPalette className="text-xl" />,
    items: [
      { name: "React", icon: <SiReact className="text-blue-400" /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-500" /> },
      { name: "HTML/CSS", icon: <div className="w-4 h-4 bg-orange-500 rounded"></div> }
    ]
  },
  {
    name: "Backend",
    icon: <FaServer className="text-xl" />,
    items: [
      { name: "Node.js", icon: <SiNodedotjs className="text-green-600" /> },
      { name: "Express", icon: <SiExpress className="text-gray-300" /> }
    ]
  },
  {
    name: "Databases",
    icon: <FaDatabase className="text-xl" />,
    items: [
      { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
      { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-400" /> }
    ]
  },
  {
    name: "Cloud & DevOps",
    icon: <FaCloud className="text-xl" />,
    items: [
      { name: "Docker", icon: <SiDocker className="text-blue-400" /> },
      { name: "Kubernetes", icon: <SiKubernetes className="text-blue-500" /> },
      { name: "AWS", icon: <SiAmazonaws className="text-orange-400" /> }
    ]
  },
  {
    name: "Tools",
    icon: <FaTools className="text-xl" />,
    items: [
      { name: "Git", icon: <SiGit className="text-orange-600" /> },
      { name: "Figma", icon: <SiFigma className="text-purple-500" /> },
      { name: "Jira", icon: <SiJira className="text-blue-500" /> }
    ]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-whatsapp-dark-900">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl font-bold text-white mb-2">Technical Skills</h2>
        <div className="w-20 h-1 bg-green-500 mb-10"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((category, index) => (
            <div
              key={index}
              className="bg-whatsapp-dark-800 rounded-xl p-6 border border-whatsapp-dark-700 hover:border-green-500/30 transition-all duration-300"
            >
              <div className="flex items-center mb-6">
                <div className="text-green-500 mr-3">{category.icon}</div>
                <h3 className="text-xl font-semibold text-white">{category.name}</h3>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {category.items.map((item, idx) => (
                  <div key={idx} className="flex items-center bg-whatsapp-dark-700 p-3 rounded-lg">
                    <div className="mr-3 text-xl">{item.icon}</div>
                    <span className="text-gray-300">{item.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;