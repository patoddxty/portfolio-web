fetch('data/projects.json')
  .then(res => res.json())
  .then(projects => {

    const featured = document.getElementById('featured-projects');
    const portfolio = document.getElementById('portfolio-projects');

    if (featured) {
      projects
        .filter(p => p.id <= 3)
        .forEach(project => {
          featured.appendChild(createCard(project));
        });
    }

    if (portfolio) {
      projects.forEach(project => {
        portfolio.appendChild(createCard(project));
      });
    }

    function createCard(project) {
      const card = document.createElement('div');
      card.className = 'project-card';
      card.innerHTML = `
        <img src="${project.image}" alt="${project.title}">
        <div class="overlay"></div>
        <div class="text">
          <h1>${project.title}</h1>
          <h2>${project.subtitle}</h2>
        </div>
      `;
      return card;
    }
  });
