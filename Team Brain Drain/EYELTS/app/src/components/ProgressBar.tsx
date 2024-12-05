interface ProgressBarProps {
  progress: number;
  gradientClasses: string;
}

export const ProgressBar = ({ progress, gradientClasses }: ProgressBarProps) => {
  const clampedProgress = Math.min(Math.max(progress, 0), 100);
  
  return (
    <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
      <div 
        className={`h-full bg-gradient-to-r ${gradientClasses} transition-all duration-500 rounded-full`}
        style={{ width: `${clampedProgress}%` }}
      />
    </div>
  )
}