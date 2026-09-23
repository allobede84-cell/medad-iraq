export type ApiSuccess<T> = {
  success: true;
  data: T;
  message: string;
};

export type ApiError = {
  success: false;
  message: string;
  errorCode: string;
};

export function successResponse<T>(data: T, message: string): ApiSuccess<T> {
  return { success: true, data, message };
}

export function errorResponse(message: string, errorCode: string): ApiError {
  return { success: false, message, errorCode };
}
