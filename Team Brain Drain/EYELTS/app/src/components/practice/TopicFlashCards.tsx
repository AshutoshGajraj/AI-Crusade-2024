import { ArrowLeft } from 'lucide-react'
import { Link, useParams } from 'react-router-dom'
import { Logo } from '../Logo'
import { useState } from 'react'
import { FlashCard } from '../FlashCard'
import { technologyVocabulary } from '../../data/vocabulary/technology'
import { familyVocabulary } from '../../data/vocabulary/family'
import { environmentVocabulary } from '../../data/vocabulary/environment'
import { crimeVocabulary } from '../../data/vocabulary/crime'

interface TopicData {
  title: string;
  words: Array<{ word: string; meaning: string }>;
}

const topicsData: Record<string, TopicData> = {
  technology: {
    title: "Technology Vocabulary",
    words: technologyVocabulary
  },
  family: {
    title: "Family Vocabulary",
    words: familyVocabulary
  },
  environment: {
    title: "Environment Vocabulary",
    words: environmentVocabulary
  },
  crime: {
    title: "Crime Vocabulary",
    words: crimeVocabulary
  }
};

export const TopicFlashCards = () => {
  const { topic = 'technology' } = useParams<{ topic: string }>();
  const [currentIndex, setCurrentIndex] = useState(0);

  const topicData = topicsData[topic];
  
  if (!topicData) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 via-violet-50 to-sky-50">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Topic not found</h1>
          <Link
            to="/resources/vocabulary"
            className="text-purple-600 hover:text-purple-700 underline"
          >
            Return to Topics
          </Link>
        </div>
      </div>
    );
  }

  const handleNext = () => {
    if (currentIndex < topicData.words.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-violet-50 to-sky-50">
      <header className="bg-gradient-to-r from-purple-950 via-purple-900 to-purple-950 shadow-lg shadow-purple-900/20">
        <div className="container mx-auto px-6 sm:px-8 py-6">
          <div className="flex justify-between items-center">
            <Logo />
            <Link
              to="/resources/vocabulary"
              className="flex items-center gap-2 px-4 py-2 text-purple-100 hover:text-white transition-all rounded-lg hover:bg-purple-800/50 hover:shadow-lg hover:shadow-purple-500/20 backdrop-blur-sm"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Topics</span>
            </Link>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-6 sm:px-8 py-16">
        <h1 className="text-4xl font-bold text-center mb-4 bg-gradient-to-r from-purple-950 via-purple-900 to-purple-950 bg-clip-text text-transparent">
          {topicData.title}
        </h1>
        <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto">
          Click on the cards to reveal their meanings. Use the arrows to navigate between cards.
        </p>

        <FlashCard
          word={topicData.words[currentIndex].word}
          meaning={topicData.words[currentIndex].meaning}
          onNext={handleNext}
          onPrevious={handlePrevious}
          currentIndex={currentIndex}
          total={topicData.words.length}
        />
      </main>
    </div>
  );
};