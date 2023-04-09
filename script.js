const emojis = ["😎", "😱", "😡", "😂", "😊"];

let votes = new Array(emojis.length).fill(0);

const buttonsContainer = document.createElement("divBtns");
const votesContainer = document.createElement("divVotes");

buttonsContainer.addEventListener("click", function (event) {
	if (event.target.matches("button")) {
		const buttonIndex = emojis.indexOf(event.target.innerText);
		votes[buttonIndex]++;
		updateVotesDisplay();
	}
});

for (let i = 0; i < emojis.length; i++) {
	const button = document.createElement("button");

	button.classList.add("emoji-button");
	button.innerText = emojis[i];
	buttonsContainer.appendChild(button);
}

updateVotesDisplay();

document.body.appendChild(buttonsContainer);
document.body.appendChild(votesContainer);

function updateVotesDisplay() {
	votesContainer.innerHTML = "";
	for (let i = 0; i < emojis.length; i++) {
		const span = document.createElement("span");
		span.innerText = `${emojis[i]}: ${votes[i]}`;
		votesContainer.appendChild(span);
	}
}
