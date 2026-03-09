const params = new URLSearchParams(window.location.search);
const projectId = params.get("id");

const project = projects.find(p => p.id === projectId);

if (project) {
  document.getElementById("projectTitle").textContent = project.title;
  document.getElementById("projectDescription").textContent = project.description;

  const mainImage = document.getElementById("mainImage");
  const thumbnailContainer = document.getElementById("thumbnailContainer");

  // Clear any existing content
  thumbnailContainer.innerHTML = "";
  
  // Set first image as main
  mainImage.src = project.images[0];
  mainImage.alt = project.title;

  // Add loading effect
  mainImage.classList.add('loading');
  mainImage.onload = function() {
    this.classList.remove('loading');
  };

  // Create thumbnails
  project.images.forEach((imgPath, index) => {
    const thumb = document.createElement("img");
    thumb.src = imgPath;
    thumb.alt = `${project.title} thumbnail ${index + 1}`;
    thumb.classList.add("thumbnail");
    
    if (index === 0) {
      thumb.classList.add("active");
    }

    thumb.addEventListener("click", () => {
      mainImage.classList.add('loading');
      
      mainImage.src = imgPath;
      
      document.querySelectorAll(".thumbnail").forEach(t => {
        t.classList.remove("active");
      });
      thumb.classList.add("active");
    });

    thumbnailContainer.appendChild(thumb);
  });

  const techList = document.getElementById("projectTech");
  project.tech.forEach(t => {
    const li = document.createElement("li");
    li.textContent = t;
    techList.appendChild(li);
  })

  const featureList = document.getElementById("projectFeatures");
  project.features.forEach(f => {
    const li = document.createElement("li");
    li.textContent = f;
    featureList.appendChild(li);
  });

  document.getElementById("githubLink").href = project.github;
  document.getElementById("githubLink");
} else {
  document.body.innerHTML = "<h2 style='color:white;text-align:center;margin-top:100px;'>Project Not Found</h2>";
}