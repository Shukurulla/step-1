export const NavbarLogo = "../../public/Logo.png";
export const FooterLogo = "../../public/lightLogo.png";
export const days = [
  "воскресенье",
  "понедельник",
  "вторник",
  "среда",
  "четверг",
  "пятница",
  "суббота",
];

export const months = [
  "январь",
  "февраль",
  "март",
  "апрель",
  "май",
  "июнь",
  "июль",
  "август",
  "сентябрь",
  "октябрь",
  "ноябрь",
  "декабрь",
];

export const hours = [
  "07:00",
  "07:30",
  "08:00",
  "08:30",
  "09:00",
  "09:30",
  "10:00",
  "10:30",
  "11:00",
  "11:30",
  "12:00",
  "12:30",
  "14:00",
  "14:30",
  "15:00",
  "15:30",
  "16:00",
  "16:30",
  "17:30",
];

export const getNext7Days = (days) => {
  const result = [];

  for (let i = 0; i < 7; i++) {
    const date = new Date();
    date.setDate(date.getDate() + i);
    const dayOfWeek = days[date.getDay()];
    const day = date.getDate();
    const month = date.getMonth(); // Months are zero-based in JS
    result.push(`${day} ${months[month]}, ${dayOfWeek}`);
  }

  return result;
};
