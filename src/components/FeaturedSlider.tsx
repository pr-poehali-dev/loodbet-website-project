import { Button } from "@/components/ui/button";

interface FeaturedSlide {
  id: number;
  title: string;
  subtitle: string;
  image: string;
  action: string;
}

const featuredSlides: FeaturedSlide[] = [
  {
    id: 1,
    title: "Бонус за первый депозит",
    subtitle: "Получите до 10 000₽ на первый депозит",
    image: "https://images.unsplash.com/photo-1610216705422-caa3fcb6d158?q=80&w=1200&auto=format&fit=crop",
    action: "Получить бонус"
  },
  {
    id: 2,
    title: "Лига Чемпионов",
    subtitle: "Повышенные коэффициенты на матчи этой недели",
    image: "https://images.unsplash.com/photo-1543326727-cf6c39e8f84c?q=80&w=1200&auto=format&fit=crop",
    action: "Ставить сейчас"
  },
  {
    id: 3,
    title: "Киберспорт CS 2",
    subtitle: "Эксклюзивные ставки на турниры",
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1200&auto=format&fit=crop",
    action: "Подробнее"
  },
];

const FeaturedSlider = () => {
  return (
    <div className="relative overflow-hidden rounded-lg">
      <div className="flex overflow-x-hidden">
        {featuredSlides.map((slide) => (
          <div key={slide.id} className="min-w-full h-[400px] relative">
            <div 
              className="absolute inset-0 bg-cover bg-center" 
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-background/90 to-background/30" />
            </div>
            <div className="relative h-full flex flex-col justify-center px-6 md:px-12 max-w-md">
              <h2 className="text-2xl md:text-4xl font-bold mb-2">{slide.title}</h2>
              <p className="text-lg text-foreground/80 mb-6">{slide.subtitle}</p>
              <div>
                <Button size="lg">{slide.action}</Button>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
        {featuredSlides.map((slide, index) => (
          <button 
            key={slide.id}
            className={`w-2 h-2 rounded-full ${index === 0 ? 'bg-primary' : 'bg-foreground/30'}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default FeaturedSlider;