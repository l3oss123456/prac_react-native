//initial Year
// const year = [''];
const year = [];
const d = new Date();
const y = d.getFullYear() + 543;
for (let i = y; i >= 2530; i--) {
  // year.push(i);
  year.push({
    label: `${i}`,
    value: `${i}`,
  });
}

//initial month
// const month = [''];
const month = [];
for (let i = 1; i <= 12; i++) {
  // month.push(i);
  month.push({
    label: `${i}`,
    value: `${i}`,
  });
}

//initial date
// const date = [''];
const date = [];
for (let i = 1; i <= 31; i++) {
  // date.push(i);
  date.push({
    label: `${i}`,
    value: `${i}`,
  });
}

export default {date, month, year};
