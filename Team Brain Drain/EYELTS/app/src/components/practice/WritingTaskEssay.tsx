import { useState } from 'react'
import { ArrowLeft, FileText, Timer, Send } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Logo } from '../Logo'
import { useProgress } from '../../hooks/useProgress'

export const WritingTaskEssay = () => {
  const [answer, setAnswer] = useState('')
  const { updateProgress } = useProgress()

  const handleSubmit = () => {
    // Update progress when essay is submitted
    updateProgress('Writing')
    // You might want to add additional submission logic here
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-violet-50 to-sky-50">
      {/* Keep existing header and main content */}
      
      <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-6">
        <h3 className="text-lg font-semibold text-purple-900 mb-4">Your Response</h3>
        <textarea
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          className="w-full h-96 p-4 rounded-lg border border-purple-100 focus:border-purple-300 focus:ring-2 focus:ring-purple-200 transition-all resize-none"
          placeholder="Write your essay here..."
        />
        <div className="flex items-center justify-between mt-4">
          <div className="text-sm text-gray-500">
            Word count: {answer.split(/\s+/).filter(word => word.length > 0).length} / 250 minimum
          </div>
          <button
            onClick={handleSubmit}
            className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-lg hover:from-purple-700 hover:to-purple-800 transition-all shadow-md hover:shadow-lg"
          >
            <Send className="w-4 h-4" />
            <span>Submit Answer</span>
          </button>
        </div>
      </div>
      {/* Keep rest of the JSX */}
    </div>
  )
}