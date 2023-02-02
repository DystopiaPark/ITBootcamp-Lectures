import { Chatroom } from "./chat.js";
import { ChatUI } from "./ui.js";

// DOM
let ul = document.getElementById("poruke-ul");
let sendBtn = document.getElementById("send-btn");
let sendInput = document.getElementById("send-input");
let updateInput = document.getElementById("update-input");
let updateBtn = document.getElementById("update-btn");
let imeSection = document.getElementById("ime-section");
let navUL = document.getElementById("nav-ul");
let chatSection = document.getElementById("chat-section");

// Loads username
let username;
if (localStorage.user) {
  username = localStorage.getItem("user");
} else {
  username = "Anonymous";
}

// Objects
let chatroom = new Chatroom("#general", username); // Object of chatroom class
let chatUI = new ChatUI(ul); // Object of ChatUI class

// Listens and makes changes
chatroom.getChats((data) => {
  chatUI.templateLI(data);
  chatSection.scrollTo(0, chatSection.scrollHeight);
});

// Inputs chat
sendBtn.addEventListener("click", () => {
  if (sendInput.value.trim().length == 0) return (sendInput.value = ""); // guard
  chatroom
    .addChat(sendInput.value)
    .then(() => {
      sendInput.value = "";
      chatSection.scrollTo(0, chatSection.scrollHeight);
    })
    .catch((err) => console.log(err));
});

// Changes username
updateBtn.addEventListener("click", () => {
  chatroom.username = updateInput.value;
  updateInput.value = "";
  let ime = document.createElement("span");
  ime.textContent = chatroom.username;
  // local storage
  console.log(ime.textContent, localStorage.user);
  if (ime.textContent == localStorage.user) return; // if no change because of set rules
  localStorage.setItem("user", chatroom.username);
  ime.id = "user-show";
  ime.textContent = `New username: ${chatroom.username}`;
  imeSection.appendChild(ime);
  window.scrollTo(0, document.body.scrollHeight);
  setTimeout(() => {
    ime.remove();
  }, 3000);
});

// Changes room
navUL.addEventListener("click", (e) => {
  if (e.target.tagName == "LI") {
    // 1. Uzimamo ime sobe na koju je kliknuto
    let newRoom = e.target.textContent;
    // 2. Update sobe na koju je kliknuto
    chatroom.updateRoom(newRoom);
    // 3. Izbrisati sve poruke sa ekrana
    chatUI.clearUL();
    // 4. Prikazi chatove
    chatroom.getChats((data) => {
      chatUI.templateLI(data);
      chatSection.scrollTo(0, chatSection.scrollHeight);
    });
  }
});
