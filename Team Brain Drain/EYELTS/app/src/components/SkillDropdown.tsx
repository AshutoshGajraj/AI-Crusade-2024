import { useNavigate } from 'react-router-dom';
import { GraduationCap, Users, Eye, FileText, PenTool, BookOpen, ChevronRight, Play } from 'lucide-react';

interface SkillDropdownProps {
  options: string[];
  skill?: string;
}

const optionIcons = {
  "Academic Practice": GraduationCap,
  "General Practice": Users,
  "Practice": Play,
  "Tips": Eye,
  "Task 1: Academic": FileText,
  "Task 1: General": PenTool,
  "Task 2: Essay": PenTool,
  "Vocabulary": BookOpen,
};

export const SkillDropdown = ({ options, skill }: SkillDropdownProps) => {
  const navigate = useNavigate();
  
  const handleOptionClick = (option: string) => {
    if (!skill) return;
    
    const path = 
      option === 'Tips' 
        ? `/${skill.toLowerCase()}/tips`
        : option === 'Practice' || option === 'Academic Practice' || option === 'General Practice'
          ? `/${skill.toLowerCase()}/practice`
        : option === 'Task 1: Academic'
          ? '/writing/task1/academic'
        : option === 'Task 1: General'
          ? '/writing/task1/general'
        : option === 'Task 2: Essay'
          ? '/writing/task2/essay'
          : '#'; // For other options that aren't implemented yet
      
    navigate(path);
  };

  return (
    <div className="absolute left-1/2 -translate-x-1/2 invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-300 z-50 translate-y-2 group-hover:translate-y-1">
      <div className="pt-4">
        <div className="relative">
          {/* Decorative arrow */}
          <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white rotate-45 rounded-sm shadow-lg z-10" />
          
          <div className="relative bg-white/95 backdrop-blur-md rounded-xl shadow-xl overflow-hidden border border-purple-100/50 w-[280px] z-20">
            {options.map((option) => {
              const Icon = optionIcons[option as keyof typeof optionIcons] || Eye;
              return (
                <button
                  key={option}
                  onClick={() => handleOptionClick(option)}
                  className="
                    group/item relative w-full px-4 py-3.5 text-left transition-all duration-300
                    bg-gradient-to-r from-pink-500/10 via-purple-500/10 to-purple-600/10
                    hover:from-pink-500/20 hover:via-purple-500/20 hover:to-purple-600/20
                    hover:shadow-md hover:-translate-y-[1px]
                  "
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-700 via-purple-800 to-purple-900 flex items-center justify-center group-hover/item:scale-110 transition-transform">
                      <Icon className="w-4 h-4 text-purple-50" />
                    </div>
                    
                    <div className="flex-1">
                      <span className="text-sm font-semibold bg-gradient-to-r from-purple-900 to-purple-700 bg-clip-text text-transparent">
                        {option}
                      </span>
                    </div>
                    
                    <ChevronRight className="w-4 h-4 text-purple-400 opacity-0 group-hover/item:opacity-100 group-hover/item:translate-x-1 transition-all" />
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};