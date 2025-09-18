export interface Question {
  id: string;
  square: number; // 0 = business context, 1-9 = marketing squares
  question: string;
  type: 'select' | 'radio' | 'textarea' | 'multiselect';
  options?: string[];
  placeholder?: string;
  helpText?: string;
  required: boolean;
}

export interface QuestionnaireResponse {
  questionId: string;
  answer: string | string[];
}

export interface UserData {
  id: string;
  responses: QuestionnaireResponse[];
  currentSquare: number;
  currentQuestionIndex: number;
  completedSquares: number[];
  createdAt: string;
  updatedAt: string;
}

export interface MarketingPlan {
  businessContext: {
    industry: string;
    businessModel: string;
    companySize: string;
    challenges: string[];
  };
  squares: {
    [key: number]: {
      title: string;
      summary: string;
      keyPoints: string[];
      recommendations: string[];
    };
  };
  generatedAt: string;
}

export interface MarketingSquare {
  id: number;
  title: string;
  description: string;
  icon: string;
}