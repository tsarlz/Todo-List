export interface AuthResponse {
  user: {
    first_name: string;
    last_name: string;
    email: string;
    password: string;
    updated_at: string;
    created_at: string;
    id: number;
  };
  token: string;
}
