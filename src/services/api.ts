import { AxiosError } from 'axios';

export class ApiError extends Error {
  constructor(
    message: string,
    public statusCode?: number,
    public code?: string
  ) {
    super(message);
    this.name = 'ApiError';
  }
}

export function handleApiError(error: unknown): never {
  if (error instanceof AxiosError) {
    if (error.response?.status === 401) {
      throw new ApiError('Authentication failed. Please check your API key.', 401, 'AUTH_ERROR');
    }
    throw new ApiError(
      error.response?.data?.message || 'An error occurred while processing your request',
      error.response?.status
    );
  }
  
  throw new ApiError('An unexpected error occurred');
}