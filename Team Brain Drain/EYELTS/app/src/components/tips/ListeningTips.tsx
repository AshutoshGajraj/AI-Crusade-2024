import { ArrowLeft, Clock, Target, Brain, Search, CheckSquare, FileQuestion, PenTool, ClipboardList, Table, Tags, Shuffle, Map, ChevronRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Logo } from '../Logo'

export const ListeningTips = () => {
  const tips = [
    {
      icon: Clock,
      title: "Time Management",
      description: "Listen carefully during the first play. Use the 30 seconds between sections to read ahead.",
    },
    {
      icon: Target,
      title: "Preview Questions",
      description: "Use the time before each section to read questions and predict possible answers.",
    },
    {
      icon: Brain,
      title: "Stay Focused",
      description: "Concentrate on the audio even if you miss an answer. Don't get stuck on missed questions.",
    },
    {
      icon: Search,
      title: "Listen for Keywords",
      description: "Pay attention to emphasis, tone, and signpost words that indicate important information.",
    },
    {
      icon: CheckSquare,
      title: "Answer Everything",
      description: "Never leave blanks. Make educated guesses if needed during transfer time.",
    },
  ]

  const questionTypes = [
    {
      icon: FileQuestion,
      type: "Multiple Choice",
      strategies: [
        "Read all options before listening",
        "Listen for synonyms of key words",
        "Watch for distractors in wrong options",
        "Pay attention to changes of mind by speakers",
      ],
    },
    {
      icon: PenTool,
      type: "Short Answer",
      strategies: [
        "Note word limit (usually 1-3 words)",
        "Write exactly what you hear",
        "Check spelling during transfer time",
        "Listen for numbers and proper nouns carefully",
      ],
    },
    {
      icon: ChevronRight,
      type: "Sentence Completion",
      strategies: [
        "Read the incomplete sentence first",
        "Predict the type of word needed",
        "Listen for words that fit grammatically",
        "Check your answer makes logical sense",
      ],
    },
    {
      icon: Table,
      type: "Notes/Summary/Plan/Diagram/Table/Chart Completion",
      strategies: [
        "Study the overall format before listening",
        "Follow the order in the recording",
        "Pay attention to units and measurements",
        "Notice relationships between items",
      ],
    },
    {
      icon: Map,
      type: "Label a Diagram",
      strategies: [
        "Study the diagram thoroughly before listening",
        "Note the numbered parts",
        "Listen for location words and descriptions",
        "Understand spatial relationships mentioned",
      ],
    },
    {
      icon: Tags,
      type: "Classification",
      strategies: [
        "Understand categories before listening",
        "Listen for words that match categories",
        "Note any dates or time periods",
        "Pay attention to contrasting information",
      ],
    },
    {
      icon: Shuffle,
      type: "Matching",
      strategies: [
        "Preview all options before listening",
        "Listen for relationships between items",
        "Note descriptive words and characteristics",
        "Cross off matches as you find them",
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
          IELTS Listening Tips
        </h1>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Master these essential strategies to improve your IELTS Listening score
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-20">
          {tips.map((tip) => (
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
          Question Types & Strategies
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Learn how to tackle each type of IELTS Listening question effectively
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {questionTypes.map((item) => (
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