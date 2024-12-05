import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { ArrowLeft, Timer, Send, AlertCircle, Ban } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Logo } from '../Logo'
import { academicTests } from '../../data/reading/academicTests'
import { useProgress } from '../../hooks/useProgress'

export const AcademicReadingTest = () => {
  const navigate = useNavigate();
  const { sectionId = '1' } = useParams();
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [timeLeft, setTimeLeft] = useState(1200); // 20 minutes in seconds
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [activeQuestionId, setActiveQuestionId] = useState<number | null>(null);
  const { updateProgress } = useProgress();

  const test = academicTests.find(t => t.id === parseInt(sectionId));

  useEffect(() => {
    if (!test) {
      navigate('/reading/practice');
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 0) {
          clearInterval(timer);
          handleSubmit();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [test, navigate]);

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  const handleAnswerChange = (questionId: number, value: string) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: value
    }));
  };

  const handleSubmit = () => {
    setIsSubmitted(true);
    updateProgress('Reading');
  };

  if (!test) return null;

  const getQuestionComponent = (question: typeof test.questions[0]) => {
    switch (question.type) {
      case 'multiple-choice':
        return (
          <div className="space-y-3">
            {question.options?.map((option, idx) => (
              <label 
                key={idx}
                className="flex items-start gap-3 cursor-pointer group"
              >
                <input
                  type="radio"
                  name={`question-${question.id}`}
                  value={option}
                  checked={answers[question.id] === option}
                  onChange={(e) => handleAnswerChange(question.id, e.target.value)}
                  disabled={isSubmitted}
                  className="mt-1 text-purple-600 focus:ring-purple-500"
                />
                <span className="text-gray-700 group-hover:text-gray-900">{option}</span>
              </label>
            ))}
          </div>
        );
      case 'true-false-not-given':
        return (
          <div className="space-x-4">
            {['True', 'False', 'Not Given'].map((option) => (
              <label key={option} className="inline-flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name={`question-${question.id}`}
                  value={option}
                  checked={answers[question.id] === option}
                  onChange={(e) => handleAnswerChange(question.id, e.target.value)}
                  disabled={isSubmitted}
                  className="text-purple-600 focus:ring-purple-500"
                />
                <span>{option}</span>
              </label>
            ))}
          </div>
        );
      case 'short-answer':
        return (
          <input
            type="text"
            value={answers[question.id] || ''}
            onChange={(e) => handleAnswerChange(question.id, e.target.value)}
            disabled={isSubmitted}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
            placeholder="Type your answer here..."
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-violet-50 to-sky-50">
      <header className="bg-gradient-to-r from-purple-950 via-purple-900 to-purple-950 shadow-lg shadow-purple-900/20 sticky top-0 z-50">
        <div className="container mx-auto px-6 sm:px-8 py-6">
          <div className="flex justify-between items-center">
            <Logo />
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-lg text-white">
                <Timer className="w-5 h-5" />
                <span className="font-mono">{formatTime(timeLeft)}</span>
              </div>
              <Link
                to="/reading/practice"
                className="flex items-center gap-2 px-4 py-2 text-purple-100 hover:text-white transition-all rounded-lg hover:bg-purple-800/50 hover:shadow-lg hover:shadow-purple-500/20 backdrop-blur-sm"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Exit Test</span>
              </Link>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-6 sm:px-8 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-8 mb-8">
            <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-purple-950 via-purple-900 to-purple-950 bg-clip-text text-transparent">
              {test.title}
            </h1>
            <p className="text-gray-600 mb-6">{test.introduction}</p>
            
            <div className="prose max-w-none">
              {test.passage.split('\n\n').map((paragraph, idx) => (
                <p key={idx} className="mb-4 text-gray-700 leading-relaxed">
                  {paragraph.trim()}
                </p>
              ))}
            </div>
          </div>

          <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-purple-950 via-purple-900 to-purple-950 bg-clip-text text-transparent">
              Questions
            </h2>

            <div className="space-y-8">
              {test.questions.map((question) => (
                <div 
                  key={question.id}
                  className={`p-6 rounded-lg transition-all ${
                    activeQuestionId === question.id 
                      ? 'bg-purple-50 ring-2 ring-purple-200'
                      : 'hover:bg-gray-50'
                  }`}
                  onClick={() => setActiveQuestionId(question.id)}
                >
                  <div className="flex items-start gap-4 mb-4">
                    <span className="font-mono text-purple-600 font-medium">
                      {question.id}.
                    </span>
                    <p className="text-gray-800 font-medium">{question.text}</p>
                  </div>
                  {getQuestionComponent(question)}
                </div>
              ))}
            </div>

            {!isSubmitted && (
              <div className="mt-8 flex justify-end">
                <button
                  onClick={handleSubmit}
                  className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-lg hover:from-purple-700 hover:to-purple-800 transition-all shadow-md hover:shadow-lg"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Answers</span>
                </button>
              </div>
            )}

            {isSubmitted && (
              <div className="mt-8 p-6 bg-purple-50 rounded-lg">
                <div className="flex items-center gap-2 text-purple-800 mb-4">
                  <AlertCircle className="w-5 h-5" />
                  <h3 className="font-semibold">Test Completed</h3>
                </div>
                <p className="text-gray-600">
                  Your answers have been submitted. Review your responses below and check your progress in the home page.
                </p>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  )
}