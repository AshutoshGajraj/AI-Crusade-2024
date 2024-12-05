import { memo } from 'react'

interface StackedProgressBarProps {
  skills: {
    name: string;
    progress: number;
    color: string;
  }[];
}

export const StackedProgressBar = memo(({ skills }: StackedProgressBarProps) => {
  const totalProgress = skills.reduce((sum, skill) => sum + skill.progress, 0);
  const averageProgress = Math.round(totalProgress / skills.length);

  return (
    <div className="w-full max-w-2xl mx-auto bg-white/90 backdrop-blur-sm p-6 rounded-xl shadow-lg">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
          Overall Progress
        </h3>
        <span className="text-sm font-medium text-purple-600">
          {averageProgress}%
        </span>
      </div>

      <div className="h-4 bg-gray-100 rounded-full overflow-hidden shadow-inner">
        {skills.map((skill, index) => (
          <div
            key={skill.name}
            style={{
              width: `${skill.progress}%`,
              marginLeft: index === 0 ? '0' : '-2px'
            }}
            className={`h-full ${skill.color} transition-all duration-300 first:rounded-l-full last:rounded-r-full inline-block relative group`}
          >
            <div className="opacity-0 group-hover:opacity-100 transition-opacity absolute bottom-full left-1/2 -translate-x-1/2 mb-2 whitespace-nowrap">
              <div className="bg-gray-800 text-white text-xs rounded py-1 px-2 pointer-events-none">
                {skill.name}: {skill.progress}%
                <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-gray-800"></div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-2">
        {skills.map((skill) => (
          <div key={skill.name} className="flex items-center gap-2">
            <div className={`w-3 h-3 rounded-full ${skill.color}`}></div>
            <span className="text-xs text-gray-600">{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  )
})

StackedProgressBar.displayName = 'StackedProgressBar'