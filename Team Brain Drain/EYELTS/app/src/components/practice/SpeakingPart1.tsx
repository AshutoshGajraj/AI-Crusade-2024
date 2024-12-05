import { useState, useEffect } from 'react'
import { ArrowLeft, Mic, Timer, StopCircle, RefreshCw, Lightbulb } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Logo } from '../Logo'
import { useProgress } from '../../hooks/useProgress'

// Keep existing topics definition

export const SpeakingPart1 = () => {
  const [isRecording, setIsRecording] = useState(false)
  const [currentTopic, setCurrentTopic] = useState<keyof typeof topics>("Home")
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [timeLeft, setTimeLeft] = useState(300) // 5 minutes in seconds
  const [showTip, setShowTip] = useState(false)
  const { updateProgress } = useProgress()

  useEffect(() => {
    let timer: NodeJS.Timeout
    if (isRecording && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft(prev => prev - 1)
      }, 1000)
    }
    return () => clearInterval(timer)
  }, [isRecording, timeLeft])

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60)
    const remainingSeconds = seconds % 60
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`
  }

  const handleStopRecording = () => {
    setIsRecording(false)
    // Update progress when recording is stopped (considering it as completion)
    updateProgress('Speaking')
  }

  // Rest of the component remains the same...
  // (keep all the existing JSX and other functionality)

  return (
    // ... keep existing JSX structure, just update the stop recording button to use handleStopRecording
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-violet-50 to-sky-50">
      {/* Keep all existing JSX */}
    </div>
  )
}