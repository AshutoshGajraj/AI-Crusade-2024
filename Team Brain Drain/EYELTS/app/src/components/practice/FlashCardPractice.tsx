import { ArrowLeft } from 'lucide-react'
import { Link, useParams } from 'react-router-dom'
import { Logo } from '../Logo'
import { useState } from 'react'
import { FlashCard } from '../FlashCard'
import { wordsByDifficulty } from '../../data/flashcards'

export const FlashCardPractice = () => {
  const { difficulty = 'intermediate' } = useParams<{ difficulty: string }>();
  const [currentIndex, setCurrentIndex] = useState(0);

  const words = wordsByDifficulty[difficulty] || wordsByDifficulty.intermediate;

  const handleNext = () => {
    if (currentIndex < words.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const difficultyTitle = difficulty.charAt(0).toUpperCase() + difficulty.slice(1);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-violet-50 to-sky-50">
      <header className="bg-gradient-to-r from-purple-950 via-purple-900 to-purple-950 shadow-lg shadow-purple-900/20">
        <div className="container mx-auto px-6 sm:px-8 py-6">
          <div className="flex justify-between items-center">
            <Logo />
            <Link
              to="/resources/flashcards"
              className="flex items-center gap-2 px-4 py-2 text-purple-100 hover:text-white transition-all rounded-lg hover:bg-purple-800/50 hover:shadow-lg hover:shadow-purple-500/20 backdrop-blur-sm"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Difficulty Selection</span>
            </Link>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-6 sm:px-8 py-16">
        <h1 className="text-4xl font-bold text-center mb-4 bg-gradient-to-r from-purple-950 via-purple-900 to-purple-950 bg-clip-text text-transparent">
          {difficultyTitle} Level Flash Cards
        </h1>
        <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto">
          Click on the cards to reveal their meanings. Use the arrows to navigate between cards.
        </p>

        <FlashCard
          word={words[currentIndex].word}
          meaning={words[currentIndex].meaning}
          onNext={handleNext}
          onPrevious={handlePrevious}
          currentIndex={currentIndex}
          total={words.length}
        />
      </main>
    </div>
  );
};