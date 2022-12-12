let xp = 0;
let health = 100;
let gold = 50;
let currentWeapon = 0;
let fighting;
let monsterHealth;
let inventory = ["stick"];

const button1 = document.querySelector("#button1");
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");
const text = document.querySelector("#text");
const xpText = document.querySelector("#xpText");
const healthText = document.querySelector("#healthText");
const goldText = document.querySelector("#goldText");
const monsterStats = document.querySelector("#monsterStats");
const monsterNameText = document.querySelector("#monsterName");
const monsterHealthText = document.querySelector("#monsterHealth");
const locations = [
  {
    name: "town square",
    "button text": ["Go to store", "Go to cave", "Fight dragon"],
    "button functions": [goStore, goCave, fightDragon],
    text: 'You are in the town square, You see a sign that says "store."',
  },
  {
    name: "store",
    "button text": [
      "Buy 10 Health (10 Gold)",
      "Buy weapon (30 Gold)",
      "Go to Town square",
    ],
    "button functions": [buyHealth, buyWeapon, goTown],
    text: "You enter the store.",
  },
];
button1.onclick = goStore;
button2.onclick = goCave;
button3.onclick = fightDragon;

function update(location) {
  button1.innerText = locations[0]["button text"];
  button2.innerText = locations[1]["button text"];
  button3.innerText = locations[2]["button text"];
  button1.onclick = buyHealth;
  button2.onclick = buyWeapon;
  button3.onclick = goTown;
  text.innerText =
    'You are in the town square, You see a sign tha says "store"';
}

function goTown() {
  update(locations[0]);
}
function goStore() {}

function goCave() {
  console.log("going to cave ...");
}

function fightDragon() {
  console.log("fighting Dragon ...");
}

function buyHealth() {}

function buyWeapon() {}
