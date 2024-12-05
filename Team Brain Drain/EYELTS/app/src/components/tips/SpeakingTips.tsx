import { ArrowLeft, Clock, Target, Mic, Volume2, BookOpen, Lightbulb, MessageCircle, Users, Speech } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Logo } from '../Logo'

export const SpeakingTips = () => {
  const generalTips = [
    {
      icon: Clock,
      title: "Time Management",
      description: "Listen carefully to the examiner's questions and provide appropriate length responses for each part.",
    },
    {
      icon: Target,
      title: "Natural Flow",
      description: "Speak naturally and maintain a steady pace. Don't memorize scripts or speak too fast.",
    },
    {
      icon: Volume2,
      title: "Clear Pronunciation",
      description: "Focus on clear pronunciation and intonation. It's more important than having a perfect accent.",
    },
    {
      icon: BookOpen,
      title: "Vocabulary Range",
      description: "Use diverse vocabulary and idiomatic expressions appropriately to demonstrate language proficiency.",
    },
    {
      icon: Lightbulb,
      title: "Stay Relevant",
      description: "Answer questions directly and stay on topic. Extend answers but remain relevant to the question.",
    },
  ]

  const partTypes = [
    {
      icon: MessageCircle,
      type: "Part 1: Introduction and Familiar Topics",
      strategies: [
        "Give extended but natural responses (30-60 seconds)",
        "Share personal experiences when relevant",
        "Use appropriate tense for each question",
        "Show personality while maintaining formality",
        "Practice common topics (work, study, home, hobbies)",
        "Include relevant details and examples",
      ],
    },
    {
      icon: Speech,
      type: "Part 2: Individual Long Turn",
      strategies: [
        "Use your 1-minute preparation time effectively",
        "Make notes on the provided paper",
        "Cover all points on the task card",
        "Structure your talk with intro, body, and conclusion",
        "Speak for the full 2 minutes",
        "Include specific examples and personal experiences",
      ],
    },
    {
      icon: Users,
      type: "Part 3: Two-way Discussion",
      strategies: [
        "Develop complex ideas and opinions",
        "Use advanced vocabulary and structures",
        "Support arguments with examples",
        "Show ability to discuss abstract concepts",
        "Express agreement/disagreement professionally",
        "Demonstrate critical thinking skills",
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
          IELTS Speaking Tips
        </h1>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Master strategies for all three parts of the IELTS Speaking test
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
          Speaking Test Parts & Strategies
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Specific approaches for each part of the IELTS Speaking test
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {partTypes.map((item) => (
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