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
// const navItems = document.querySelectorAll(".nav-links li");
// console.log(navItems);
// /**/ const sectionsWithId = [
//   "free-inspection",
//   "free-inspection",
//   "contact-us",
//   "about-us",
// ];

// const sectionsWithId = [];
// navItems.forEach((item) => {
//   sectionsWithId.push(item.textContent.toLowerCase().replaceAll(" ", "-"));
// });
// sectionsWithId[1] = sectionsWithId[0];
// console.log(sectionsWithId);

// navItems.forEach((item, index) => {
//   item.addEventListener("click", (event) => {
//     event.preventDefault();
//     if (item.classList.contains("bigger")) {
//       console.log("Zawieram klasę bigger");
//       item.classList.remove("bigger");
//     } else {
//       console.log("Nie zawieram klasy bigger");
//       item.classList.add("bigger");
//     }
//     /**/ const section = document.getElementById(sectionsWithId[index]);
//     /**/ section.scrollIntoView({ behavior: "smooth" });
//   });
// });

// jezeli na element mamy 2 rozne zachowania ale uzaleznione od 1 typu eventu (np.click) to zawsze 1 eventlistener obwarunkowany

//-----------------------------------------------------------------
//zad. po kliknięciu na każde subscribe wyskakuje okienko - wersja z array
//-----------------------------------------------------------------

// zwraca Nodelist - który jest podobny do arraya ale nim nie jest
const buttons = document.querySelectorAll(".card-footer .btn");
console.log(buttons);

// arraye z tekstem title i iext
const titleContent = ["LOREM IPSUM", "LOREM lorem", "lorem ipsum lorem"];
const textContent = [
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
  "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa ",
  "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos ",
];

// utworzenie elementów DOM
const messageBox = document.createElement("div");
const title = document.createElement("h6");
const text = document.createElement("p");
// dodanie elementów do elementu messageBox
messageBox.appendChild(title);
messageBox.appendChild(text);
// dodanie do elementu messageBox klas z css BEZ KROPKI!
messageBox.classList.add("hidden", "message-box");

buttons.forEach((button, i) => {
  button.addEventListener("click", (event) => {
    //event.target w tym przypadku element na który kliknął user
    // dla każdego guzika inny title i text
    title.textContent = titleContent[i];
    text.textContent = textContent[i];

    if (!button.contains(messageBox)) {
      // dodanie elementu DOM do DOM strony button.appendChild()
      button.appendChild(messageBox);
      messageBox.classList.remove("hidden");
    } else {
      button.removeChild(messageBox);
    }
  });
});
