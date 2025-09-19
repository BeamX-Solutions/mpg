import { apiConfig, endpoints } from '../config/api';
import { QuestionnaireResponse, MarketingPlan } from '../types';

interface ApiResponse<T> {
  data?: T;
  error?: string;
  status: number;
}

interface GeneratePlanResponse {
  plan: MarketingPlan;
  planId: string;
}

class ApiService {
  private async request<T>(
    endpoint: string,
    options: RequestInit = {}
  ): Promise<ApiResponse<T>> {
    try {
      const url = `${apiConfig.baseURL}${endpoint}`;
      
      const response = await fetch(url, {
        ...options,
        headers: {
          ...apiConfig.headers,
          ...options.headers,
        },
        signal: AbortSignal.timeout(apiConfig.timeout),
      });

      const data = await response.json();

      if (!response.ok) {
        return {
          error: data.detail || `HTTP ${response.status}: ${response.statusText}`,
          status: response.status,
        };
      }

      return {
        data,
        status: response.status,
      };
    } catch (error) {
      console.error('API Request failed:', error);
      
      if (error instanceof Error) {
        if (error.name === 'TimeoutError') {
          return {
            error: 'Request timeout - please try again',
            status: 408,
          };
        }
        if (error.message.includes('fetch')) {
          return {
            error: 'Unable to connect to server',
            status: 0,
          };
        }
      }

      return {
        error: 'An unexpected error occurred',
        status: 500,
      };
    }
  }

  async healthCheck(): Promise<boolean> {
    try {
      const response = await this.request(endpoints.health);
      return response.status === 200;
    } catch {
      return false;
    }
  }

  async generatePlan(responses: QuestionnaireResponse[]): Promise<GeneratePlanResponse> {
    const response = await this.request<GeneratePlanResponse>(
      endpoints.generatePlan,
      {
        method: 'POST',
        body: JSON.stringify({ responses }),
      }
    );

    if (response.error) {
      throw new Error(response.error);
    }

    return response.data!;
  }

  async savePlan(plan: MarketingPlan): Promise<{ planId: string }> {
    const response = await this.request<{ planId: string }>(
      endpoints.plans,
      {
        method: 'POST',
        body: JSON.stringify(plan),
      }
    );

    if (response.error) {
      throw new Error(response.error);
    }

    return response.data!;
  }

  async getPlans(): Promise<MarketingPlan[]> {
    const response = await this.request<MarketingPlan[]>(endpoints.plans);

    if (response.error) {
      throw new Error(response.error);
    }

    return response.data!;
  }

  async getPlan(planId: string): Promise<MarketingPlan> {
    const response = await this.request<MarketingPlan>(`${endpoints.plans}/${planId}`);

    if (response.error) {
      throw new Error(response.error);
    }

    return response.data!;
  }

  async deletePlan(planId: string): Promise<void> {
    const response = await this.request(`${endpoints.plans}/${planId}`, {
      method: 'DELETE',
    });

    if (response.error) {
      throw new Error(response.error);
    }
  }
}

export const apiService = new ApiService();