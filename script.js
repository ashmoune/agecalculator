// éléments du DOM
const dayInput = document.getElementById("Day");
const monthInput = document.getElementById("month");
const yearInput = document.getElementById("year");
const ageYearLabel = document.getElementById("yearvalue");
const ageMonthLabel = document.getElementById("monthvalue");
const ageDayLabel = document.getElementById("dayvalue");
const form = document.querySelector("form");

// Fonction pour calculer l'âge
function calculateAge(event) {
  event.preventDefault();

  //  date de naissance à partir des entrées de l'utilisateur
  const birthDay = parseInt(dayInput.value);
  const birthMonth = parseInt(monthInput.value);
  const birthYear = parseInt(yearInput.value);

  // Obtenez la date actuelle
  const currentDate = new Date();

  // Vérifie si les entrées de l'utilisateur sont valides
  if (
    isNaN(birthDay) ||
    isNaN(birthMonth) ||
    isNaN(birthYear) ||
    birthDay < 1 ||
    birthDay > 31 ||
    birthMonth < 1 ||
    birthMonth > 12 ||
    birthYear < 1 ||
    birthYear > currentDate.getFullYear()
  ) {
    alert("Veuillez entrer une date de naissance valide.");
    return;
  }

  // Calcul de l'âge
  const ageInMilliseconds = currentDate - new Date(birthYear, birthMonth - 1, birthDay);
  const ageInSeconds = ageInMilliseconds / 1000;
  const ageInMinutes = ageInSeconds / 60;
  const ageInHours = ageInMinutes / 60;
  const ageInDays = ageInHours / 24;

  const years = Math.floor(ageInDays / 365);
  const remainingDays = Math.floor(ageInDays % 365);
  const months = Math.floor(remainingDays / 30);
  const days = Math.floor(remainingDays % 30);

  // Affiche l'âge calculé dans les balises correspondantes
  ageYearLabel.textContent = years;
  ageMonthLabel.textContent = months;
  ageDayLabel.textContent = days;
}

form.addEventListener("submit", calculateAge);
