import { ProgressBar } from './ProgressBar'
import { useDropdownContext } from '../context/DropdownContext';

interface ProgressSectionProps {
  progress: Record<string, number>;
}

const skillConfig = {
  Reading: {
    gradient: "from-rose-500 to-pink-600",
    label: "from-rose-600 to-pink-700",
  },
  Writing: {
    gradient: "from-violet-500 to-purple-600",
    label: "from-violet-600 to-purple-700",
  },
  Speaking: {
    gradient: "from-blue-500 to-indigo-600",
    label: "from-blue-600 to-indigo-700",
  },
  Listening: {
    gradient: "from-emerald-500 to-teal-600",
    label: "from-emerald-600 to-teal-700",
  }
};

export const ProgressSection = ({ progress }: ProgressSectionProps) => {
  const { isAnyDropdownVisible } = useDropdownContext();

  return (
    <div 
      className={`mt-8 max-w-lg mx-auto bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-5 transition-all duration-300 transform ${
        isAnyDropdownVisible ? 'translate-y-16' : 'translate-y-0'
      }`}
    >
      <h3 className="text-sm font-medium text-gray-500 mb-4 text-center">
        Progress Overview
      </h3>
      <div className="space-y-3">
        {Object.entries(progress).map(([skill, value]) => (
          <div key={skill} className="group">
            <div className="flex items-center justify-between mb-1.5">
              <h4 className={`text-sm font-medium bg-gradient-to-r ${skillConfig[skill as keyof typeof skillConfig].label} bg-clip-text text-transparent`}>
                {skill}
              </h4>
              <span className="text-xs font-medium text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity">
                {value}%
              </span>
            </div>
            <ProgressBar 
              progress={value} 
              gradientClasses={skillConfig[skill as keyof typeof skillConfig].gradient}
            />
          </div>
        ))}
      </div>
    </div>
  )
}