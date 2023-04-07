const emojis = ["😎", "😱", "😡", "😂", "😊"];

let votes = new Array(emojis.length).fill(0);

const buttonsContainer = document.createElement("divBtns");
const votesContainer = document.createElement("divVotes");

for (let i = 0; i < emojis.length; i++) {
  const button = document.createElement("button");

  button.classList.add("emoji-button");

  button.innerText = emojis[i];

  buttonsContainer.appendChild(button);

  button.addEventListener("click", function () {
    votes[i]++;
    updVotesDisplay();
  });
}

document.body.appendChild(buttonsContainer);
document.body.appendChild(votesContainer);

function updVotesDisplay() {
  let displayString = "";
  for (let i = 0; i < emojis.length; i++) {
    displayString += `${emojis[i]}: ${votes[i]} `;
  }
  votesContainer.innerText = displayString;
}
