import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { MarketingPlan } from '../types';
import { loadPlan } from '../utils/localStorage';
import { Button } from '../components/Button';
import { DarkModeToggle } from '../components/DarkModeToggle';
import { marketingSquares } from '../data/marketingSquares';
import { Target, Download, Share, ArrowLeft, CheckCircle, Users, MessageSquare, Radio, Magnet, Heart, Handshake, Star, TrendingUp, Share2 } from 'lucide-react';

const iconMap: { [key: string]: React.ComponentType<{ className?: string }> } = {
  users: Users,
  'message-circle': MessageSquare,
  radio: Radio,
  magnet: Magnet,
  'heart-handshake': Heart,
  handshake: Handshake,
  star: Star,
  'trending-up': TrendingUp,
  'share-2': Share2
};

export const PlanResultsPage: React.FC = () => {
  const navigate = useNavigate();
  const [plan, setPlan] = useState<MarketingPlan | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadedPlan = loadPlan();
    if (!loadedPlan) {
      // If no plan is found, redirect to questionnaire
      navigate('/questionnaire');
      return;
    }
    setPlan(loadedPlan);
    setIsLoading(false);
  }, [navigate]);

  const handleDownload = () => {
    // In a real app, this would generate and download a PDF
    alert('Download functionality would be implemented here. This would generate a PDF of your marketing plan.');
  };

  const handleShare = () => {
    // In a real app, this would share the plan
    if (navigator.share) {
      navigator.share({
        title: 'My Marketing Plan',
        text: 'Check out my personalized marketing plan created with MarketingPlan.ai',
        url: window.location.href
      });
    } else {
      // Fallback for browsers that don't support Web Share API
      navigator.clipboard.writeText(window.location.href);
      alert('Link copied to clipboard!');
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading your marketing plan...</p>
        </div>
      </div>
    );
  }

  if (!plan) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-600 mb-4">No marketing plan found.</p>
          <Link to="/questionnaire">
            <Button>Create Your Marketing Plan</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-secondary-50 dark:from-neutral-900 dark:via-neutral-800 dark:to-neutral-900">
      {/* Navigation */}
      <nav className="bg-white/90 dark:bg-neutral-900/90 backdrop-blur-md shadow-soft sticky top-0 z-50 border-b border-neutral-200/50 dark:border-neutral-700/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-18">
            <Link to="/" className="flex items-center hover:opacity-80 transition-opacity group">
              <div className="p-2 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-xl mr-3">
                <Target className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-bold gradient-text">
                MarketingPlan.ai
              </span>
            </Link>
            <div className="flex items-center space-x-4">
              <Button variant="outline" onClick={handleDownload} className="shadow-soft hover:shadow-medium">
                <Download className="h-4 w-4 mr-2" />
                Download
              </Button>
              <Button variant="ghost" onClick={handleShare} className="shadow-soft hover:shadow-medium">
                <Share className="h-4 w-4 mr-2" />
                Share
              </Button>
              <DarkModeToggle />
            </div>
          </div>
        </div>
      </nav>

      {/* Success Header */}
      <div className="bg-gradient-to-r from-green-500 to-blue-600 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <CheckCircle className="h-16 w-16 text-white mx-auto mb-4" />
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Your Marketing Plan is Ready!
          </h1>
          <p className="text-blue-100 text-lg max-w-2xl mx-auto">
            Here's your comprehensive, personalized marketing strategy based on the 9-square framework.
          </p>
        </div>
      </div>

      {/* Business Context Summary */}
      <div className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Business Overview</h2>
          <div className="bg-gray-50 rounded-xl p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-gray-700 mb-2">Industry</h3>
                <p className="text-gray-900">{plan.businessContext.industry}</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-700 mb-2">Business Model</h3>
                <p className="text-gray-900">{plan.businessContext.businessModel}</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-700 mb-2">Company Size</h3>
                <p className="text-gray-900">{plan.businessContext.companySize}</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-700 mb-2">Primary Challenges</h3>
                <p className="text-gray-900">
                  {Array.isArray(plan.businessContext.challenges) 
                    ? plan.businessContext.challenges.slice(0, 3).join(', ')
                    : plan.businessContext.challenges
                  }
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Marketing Squares */}
      <div className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Your 9-Square Marketing Strategy</h2>
          
          <div className="space-y-8">
            {marketingSquares.map((square) => {
              const squareData = plan.squares[square.id];
              const IconComponent = iconMap[square.icon] || Target;
              
              if (!squareData) return null;
              
              return (
                <div key={square.id} className="bg-white rounded-xl shadow-lg overflow-hidden">
                  <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6">
                    <div className="flex items-center">
                      <div className="bg-white/20 rounded-lg p-3 mr-4">
                        <IconComponent className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white">{squareData.title}</h3>
                        <p className="text-blue-100">{squareData.summary}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-3">Key Insights</h4>
                        <ul className="space-y-2">
                          {squareData.keyPoints.map((point: string, index: number) => (
                            <li key={index} className="flex items-start">
                              <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-700">{point}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-3">Recommendations</h4>
                        <ul className="space-y-2">
                          {squareData.recommendations.map((rec: string, index: number) => (
                            <li key={index} className="flex items-start">
                              <ArrowLeft className="h-5 w-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0 rotate-180" />
                              <span className="text-gray-700">{rec}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Action Section */}
      <div className="py-12 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Ready to Implement Your Strategy?</h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Your personalized marketing plan is complete. Now it's time to put these strategies into action and watch your business grow.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={handleDownload}
              className="bg-white text-blue-600 hover:bg-gray-50"
            >
              <Download className="h-4 w-4 mr-2" />
              Download Your Plan
            </Button>
            
            <Link to="/questionnaire">
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
                Update Your Plan
              </Button>
            </Link>
            
            <Link to="/questionnaire?new=true">
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
                Create New Plan
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center mb-4">
            <Target className="h-6 w-6 text-blue-400 mr-2" />
            <span className="text-xl font-bold text-white">MarketingPlan.ai</span>
          </div>
          <p className="text-gray-400 text-sm">
            Plan generated on {new Date(plan.generatedAt).toLocaleDateString()}
          </p>
        </div>
      </footer>
    </div>
  );
};