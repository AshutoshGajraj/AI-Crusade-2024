import { ArrowLeft, Clock, Target, Brain, Search, CheckSquare, CheckCircle2, FileQuestion, PenTool, ClipboardList, Table, Tags, Shuffle } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Logo } from '../Logo'

export const ReadingTips = () => {
  const tips = [
    {
      icon: Clock,
      title: "Time Management",
      description: "Spend no more than 20 minutes on each passage. Leave 5 minutes at the end to transfer your answers.",
    },
    {
      icon: Target,
      title: "Skim and Scan",
      description: "Quick read for main ideas first, then scan for specific information when answering questions.",
    },
    {
      icon: Brain,
      title: "Understanding Questions",
      description: "Read questions carefully and underline keywords before looking for answers in the text.",
    },
    {
      icon: Search,
      title: "Keywords Focus",
      description: "Identify synonyms and paraphrasing in questions to match with passage content.",
    },
    {
      icon: CheckSquare,
      title: "Answer All Questions",
      description: "Never leave any answers blank. Make educated guesses if you're running out of time.",
    },
  ]

  const questionTypes = [
    {
      icon: FileQuestion,
      type: "Multiple Choice",
      strategies: [
        "Read all options before choosing",
        "Eliminate obviously wrong answers",
        "Look for specific details in the text that match options",
      ],
    },
    {
      icon: CheckCircle2,
      type: "True/False/Not Given",
      strategies: [
        "Compare statement directly with text",
        "Look for contradictions (False) or absence of information (Not Given)",
        "Don't make assumptions beyond the text",
      ],
    },
    {
      icon: PenTool,
      type: "Short Answer",
      strategies: [
        "Follow the word limit strictly",
        "Use words directly from the text",
        "Check spelling carefully",
      ],
    },
    {
      icon: ClipboardList,
      type: "Sentence Completion",
      strategies: [
        "Read the incomplete sentence first",
        "Check grammar compatibility",
        "Ensure it makes logical sense when complete",
      ],
    },
    {
      icon: Table,
      type: "Notes/Summary/Plan/Diagram Completion",
      strategies: [
        "Study the overall structure first",
        "Identify the relationship between items",
        "Pay attention to word type requirements",
      ],
    },
    {
      icon: Tags,
      type: "Classification",
      strategies: [
        "Understand each category thoroughly",
        "Look for keywords that match categories",
        "Double-check all matches",
      ],
    },
    {
      icon: Shuffle,
      type: "Paragraph Matching",
      strategies: [
        "Read topic sentences first",
        "Match main ideas, not just keywords",
        "Cross out paragraphs once matched",
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
          IELTS Reading Tips
        </h1>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Master these essential strategies to improve your IELTS Reading score
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
          Learn how to tackle each type of IELTS Reading question effectively
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