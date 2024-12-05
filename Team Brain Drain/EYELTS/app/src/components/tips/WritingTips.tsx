import { ArrowLeft, Clock, Target, Pencil, BookOpen, CheckSquare, LineChart, FileText, Mail } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Logo } from '../Logo'

export const WritingTips = () => {
  const generalTips = [
    {
      icon: Clock,
      title: "Time Management",
      description: "Spend 20 minutes on Task 1 and 40 minutes on Task 2. Reserve 5 minutes for review.",
    },
    {
      icon: Target,
      title: "Task Achievement",
      description: "Answer all parts of the task completely and maintain relevance throughout.",
    },
    {
      icon: Pencil,
      title: "Handwriting",
      description: "Write clearly and legibly. Poor handwriting can affect your score.",
    },
    {
      icon: BookOpen,
      title: "Word Count",
      description: "Write at least 150 words for Task 1 and 250 words for Task 2.",
    },
    {
      icon: CheckSquare,
      title: "Proofreading",
      description: "Check for grammar, spelling, and punctuation errors in the final minutes.",
    },
  ]

  const taskTypes = [
    {
      icon: LineChart,
      type: "Task 1: Graph/Table/Chart/Diagram",
      strategies: [
        "Begin with an overview of the main trends",
        "Select and report key features",
        "Use appropriate data visualization language",
        "Compare significant data points",
        "Organize information logically",
        "Use appropriate linking words",
      ],
    },
    {
      icon: FileText,
      type: "Task 2: Opinion Essay",
      strategies: [
        "Take a clear position on the topic",
        "Support your opinion with specific examples",
        "Develop well-structured arguments",
        "Use relevant personal experience",
        "Present a balanced conclusion",
        "Show critical thinking skills",
      ],
    },
    {
      icon: Mail,
      type: "Task 1: Letter Writing",
      strategies: [
        "Use appropriate tone (formal/informal)",
        "Include all required points from the prompt",
        "Structure the letter properly with opening/closing",
        "Use suitable greeting and sign-off",
        "Maintain consistent style throughout",
        "Express purpose clearly",
      ],
    },
  ]

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
        <h1 className="text-4xl font-bold text-center mb-4 bg-gradient-to-r from-purple-950 via-purple-900 to-purple-950 bg-clip-text text-transparent">
          IELTS Writing Tips
        </h1>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Essential strategies to excel in both Writing Task 1 and Task 2
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-20">
          {generalTips.map((tip) => (
            <div
              key={tip.title}
              className="bg-white/90 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 transform hover:ring-2 hover:ring-purple-400/50 hover:shadow-purple-500/20"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-purple-700 via-purple-800 to-purple-900 rounded-lg flex items-center justify-center mb-4 shadow-lg shadow-purple-800/30">
                <tip.icon className="w-6 h-6 text-purple-50" />
              </div>
              <h3 className="text-xl font-bold mb-2 bg-gradient-to-r from-pink-500 to-purple-600 text-transparent bg-clip-text">
                {tip.title}
              </h3>
              <p className="text-gray-600">
                {tip.description}
              </p>
            </div>
          ))}
        </div>

        <h2 className="text-3xl font-bold text-center mb-4 bg-gradient-to-r from-purple-950 via-purple-900 to-purple-950 bg-clip-text text-transparent">
          Task Types & Strategies
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Specific approaches for different types of IELTS Writing tasks
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {taskTypes.map((item) => (
            <div
              key={item.type}
              className="bg-white/90 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 transform hover:ring-2 hover:ring-purple-400/50 hover:shadow-purple-500/20"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-purple-700 via-purple-800 to-purple-900 rounded-lg flex items-center justify-center mb-4 shadow-lg shadow-purple-800/30">
                <item.icon className="w-6 h-6 text-purple-50" />
              </div>
              <h3 className="text-xl font-bold mb-3 bg-gradient-to-r from-pink-500 to-purple-600 text-transparent bg-clip-text">
                {item.type}
              </h3>
              <ul className="space-y-2">
                {item.strategies.map((strategy, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-purple-600 mt-1">•</span>
                    <span className="text-gray-600">{strategy}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}