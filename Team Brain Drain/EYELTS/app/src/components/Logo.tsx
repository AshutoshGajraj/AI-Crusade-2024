import { Link } from 'react-router-dom'

export const Logo = () => (
  <Link to="/" className="hover:opacity-90 transition-opacity">
    <div className="flex items-center gap-2">
      <svg
        className="w-12 h-12"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <ellipse cx="50" cy="50" rx="45" ry="30" className="fill-purple-300" />
        <ellipse cx="50" cy="50" rx="20" ry="30" className="fill-purple-900" />
        <ellipse cx="50" cy="50" rx="10" ry="30" className="fill-pink-300" />
        <ellipse cx="60" cy="40" rx="5" ry="5" className="fill-white" />
      </svg>
      <div className="flex flex-col">
        <span className="text-4xl font-bold text-white leading-none">
          EYELTS
        </span>
        <span className="text-xs text-purple-200 font-light">
          by BrainDrain
        </span>
      </div>
    </div>
  </Link>
)