import { Button } from "@/components/ui/button";
import { 
  Card, 
  CardContent, 
  CardFooter, Comde
} from "@/components/ui/card";

interface EventCardProps {
  sport: string;
  teams: {
    home: string;
    away: string;
  };
  league: string;
  time: string;
  odds: {
    home: number;
    draw?: number;
    away: number;
  };
}

const EventCard = ({ sport, teams, league, time, odds }: EventCardProps) => {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-md">
      <CardContent className="p-4">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            <span className="text-sm text-primary">{sport}</span>
            <span className="text-xs text-muted-foreground">{league}</span>
          </div>
          <span className="text-xs text-muted-foreground">{time}</span>
        </div>
        <div className="space-y-1 mb-4">
          <p className="font-medium">{teams.home}</p>
          <p className="font-medium">{teams.away}</p>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0 grid grid-cols-3 gap-2">
        <Button variant="outline" className="w-full justify-between">
          <span>П1</span>
          <span className="font-bold text-primary">{odds.home.toFixed(2)}</span>
        </Button>
        {odds.draw !== undefined && (
          <Button variant="outline" className="w-full justify-between">
            <span>X</span>
            <span className="font-bold text-primary">{odds.draw.toFixed(2)}</span>
          </Button>
        )}
        <Button variant="outline" className="w-full justify-between">
          <span>П2</span>
          <span className="font-bold text-primary">{odds.away.toFixed(2)}</span>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default EventCard;