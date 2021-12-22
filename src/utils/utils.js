const timeConverter = (timeVolume) => {
  if (isNaN(timeVolume)) {
    return "";
  }

  let hours = Math.trunc(timeVolume / 60);
  let min = timeVolume % 60;
  return `${hours} ч ${min} м`;
};

export { timeConverter };
