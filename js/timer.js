const daysRef = document.querySelector('span[data-value="days"]');
const hoursRef = document.querySelector('span[data-value="hours"]');
const minutesRef = document.querySelector('span[data-value="mins"]');
const secondsRef = document.querySelector('span[data-value="secs"]');


function startTimer() {
  daysRef.textContent = `000`;
  hoursRef.textContent = `00`;
  minutesRef.textContent = `00`;
  secondsRef.textContent = `00`;
  
  const targetDate = new Date('May 17, 2021');
  console.log(targetDate);
  
  const intervalId = setInterval(() => {
    const currentTime = Date.now()
    const deltaTime = targetDate - currentTime;
  
    updateClockface(deltaTime);

  }, 1000)

  return intervalId
};

function updateClockface(time) {
  
  const days = pad2(Math.floor(time / (1000 * 60 * 60 * 24)));
  const hours = pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
  const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
  const secs = pad(Math.floor((time % (1000 * 60)) / 1000));

  daysRef.textContent = `${days}`;
  hoursRef.textContent = `${hours}`;
  minutesRef.textContent = `${mins}`;
  secondsRef.textContent = `${secs}`;
};

function pad(value) {
  return String(value).padStart(2, '0');
};

function pad2(value) {
  return String(value).padStart(2, '00');
};

startTimer();