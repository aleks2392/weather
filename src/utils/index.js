export const capitalize = (str) => {
  return str ? str.charAt(0).toUpperCase() + str.slice(1) : "";
};

const PRESSIRE_UNITS = 0.750062;

export const getPressireMm = (hpa) => {
  return Math.round(hpa * PRESSIRE_UNITS);
};

export const getTime = (seconds) => {
  return new Date(seconds * 1000).toLocaleTimeString("ru-RU", {
    timeZone: "Atlantic/Reykjavik",
  });
};
