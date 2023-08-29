const data = [
  {
    category: "Reaction",
    score: 80,
    icon: "./assets/images/icon-reaction.svg",
    color: "hsl(0, 100%, 67%)",
    backgroundColor: "hsla(0, 100%, 67%, 0.05)",
  },
  {
    category: "Memory",
    score: 92,
    icon: "./assets/images/icon-memory.svg",
    color: "hsl(39, 100%, 56%)",
    backgroundColor: "hsla(39, 100%, 56%, 0.05)",
  },
  {
    category: "Verbal",
    score: 61,
    icon: "./assets/images/icon-verbal.svg",
    color: "hsl(166, 100%, 37%)",
    backgroundColor: "hsla(166, 100%, 37%, 0.05)",
  },
  {
    category: "Visual",
    score: 72,
    icon: "./assets/images/icon-visual.svg",
    color: "hsl(234, 85%, 45%)",
    backgroundColor: "hsla(234, 85%, 45%, 0.05)",
  },
];

const categories = document.querySelector(".categories");

data.forEach((item) => {
  const category = document.createElement("div");
  category.classList.add("category");
  category.style.backgroundColor = item.backgroundColor;

  const divEl = document.createElement("div");
  divEl.classList.add("category-upper");

  const icon = document.createElement("img");
  icon.src = item.icon;
  icon.alt = item.category;

  const spanEl = document.createElement("span");
  spanEl.classList.add("category-name");
  spanEl.style.color = item.color;
  spanEl.textContent = item.category;

  divEl.appendChild(icon);
  divEl.appendChild(spanEl);

  const divEl2 = document.createElement("div");
  divEl2.classList.add("category-lower");

  const score = document.createElement("span");
  score.classList.add("category-score");
  score.textContent = item.score;

  const spanEl2 = document.createElement("span");
  spanEl2.textContent = " / 100";

  divEl2.appendChild(score);
  divEl2.appendChild(spanEl2);

  category.appendChild(divEl);
  category.appendChild(divEl2);

  categories.appendChild(category);
});
