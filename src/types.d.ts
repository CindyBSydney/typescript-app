export type User = {
  id: number;
  name: string;
  email: string;
}

export type Theme = 'light' | 'dark'; 

export type ThemeContextType = {
  theme: Theme;
  toggleTheme: () => void;
}

export type ThemeProviderProps = {
  children: React.ReactNode;
}