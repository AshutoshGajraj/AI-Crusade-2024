import { BookOpen, Pencil, Mic, Headphones } from 'lucide-react'
import { Link } from 'react-router-dom'
import { SkillDropdown } from './SkillDropdown'
import { useDropdownContext } from '../context/DropdownContext'

interface SkillCardProps {
  title: string;
  description: string;
  icon: "reading" | "writing" | "speaking" | "listening";
}

const iconMap = {
  reading: BookOpen,
  writing: Pencil,
  speaking: Mic,
  listening: Headphones,
}

export const SkillCard = ({ title, description, icon }: SkillCardProps) => {
  const Icon = iconMap[icon]
  const { setIsAnyDropdownVisible } = useDropdownContext()
  
  return (
    <div 
      className="relative group"
      onMouseEnter={() => setIsAnyDropdownVisible(true)}
      onMouseLeave={() => setIsAnyDropdownVisible(false)}
    >
      <div className="bg-white/90 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 w-[280px] h-[280px] hover:-translate-y-1 transform hover:ring-2 hover:ring-purple-400/50 hover:shadow-purple-500/20">
        <div className="w-12 h-12 bg-gradient-to-br from-purple-700 via-purple-800 to-purple-900 rounded-lg flex items-center justify-center mb-4 shadow-lg shadow-purple-800/30">
          <Icon className="w-6 h-6 text-purple-50" />
        </div>

        <h3 className="text-xl font-bold mb-2 bg-gradient-to-r from-pink-500 to-purple-600 text-transparent bg-clip-text">
          {title}
        </h3>
        <p className="bg-gradient-to-r from-pink-700 to-purple-700 bg-clip-text text-transparent font-medium text-sm">
          {description}
        </p>
      </div>
      
      {/* Show dropdown for all skills */}
      <SkillDropdown
        options={
          title === "Reading" 
            ? ["Academic Practice", "General Practice", "Tips"]
            : title === "Writing"
            ? ["Task 1: Academic", "Task 1: General", "Task 2: Essay", "Tips"]
            : title === "Listening"
            ? ["Practice", "Tips"]
            : ["Practice", "Tips"] // Speaking options
        }
        skill={title}
      />
    </div>
  )
}