const skills = [
  { name: "HTML", level: "Intermediate", category: "Frontend" },
  { name: "CSS", level: "Intermediate", category: "Frontend" },
  { name: "JavaScript", level: "Intermediate", category: "Frontend" },
  { name: "DOM Manipulation", level: "Intermediate", category: "Frontend" },
  { name: "Problem Solving", level: "Intermediate", category: "Logic" }
];

const skillsContainer = document.getElementById("skills");

function renderSkills(skillsList) {
  skillsContainer.innerHTML = "";

  skillsList.forEach(skill => {
    const div = document.createElement("div");
    div.className = "skill-card";

    div.innerHTML = `
      <h3>${skill.name}</h3>
      <p><strong>Level:</strong> ${skill.level}</p>
      <p><strong>Category:</strong> ${skill.category}</p>
    `;

    skillsContainer.appendChild(div);
  });
}

renderSkills(skills);