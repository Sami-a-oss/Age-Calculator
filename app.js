const input = document.querySelector('#inputBox');

const button = document.querySelector('#calBtn');

const output = document.querySelector('#output');

button.addEventListener("click", () => {
  const value = input.value;
  const[year, month, day] = value.split("-").map(Number);
  const birthday = new Date(year, month - 1, day);
  const today = new Date();

  let ageYear = today.getFullYear() - birthday.getFullYear();
  let ageMonth = today.getMonth() - birthday.getMonth();
  let ageDate = today.getDate() - birthday.getDate();

  if (ageDate < 0) {
    ageMonth--;
    const prevMonth = new Date(today.getFullYear(), today.getMonth(), 0);
    ageDate += prevMonth.getDate();
  }
  if (ageMonth < 0) {
    ageYear--;
    ageMonth += 12;
  }
  output.innerText = `You are ${ageYear} years ${ageMonth} Months and ${ageDate} days years old`;
});
