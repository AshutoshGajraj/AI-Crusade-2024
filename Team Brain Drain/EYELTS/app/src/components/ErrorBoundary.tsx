import { Component, ErrorInfo, ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { RefreshCcw, Home } from 'lucide-react'

interface Props {
  children: ReactNode
}

interface State {
  hasError: boolean
  error: Error | null
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null
  }

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error }
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo)
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-violet-50 to-sky-50 flex items-center justify-center px-4">
          <div className="max-w-md w-full bg-white/90 backdrop-blur-sm p-8 rounded-xl shadow-xl text-center">
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">⚠️</span>
            </div>
            
            <h1 className="text-2xl font-bold mb-2 bg-gradient-to-r from-red-600 to-purple-600 bg-clip-text text-transparent">
              {this.state.error?.name || 'Error'}
            </h1>
            
            <p className="text-gray-600 mb-6">
              {this.state.error?.message || 'Something went wrong. Please try again.'}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => window.location.reload()}
                className="flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-lg hover:from-purple-700 hover:to-purple-800 transition-all shadow-md hover:shadow-lg"
              >
                <RefreshCcw className="w-4 h-4" />
                <span>Try Again</span>
              </button>
              
              <Link
                to="/"
                className="flex items-center justify-center gap-2 px-6 py-3 bg-white text-purple-700 rounded-lg hover:bg-purple-50 transition-all border border-purple-200 shadow-sm hover:shadow-md"
              >
                <Home className="w-4 h-4" />
                <span>Go Home</span>
              </Link>
            </div>
          </div>
        </div>
      )
    }

    return this.props.children
  }
}