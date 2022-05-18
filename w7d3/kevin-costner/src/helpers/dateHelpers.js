export const calculateDayDifference = (lastWatered) => {
  const todayDate = new Date();
  const lastWateredDate = new Date(lastWatered);

  const todayInMs = todayDate.getTime();
  const lastWateredInMs = lastWateredDate.getTime();

  const differenceInMs = todayInMs - lastWateredInMs;

  const differenceInDays = Math.floor(differenceInMs / 1000 / 86400);

  return differenceInDays;
};
