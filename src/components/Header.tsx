import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="fixed top-0 w-full bg-background border-b border-border z-50">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <div className="flex items-center gap-4">
          <Link to="/" className="flex items-center gap-2">
            <img 
              src="https://cdn.poehali.dev/files/62f4cd6f-5039-4f5e-b73c-adf114cb3457.jpg" 
              alt="LoodBet Logo" 
              className="h-10 w-auto" 
            />
            <span className="font-bold text-xl text-primary">LoodBet</span>
          </Link>
        </div>
        <nav className="hidden md:flex items-center gap-6">
          <Link 
            to="/sports" 
            className="text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
          >
            Спорт
          </Link>
          <Link 
            to="/live" 
            className="text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
          >
            Live
          </Link>
          <Link 
            to="/esports" 
            className="text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
          >
            Киберспорт
          </Link>
          <Link 
            to="/casino" 
            className="text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
          >
            Казино
          </Link>
          <Link 
            to="/promotions" 
            className="text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
          >
            Акции
          </Link>
        </nav>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" className="hidden md:flex">
            Войти
          </Button>
          <Button size="sm">Регистрация</Button>
        </div>
      </div>
    </header>
  );
};

export default Header;