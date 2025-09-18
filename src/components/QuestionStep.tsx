import React, { useState, useEffect } from 'react';
import { Question, QuestionnaireResponse } from '../types';
import { Button } from './Button';

interface QuestionStepProps {
  question: Question;
  onAnswer: (response: QuestionnaireResponse) => void;
  onNext: () => void;
  onPrevious: () => void;
  canGoBack: boolean;
  isLastQuestion: boolean;
  savedAnswer?: string | string[];
}

export const QuestionStep: React.FC<QuestionStepProps> = ({
  question,
  onAnswer,
  onNext,
  onPrevious,
  canGoBack,
  isLastQuestion,
  savedAnswer
}) => {
  const [answer, setAnswer] = useState<string | string[]>(savedAnswer || (question.type === 'multiselect' ? [] : ''));
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    if (savedAnswer) {
      setAnswer(savedAnswer);
    }
  }, [savedAnswer]);

  useEffect(() => {
    validateAnswer();
  }, [answer]);

  const validateAnswer = () => {
    if (!question.required) {
      setIsValid(true);
      return;
    }

    if (question.type === 'multiselect') {
      setIsValid(Array.isArray(answer) && answer.length > 0);
    } else {
      setIsValid(Boolean(answer && String(answer).trim()));
    }
  };

  const handleAnswer = (value: string | string[]) => {
    setAnswer(value);
    const response: QuestionnaireResponse = {
      questionId: question.id,
      answer: value
    };
    onAnswer(response);
  };

  const handleMultiSelectChange = (option: string, checked: boolean) => {
    const currentAnswer = Array.isArray(answer) ? answer : [];
    let newAnswer: string[];
    
    if (checked) {
      newAnswer = [...currentAnswer, option];
    } else {
      newAnswer = currentAnswer.filter(item => item !== option);
    }
    
    handleAnswer(newAnswer);
  };

  const renderInput = () => {
    switch (question.type) {
      case 'select':
        return (
          <select
            value={Array.isArray(answer) ? '' : answer}
            onChange={(e) => handleAnswer(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="">Select an option...</option>
            {question.options?.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        );

      case 'radio':
        return (
          <div className="space-y-3">
            {question.options?.map((option) => (
              <label key={option} className="flex items-start space-x-3 cursor-pointer">
                <input
                  type="radio"
                  name={question.id}
                  value={option}
                  checked={answer === option}
                  onChange={(e) => handleAnswer(e.target.value)}
                  className="mt-1 h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                />
                <span className="text-gray-700 leading-tight">{option}</span>
              </label>
            ))}
          </div>
        );

      case 'textarea':
        return (
          <div className="space-y-3">
            <textarea
              value={Array.isArray(answer) ? '' : answer}
              onChange={(e) => handleAnswer(e.target.value)}
              placeholder={question.placeholder}
              rows={4}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
            />
            {question.helpText && (
              <p className="text-gray-600 text-sm bg-blue-50 p-4 rounded-lg">💡 {question.helpText}</p>
            )}
          </div>
        );

      case 'multiselect':
        return (
          <div className="space-y-3">
            {question.options?.map((option) => {
              const currentAnswer = Array.isArray(answer) ? answer : [];
              const isChecked = currentAnswer.includes(option);
              
              return (
                <label key={option} className="flex items-start space-x-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={isChecked}
                    onChange={(e) => handleMultiSelectChange(option, e.target.checked)}
                    className="mt-1 h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                  />
                  <span className="text-gray-700 leading-tight">{option}</span>
                </label>
              );
            })}
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-white rounded-xl shadow-lg p-8">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">{question.question}</h2>
          {question.helpText && question.type !== 'textarea' && (
            <p className="text-gray-600 text-sm bg-blue-50 p-4 rounded-lg">💡 {question.helpText}</p>
          )}
        </div>

        <div className="mb-8">
          {renderInput()}
        </div>

        <div className="flex justify-between items-center">
          <div>
            {canGoBack && (
              <Button variant="outline" onClick={onPrevious} className="w-full sm:w-auto">
                Previous
              </Button>
            )}
          </div>
          
          <div className="flex items-center space-x-4">
            {question.required && !isValid && (
              <span className="text-red-500 text-sm">This field is required</span>
            )}
            <Button 
              onClick={onNext} 
              disabled={!isValid}
              className={`w-full sm:w-auto ${!isValid ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              {isLastQuestion ? 'Generate Plan' : 'Next'}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};