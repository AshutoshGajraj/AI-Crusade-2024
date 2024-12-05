import { ArrowLeft, BookOpenCheck, GraduationCap } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Logo } from './Logo'
import { useState } from 'react'
import { ResourceDropdown } from './ResourceDropdown'

export const Resources = () => {
  const [hoveredResource, setHoveredResource] = useState<string | null>(null);
  
  const resources = [
    {
      title: "Flash Cards",
      description: "Practice with interactive flash cards to improve your vocabulary and memory",
      icon: BookOpenCheck,
      hasDropdown: true,
      gradient: "from-emerald-500 to-teal-600",
      hover: "hover:from-emerald-600 hover:to-teal-700",
    },
    {
      title: "University Resources",
      description: "Access study materials and guides from top universities worldwide",
      icon: GraduationCap,
      hasDropdown: false,
      gradient: "from-blue-500 to-indigo-600",
      hover: "hover:from-blue-600 hover:to-indigo-700",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-violet-50 to-sky-50">
      <header className="bg-gradient-to-r from-purple-950 via-purple-900 to-purple-950 shadow-lg shadow-purple-900/20">
        <div className="container mx-auto px-6 sm:px-8 py-6">
          <div className="flex justify-between items-center">
            <Logo />
            <Link
              to="/"
              className="flex items-center gap-2 px-4 py-2 text-purple-100 hover:text-white transition-all rounded-lg hover:bg-purple-800/50 hover:shadow-lg hover:shadow-purple-500/20 backdrop-blur-sm"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Home</span>
            </Link>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-6 sm:px-8 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-4 bg-gradient-to-r from-purple-950 via-purple-900 to-purple-950 bg-clip-text text-transparent">
            Learning Resources
          </h1>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Explore our comprehensive collection of study materials and tools
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {resources.map((resource) => {
              const Icon = resource.icon;
              return (
                <div
                  key={resource.title}
                  className="relative"
                  onMouseEnter={() => setHoveredResource(resource.title)}
                  onMouseLeave={() => setHoveredResource(null)}
                >
                  <div
                    className={`
                      relative
                      bg-white/90
                      backdrop-blur-sm
                      p-6
                      rounded-xl
                      shadow-lg
                      hover:shadow-xl
                      transition-all
                      duration-300
                      hover:-translate-y-1
                      transform
                      hover:ring-2
                      hover:ring-purple-400/50
                      hover:shadow-purple-500/20
                      ${resource.hasDropdown ? 'cursor-pointer' : ''}
                    `}
                  >
                    <div className="relative">
                      <div className={`
                        w-12 h-12
                        bg-gradient-to-br ${resource.gradient}
                        rounded-lg
                        flex items-center justify-center
                        mb-4
                        shadow-lg
                        transition-all
                        duration-300
                        group-hover:scale-110
                      `}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>

                      <h3 className="text-xl font-bold mb-2 bg-gradient-to-r from-pink-500 to-purple-600 text-transparent bg-clip-text">
                        {resource.title}
                      </h3>
                      
                      <p className="text-gray-600">
                        {resource.description}
                      </p>
                    </div>
                  </div>

                  {/* Dropdown for Flash Cards */}
                  {resource.hasDropdown && (
                    <ResourceDropdown isVisible={hoveredResource === resource.title} />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </main>
    </div>
  );
};