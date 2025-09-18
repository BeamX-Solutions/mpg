import React from 'react';
import { marketingSquares } from '../data/marketingSquares';

interface ProgressBarProps {
  progress: number;
  total: number;
  onStartOver?: () => void;
  className?: string;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({ progress, total, onStartOver, className = '' }) => {
  const percentage = (progress / total) * 100;
  
  // Calculate which square we're currently in
  const questionsPerSquare = Math.ceil(total / (marketingSquares.length + 1)); // +1 for business context
  const currentSquareIndex = Math.floor((progress - 1) / questionsPerSquare);
  const currentQuestionSquare = currentSquareIndex === 0 ? 0 : marketingSquares[currentSquareIndex - 1]?.id || 0;
  
  // Calculate completed squares
  const completedSquares = marketingSquares
    .filter((_, index) => index < currentSquareIndex - 1)
    .map(s => s.id);

  return (
    <div className={`bg-white dark:bg-neutral-900 border-b border-gray-200 dark:border-neutral-700 sticky top-0 z-40 ${className}`}>
      <div className="max-w-4xl mx-auto px-4 py-4">
        <div className="mb-4 flex justify-between items-center">
          <div className="flex-1">
            <div className="flex justify-between text-sm text-gray-600 dark:text-neutral-400 mb-2">
              <span>Overall Progress</span>
              <span>{Math.round(percentage)}% Complete</span>
            </div>
            <div className="w-full bg-gray-200 dark:bg-neutral-700 rounded-full h-2">
              <div
                className="bg-gradient-to-r from-primary-600 to-secondary-600 h-2 rounded-full transition-all duration-300"
                style={{ width: `${percentage}%` }}
              />
            </div>
          </div>
          {onStartOver && progress > 1 && (
            <button
              onClick={onStartOver}
              className="ml-4 px-3 py-1.5 text-xs font-medium text-red-600 hover:text-red-700 bg-red-50 hover:bg-red-100 rounded-lg transition-colors"
            >
              Start Over
            </button>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-10 gap-2">
          {/* Business Context Square */}
          <div
            className={`text-center p-2 rounded-lg text-xs transition-all duration-200 ${
              currentQuestionSquare === 0
                ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 border-2 border-blue-300 dark:border-blue-600'
                : progress > questionsPerSquare
                ? 'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 border-2 border-green-300 dark:border-green-600'
                : 'bg-gray-100 dark:bg-neutral-800 text-gray-600 dark:text-neutral-400 border border-gray-200 dark:border-neutral-600'
            }`}
          >
            <div className="font-semibold mb-1">0</div>
            <div className="hidden md:block leading-tight">Business Context</div>
          </div>
          
          {/* Marketing Squares */}
          {marketingSquares.map((square) => (
            <div
              key={square.id}
              className={`text-center p-2 rounded-lg text-xs transition-all duration-200 ${
                completedSquares.includes(square.id)
                  ? 'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 border-2 border-green-300 dark:border-green-600'
                  : currentQuestionSquare === square.id
                  ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 border-2 border-blue-300 dark:border-blue-600'
                  : 'bg-gray-100 dark:bg-neutral-800 text-gray-600 dark:text-neutral-400 border border-gray-200 dark:border-neutral-600'
              }`}
            >
              <div className="font-semibold mb-1">{square.id}</div>
              <div className="hidden md:block leading-tight">{square.title}</div>
            </div>
          ))}
        </div>

        {currentQuestionSquare >= 0 && (
          <div className="mt-4 text-center">
            <div className="text-sm text-gray-600 dark:text-neutral-400">Current Section</div>
            <div className="font-semibold text-gray-900 dark:text-neutral-100">
              {currentQuestionSquare === 0 
                ? 'Business Context: Tell us about your business'
                : `Square ${currentQuestionSquare}: ${marketingSquares.find(s => s.id === currentQuestionSquare)?.title}`
              }
            </div>
            <div className="text-sm text-gray-600 dark:text-neutral-400 mt-1">
              {currentQuestionSquare === 0 
                ? 'Help us understand your business to personalize your marketing plan'
                : marketingSquares.find(s => s.id === currentQuestionSquare)?.description
              }
            </div>
          </div>
        )}
      </div>
    </div>
  );
};