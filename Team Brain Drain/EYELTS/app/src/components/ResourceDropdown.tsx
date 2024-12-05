import { BookOpen, BrainCircuit } from 'lucide-react'
import { Link } from 'react-router-dom'

interface ResourceDropdownProps {
  isVisible: boolean;
}

export const ResourceDropdown = ({ isVisible }: ResourceDropdownProps) => {
  const options = [
    {
      title: "Vocabulary by Topic",
      description: "Learn new words organized by themes",
      icon: BookOpen,
      path: "/resources/vocabulary",
    },
    {
      title: "Flash Card Practice",
      description: "Test your knowledge with interactive cards",
      icon: BrainCircuit,
      path: "/resources/flashcards",
    },
  ];

  return (
    <div className={`
      absolute left-1/2 -translate-x-1/2
      transition-all duration-300 z-50 translate-y-2
      ${isVisible ? 'visible opacity-100' : 'invisible opacity-0'}
    `}>
      <div className="pt-4">
        <div className="relative">
          {/* Decorative arrow */}
          <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white rotate-45 rounded-sm shadow-lg z-10" />
          
          <div className="relative bg-white/95 backdrop-blur-md rounded-xl shadow-xl overflow-hidden border border-purple-100/50 w-[280px] z-20">
            {options.map((option) => {
              const Icon = option.icon;
              return (
                <Link
                  key={option.title}
                  to={option.path}
                  className="
                    group relative block w-full px-4 py-3.5 transition-all duration-300
                    bg-gradient-to-r from-pink-500/10 via-purple-500/10 to-purple-600/10
                    hover:from-pink-500/20 hover:via-purple-500/20 hover:to-purple-600/20
                    hover:shadow-md hover:-translate-y-[1px]
                  "
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-700 via-purple-800 to-purple-900 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon className="w-4 h-4 text-purple-50" />
                    </div>
                    
                    <div className="flex-1">
                      <span className="block text-sm font-semibold bg-gradient-to-r from-purple-900 to-purple-700 bg-clip-text text-transparent">
                        {option.title}
                      </span>
                      <span className="block text-xs text-gray-500">
                        {option.description}
                      </span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};