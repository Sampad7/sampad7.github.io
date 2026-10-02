const PreLoader = document.querySelector('.loader-overlay'); // or '.loader' — must match your HTML

window.onload = () => {
    if (!PreLoader) {
        console.error('Preloader element not found — check your selector matches the HTML class/id.');
        return;
    }
    setTimeout(() => {
        PreLoader.style.opacity = "0";
        setTimeout(() => {
            PreLoader.style.display = "none";
        }, 1500);
    }, 1500);
};

// animate(); ← delete this line entirely unless you've defined an animate() function

    const root = document.documentElement;
    const toggleBtn = document.getElementById("themeToggle");
    const icon = document.getElementById("toggleIcon");
 
    function applyTheme(theme) {
      root.setAttribute("data-theme", theme);
      icon.textContent = theme === "dark" ?  "🌙": "☀️";
    }
 
    // In-memory state (no localStorage per artifact restrictions)
    let currentTheme = "light";
    applyTheme(currentTheme);
 
    toggleBtn.addEventListener("click", () => {
      currentTheme = currentTheme === "light" ? "dark" : "light";
      applyTheme(currentTheme);
    });


// projects---------------------------


   // Replace `image` with a real screenshot URL to use an actual image.
  // If `image` is omitted, a solid color fill with `fill` + `label` is shown instead.
  const projects = [
    {
      title: "ALPHA FITNESS GYM WEBSITE",
      label: "unqueue.",
      image: "Screenshot 2026-08-03 231455.png"
    },
     
    {
      title: "SMART MENU FOR RESTAURANTS",
      label: "unqueue.",
      image: "smartmneu.jpeg"
    },
    {
      title: " COACHING CENTRE APP",
      label: "unqueue.",
      image: "coaching.jpeg"
    },
    
  ];
 
  const PAGE_SIZE = 2;
  const pageCount = Math.ceil(projects.length / PAGE_SIZE);
  let page = 0;
 
  const grid = document.getElementById("grid");
  const pageLabel = document.getElementById("pageLabel");
 
  function cardHTML(project) {
    const previewInner = project.image
      ? `<img src="${project.image}" alt="${project.title}" />`
      : `<div class="fill-label">${project.label}</div>`;
 
    return `
      <div class="card">
        <div class="card-preview ${project.image ? "" : "solid"}" style="--fill:${project.fill || "#222"}">
          ${previewInner}
          
        </div>
        <div class="card-label">${project.title}</div>
      </div>
    `;
  }
 
  function render() {
    const start = page * PAGE_SIZE;
    const visible = projects.slice(start, start + PAGE_SIZE);
    grid.innerHTML = visible.map(cardHTML).join("");
    pageLabel.innerHTML = `<strong>${page + 1}</strong> / ${pageCount} projects`;
 
    // wire up per-card arrows to page nav
    grid.querySelectorAll(".card-arrow.left").forEach(btn =>
      btn.addEventListener("click", goPrev)
    );
    grid.querySelectorAll(".card-arrow.right").forEach(btn =>
      btn.addEventListener("click", goNext)
    );
  }
 
  function goPrev() {
    page = (page - 1 + pageCount) % pageCount;
    render();
  }
  function goNext() {
    page = (page + 1) % pageCount;
    render();
  }
 
  document.getElementById("prevPage").addEventListener("click", goPrev);
  document.getElementById("nextPage").addEventListener("click", goNext);
 
  render();

  //nav links toggle--------
  
  const navLinks = document.querySelectorAll('.nav-links a');

navLinks.forEach(link => {
    link.addEventListener('click', function() {
        // Remove 'active' from all links
        navLinks.forEach(nav => nav.classList.remove('active'));
        
        // Add 'active' to the clicked link
        this.classList.add('active');
    });
});

const textLines = document.querySelectorAll('.hero-desc');

