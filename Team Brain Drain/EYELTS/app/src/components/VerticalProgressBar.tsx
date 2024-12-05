interface VerticalProgressBarProps {
  progress: number;
  color: string;
}

export const VerticalProgressBar = ({ progress, color }: VerticalProgressBarProps) => {
  const clampedProgress = Math.min(Math.max(progress, 0), 100);
  
  return (
    <div className="relative h-32 w-4">
      <div className="absolute right-0 -top-6 text-xs font-medium text-gray-500">
        {clampedProgress}%
      </div>
      <div className="h-full w-full bg-gray-100/80 rounded-full overflow-hidden shadow-inner">
        <div 
          className={`w-full ${color} transition-all duration-300 rounded-t-full shadow-sm absolute bottom-0`}
          style={{ height: `${clampedProgress}%` }}
        />
      </div>
    </div>
  )
}