import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const useKeyboardNavigation = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      // Check for Alt + Left Arrow
      if (event.altKey && event.key === 'ArrowLeft') {
        navigate(-1); // Go back one step in history
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    // Cleanup
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [navigate]);
};