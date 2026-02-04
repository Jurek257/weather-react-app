import modulStyles from "./CardGroup.module.css";

export interface CardProps {
  day: string;
  temperature: number;
  icon: string;
}

function Card({ day, temperature, icon }: CardProps) {
  return (
    <div className={modulStyles.card}>
      <h4>{day}</h4>
      <img src={icon} alt="weather image" width="64px" height="64px" />
      <p>{temperature}°C</p>
      <p></p>
    </div>
  );
}
export default Card;
