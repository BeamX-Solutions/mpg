import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/Button';
import { DarkModeToggle } from '../components/DarkModeToggle';
import { Target, ArrowRight, FileText, Clock, Users } from 'lucide-react';

export const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-neutral-900">
      {/* Navigation */}
      <nav className="border-b border-neutral-200 dark:border-neutral-800">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <div>
                <img
                  src="/Beamx-Logo-Colour.png"
                  alt="BeamX Solutions Logo"
                  className="h-12 w-auto max-w-[200px] transition-transform duration-300 hover:scale-105"
                  />
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <DarkModeToggle />
              <Link to="/questionnaire">
                <Button>Create Plan</Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-neutral-100 mb-6 leading-tight">
            Build a marketing plan for your business
          </h1>
          <p className="text-xl text-neutral-600 dark:text-neutral-400 mb-8 leading-relaxed">
            Answer questions about your business and get a structured marketing plan with specific recommendations for each area of your strategy.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/questionnaire?new=true">
              <Button size="lg" className="flex items-center">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <div className="flex items-center text-neutral-500 dark:text-neutral-400">
              <Clock className="h-4 w-4 mr-2" />
              <span>15-20 minutes</span>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-neutral-50 dark:bg-neutral-800/50">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <h2 className="text-2xl font-semibold text-neutral-900 dark:text-neutral-100 mb-12">
            How it works
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="font-semibold text-neutral-900 dark:text-neutral-100 mb-2">
                Answer questions
              </h3>
              <p className="text-neutral-600 dark:text-neutral-400">
                Tell us about your business, target customers, and current marketing efforts.
              </p>
            </div>
            <div>
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mb-4">
                <Target className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="font-semibold text-neutral-900 dark:text-neutral-100 mb-2">
                Get analysis
              </h3>
              <p className="text-neutral-600 dark:text-neutral-400">
                We analyze your responses and identify opportunities and recommendations.
              </p>
            </div>
            <div>
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mb-4">
                <FileText className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="font-semibold text-neutral-900 dark:text-neutral-100 mb-2">
                Receive your plan
              </h3>
              <p className="text-neutral-600 dark:text-neutral-400">
                Get a structured marketing plan with actionable next steps for your business.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What's included */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-2xl font-semibold text-neutral-900 dark:text-neutral-100 mb-6">
              What's included in your plan
            </h2>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <div>
                  <p className="font-medium text-neutral-900 dark:text-neutral-100">Target Market Analysis</p>
                  <p className="text-neutral-600 dark:text-neutral-400 text-sm">Identify and understand your ideal customers</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <div>
                  <p className="font-medium text-neutral-900 dark:text-neutral-100">Messaging Strategy</p>
                  <p className="text-neutral-600 dark:text-neutral-400 text-sm">Craft compelling messages that resonate</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <div>
                  <p className="font-medium text-neutral-900 dark:text-neutral-100">Channel Recommendations</p>
                  <p className="text-neutral-600 dark:text-neutral-400 text-sm">Find the best places to reach your audience</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <div>
                  <p className="font-medium text-neutral-900 dark:text-neutral-100">Content Strategy</p>
                  <p className="text-neutral-600 dark:text-neutral-400 text-sm">Plan what content to create and when</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <div>
                  <p className="font-medium text-neutral-900 dark:text-neutral-100">Implementation Roadmap</p>
                  <p className="text-neutral-600 dark:text-neutral-400 text-sm">Step-by-step guide to execute your plan</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-neutral-100 dark:bg-neutral-800 rounded-lg p-8">
            <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100 mb-4">
              Ready to start?
            </h3>
            <p className="text-neutral-600 dark:text-neutral-400 mb-6">
              Create a marketing plan tailored to your specific business needs and goals.
            </p>
            <Link to="/questionnaire?new=true">
              <Button className="w-full">Create Your Marketing Plan</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-neutral-200 dark:border-neutral-800 mt-16">
        <div className="max-w-6xl mx-auto px-6 py-8">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <img
                src="/Beamx-Logo-Colour.png"
                alt="BeamX Solutions Logo"
                className="h-12 w-auto max-w-[200px] transition-transform duration-300 hover:scale-105"
              />
            </div>
            <p className="text-neutral-500 dark:text-neutral-400">
              ©2025 BeamX Solutions. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};