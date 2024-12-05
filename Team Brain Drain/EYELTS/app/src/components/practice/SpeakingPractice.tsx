import { ArrowLeft, Mic, Clock, MessageCircle, Speech, Users, PlayCircle, ChevronRight } from 'lucide-react'
import { Link, useNavigate } from 'react-router-dom'
import { Logo } from '../Logo'
import { useState } from 'react'

export const SpeakingPractice = () => {
  const [selectedPart, setSelectedPart] = useState<number | null>(null);
  const navigate = useNavigate();

  const parts = [
    {
      title: "Part 1: Introduction and Interview",
      description: "Questions about yourself and familiar topics",
      duration: "4-5 minutes",
      icon: MessageCircle,
      topics: [
        "Your home/accommodation",
        "Your work/studies",
        "Your hobbies/interests",
        "Your daily routine",
        "Your hometown",
      ],
      path: "/speaking/practice/part1"
    },
    {
      title: "Part 2: Individual Long Turn",
      description: "Speak for 1-2 minutes on a given topic",
      duration: "3-4 minutes",
      icon: Speech,
      topics: [
        "Describe a person you admire",
        "Talk about a memorable journey",
        "Describe your favorite place",
        "Talk about a special event",
        "Describe a useful object you own",
      ],
    },
    {
      title: "Part 3: Two-way Discussion",
      description: "In-depth discussion related to Part 2 topic",
      duration: "4-5 minutes",
      icon: Users,
      topics: [
        "Social implications",
        "Cultural aspects",
        "Future trends",
        "Personal opinions",
        "Compare and contrast",
      ],
    },
  ];

  const handleStartPractice = (partIndex: number) => {
    if (parts[partIndex].path) {
      navigate(parts[partIndex].path);
    }
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
            IELTS Speaking Practice
          </h1>
          <p className="text-center text-gray-600 mb-12">
            Practice for each part of the IELTS Speaking test. Allow microphone access to record your responses.
          </p>

          <div className="grid gap-6">
            {parts.map((part, index) => {
              const Icon = part.icon;
              const isSelected = selectedPart === index;
              
              return (
                <div
                  key={part.title}
                  className={`
                    bg-white/90 backdrop-blur-sm p-6 rounded-xl shadow-lg
                    hover:shadow-xl transition-all duration-300
                    hover:-translate-y-1 transform
                    hover:ring-2 hover:ring-purple-400/50
                    hover:shadow-purple-500/20
                    cursor-pointer
                  `}
                  onClick={() => setSelectedPart(isSelected ? null : index)}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-700 via-purple-800 to-purple-900 rounded-lg flex items-center justify-center shadow-lg shadow-purple-800/30 flex-shrink-0">
                      <Icon className="w-6 h-6 text-purple-50" />
                    </div>

                    <div className="flex-1">
                      <h3 className="text-xl font-bold bg-gradient-to-r from-pink-500 to-purple-600 text-transparent bg-clip-text">
                        {part.title}
                      </h3>
                      <p className="text-gray-600 mt-1">
                        {part.description}
                      </p>
                      
                      <div className="flex items-center gap-4 mt-3">
                        <div className="flex items-center gap-1 text-sm text-gray-500">
                          <Clock className="w-4 h-4" />
                          <span>{part.duration}</span>
                        </div>
                      </div>
                    </div>

                    <ChevronRight className={`w-5 h-5 text-purple-400 transition-transform ${isSelected ? 'rotate-90' : ''}`} />
                  </div>

                  {isSelected && (
                    <div className="mt-6 pt-4 border-t border-purple-100">
                      <h4 className="text-sm font-semibold text-gray-700 mb-3">Practice Topics:</h4>
                      <ul className="space-y-2 mb-6">
                        {part.topics.map((topic, topicIndex) => (
                          <li key={topicIndex} className="flex items-start gap-2 text-gray-600">
                            <span className="text-purple-600 mt-1">•</span>
                            <span>{topic}</span>
                          </li>
                        ))}
                      </ul>
                      
                      <button
                        onClick={() => handleStartPractice(index)}
                        className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-lg hover:from-purple-700 hover:to-purple-800 transition-all shadow-md hover:shadow-lg"
                      >
                        <PlayCircle className="w-5 h-5" />
                        <span>Start Practice</span>
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