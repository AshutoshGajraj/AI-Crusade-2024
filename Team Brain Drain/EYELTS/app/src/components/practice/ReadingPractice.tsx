import { ArrowLeft, BookOpen, Clock, ScrollText, Glasses, PlayCircle, Timer, ChevronRight } from 'lucide-react'
import { Link, useNavigate } from 'react-router-dom'
import { Logo } from '../Logo'
import { useState } from 'react'

export const ReadingPractice = () => {
  const [selectedSection, setSelectedSection] = useState<number | null>(null);
  const navigate = useNavigate();

  const sections = [
    {
      title: "Section 1",
      description: "Social and Survival - Short texts related to everyday situations",
      duration: "20 minutes",
      difficulty: "Basic",
      icon: ScrollText,
    },
    {
      title: "Section 2",
      description: "Training & Work - Texts about general workplace situations",
      duration: "20 minutes",
      difficulty: "Intermediate",
      icon: ScrollText,
    },
    {
      title: "Section 3",
      description: "Academic Text - Complex academic passage with detailed arguments",
      duration: "20 minutes",
      difficulty: "Advanced",
      icon: BookOpen,
    },
    {
      title: "Section 4",
      description: "Academic Research - Scientific or technical research paper",
      duration: "20 minutes",
      difficulty: "Expert",
      icon: Glasses,
    },
  ];

  const handleStartTest = (sectionIndex: number) => {
    navigate(`/reading/practice/test/${sectionIndex + 1}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-violet-50 to-sky-50">
      <header className="bg-gradient-to-r from-purple-950 via-purple-900 to-purple-950 shadow-lg shadow-purple-900/20">
        <div className="container mx-auto px-6 sm:px-8 py-6">
          <div className="flex justify-between items-center">
            <Logo />
            <Link
              to="/"
              className="flex items-center gap-2 px-4 py-2 text-purple-100 hover:text-white transition-all rounded-lg hover:bg-purple-800/50 hover:shadow-lg hover:shadow-purple-500/20 backdrop-blur-sm"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Home</span>
            </Link>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-6 sm:px-8 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-4 bg-gradient-to-r from-purple-950 via-purple-900 to-purple-950 bg-clip-text text-transparent">
            IELTS Reading Practice
          </h1>
          <p className="text-center text-gray-600 mb-12">
            Choose a section to practice your reading skills. Each section increases in difficulty and complexity.
          </p>

          <div className="grid gap-6">
            {sections.map((section, index) => {
              const Icon = section.icon;
              const isSelected = selectedSection === index;
              
              return (
                <div
                  key={section.title}
                  className={`
                    bg-white/90 backdrop-blur-sm p-6 rounded-xl shadow-lg
                    hover:shadow-xl transition-all duration-300
                    hover:-translate-y-1 transform
                    hover:ring-2 hover:ring-purple-400/50
                    hover:shadow-purple-500/20
                    cursor-pointer
                  `}
                  onClick={() => setSelectedSection(isSelected ? null : index)}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-700 via-purple-800 to-purple-900 rounded-lg flex items-center justify-center shadow-lg shadow-purple-800/30 flex-shrink-0">
                      <Icon className="w-6 h-6 text-purple-50" />
                    </div>

                    <div className="flex-1">
                      <h3 className="text-xl font-bold bg-gradient-to-r from-pink-500 to-purple-600 text-transparent bg-clip-text">
                        {section.title}
                      </h3>
                      <p className="text-gray-600 mt-1">
                        {section.description}
                      </p>
                      
                      <div className="flex items-center gap-4 mt-3">
                        <div className="flex items-center gap-1 text-sm text-gray-500">
                          <Timer className="w-4 h-4" />
                          <span>{section.duration}</span>
                        </div>
                        <span className="text-gray-300">•</span>
                        <span className="text-sm text-gray-500">
                          Difficulty: {section.difficulty}
                        </span>
                      </div>
                    </div>

                    <ChevronRight className={`w-5 h-5 text-purple-400 transition-transform ${isSelected ? 'rotate-90' : ''}`} />
                  </div>

                  {isSelected && (
                    <div className="mt-4 pt-4 border-t border-purple-100">
                      <button
                        onClick={() => handleStartTest(index)}
                        className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-lg hover:from-purple-700 hover:to-purple-800 transition-all shadow-md hover:shadow-lg"
                      >
                        <PlayCircle className="w-5 h-5" />
                        <span>Start Practice Test</span>
                      </button>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </main>
    </div>
  );
};