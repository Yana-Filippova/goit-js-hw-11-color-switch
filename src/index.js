import './styles.css';

const colors = ['#FFFFFF', '#2196F3', '#4CAF50', '#FF9800', '#009688', '#795548'];

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const refs = {
  startBtn: document.querySelector('[data-action="start"]'),
  stopBtn: document.querySelector('[data-action="stop"]'),
};

const colorSwitcher = {
  isActive: false,
  intervalId: null,
  intervalDelay: 1000,

  start() {
    if (this.isActive) {
      return;
    }

    this.isActive = true;
    this.intervalId = setInterval(() => {
      document.body.style.backgroundColor = colors[randomIntegerFromInterval(0, colors.length - 1)];
    }, this.intervalDelay);
  },

  stop() {
    clearInterval(this.intervalId);
    this.isActive = false;
    document.body.style.backgroundColor = colors[0];
  },
};

refs.startBtn.addEventListener('click', colorSwitcher.start.bind(colorSwitcher));
refs.stopBtn.addEventListener('click', colorSwitcher.stop.bind(colorSwitcher));
