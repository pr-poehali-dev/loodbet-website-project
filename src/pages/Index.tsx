import Header from "@/components/Header";
import EventCard from "@/components/EventCard";
import FeaturedSlider from "@/components/FeaturedSlider";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const sampleEvents = [
  {
    id: 1,
    sport: "Футбол",
    teams: { home: "Зенит", away: "Спартак" },
    league: "Российская Премьер-Лига",
    time: "Сегодня, 19:00",
    odds: { home: 1.95, draw: 3.45, away: 4.10 }
  },
  {
    id: 2,
    sport: "Футбол",
    teams: { home: "Реал Мадрид", away: "Барселона" },
    league: "Ла Лига",
    time: "Завтра, 22:00",
    odds: { home: 2.20, draw: 3.60, away: 3.10 }
  },
  {
    id: 3,
    sport: "Баскетбол",
    teams: { home: "ЦСКА", away: "Химки" },
    league: "Евролига",
    time: "Сегодня, 20:30",
    odds: { home: 1.55, away: 2.45 }
  }
];

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 pt-16">
        {/* Slider */}
        <section className="mb-8">
          <FeaturedSlider />
        </section>
        
        {/* Popular Events */}
        <section className="container px-4 py-8 md:px-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">Популярные события</h2>
            <Button variant="outline">Все события</Button>
          </div>
          
          <Tabs defaultValue="all" className="mb-6">
            <TabsList>
              <TabsTrigger value="all">Все</TabsTrigger>
              <TabsTrigger value="football">Футбол</TabsTrigger>
              <TabsTrigger value="basketball">Баскетбол</TabsTrigger>
              <TabsTrigger value="tennis">Теннис</TabsTrigger>
              <TabsTrigger value="hockey">Хоккей</TabsTrigger>
            </TabsList>
            <TabsContent value="all" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {sampleEvents.map((event) => (
                  <EventCard 
                    key={event.id}
                    sport={event.sport}
                    teams={event.teams}
                    league={event.league}
                    time={event.time}
                    odds={event.odds}
                  />
                ))}
              </div>
            </TabsContent>
            <TabsContent value="football" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {sampleEvents.filter(e => e.sport === "Футбол").map((event) => (
                  <EventCard 
                    key={event.id}
                    sport={event.sport}
                    teams={event.teams}
                    league={event.league}
                    time={event.time}
                    odds={event.odds}
                  />
                ))}
              </div>
            </TabsContent>
            {/* Другие табы будут иметь схожую структуру */}
          </Tabs>
        </section>
        
        {/* Promo Banner */}
        <section className="container px-4 py-8 md:px-6">
          <div className="bg-gradient-to-r from-primary/20 to-accent/10 rounded-lg p-6 md:p-8">
            <div className="max-w-md">
              <h2 className="text-2xl font-bold mb-2">Приветственный бонус</h2>
              <p className="text-foreground/80 mb-4">Зарегистрируйтесь сейчас и получите бонус до 10 000₽ на первый депозит!</p>
              <Button>Зарегистрироваться</Button>
            </div>
          </div>
        </section>
      </main>
      
      <footer className="bg-card py-8 mt-12">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-lg font-medium mb-4">О компании</h3>
              <ul className="space-y-2 text-sm text-foreground/70">
                <li>О нас</li>
                <li>Контакты</li>
                <li>Правила и условия</li>
                <li>Ответственная игра</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-4">Помощь</h3>
              <ul className="space-y-2 text-sm text-foreground/70">
                <li>FAQ</li>
                <li>Поддержка</li>
                <li>Платежи</li>
                <li>Безопасность</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-4">Продукты</h3>
              <ul className="space-y-2 text-sm text-foreground/70">
                <li>Спорт</li>
                <li>Live-ставки</li>
                <li>Казино</li>
                <li>Акции</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border pt-4 text-center text-sm text-foreground/60">
            <p>© 2025 LoodBet. Все права защищены. 18+</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;