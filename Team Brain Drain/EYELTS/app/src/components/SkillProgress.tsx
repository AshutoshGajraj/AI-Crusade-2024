import { BookOpen, Pencil, Mic, Headphones } from 'lucide-react'
import { useDropdownContext } from '../context/DropdownContext'

interface SkillProgressProps {
  progress: Record<string, number>;
}

const skillConfig = {
  Reading: {
    icon: BookOpen,
    color: "from-pink-500 to-purple-600",
    bg: "from-pink-50 to-purple-50"
  },
  Writing: {
    icon: Pencil,
    color: "from-purple-500 to-indigo-600",
    bg: "from-purple-50 to-indigo-50"
  },
  Speaking: {
    icon: Mic,
    color: "from-indigo-500 to-blue-600",
    bg: "from-indigo-50 to-blue-50"
  },
  Listening: {
    icon: Headphones,
    color: "from-blue-500 to-cyan-600",
    bg: "from-blue-50 to-cyan-50"
  }
};

export const SkillProgress = ({ progress }: SkillProgressProps) => {
  const { isAnyDropdownVisible } = useDropdownContext();
  
  return (
    <div className="relative w-full h-[320px]"> {/* Fixed height container */}
      <div 
        className={`
          w-full max-w-2xl mx-auto bg-white/90 backdrop-blur-sm rounded-xl shadow-md p-6 
          absolute left-1/2 -translate-x-1/2
          transition-all duration-500 ease-in-out
          ${isAnyDropdownVisible ? 'opacity-0 pointer-events-none' : 'opacity-100'}
        `}
      >
        <h2 className="text-lg font-semibold text-gray-700 mb-4">Progress Overview</h2>
        <div className="space-y-3">
          {Object.entries(skillConfig).map(([skill, config]) => {
            const Icon = config.icon;
            const value = progress[skill] || 0;
            
            return (
              <div key={skill} className="group">
                <div className="flex items-center gap-3 mb-1.5">
                  <div className="w-6 h-6 rounded-md bg-gradient-to-br from-purple-100 to-purple-200 flex items-center justify-center">
                    <Icon className="w-3.5 h-3.5 text-purple-700" />
                  </div>
                  <div className="flex-1 flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-700">{skill}</span>
                    <span className="text-xs font-medium text-gray-500">
                      {value}%
                    </span>
                  </div>
                </div>
                
                <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                  <div
                    className={`h-full bg-gradient-to-r ${config.color} transition-all duration-500 rounded-full`}
                    style={{ width: `${value}%` }}
                  >
                    <div className={`h-full w-full bg-gradient-to-r ${config.bg} opacity-20`} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};