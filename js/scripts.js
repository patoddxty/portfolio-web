// Render Featured Projects
fetch('data/projects.json')
  .then(res => res.json())
  .then(projects => {
    const container = document.getElementById('featured-projects');
    projects.forEach(p => {
      const a = document.createElement('a');
      a.href = 'portfolio.html';
      a.className = 'project-card';
      a.innerHTML = `
        <img src="${p.image}" alt="${p.title}">
        <div class="overlay"></div>
        <div class="text">
          <h3>${p.title}</h3>
          <p>${p.subtitle}</p>
        </div>
      `;
      container.appendChild(a);
    });
  });
