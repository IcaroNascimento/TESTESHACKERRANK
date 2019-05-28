function timeConversion(inputTime) {
  const postMorning = inputTime.endsWith('PM');

  const numeralTime = inputTime.slice(0, 8);
  const splittedTime = numeralTime.slice(0, 2);
  const minutesAndSeconds = numeralTime.slice(2);
  let hours = Number(splittedTime);

  if (postMorning && hours < 12)
    hours += 12;
  else if (!postMorning && hours === 12)
    hours = 0;

  return `${String(hours).padStart(2, '0')}${minutesAndSeconds}`;
}

module.exports = timeConversion