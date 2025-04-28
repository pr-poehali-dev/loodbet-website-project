import Header from "@/components/Header";
import EventCard from "@/components/EventCard";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Clock, Activity } from "lucide-react";

const liveEvents = [
  {
    id: 101,
    sport: "Футбол",
    teams: { home: "Бавария", away: "ПСЖ" },
    league: "Лига Чемпионов",
    time: "63'",
    score: { home: 2, away: 1 },
    odds: { home: 1.65, draw: 3.85, away: 5.50 }
  },
  {
    id: 102,
    sport: "Теннис",
    teams: { home: "Медведев", away: "Джокович" },
    league: "Ролан Гаррос",
    time: "2-й сет",
    score: { home: 1, away: 0, current: "30-15" },
    odds: { home: 2.10, away: 1.70 }
  },
  {
    id: 103,
    sport: "Баскетбол",
    teams: { home: "Лейкерс", away: "Майами" },
    league: "НБА",
    time: "3-я четверть",
    score: { home: 67, away: 72 },
    odds: { home: 2.25, away: 1.60 }
  }
];

const Live = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 pt-16">
        {/* Live Banner */}
        <section className="bg-gradient-to-r from-primary/30 to-accent/20 py-8">
          <div className="container px-4 md:px-6">
            <div className="flex items-center gap-2 mb-2">
              <Activity className="h-5 w-5 text-red-500 animate-pulse" />
              <Badge variant="outline" className="bg-red-500/10 text-red-500 border-red-500/30">LIVE</Badge>
            </div>
            <h1 className="text-3xl font-bold mb-2">Live-ставки</h1>
            <p className="text-foreground/80 max-w-xl">События в реальном времени с обновлением коэффициентов и статистики каждую минуту</p>
          </div>
        </section>
        
        {/* Live Events */}
        <section className="container px-4 py-8 md:px-6">
          <Tabs defaultValue="all" className="mb-6">
            <div className="flex items-center justify-between mb-4">
              <TabsList>
                <TabsTrigger value="all">Все</TabsTrigger>
                <TabsTrigger value="football">Футбол</TabsTrigger>
                <TabsTrigger value="tennis">Теннис</TabsTrigger>
                <TabsTrigger value="basketball">Баскетбол</TabsTrigger>
                <TabsTrigger value="hockey">Хоккей</TabsTrigger>
              </TabsList>
              <div className="flex items-center text-sm text-foreground/70">
                <Clock className="h-4 w-4 mr-1" />
                <span>Обновлено только что</span>
              </div>
            </div>
            
            <TabsContent value="all" className="mt-4">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {liveEvents.map((event) => (
                  <div key={event.id} className="bg-card rounded-lg border border-border overflow-hidden hover:border-primary/50 transition-colors">
                    <div className="bg-accent/10 px-4 py-2 flex justify-between items-center">
                      <div className="flex items-center gap-2">
                        <Badge variant="outline" className="bg-red-500/10 text-red-500 border-red-500/30">LIVE</Badge>
                        <span className="text-sm font-medium">{event.league}</span>
                      </div>
                      <span className="text-sm font-bold text-red-500">{event.time}</span>
                    </div>
                    
                    <div className="px-4 py-3">
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-medium">{event.teams.home}</span>
                        <span className="font-bold">{event.score && event.score.home}</span>
                      </div>
                      <div className="flex justify-between items-center mb-4">
                        <span className="font-medium">{event.teams.away}</span>
                        <span className="font-bold">{event.score && event.score.away}</span>
                      </div>
                      
                      {event.score && event.score.current && (
                        <div className="flex justify-center mb-3">
                          <Badge variant="secondary">{event.score.current}</Badge>
                        </div>
                      )}
                      
                      <div className="grid grid-cols-3 gap-2">
                        {'draw' in event.odds ? (
                          <>
                            <Button variant="outline" size="sm" className="font-medium">
                              П1 <span className="ml-1 text-primary">{event.odds.home}</span>
                            </Button>
                            <Button variant="outline" size="sm" className="font-medium">
                              X <span className="ml-1 text-primary">{event.odds.draw}</span>
                            </Button>
                            <Button variant="outline" size="sm" className="font-medium">
                              П2 <span className="ml-1 text-primary">{event.odds.away}</span>
                            </Button>
                          </>
                        ) : (
                          <>
                            <Button variant="outline" size="sm" className="font-medium">
                              П1 <span className="ml-1 text-primary">{event.odds.home}</span>
                            </Button>
                            <Button variant="outline" size="sm" className="font-medium col-span-2">
                              П2 <span className="ml-1 text-primary">{event.odds.away}</span>
                            </Button>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="football" className="mt-4">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {liveEvents.filter(e => e.sport === "Футбол").map((event) => (
                  <div key={event.id} className="bg-card rounded-lg border border-border overflow-hidden hover:border-primary/50 transition-colors">
                    {/* Аналогичное содержимое как в табе all */}
                    <div className="bg-accent/10 px-4 py-2 flex justify-between items-center">
                      <div className="flex items-center gap-2">
                        <Badge variant="outline" className="bg-red-500/10 text-red-500 border-red-500/30">LIVE</Badge>
                        <span className="text-sm font-medium">{event.league}</span>
                      </div>
                      <span className="text-sm font-bold text-red-500">{event.time}</span>
                    </div>
                    
                    <div className="px-4 py-3">
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-medium">{event.teams.home}</span>
                        <span className="font-bold">{event.score && event.score.home}</span>
                      </div>
                      <div className="flex justify-between items-center mb-4">
                        <span className="font-medium">{event.teams.away}</span>
                        <span className="font-bold">{event.score && event.score.away}</span>
                      </div>
                      
                      <div className="grid grid-cols-3 gap-2">
                        <Button variant="outline" size="sm" className="font-medium">
                          П1 <span className="ml-1 text-primary">{event.odds.home}</span>
                        </Button>
                        <Button variant="outline" size="sm" className="font-medium">
                          X <span className="ml-1 text-primary">{event.odds.draw}</span>
                        </Button>
                        <Button variant="outline" size="sm" className="font-medium">
                          П2 <span className="ml-1 text-primary">{event.odds.away}</span>
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
            
            {/* Остальные табы имеют аналогичную структуру */}
          </Tabs>
          
          <div className="flex justify-center mt-8">
            <Button>Показать больше событий</Button>
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

export default Live;