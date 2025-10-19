export interface IErrorResponse {
  message: string
}

export type Status = 'idle' | 'error' | 'loading' | 'success' | null
