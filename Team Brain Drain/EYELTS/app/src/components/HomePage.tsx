import { Logo } from './Logo'
import { SkillCard } from './SkillCard'
import { NavLinks } from './NavLinks'
import { SkillProgress } from './SkillProgress'
import { useProgress } from '../hooks/useProgress'
import { ClipboardCheck } from 'lucide-react'

export const HomePage = () => {
  const { progress } = useProgress();
  
  const skills = [
    {
      title: "Reading",
      description: "Enhance your reading comprehension skills with academic texts and passages.",
      icon: "reading",
    },
    {
      title: "Writing",
      description: "Master essay writing and improve your written communication skills.",
      icon: "writing",
    },
    {
      title: "Speaking",
      description: "Practice pronunciation and develop fluent English speaking abilities.",
      icon: "speaking",
    },
    {
      title: "Listening",
      description: "Train your ear to understand different accents and speaking speeds.",
      icon: "listening",
    },
  ] as const;

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-violet-50 to-sky-50">
      <header className="bg-gradient-to-r from-purple-950 via-purple-900 to-purple-950 shadow-lg shadow-purple-900/20">
        <div className="container mx-auto px-6 sm:px-8 py-6">
          <div className="flex justify-between items-center">
            <Logo />
            <NavLinks />
          </div>
        </div>
      </header>
      
      <main className="container mx-auto px-6 sm:px-8 py-16">
        <h2 className="text-4xl font-bold text-center leading-relaxed mb-4 bg-gradient-to-r from-purple-950 via-purple-900 to-purple-950 bg-clip-text text-transparent drop-shadow-sm">
          Hit A 9 For That Foreign Dime
        </h2>
        <p className="text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600 font-medium text-lg mb-8 max-w-2xl mx-auto">
          Prepare for success with our comprehensive IELTS training modules. 
          Choose your area of focus and start your journey to achieving your target score.
        </p>

        {/* New Test Button */}
        <div className="flex justify-center mb-16">
          <button
            className="
              group
              relative
              px-8
              py-4
              bg-gradient-to-r
              from-purple-600
              to-pink-600
              text-white
              font-semibold
              rounded-xl
              shadow-lg
              hover:shadow-xl
              transition-all
              duration-300
              hover:-translate-y-0.5
              hover:scale-105
              focus:outline-none
              focus:ring-2
              focus:ring-purple-500
              focus:ring-offset-2
              active:scale-95
            "
          >
            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-purple-600/20 to-pink-600/20 blur-lg rounded-xl" />
            <span className="relative flex items-center gap-2">
              <ClipboardCheck className="w-5 h-5 transition-transform group-hover:scale-110" />
              Take a Test
            </span>
          </button>
        </div>
        
        <div className="flex flex-col md:flex-row gap-6 justify-center items-center md:items-stretch flex-wrap lg:flex-nowrap mb-16">
          {skills.map((skill) => (
            <div 
              key={skill.title}
              className="transition-all duration-300 w-full md:w-auto"
            >
              <SkillCard
                title={skill.title}
                description={skill.description}
                icon={skill.icon}
              />
            </div>
          ))}
        </div>

        {/* Added SkillProgress component */}
        <div className="mt-16">
          <SkillProgress progress={progress} />
        </div>
      </main>
    </div>
  )
}