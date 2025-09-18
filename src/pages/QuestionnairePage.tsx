import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { QuestionStep } from '../components/QuestionStep';
import { ProgressBar } from '../components/ProgressBar';
import { DarkModeToggle } from '../components/DarkModeToggle';
import { getAllQuestions } from '../data/questions';
import { marketingSquares } from '../data/marketingSquares';
import { UserData, QuestionnaireResponse, Question } from '../types';
import { loadUserData, createDefaultUserData, saveUserData, saveResponse } from '../utils/localStorage';
import { generateMarketingPlan } from '../utils/planGenerator';
import { savePlan } from '../utils/localStorage';
import { Target, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export const QuestionnairePage: React.FC = () => {
  const navigate = useNavigate();
  const [isCreatingNew, setIsCreatingNew] = useState(false);
  const [userData, setUserData] = useState<UserData | null>(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [allQuestions] = useState<Question[]>(getAllQuestions());
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if we're creating a new plan (from URL params or state)
    const urlParams = new URLSearchParams(window.location.search);
    const createNew = urlParams.get('new') === 'true';
    
    let existingUserData = loadUserData();
    
    // If creating new plan or no existing data, start fresh
    if (createNew || !existingUserData) {
      existingUserData = createDefaultUserData();
      saveUserData(existingUserData);
      setIsCreatingNew(true);
      // Clean up URL
      if (createNew) {
        window.history.replaceState({}, '', '/questionnaire');
      }
    }
    
    setUserData(existingUserData);
    setCurrentQuestionIndex(existingUserData.currentQuestionIndex || 0);
    setIsLoading(false);
  }, []);

  const handleAnswer = (response: QuestionnaireResponse) => {
    if (!userData) return;

    saveResponse(response);
    
    const updatedUserData = { ...userData };
    const existingIndex = updatedUserData.responses.findIndex(r => r.questionId === response.questionId);
    if (existingIndex >= 0) {
      updatedUserData.responses[existingIndex] = response;
    } else {
      updatedUserData.responses.push(response);
    }
    
    setUserData(updatedUserData);
  };

  const handleNext = () => {
    if (!userData) return;

    const nextIndex = currentQuestionIndex + 1;
    
    if (nextIndex >= allQuestions.length) {
      // Generate and save the plan
      const plan = generateMarketingPlan(userData.responses);
      savePlan(plan);
      
      // Mark questionnaire as completed
      const updatedUserData = {
        ...userData,
        currentQuestionIndex: nextIndex,
        completedSquares: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
        updatedAt: new Date().toISOString()
      };
      saveUserData(updatedUserData);
      
      navigate('/results');
    } else {
      const updatedUserData = {
        ...userData,
        currentQuestionIndex: nextIndex,
        currentSquare: allQuestions[nextIndex].square,
        updatedAt: new Date().toISOString()
      };
      
      saveUserData(updatedUserData);
      setUserData(updatedUserData);
      setCurrentQuestionIndex(nextIndex);
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      const prevIndex = currentQuestionIndex - 1;
      const updatedUserData = {
        ...userData!,
        currentQuestionIndex: prevIndex,
        currentSquare: allQuestions[prevIndex].square,
        updatedAt: new Date().toISOString()
      };
      
      saveUserData(updatedUserData);
      setUserData(updatedUserData);
      setCurrentQuestionIndex(prevIndex);
    }
  };

  const handleStartOver = () => {
    if (confirm('Are you sure you want to start over? This will clear all your current answers.')) {
      const newUserData = createDefaultUserData();
      saveUserData(newUserData);
      setUserData(newUserData);
      setCurrentQuestionIndex(0);
      setIsCreatingNew(true);
    }
  };

  const getSavedAnswer = (questionId: string): string | string[] | undefined => {
    return userData?.responses.find(r => r.questionId === questionId)?.answer;
  };

  const getCurrentSquareInfo = () => {
    const currentQuestion = allQuestions[currentQuestionIndex];
    if (!currentQuestion) return null;
    
    if (currentQuestion.square === 0) {
      return {
        title: 'Business Context',
        description: 'Tell us about your business to personalize your marketing plan'
      };
    }
    
    const square = marketingSquares.find(s => s.id === currentQuestion.square);
    return square ? {
      title: square.title,
      description: square.description
    } : null;
  };

  if (isLoading || !userData) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">Loading Your Questionnaire</h2>
          <p className="text-gray-600">Preparing your personalized marketing questions...</p>
        </div>
      </div>
    );
  }

  const currentQuestion = allQuestions[currentQuestionIndex];
  const squareInfo = getCurrentSquareInfo();

  if (!currentQuestion) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-600">Questionnaire completed!</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-18">
            <Link to="/" className="flex items-center hover:opacity-80 transition-opacity group">
              <ArrowLeft className="h-5 w-5 text-gray-600 mr-3 group-hover:text-blue-600 transition-colors" />
              <div>
                <img
                  src="/Beamx-Logo-Colour.png"
                  alt="BeamX Solutions Logo"
                  className="h-12 w-auto max-w-[200px] transition-transform duration-300 hover:scale-105"
                />
              </div>
            </Link>
            <div className="flex items-center space-x-4">
              <div className="text-sm text-gray-600 font-medium bg-gray-100 px-4 py-2 rounded-full">
                Question {currentQuestionIndex + 1} of {allQuestions.length}
              </div>
              <DarkModeToggle />
            </div>
          </div>
        </div>
      </nav>

      <ProgressBar 
        progress={currentQuestionIndex + 1} 
        total={allQuestions.length} 
        onStartOver={handleStartOver}
      />

      <div className="py-8">
        <QuestionStep
          question={currentQuestion}
          onAnswer={handleAnswer}
          onNext={handleNext}
          onPrevious={handlePrevious}
          canGoBack={currentQuestionIndex > 0}
          isLastQuestion={currentQuestionIndex === allQuestions.length - 1}
          savedAnswer={getSavedAnswer(currentQuestion.id)}
        />
      </div>
    </div>
  );
};