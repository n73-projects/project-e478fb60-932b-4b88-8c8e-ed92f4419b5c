import { Button } from "./components/ui/button";
import { useTheme } from "./components/theme-provider";

function App() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div className="min-h-screen bg-background text-foreground flex items-center justify-center p-8">
      <div className="text-center space-y-8">
        <div className="space-y-4">
          <h1 className="text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Hello World
          </h1>
          <p className="text-xl text-muted-foreground max-w-md mx-auto">
            Welcome to your React app with TypeScript, Tailwind CSS, and dark mode support!
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            onClick={toggleTheme}
            variant="outline"
            className="min-w-[140px]"
          >
            {theme === "dark" ? "🌞 Light Mode" : "🌙 Dark Mode"}
          </Button>
          
          <Button 
            variant="default"
            className="min-w-[140px]"
          >
            Get Started
          </Button>
        </div>

        <div className="text-sm text-muted-foreground">
          Current theme: <span className="font-semibold capitalize">{theme}</span>
        </div>
      </div>
    </div>
  );
}

export default App;
