const timeConverter = (timeVolume) => {
  if (isNaN(timeVolume)) {
    return "";
  }

  let hours = Math.trunc(timeVolume / 60);
  let min = timeVolume % 60;
  return `${hours} ч ${min} м`;
};

const filterByDuration = (arr, value) => {
  return arr = arr.filter((movie) => movie.duration <= value)
}

const messageTimer = (message, messageSetter) => {
  messageSetter(message);
  setTimeout(() => messageSetter(""), 5000);
}

export { timeConverter, filterByDuration, messageTimer };

