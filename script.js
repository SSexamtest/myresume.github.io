const skills = [
  "JavaScript", "TypeScript", "Dart", "Java", "Kotlin", "Swift",
  "React Native", "Flutter", "SwiftUI", "Jetpack Compose", "Firebase",
  "REST APIs", "GraphQL", "Git", "CI/CD"
];

const experience = [
  {
    title: "Mobile Engineer",
    company: "ABC Corp",
    period: "Jan 2023 – Present",
    details: [
      "Built cross-platform apps using React Native",
      "Integrated Firebase, Stripe, Google Maps",
      "Collaborated with backend teams on REST APIs",
      "Set up CI/CD pipelines"
    ]
  },
  {
    title: "Junior Mobile Developer",
    company: "XYZ Ltd",
    period: "Jun 2021 – Dec 2022",
    details: [
      "Maintained Kotlin Android apps",
      "Refactored code to MVVM architecture",
      "Participated in Agile ceremonies"
    ]
  }
];

const projects = [
  {
    name: "FoodieApp",
    tech: "React Native, Firebase",
    desc: "A food delivery app with real-time order tracking."
  },
  {
    name: "FitTrack",
    tech: "Flutter, GraphQL, Hasura",
    desc: "A fitness tracker with social sharing and progress logs."
  }
];

// Populate Skills
const skillsList = document.getElementById("skills-list");
skills.forEach(skill => {
  const li = document.createElement("li");
  li.textContent = skill;
  skillsList.appendChild(li);
});

// Populate Experience
const expList = document.getElementById("experience-list");
experience.forEach(job => {
  const div = document.createElement("div");
  div.innerHTML = `<strong>${job.title}</strong> at ${job.company} (${job.period})`;
  const ul = document.createElement("ul");
  job.details.forEach(d => {
    const li = document.createElement("li");
    li.textContent = d;
    ul.appendChild(li);
  });
  div.appendChild(ul);
  expList.appendChild(div);
});

// Populate Projects
const projectList = document.getElementById("projects-list");
projects.forEach(p => {
  const li = document.createElement("li");
  li.innerHTML = `<strong>${p.name}</strong> (${p.tech}) - ${p.desc}`;
  projectList.appendChild(li);
});
