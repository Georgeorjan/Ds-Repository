// 1. FULL DATA STRUCTURE
const courses = [
  // Year 1, Semester 1
  { id: "c-prog", title: "Introduction to Programming-C Programming", year: 1, semester: 1, category: "Coding", resources: { papers: [{year: "2023", type: "End of semester Exam", url:"assets/George Mapelera(1).pdf"}], coreReading: "#", videoLectures: "#", codeDatasets: "#", cheatSheets: "#" } },
  { id: "precalc", title: "Precalculus", year: 1, semester: 1, category: "Maths", resources: { papers: [], coreReading: "#", videoLectures: "#", codeDatasets: "#", cheatSheets: "#" } },
  { id: "cct", title: "Computer and Communication Technology", year: 1, semester: 1, category: "Coding", resources: { papers: [], coreReading: "#", videoLectures: "#", codeDatasets: "#", cheatSheets: "#" } },
  { id: "comm1", title: "Communication Skills I", year: 1, semester: 1, category: "Theory", resources: { papers: [], coreReading: "#", videoLectures: "#", codeDatasets: "#", cheatSheets: "#" } },
  { id: "euc", title: "End User Computing", year: 1, semester: 1, category: "Coding", resources: { papers: [], coreReading: "#", videoLectures: "#", codeDatasets: "#", cheatSheets: "#" } },
  
  // Year 1, Semester 2
  { id: "python", title: "Python Programming", year: 1, semester: 2, category: "Coding", resources: { papers: [], coreReading: "#", videoLectures: "#", codeDatasets: "#", cheatSheets: "#" } },
  { id: "calc", title: "Calculus", year: 1, semester: 2, category: "Maths", resources: { papers: [], coreReading: "#", videoLectures: "#", codeDatasets: "#", cheatSheets: "#" } },
  { id: "stats-intro", title: "Introduction to Statistical Analysis", year: 1, semester: 2, category: "Stats", resources: { papers: [], coreReading: "#", videoLectures: "#", codeDatasets: "#", cheatSheets: "#" } },
  { id: "ds-intro", title: "Introduction to Data Science", year: 1, semester: 2, category: "Coding", resources: { papers: [], coreReading: "#", videoLectures: "#", codeDatasets: "#", cheatSheets: "#" } },
  { id: "comm2", title: "Communication Skills II", year: 1, semester: 2, category: "Theory", resources: { papers: [], coreReading: "#", videoLectures: "#", codeDatasets: "#", cheatSheets: "#" } },
  
  // Year 2, Semester 1
  { id: "java", title: "Java Programming", year: 2, semester: 1, category: "Coding", resources: { papers: [], coreReading: "#", videoLectures: "#", codeDatasets: "#", cheatSheets: "#" } },
  { id: "linear-alg", title: "Linear Algebra", year: 2, semester: 1, category: "Maths", resources: { papers: [], coreReading: "#", videoLectures: "#", codeDatasets: "#", cheatSheets: "#" } },
  { id: "data-wrang", title: "Data Wrangling and Exploratory Data Analysis", year: 2, semester: 1, category: "Coding", resources: { papers: [], coreReading: "#", videoLectures: "#", codeDatasets: "#", cheatSheets: "#" } },
  { id: "networks1", title: "Computer Networks I", year: 2, semester: 1, category: "Theory", resources: { papers: [], coreReading: "#", videoLectures: "#", codeDatasets: "#", cheatSheets: "#" } },
  { id: "cloud", title: "Cloud Computing", year: 2, semester: 1, category: "Theory", resources: { papers: [], coreReading: "#", videoLectures: "#", codeDatasets: "#", cheatSheets: "#" } },
  
  // Year 2, Semester 2
  { id: "db", title: "Databases", year: 2, semester: 2, category: "Coding", resources: { papers: [], coreReading: "#", videoLectures: "#", codeDatasets: "#", cheatSheets: "#" } },
  { id: "discrete", title: "Discrete mathematics", year: 2, semester: 2, category: "Maths", resources: { papers: [], coreReading: "#", videoLectures: "#", codeDatasets: "#", cheatSheets: "#" } },
  { id: "sys-analysis", title: "System Analysis and Design", year: 2, semester: 2, category: "Theory", resources: { papers: [], coreReading: "#", videoLectures: "#", codeDatasets: "#", cheatSheets: "#" } },
  { id: "non-param", title: "Non-Parametric Inference", year: 2, semester: 2, category: "Stats", resources: { papers: [], coreReading: "#", videoLectures: "#", codeDatasets: "#", cheatSheets: "#" } },
  { id: "ml", title: "Machine Learning", year: 2, semester: 2, category: "Coding", resources: { papers: [], coreReading: "#", videoLectures: "#", codeDatasets: "#", cheatSheets: "#" } },
  
  // Year 3, Semester 1
  { id: "stochastic", title: "Stochastic Modelling", year: 3, semester: 1, category: "Stats", resources: { papers: [], coreReading: "#", videoLectures: "#", codeDatasets: "#", cheatSheets: "#" } },
  { id: "optim", title: "Optimization", year: 3, semester: 1, category: "Maths", resources: { papers: [], coreReading: "#", videoLectures: "#", codeDatasets: "#", cheatSheets: "#" } },
  { id: "dsa", title: "Data Structures and Algorithms", year: 3, semester: 1, category: "Coding", resources: { papers: [], coreReading: "#", videoLectures: "#", codeDatasets: "#", cheatSheets: "#" } },
  { id: "research", title: "Research Methods", year: 3, semester: 1, category: "Theory", resources: { papers: [], coreReading: "#", videoLectures: "#", codeDatasets: "#", cheatSheets: "#" } },
  { id: "web-prog", title: "Web Programming", year: 3, semester: 1, category: "Coding", resources: { papers: [], coreReading: "#", videoLectures: "#", codeDatasets: "#", cheatSheets: "#" } },
  
  // Year 3, Semester 2
  { id: "mining", title: "Data Mining and Warehousing", year: 3, semester: 2, category: "Coding", resources: { papers: [], coreReading: "#", videoLectures: "#", codeDatasets: "#", cheatSheets: "#" } },
  { id: "viz", title: "Data Virtualization & Data Visualization", year: 3, semester: 2, category: "Coding", resources: { papers: [], coreReading: "#", videoLectures: "#", codeDatasets: "#", cheatSheets: "#" } },
  { id: "regression", title: "Applied Regression Analysis", year: 3, semester: 2, category: "Stats", resources: { papers: [], coreReading: "#", videoLectures: "#", codeDatasets: "#", cheatSheets: "#" } },
  { id: "projects", title: "Group Projects", year: 3, semester: 2, category: "Coding", resources: { papers: [], coreReading: "#", videoLectures: "#", codeDatasets: "#", cheatSheets: "#" } },
  { id: "ai", title: "Artificial Intelligence", year: 3, semester: 2, category: "Coding", resources: { papers: [], coreReading: "#", videoLectures: "#", codeDatasets: "#", cheatSheets: "#" } },
  
  // Year 4, Semester 1
  { id: "big-data", title: "Big Data Analytics", year: 4, semester: 1, category: "Coding", resources: { papers: [], coreReading: "#", videoLectures: "#", codeDatasets: "#", cheatSheets: "#" } },
  { id: "entrep", title: "Enterpreneurship", year: 4, semester: 1, category: "Theory", resources: { papers: [], coreReading: "#", videoLectures: "#", codeDatasets: "#", cheatSheets: "#" } },
  { id: "security", title: "Networks Administration and Information Security", year: 4, semester: 1, category: "Coding", resources: { papers: [], coreReading: "#", videoLectures: "#", codeDatasets: "#", cheatSheets: "#" } },
  { id: "sim", title: "Modelling and Simulation", year: 4, semester: 1, category: "Coding", resources: { papers: [], coreReading: "#", videoLectures: "#", codeDatasets: "#", cheatSheets: "#" } },
  { id: "deep-learn", title: "Fundamentals of Deeplearning", year: 4, semester: 1, category: "Coding", resources: { papers: [], coreReading: "#", videoLectures: "#", codeDatasets: "#", cheatSheets: "#" } },
  
  // Year 4, Semester 2
  { id: "ai-emerge", title: "Contemporary and Emerging Issues in AI and ML", year: 4, semester: 2, category: "Coding", resources: { papers: [], coreReading: "#", videoLectures: "#", codeDatasets: "#", cheatSheets: "#" } },
  { id: "ds-project", title: "Data Science System Project", year: 4, semester: 2, category: "Theory", resources: { papers: [], coreReading: "#", videoLectures: "#", codeDatasets: "#", cheatSheets: "#" } },
  { id: "bayesian", title: "Bayesian Decision Theory", year: 4, semester: 2, category: "Stats", resources: { papers: [], coreReading: "#", videoLectures: "#", codeDatasets: "#", cheatSheets: "#" } },
  { id: "knowledge", title: "Knowledge Engineering", year: 4, semester: 2, category: "Theory", resources: { papers: [], coreReading: "#", videoLectures: "#", codeDatasets: "#", cheatSheets: "#" } },
  { id: "attach", title: "Industrial Attachment", year: 4, semester: 2, category: "Theory", resources: { papers: [], coreReading: "#", videoLectures: "#", codeDatasets: "#", cheatSheets: "#" } }
];

// Category Icons Mapping
const categoryIcons = {
  "Coding": "fa-code",
  "Maths": "fa-calculator",
  "Stats": "fa-chart-line",
  "Theory": "fa-book"
};

// DOM Elements
const coursesGrid = document.getElementById('courses-grid');
const yearFilter = document.getElementById('year-filter');
const semesterFilter = document.getElementById('semester-filter');
const categoryPills = document.querySelectorAll('.category-pill');
const noResults = document.getElementById('no-results');

let currentFilters = { year: 'all', semester: 'all', category: 'all' };
let openCard = null;

// RENDER FUNCTION
function renderCourses() {
  const filteredCourses = courses.filter(course => {
    const yearMatch = currentFilters.year === 'all' || course.year.toString() === currentFilters.year;
    const semesterMatch = currentFilters.semester === 'all' || course.semester.toString() === currentFilters.semester;
    const categoryMatch = currentFilters.category === 'all' || course.category === currentFilters.category;
    return yearMatch && semesterMatch && categoryMatch;
  });

  coursesGrid.classList.add('fade-out');
  setTimeout(() => {
    coursesGrid.innerHTML = '';
    if (filteredCourses.length === 0) {
      noResults.style.display = 'block';
      coursesGrid.classList.remove('fade-out');
      return;
    }
    noResults.style.display = 'none';
    filteredCourses.forEach(course => coursesGrid.appendChild(createCourseCard(course)));
    openCard = null;
    setTimeout(() => coursesGrid.classList.remove('fade-out'), 50);
  }, 300);
}

// UNIVERSAL CARD CREATOR
function createCourseCard(course) {
  const card = document.createElement('div');
  card.className = 'resource-card';
  const iconClass = categoryIcons[course.category] || 'fa-book';
  const showCodeLink = course.category === "Coding" || course.category === "Data Science";

  card.innerHTML = `
    <div class="card-content">
      <div class="resource-icon"><i class="fa-solid ${iconClass}"></i></div>
      <h3>${course.title}</h3>
      <p>Year ${course.year}, Semester ${course.semester}</p>
      <div class="course-meta"><span><i class="fa-solid fa-tag"></i> ${course.category}</span></div>
      <button class="card-link view-resources-btn">View Resources</button>
    </div>
    <div class="resource-panel">
      <div class="resources-list">
        <button class="resource-button" onclick="openResourceModal('${course.id}', 'papers')">
          <i data-lucide="file-text"></i><span>Past Papers</span>
        </button>
        <button class="resource-button" onclick="openResourceModal('${course.id}', 'coreReading')">
          <i data-lucide="book-open"></i><span>Core Reading</span>
        </button>
        <button class="resource-button" onclick="openResourceModal('${course.id}', 'videoLectures')">
          <i data-lucide="play-circle"></i><span>Video Lectures</span>
        </button>
        ${showCodeLink ? `
        <button class="resource-button" onclick="openResourceModal('${course.id}', 'codeDatasets')">
          <i data-lucide="terminal"></i><span>Code & Datasets</span>
        </button>` : ``}
        <button class="resource-button" onclick="openResourceModal('${course.id}', 'cheatSheets')">
          <i data-lucide="layers"></i><span>Cheat Sheets</span>
        </button>
      </div>
    </div>
  `;

  card.querySelector('.view-resources-btn').addEventListener('click', (e) => {
    e.preventDefault();
    toggleAccordion(card);
  });

  setTimeout(() => lucide.createIcons(), 100);
  return card;
}

// UNIVERSAL MODAL LOGIC (With Dynamic Contribute Text)
function openResourceModal(courseId, resourceType) {
  const course = courses.find(c => c.id === courseId);
  const modal = document.getElementById('papers-modal');
  const listContainer = document.getElementById('past-papers-list');
  const emptyState = document.getElementById('empty-state');
  const modalTitle = document.getElementById('modal-title');
  
  if (!course) return;

  const displayNames = {
    papers: "Past Papers",
    coreReading: "Core Reading",
    videoLectures: "Video Lectures",
    codeDatasets: "Code & Datasets",
    cheatSheets: "Cheat Sheets"
  };

  // Specified Material Names for "Contribute a [specified material]"
  const singularNames = {
    papers: "Paper",
    coreReading: "Reading Material",
    videoLectures: "Video Lecture",
    codeDatasets: "Dataset",
    cheatSheets: "Cheat Sheet"
  };

  modalTitle.innerText = `${course.title} - ${displayNames[resourceType]}`;
  listContainer.innerHTML = '';
  
  const data = course.resources[resourceType];
  const isEmpty = Array.isArray(data) ? data.length === 0 : data === "#";

  if (!isEmpty) {
    emptyState.style.display = 'none';
    if (Array.isArray(data)) {
      data.forEach(item => {
        listContainer.innerHTML += `
          <div class="paper-row">
            <div class="paper-info">
              <span class="paper-year">${item.year}</span>
              <span class="paper-type">${item.type}</span>
            </div>
            <a href="${item.url}" class="paper-download-btn" target="_blank"><i data-lucide="download"></i></a>
          </div>`;
      });
    } else {
      listContainer.innerHTML = `
        <div class="paper-row">
          <div class="paper-info">
            <span class="paper-year">Access Link</span>
            <span class="paper-type">Official ${displayNames[resourceType]} material</span>
          </div>
          <a href="${data}" class="paper-download-btn" target="_blank"><i data-lucide="external-link"></i></a>
        </div>`;
    }
  } else {
    // Show Empty State
    emptyState.style.display = 'block';
    
    // Update the "No [resource] found" text
    emptyState.querySelector('p').innerText = `No ${displayNames[resourceType].toLowerCase()} materials found for this course yet.`;
    
    // Update the "Contribute a [specified material]" button text
    const contributeBtn = emptyState.querySelector('.contribute-btn');
    if (contributeBtn) {
      contributeBtn.innerHTML = `<i class="fa-solid fa-upload"></i> Contribute a ${singularNames[resourceType]}`;
    }
  }

  modal.classList.add('active');
  lucide.createIcons();
}

// GLOBAL EVENT HANDLERS
document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('papers-modal');
  const closeBtn = document.querySelector('.close-modal');
  if(closeBtn) closeBtn.onclick = () => modal.classList.remove('active');
  window.onclick = (e) => { if(e.target === modal) modal.classList.remove('active'); };
});

function toggleAccordion(card) {
  if (openCard && openCard !== card) openCard.classList.remove('active');
  card.classList.toggle('active');
  openCard = card.classList.contains('active') ? card : null;
  setTimeout(() => lucide.createIcons(), 50);
}

// Filter Event Listeners
yearFilter.addEventListener('change', e => { currentFilters.year = e.target.value; renderCourses(); });
semesterFilter.addEventListener('change', e => { currentFilters.semester = e.target.value; renderCourses(); });
categoryPills.forEach(pill => {
  pill.addEventListener('click', function() {
    categoryPills.forEach(p => p.classList.remove('active'));
    this.classList.add('active');
    currentFilters.category = this.getAttribute('data-category');
    renderCourses();
  });
});

renderCourses();