import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import { Crown, Dices, Gamepad2, Joystick, Flame, Star } from "lucide-react";

const Casino = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Banner */}
      <div className="pt-16 bg-gradient-to-r from-purple-900/80 to-indigo-900/80">
        <div className="container px-4 py-16 md:py-24">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-white">
              Казино LoodBet
            </h1>
            <p className="mt-4 text-lg text-gray-200">
              Более 5000 игр от лучших провайдеров. Играйте в слоты, рулетку, блэкджек и многое другое!
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Играть сейчас
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Бонусы казино
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Casino Navigation */}
      <div className="border-b">
        <div className="container px-4">
          <Tabs defaultValue="popular" className="py-6">
            <TabsList className="grid grid-cols-3 md:grid-cols-6 gap-2">
              <TabsTrigger value="popular" className="flex gap-2 items-center">
                <Flame size={16} />
                <span>Популярные</span>
              </TabsTrigger>
              <TabsTrigger value="slots" className="flex gap-2 items-center">
                <Gamepad2 size={16} />
                <span>Слоты</span>
              </TabsTrigger>
              <TabsTrigger value="live" className="flex gap-2 items-center">
                <Crown size={16} />
                <span>Live Казино</span>
              </TabsTrigger>
              <TabsTrigger value="table" className="hidden md:flex gap-2 items-center">
                <Dices size={16} />
                <span>Настольные</span>
              </TabsTrigger>
              <TabsTrigger value="jackpot" className="hidden md:flex gap-2 items-center">
                <Star size={16} />
                <span>Джекпоты</span>
              </TabsTrigger>
              <TabsTrigger value="new" className="hidden md:flex gap-2 items-center">
                <Joystick size={16} />
                <span>Новинки</span>
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="popular" className="mt-6">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {casinoGames.slice(0, 10).map((game) => (
                  <CasinoGameCard key={game.id} game={game} />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="slots" className="mt-6">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {casinoGames.filter(game => game.type === 'slot').map((game) => (
                  <CasinoGameCard key={game.id} game={game} />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="live" className="mt-6">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {casinoGames.filter(game => game.type === 'live').map((game) => (
                  <CasinoGameCard key={game.id} game={game} />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="table" className="mt-6">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {casinoGames.filter(game => game.type === 'table').map((game) => (
                  <CasinoGameCard key={game.id} game={game} />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="jackpot" className="mt-6">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {casinoGames.filter(game => game.type === 'jackpot').map((game) => (
                  <CasinoGameCard key={game.id} game={game} />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="new" className="mt-6">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {casinoGames.filter(game => game.isNew).map((game) => (
                  <CasinoGameCard key={game.id} game={game} />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
      
      {/* Promotions Banner */}
      <div className="container px-4 py-10">
        <div className="relative overflow-hidden rounded-lg bg-gradient-to-r from-primary/80 to-indigo-600/80 p-8 shadow-md">
          <div className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-white max-w-md">
              <h2 className="text-2xl font-bold">Бонус на первый депозит</h2>
              <p className="mt-2">Получите 100% до 30,000₽ и 150 фриспинов в качестве приветственного бонуса</p>
            </div>
            <Button size="lg" className="bg-white text-primary hover:bg-white/90">
              Активировать бонус
            </Button>
          </div>
          <div className="absolute right-0 top-0 h-full w-1/3 bg-gradient-to-l from-transparent to-transparent" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1606167668584-78701c57f13d?q=80&w=2400&auto=format&fit=crop)', backgroundSize: 'cover', opacity: 0.2 }}></div>
        </div>
      </div>
      
      {/* Popular Providers */}
      <div className="container px-4 py-12">
        <h2 className="text-2xl font-bold mb-6">Популярные провайдеры</h2>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
          {providers.map((provider) => (
            <div key={provider.id} className="bg-muted/50 rounded-lg p-4 flex items-center justify-center hover:bg-muted transition-colors cursor-pointer">
              <span className="font-medium text-center">{provider.name}</span>
            </div>
          ))}
        </div>
      </div>
      
      {/* Footer */}
      <footer className="bg-muted/30 mt-12">
        <div className="container px-4 py-8">
          <div className="border-t pt-8 text-center text-sm text-muted-foreground">
            <p>© 2025 LoodBet Casino. Все права защищены.</p>
            <p className="mt-2">
              Играйте ответственно. Азартные игры предназначены для лиц старше 18 лет.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

// Casino Game Card Component
interface Game {
  id: number;
  name: string;
  provider: string;
  type: 'slot' | 'live' | 'table' | 'jackpot';
  image: string;
  isNew?: boolean;
  isHot?: boolean;
}

const CasinoGameCard = ({ game }: { game: Game }) => {
  return (
    <Card className="overflow-hidden hover:shadow-md transition-all group">
      <div className="relative">
        <img 
          src={game.image} 
          alt={game.name} 
          className="w-full aspect-[4/3] object-cover transition-transform group-hover:scale-105"
        />
        {game.isNew && (
          <div className="absolute top-2 left-2 bg-blue-500 text-white text-xs px-2 py-1 rounded-md">
            Новинка
          </div>
        )}
        {game.isHot && (
          <div className="absolute top-2 right-2 bg-orange-500 text-white text-xs px-2 py-1 rounded-md">
            Хит
          </div>
        )}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
          <Button className="bg-primary hover:bg-primary/90">Играть</Button>
        </div>
      </div>
      <CardContent className="p-3">
        <h3 className="font-medium text-sm truncate">{game.name}</h3>
        <p className="text-xs text-muted-foreground">{game.provider}</p>
      </CardContent>
    </Card>
  );
};

// Mock Data
const casinoGames: Game[] = [
  { id: 1, name: "Book of Dead", provider: "Play'n GO", type: "slot", image: "https://images.unsplash.com/photo-1596838132330-1d2099e58669?q=80&w=2400&auto=format&fit=crop", isHot: true },
  { id: 2, name: "Sweet Bonanza", provider: "Pragmatic Play", type: "slot", image: "https://images.unsplash.com/photo-1627748868900-83eb8c9ee77f?q=80&w=2400&auto=format&fit=crop", isHot: true },
  { id: 3, name: "Lightning Roulette", provider: "Evolution", type: "live", image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=2400&auto=format&fit=crop" },
  { id: 4, name: "Mega Moolah", provider: "Microgaming", type: "jackpot", image: "https://images.unsplash.com/photo-1612404730960-5c71577fca11?q=80&w=2400&auto=format&fit=crop" },
  { id: 5, name: "Blackjack VIP", provider: "Evolution", type: "live", image: "https://images.unsplash.com/photo-1601370552761-ebb25236542b?q=80&w=2400&auto=format&fit=crop" },
  { id: 6, name: "Gates of Olympus", provider: "Pragmatic Play", type: "slot", image: "https://images.unsplash.com/photo-1605870445919-838d99fa45e1?q=80&w=2400&auto=format&fit=crop", isNew: true },
  { id: 7, name: "European Roulette", provider: "NetEnt", type: "table", image: "https://images.unsplash.com/photo-1606674556490-0c84045ca9b2?q=80&w=2400&auto=format&fit=crop" },
  { id: 8, name: "Gonzo's Quest", provider: "NetEnt", type: "slot", image: "https://images.unsplash.com/photo-1596117807652-30a18a3c0ccd?q=80&w=2400&auto=format&fit=crop" },
  { id: 9, name: "Divine Fortune", provider: "NetEnt", type: "jackpot", image: "https://images.unsplash.com/photo-1605870385792-6db1b0261b45?q=80&w=2400&auto=format&fit=crop" },
  { id: 10, name: "Crazy Time", provider: "Evolution", type: "live", image: "https://images.unsplash.com/photo-1596731498067-83a996bf41be?q=80&w=2400&auto=format&fit=crop", isHot: true },
  { id: 11, name: "Starburst", provider: "NetEnt", type: "slot", image: "https://images.unsplash.com/photo-1518518721055-eae2fd516adb?q=80&w=2400&auto=format&fit=crop" },
  { id: 12, name: "Texas Hold'em", provider: "Evolution", type: "table", image: "https://images.unsplash.com/photo-1576767968324-aa9704d47582?q=80&w=2400&auto=format&fit=crop" },
  { id: 13, name: "Buffalo King", provider: "Pragmatic Play", type: "slot", image: "https://images.unsplash.com/photo-1517232115160-ff93364542dd?q=80&w=2400&auto=format&fit=crop", isNew: true },
  { id: 14, name: "Mega Fortune", provider: "NetEnt", type: "jackpot", image: "https://images.unsplash.com/photo-1596003903067-3ce98cd3876e?q=80&w=2400&auto=format&fit=crop" },
  { id: 15, name: "Immersive Roulette", provider: "Evolution", type: "live", image: "https://images.unsplash.com/photo-1613732318435-a6394d7333a0?q=80&w=2400&auto=format&fit=crop" },
];

const providers = [
  { id: 1, name: "Evolution" },
  { id: 2, name: "NetEnt" },
  { id: 3, name: "Pragmatic Play" },
  { id: 4, name: "Play'n GO" },
  { id: 5, name: "Microgaming" },
  { id: 6, name: "Playtech" }
];

export default Casino;