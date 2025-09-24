export interface User {
  uid: string;
  email: string;
  displayName?: string;
  emailVerified: boolean;
}

export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
  isInitialized: boolean;
}

export interface RegisterData {
  displayName: string;
  email: string;
  password: string;
}

export interface LoginData {
  email: string;
  password: string;
}
