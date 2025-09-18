import { UserData, QuestionnaireResponse, MarketingPlan } from '../types';

const USER_DATA_KEY = 'marketingplan_user_data';
const PLAN_DATA_KEY = 'marketingplan_generated_plan';

export const saveUserData = (userData: UserData): void => {
  try {
    localStorage.setItem(USER_DATA_KEY, JSON.stringify(userData));
  } catch (error) {
    console.error('Error saving user data:', error);
  }
};

export const loadUserData = (): UserData | null => {
  try {
    const data = localStorage.getItem(USER_DATA_KEY);
    return data ? JSON.parse(data) : null;
  } catch (error) {
    console.error('Error loading user data:', error);
    return null;
  }
};

export const createDefaultUserData = (): UserData => {
  return {
    id: `user_${Date.now()}`,
    responses: [],
    currentSquare: 0,
    currentQuestionIndex: 0,
    completedSquares: [],
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  };
};

export const saveResponse = (response: QuestionnaireResponse): void => {
  const userData = loadUserData() || createDefaultUserData();
  
  // Update or add the response
  const existingIndex = userData.responses.findIndex(r => r.questionId === response.questionId);
  if (existingIndex >= 0) {
    userData.responses[existingIndex] = response;
  } else {
    userData.responses.push(response);
  }
  
  userData.updatedAt = new Date().toISOString();
  saveUserData(userData);
};

export const savePlan = (plan: MarketingPlan): void => {
  try {
    localStorage.setItem(PLAN_DATA_KEY, JSON.stringify(plan));
  } catch (error) {
    console.error('Error saving marketing plan:', error);
  }
};

export const loadPlan = (): MarketingPlan | null => {
  try {
    const data = localStorage.getItem(PLAN_DATA_KEY);
    return data ? JSON.parse(data) : null;
  } catch (error) {
    console.error('Error loading marketing plan:', error);
    return null;
  }
};

export const clearAllData = (): void => {
  try {
    localStorage.removeItem(USER_DATA_KEY);
    localStorage.removeItem(PLAN_DATA_KEY);
  } catch (error) {
    console.error('Error clearing data:', error);
  }
};