import { ArrowLeft, Laptop, Users, Leaf, Building } from 'lucide-react'
import { Link, useNavigate } from 'react-router-dom'
import { Logo } from './Logo'

export const VocabularyTopics = () => {
  const navigate = useNavigate();
  
  const topics = [
    {
      title: "Technology",
      description: "Essential vocabulary for discussing digital innovations, gadgets, and technological advancement.",
      icon: Laptop,
      color: "from-cyan-500 to-blue-500",
      hover: "hover:from-cyan-600 hover:to-blue-600",
      path: "technology"
    },
    {
      title: "Family",
      description: "Words and phrases related to family relationships, traditions, and domestic life.",
      icon: Users,
      color: "from-pink-500 to-rose-500",
      hover: "hover:from-pink-600 hover:to-rose-600",
      path: "family"
    },
    {
      title: "Environment",
      description: "Vocabulary focused on nature, climate change, and environmental conservation.",
      icon: Leaf,
      color: "from-green-500 to-emerald-500",
      hover: "hover:from-green-600 hover:to-emerald-600",
      path: "environment"
    },
    {
      title: "Crime",
      description: "Terms related to law enforcement, criminal justice, and social security.",
      icon: Building,
      color: "from-purple-500 to-indigo-500",
      hover: "hover:from-purple-600 hover:to-indigo-600",
      path: "crime"
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
            Vocabulary by Topic
          </h1>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Choose a topic to explore essential IELTS vocabulary and practice with flashcards
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {topics.map((topic) => {
              const Icon = topic.icon;
              return (
                <div
                  key={topic.title}
                  onClick={() => navigate(`/resources/vocabulary/${topic.path}`)}
                  className="group relative bg-white/90 backdrop-blur-sm p-6 rounded-xl shadow-lg 
                    hover:shadow-xl transition-all duration-300 hover:-translate-y-1 transform 
                    hover:ring-2 hover:ring-purple-400/50 hover:shadow-purple-500/20 cursor-pointer"
                >
                  <div className="flex items-start gap-4">
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center shadow-lg
                      bg-gradient-to-br ${topic.color} group-${topic.hover}`}
                    >
                      <Icon className="w-6 h-6 text-white" />
                    </div>

                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-2 bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
                        {topic.title}
                      </h3>
                      <p className="text-gray-600">
                        {topic.description}
                      </p>
                    </div>
                  </div>

                  {/* Gradient overlay on hover */}
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-white/0 via-white/0 to-white/0 group-hover:from-white/0 group-hover:via-white/5 group-hover:to-white/10 transition-all duration-300" />
                </div>
              );
            })}
          </div>
        </div>
      </main>
    </div>
  );
};