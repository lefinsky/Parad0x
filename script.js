const firstNames = ["Aria", "Liam", "Noah", "Emma", "Olivia", "Ava", "Mason", "Sophia"];
const lastNames = ["Smith", "Johnson", "Brown", "Williams", "Jones", "Garcia", "Miller", "Davis"];

function getRandomName() {
    const firstName = firstNames[Math.floor(Math.random() * firstNames.length)];
    const lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
    return `${firstName} ${lastName}`;
}

document.getElementById("generateButton").addEventListener("click", () => {
    const name = getRandomName();
    document.getElementById("nameDisplay").textContent = name;
});
