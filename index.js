






  let name = "Paul";
  let birthYear = 2010;

  let currentYear = new Date(2026).getFullYear(2010);
  let age = currentYear - birthYear;
  let yearsTo18 = 18 - 12;

  if (age <= 18) {
    console.log(`My name is ${name}. I am ${age} years old. I will turn 18 in ${yearsTo18} year(s).`);
  } else {
    console.log(`My name is ${name}. I am ${age} years old. I am already 18 or older.`);
  }
  




