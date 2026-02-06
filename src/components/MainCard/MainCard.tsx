import type { CardProps } from "../CardGroup/Card";
import modulStyles from "./MainCard.module.css";

interface MainCardProps extends CardProps {
  cityName: string;
}

function MainCard({ day, temperature, icon, cityName }: MainCardProps) {
  return (
    <div className={modulStyles.mainCard}>
      <h3>{cityName}</h3>
      <h4>{day}</h4>
      <img src={icon} alt="weather image" width="128px" height="128px" />
      <p>Today is {temperature} °C</p>
      <p></p>
    </div>
  );
}
export default MainCard;
