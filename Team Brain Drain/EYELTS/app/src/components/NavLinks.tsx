import { BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';

export const NavLinks = () => {
  return (
    <div className="flex items-center">
      <Link
        to="/resources"
        className="
          flex items-center gap-2 px-4 py-2
          text-purple-100 hover:text-white
          transition-all rounded-lg
          hover:bg-purple-800/50
          hover:shadow-lg hover:shadow-purple-500/20
          backdrop-blur-sm
          hover:-translate-y-0.5
          transform
        "
      >
        <BookOpen className="w-4 h-4" />
        <span>Resources</span>
      </Link>
    </div>
  );
};