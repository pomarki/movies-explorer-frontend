const timeConverter = (timeVolume) => {
  if (isNaN(timeVolume)) {
    return "";
  }

  let hours = Math.trunc(timeVolume / 60);
  let min = timeVolume % 60;
  return `${hours} ч ${min} м`;
};

/* const undefinedCheck = (value) => {

  if (typeof(value) === "undefined") {
    
  }
  
  return value;

} */


export { timeConverter };
