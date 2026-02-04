export function getUserPosition() {
  if (!navigator.geolocation) {
    console.log("Geolocation dont supported");
    return;
  }

  navigator.geolocation.getCurrentPosition(
    (position) => {
      console.log(position.coords.latitude);
      console.log(position.coords.longitude);
    },
    (error) => {
      console.warn(error.message);
    },
  );
}
