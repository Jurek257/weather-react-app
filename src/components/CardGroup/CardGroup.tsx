import Card from "./Card";
import moduleStyles from "./CardGroup.module.css";
import type { CardProps } from "./Card";

interface CardGroupProps {
  forecastDailyList: CardProps[];
}

function CardGroup({ forecastDailyList }: CardGroupProps) {
  return (
    <div className={moduleStyles.cardGroup}>
      {forecastDailyList.map((forecastDay, index) => (
        <Card
          key={index}
          day={forecastDay.day}
          temperature={forecastDay.temperature}
          icon={forecastDay.icon}
        ></Card>
      ))}
    </div>
  );
}
export default CardGroup;
