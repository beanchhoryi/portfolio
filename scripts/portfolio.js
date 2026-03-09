const workGrid = document.getElementById("workGrid");

function displayProjects(projectList) {
  workGrid.innerHTML = "";

  projectList.forEach(project => {
    const card = document.createElement("div");
    card.classList.add("work-card");

    card.innerHTML = `
      <a href="project.html?id=${project.id}">
        <img src="${project.images[0]}" alt="${project.title}">  <!-- Use first image -->
        <div class="work-overlay">
          <h3>${project.title}</h3>
          <h6>(${project.subtitle})</h6>
        </div>
      </a>
    `;

    workGrid.appendChild(card);
  });
}

displayProjects(projects);

const filterButtons = document.querySelectorAll(".menu li");

filterButtons.forEach(button => {
  button.addEventListener("click", () => {
    document.querySelector(".menu li.active").classList.remove("active");
    button.classList.add("active");

    const filter = button.getAttribute("data-filter");

    if (filter === "all") {
      displayProjects(projects);
    } else {
      const filtered = projects.filter(p => p.category === filter);
      displayProjects(filtered);
    }
  });
});