import { ArrowLeft, LineChart, Download, Timer, Send } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Logo } from '../Logo';
import { useState } from 'react';
import ReactMarkdown from 'react-markdown'; 

export const WritingTaskAcademic = () => {
  const [answer, setAnswer] = useState("");
  const [feedback, setFeedback] = useState(null); 

  const sampleTopic = `
  
  You missed an international flight due to a problem at the airport.
  
  Write a letter to the airline. In your letter:
  
      Describe what happened that caused you to miss your flight
      Explain how missing your flight impacted you
      Clearly state what you would like the airline to do
  
  Write at least 150 words. You do NOT need to write any addresses.
  
  Begin your letter as follows:
  
  Dear Sir or Madam,
  `;

  const handleSubmit = async () => {
    console.log('Submitting answer:', answer); 
    const params = {
      title: sampleTopic, 
      answer: answer
    };

    try {
      const response = await fetch('http://127.0.0.1:8000/writing_test', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(params)
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error('Failed to submit the response:', errorData);
        throw new Error('Failed to submit the response');
      }

      const data = await response.json();
      console.log('Response from the server:', data);
      setFeedback(data.feedback); // Set the feedback state
    } catch (error) {
      console.error('Error submitting the response:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-violet-50 to-sky-50">
      <header className="bg-gradient-to-r from-purple-950 via-purple-900 to-purple-950 shadow-lg shadow-purple-900/20">
        <div className="container mx-auto px-6 sm:px-8 py-6">
          <div className="flex justify-between items-center">
            <Logo />
            <Link
              to="/"
              className="flex items-center gap-2 px-4 py-2 text-purple-100 hover:text-white transition-all rounded-lg hover:bg-purple-800/50 hover:shadow-lg hover:shadow-purple-500/20 backdrop-blur-sm"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Home</span>
            </Link>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-6 sm:px-8 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-950 via-purple-900 to-purple-950 bg-clip-text text-transparent">
              Writing Task 1: Academic
            </h1>
            <div className="flex items-center gap-2 text-purple-900 font-medium">
              <Timer className="w-5 h-5" />
              <span>20 minutes</span>
            </div>
          </div>

          <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-6 mb-8">
            <div className="prose max-w-none">
              <h2 className="text-xl font-semibold text-purple-900 mb-4">Task Instructions</h2>
              <p className="text-gray-700 mb-4">
                You should spend about 20 minutes on this task.
              </p>
              <p className="text-gray-700 mb-6">
                You missed an international flight due to a problem at the airport.
              </p>
              <p className="text-gray-700 font-medium mb-8">
                Write a letter to the airline. In your letter:
                <ul className="list-disc pl-5">
                  <li>Describe what happened that caused you to miss your flight</li>
                  <li>Explain how missing your flight impacted you</li>
                  <li>Clearly state what you would like the airline to do</li>
                </ul>
              </p>
              <p className="text-gray-700 mb-4">
                Write at least 150 words. You do NOT need to write any addresses.
              </p>
              <p className="text-gray-700 font-medium">
                Begin your letter as follows:
              </p>
              <p className="text-gray-900 font-semibold">Dear Sir or Madam,</p>
            </div>
          </div>

          {/* Answer Section */}
          <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-6">
            <h3 className="text-lg font-semibold text-purple-900 mb-4">Your Response</h3>
            <textarea
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              className="w-full h-64 p-4 rounded-lg border border-purple-100 focus:border-purple-300 focus:ring-2 focus:ring-purple-200 transition-all resize-none"
              placeholder="Write your answer here..."
            />
            <div className="flex items-center justify-between mt-4">
              <div className="text-sm text-gray-500">
                Word count: {answer.split(/\s+/).filter(word => word.length > 0).length} / 150 minimum
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

          {/* Feedback Section */}
          {feedback && (
            <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-6 mt-8">
              <h3 className="text-lg font-semibold text-purple-900 mb-4">Feedback</h3>
              <p className="text-gray-700"><ReactMarkdown>{feedback}</ReactMarkdown></p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};