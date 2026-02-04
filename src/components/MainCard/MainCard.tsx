import modulStyles from "./MainCard.module.css";

interface MainCardProps {
  day: string;
  temperature: number;
  icon: string;
}

function MainCard({ day, temperature, icon }: MainCardProps) {
  return (
    <div className={modulStyles.mainCard}>
      <h3>Chemnnitz</h3>
      <h4>{day}</h4>
      <img src={icon} alt="weather image" width="128px" height="128px" />
      <p>Today is {temperature} °C</p>
      <p></p>
    </div>
  );
}
export default MainCard;
