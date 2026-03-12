let navBurger = document.querySelector("#nav-burger");
let navLinks = document.querySelector(".nav-links");

navBurger.addEventListener("click", () => {
  if (navLinks.style.opacity == "1") {
    navLinks.style.opacity = "0";
  } else {
    navLinks.style.opacity = "1";
  }
});

// const navItem = document.querySelector('li')
// const navItems = document.querySelectorAll("li");
// navItem.addEventListener('click', (event)=>{
//     //event.target w tym przypadku element na który kliknął user
//     navItem.classList.add('bigger')
// })

// const navItems = document.querySelectorAll("li");
// navItems.forEach((item) => {
//   item.addEventListener("click", (event) => {
//     item.classList.add("bigger");
//   });
// });

// z.d. klik-> duże litery, klik -> małe litery (TOGGLE)
// const navItems = document.querySelectorAll("li");
// navItems.forEach((item) => {
//   item.addEventListener("click", () => {
//     item.classList.toggle("bigger");
//   });
// });

//  WERSJA Z ARRAY
const navItems = document.querySelectorAll(".nav-links li");
console.log(navItems);
// /**/ const sectionsWithId = [
//   "free-inspection",
//   "free-inspection",
//   "contact-us",
//   "about-us",
// ];

const sectionsWithId = [];
navItems.forEach((item) => {
  sectionsWithId.push(item.textContent.toLowerCase().replaceAll(" ","-"));
});
sectionsWithId[1]=sectionsWithId[0];
console.log(sectionsWithId);

navItems.forEach((item, index) => {
  item.addEventListener("click", (event) => {
    event.preventDefault();
    if (item.classList.contains("bigger")) {
      console.log("Zawieram klasę bigger");
      item.classList.remove("bigger");
    } else {
      console.log("Nie zawieram klasy bigger");
      item.classList.add("bigger");
    }
    /**/ const section = document.getElementById(sectionsWithId[index]);
    /**/ section.scrollIntoView({ behavior: "smooth" });
  });
});

// jezeli na element mamy 2 rozne zachowania ale uzaleznione od 1 typu eventu (np.click) to zawsze 1 eventlistener obwarunkowany

// WERSJA Z OBIEKTEM - nieskończona
// const navLinks2 = document.querySelectorAll(".nav-links li");
// console.log(navLinks2);

// const sectionsWithId2 = {
//   free: "free-inspection",
//   pricing: "free-inspection",
//   contact: "contact-us",
//   about: "about-us",
// };

// navLinks2.forEach((item) => {
//   item.addEventListener("click", (event) => {
//     event.preventDefault();
//     console.log("klik dziala");
//     if (item.classList.contains("bigger")) {
//       item.classList.remove("bigger");
//     } else {
//       item.classList.add("bigger");
//     }
//     const section2 = document.getElementById(sectionsWithId2.key);
//     section2.scrollIntoView({ behavior: "smooth" });
//   });
// });
