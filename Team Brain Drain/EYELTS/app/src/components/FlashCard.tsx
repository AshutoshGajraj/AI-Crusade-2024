import { useState, useEffect } from 'react'
import { ChevronRight, ChevronLeft } from 'lucide-react'

interface FlashCardProps {
  word: string;
  meaning: string;
  onNext: () => void;
  onPrevious: () => void;
  currentIndex: number;
  total: number;
}

export const FlashCard = ({ word, meaning, onNext, onPrevious, currentIndex, total }: FlashCardProps) => {
  const [isFlipped, setIsFlipped] = useState(false);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Only handle events if not typing in an input/textarea
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) {
        return;
      }

      switch (e.key) {
        case 'ArrowLeft':
          if (currentIndex > 0) {
            onPrevious();
            setIsFlipped(false);
          }
          break;
        case 'ArrowRight':
          if (currentIndex < total - 1) {
            onNext();
            setIsFlipped(false);
          }
          break;
        case ' ': // Spacebar
          e.preventDefault(); // Prevent page scroll
          setIsFlipped(!isFlipped);
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    // Cleanup
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [currentIndex, total, onNext, onPrevious, isFlipped]);

  return (
    <div className="max-w-xl mx-auto perspective">
      <div className="relative">
        <div
          className="group relative w-full aspect-[3/2] cursor-pointer"
          onClick={() => setIsFlipped(!isFlipped)}
          style={{ perspective: '1000px' }}
        >
          {/* Front of the card */}
          <div
            className={`
              absolute inset-0 w-full h-full
              transition-all duration-500
              transform-gpu preserve-3d
              ${isFlipped ? '[transform:rotateY(180deg)]' : '[transform:rotateY(0deg)]'}
              bg-gradient-to-br from-white/90 via-purple-50/90 to-white/90
              backdrop-blur-md rounded-2xl
              shadow-[0_0_15px_rgba(0,0,0,0.1)]
              hover:shadow-[0_0_25px_rgba(0,0,0,0.15)]
              border border-purple-100/50
              p-8
              flex flex-col items-center justify-center gap-4
              group/card
            `}
          >
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-500/5 via-transparent to-pink-500/5 rounded-2xl" />
            <div className="relative">
              <h2 className="text-5xl font-bold text-center bg-gradient-to-br from-purple-700 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                {word}
              </h2>
              <div className="h-1 w-24 mx-auto mt-4 rounded-full bg-gradient-to-r from-transparent via-purple-300 to-transparent opacity-50" />
            </div>
            <div className="absolute bottom-4 text-sm text-purple-400/80 transition-all group-hover/card:text-purple-500">
              Click to reveal meaning
            </div>
          </div>

          {/* Back of the card */}
          <div
            className={`
              absolute inset-0 w-full h-full
              transition-all duration-500
              transform-gpu preserve-3d
              ${isFlipped ? '[transform:rotateY(0deg)]' : '[transform:rotateY(-180deg)]'}
              bg-gradient-to-br from-white/90 via-pink-50/90 to-white/90
              backdrop-blur-md rounded-2xl
              shadow-[0_0_15px_rgba(0,0,0,0.1)]
              hover:shadow-[0_0_25px_rgba(0,0,0,0.15)]
              border border-pink-100/50
              p-8
              flex flex-col items-center justify-center gap-4
              group/card
            `}
          >
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-pink-500/5 via-transparent to-purple-500/5 rounded-2xl" />
            <div className="relative">
              <p className="text-2xl text-center text-gray-700 font-medium leading-relaxed">
                {meaning}
              </p>
              <div className="h-1 w-24 mx-auto mt-4 rounded-full bg-gradient-to-r from-transparent via-pink-300 to-transparent opacity-50" />
            </div>
            <div className="absolute bottom-4 text-sm text-pink-400/80 transition-all group-hover/card:text-pink-500">
              Click to see word
            </div>
          </div>
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            if (currentIndex > 0) {
              onPrevious();
              setIsFlipped(false);
            }
          }}
          className={`
            absolute left-0 top-1/2 -translate-y-1/2 -translate-x-16
            p-3 rounded-xl
            bg-gradient-to-br from-white/90 via-purple-50/90 to-white/90
            backdrop-blur-md
            shadow-lg hover:shadow-xl
            transition-all
            hover:-translate-x-[70px]
            border border-purple-100/50
            disabled:opacity-50
            disabled:cursor-not-allowed
            disabled:hover:-translate-x-16
            group/prev
          `}
          disabled={currentIndex === 0}
        >
          <ChevronLeft className={`w-6 h-6 transition-colors ${
            currentIndex === 0 ? 'text-gray-300' : 'text-purple-600 group-hover/prev:text-purple-700'
          }`} />
        </button>

        <button
          onClick={(e) => {
            e.stopPropagation();
            if (currentIndex < total - 1) {
              onNext();
              setIsFlipped(false);
            }
          }}
          className={`
            absolute right-0 top-1/2 -translate-y-1/2 translate-x-16
            p-3 rounded-xl
            bg-gradient-to-br from-white/90 via-purple-50/90 to-white/90
            backdrop-blur-md
            shadow-lg hover:shadow-xl
            transition-all
            hover:translate-x-[70px]
            border border-purple-100/50
            disabled:opacity-50
            disabled:cursor-not-allowed
            disabled:hover:translate-x-16
            group/next
          `}
          disabled={currentIndex === total - 1}
        >
          <ChevronRight className={`w-6 h-6 transition-colors ${
            currentIndex === total - 1 ? 'text-gray-300' : 'text-purple-600 group-hover/next:text-purple-700'
          }`} />
        </button>
      </div>

      {/* Progress indicator */}
      <div className="mt-8 text-center">
        <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm shadow-sm border border-purple-100/50">
          <span className="text-purple-600 font-medium">Card {currentIndex + 1}</span>
          <span className="mx-2 text-purple-300">•</span>
          <span className="text-gray-500">{total} total</span>
        </div>
        
        {/* Keyboard shortcuts help */}
        <div className="mt-4 text-sm text-gray-500">
          <span>Use </span>
          <span className="px-2 py-1 bg-gray-100 rounded-md text-gray-700 font-mono">←</span>
          <span> </span>
          <span className="px-2 py-1 bg-gray-100 rounded-md text-gray-700 font-mono">→</span>
          <span> keys to navigate • </span>
          <span className="px-2 py-1 bg-gray-100 rounded-md text-gray-700 font-mono">space</span>
          <span> to flip</span>
        </div>
      </div>
    </div>
  )
}