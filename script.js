
fetch('data/projects.json')
  .then(res => res.json())
  .then(projects => {
    const container = document.getElementById('project-list');
    projects.forEach(proj => {
      const el = document.createElement('div');
      el.className = 'project-card';
      el.innerHTML = `
        <img src="${proj.image}" alt="${proj.title}" />
        <h3>${proj.title}</h3>
        <p>${proj.description}</p>
        <a href="${proj.github}" target="_blank">View Code</a>
      `;
      container.appendChild(el);
    });
  });

fetch('data/certificates.json')
  .then(res => res.json())
  .then(certs => {
    const list = document.getElementById('cert-list');
    certs.forEach(cert => {
      const li = document.createElement('li');
      li.innerHTML = `<a href="${cert.file}" download target="_blank">${cert.name}</a>`;
      list.appendChild(li);
    });
  });
