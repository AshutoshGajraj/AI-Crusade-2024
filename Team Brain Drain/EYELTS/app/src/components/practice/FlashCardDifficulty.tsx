import { ArrowLeft, Dumbbell, Brain, Sparkles } from 'lucide-react'
import { Link, useNavigate } from 'react-router-dom'
import { Logo } from '../Logo'

export const FlashCardDifficulty = () => {
  const navigate = useNavigate();

  const difficulties = [
    {
      level: "easy",
      title: "Easy",
      description: "Basic vocabulary for everyday situations and common topics.",
      icon: Dumbbell,
      gradient: "from-green-500 to-emerald-600",
      hover: "hover:from-green-600 hover:to-emerald-700",
      shadow: "shadow-green-500/20",
    },
    {
      level: "intermediate",
      title: "Intermediate",
      description: "Advanced vocabulary for academic and professional contexts.",
      icon: Brain,
      gradient: "from-purple-500 to-purple-600",
      hover: "hover:from-purple-600 hover:to-purple-700",
      shadow: "shadow-purple-500/20",
    },
    {
      level: "difficult",
      title: "Difficult",
      description: "Complex vocabulary for sophisticated expression and nuanced meaning.",
      icon: Sparkles,
      gradient: "from-red-500 to-rose-600",
      hover: "hover:from-red-600 hover:to-rose-700",
      shadow: "shadow-red-500/20",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-violet-50 to-sky-50">
      <header className="bg-gradient-to-r from-purple-950 via-purple-900 to-purple-950 shadow-lg shadow-purple-900/20">
        <div className="container mx-auto px-6 sm:px-8 py-6">
          <div className="flex justify-between items-center">
            <Logo />
            <Link
              to="/resources"
              className="flex items-center gap-2 px-4 py-2 text-purple-100 hover:text-white transition-all rounded-lg hover:bg-purple-800/50 hover:shadow-lg hover:shadow-purple-500/20 backdrop-blur-sm"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Resources</span>
            </Link>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-6 sm:px-8 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-4 bg-gradient-to-r from-purple-950 via-purple-900 to-purple-950 bg-clip-text text-transparent">
            Choose Difficulty Level
          </h1>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Select the difficulty level that matches your current vocabulary knowledge
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {difficulties.map((difficulty) => {
              const Icon = difficulty.icon;
              return (
                <div
                  key={difficulty.level}
                  onClick={() => navigate(`/resources/flashcards/${difficulty.level}`)}
                  className={`
                    bg-white/90 backdrop-blur-sm p-6 rounded-xl shadow-lg
                    hover:shadow-xl transition-all duration-300
                    hover:-translate-y-1 transform
                    hover:ring-2 hover:ring-purple-400/50
                    hover:${difficulty.shadow}
                    cursor-pointer
                  `}
                >
                  <div className={`
                    w-12 h-12 rounded-lg flex items-center justify-center shadow-lg
                    bg-gradient-to-br ${difficulty.gradient}
                    group-${difficulty.hover}
                    mb-4
                  `}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>

                  <h3 className="text-xl font-bold mb-2 bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
                    {difficulty.title}
                  </h3>
                  <p className="text-gray-600">
                    {difficulty.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </main>
    </div>
  );
};