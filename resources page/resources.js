// Course Data Structure with Resources
const courses = [
  // Year 1, Semester 1
  { title: "Introduction to Programming-C Programming", year: 1, semester: 1, category: "Coding", resources: { papers: "#", coreReading: "#", videoLectures: "#", codeDatasets: "#", cheatSheets: "#" } },
  { title: "Precalculus", year: 1, semester: 1, category: "Maths", resources: { papers: "#", coreReading: "#", videoLectures: "#", codeDatasets: "#", cheatSheets: "#" } },
  { title: "Computer and Communication Technology", year: 1, semester: 1, category: "Coding", resources: { papers: "#", coreReading: "#", videoLectures: "#", codeDatasets: "#", cheatSheets: "#" } },
  { title: "Communication Skills I", year: 1, semester: 1, category: "Theory", resources: { papers: "#", coreReading: "#", videoLectures: "#", codeDatasets: "#", cheatSheets: "#" } },
  { title: "End User Computing", year: 1, semester: 1, category: "Coding", resources: { papers: "#", coreReading: "#", videoLectures: "#", codeDatasets: "#", cheatSheets: "#" } },
  
  // Year 1, Semester 2
  { title: "Python Programming", year: 1, semester: 2, category: "Coding", resources: { papers: "#", coreReading: "#", videoLectures: "#", codeDatasets: "#", cheatSheets: "#" } },
  { title: "Calculus", year: 1, semester: 2, category: "Maths", resources: { papers: "#", coreReading: "#", videoLectures: "#", codeDatasets: "#", cheatSheets: "#" } },
  { title: "Introduction to Statistical Analysis", year: 1, semester: 2, category: "Stats", resources: { papers: "#", coreReading: "#", videoLectures: "#", codeDatasets: "#", cheatSheets: "#" } },
  { title: "Introduction to Data Science", year: 1, semester: 2, category: "Coding", resources: { papers: "#", coreReading: "#", videoLectures: "#", codeDatasets: "#", cheatSheets: "#" } },
  { title: "Communication Skills II", year: 1, semester: 2, category: "Theory", resources: { papers: "#", coreReading: "#", videoLectures: "#", codeDatasets: "#", cheatSheets: "#" } },
  
  // Year 2, Semester 1
  { title: "Java Programming", year: 2, semester: 1, category: "Coding", resources: { papers: "#", coreReading: "#", videoLectures: "#", codeDatasets: "#", cheatSheets: "#" } },
  { title: "Linear Algebra", year: 2, semester: 1, category: "Maths", resources: { papers: "#", coreReading: "#", videoLectures: "#", codeDatasets: "#", cheatSheets: "#" } },
  { title: "Data Wrangling and Exploratory Data Analysis", year: 2, semester: 1, category: "Coding", resources: { papers: "#", coreReading: "#", videoLectures: "#", codeDatasets: "#", cheatSheets: "#" } },
  { title: "Computer Networks I", year: 2, semester: 1, category: "Theory", resources: { papers: "#", coreReading: "#", videoLectures: "#", codeDatasets: "#", cheatSheets: "#" } },
  { title: "Cloud Computing", year: 2, semester: 1, category: "Theory", resources: { papers: "#", coreReading: "#", videoLectures: "#", codeDatasets: "#", cheatSheets: "#" } },
  
  // Year 2, Semester 2
  { title: "Databases", year: 2, semester: 2, category: "Coding", resources: { papers: "#", coreReading: "#", videoLectures: "#", codeDatasets: "#", cheatSheets: "#" } },
  { title: "Discrete mathematics", year: 2, semester: 2, category: "Maths", resources: { papers: "#", coreReading: "#", videoLectures: "#", codeDatasets: "#", cheatSheets: "#" } },
  { title: "System Analysis and Design", year: 2, semester: 2, category: "Theory", resources: { papers: "#", coreReading: "#", videoLectures: "#", codeDatasets: "#", cheatSheets: "#" } },
  { title: "Non-Parametric Inference", year: 2, semester: 2, category: "Stats", resources: { papers: "#", coreReading: "#", videoLectures: "#", codeDatasets: "#", cheatSheets: "#" } },
  { title: "Machine Learning", year: 2, semester: 2, category: "Coding", resources: { papers: "#", coreReading: "#", videoLectures: "#", codeDatasets: "#", cheatSheets: "#" } },
  
  // Year 3, Semester 1
  { title: "Stochastic Modelling", year: 3, semester: 1, category: "Stats", resources: { papers: "#", coreReading: "#", videoLectures: "#", codeDatasets: "#", cheatSheets: "#" } },
  { title: "Optimization", year: 3, semester: 1, category: "Maths", resources: { papers: "#", coreReading: "#", videoLectures: "#", codeDatasets: "#", cheatSheets: "#" } },
  { title: "Data Structures and Algorithms", year: 3, semester: 1, category: "Coding", resources: { papers: "#", coreReading: "#", videoLectures: "#", codeDatasets: "#", cheatSheets: "#" } },
  { title: "Research Methods", year: 3, semester: 1, category: "Theory", resources: { papers: "#", coreReading: "#", videoLectures: "#", codeDatasets: "#", cheatSheets: "#" } },
  { title: "Web Programming", year: 3, semester: 1, category: "Coding", resources: { papers: "#", coreReading: "#", videoLectures: "#", codeDatasets: "#", cheatSheets: "#" } },
  
  // Year 3, Semester 2
  { title: "Data Mining and Warehousing", year: 3, semester: 2, category: "Coding", resources: { papers: "#", coreReading: "#", videoLectures: "#", codeDatasets: "#", cheatSheets: "#" } },
  { title: "Data Virtualization & Data Visualization", year: 3, semester: 2, category: "Coding", resources: { papers: "#", coreReading: "#", videoLectures: "#", codeDatasets: "#", cheatSheets: "#" } },
  { title: "Applied Regression Analysis", year: 3, semester: 2, category: "Stats", resources: { papers: "#", coreReading: "#", videoLectures: "#", codeDatasets: "#", cheatSheets: "#" } },
  { title: "Group Projects", year: 3, semester: 2, category: "Coding", resources: { papers: "#", coreReading: "#", videoLectures: "#", codeDatasets: "#", cheatSheets: "#" } },
  { title: "Artificial Intelligence", year: 3, semester: 2, category: "Coding", resources: { papers: "#", coreReading: "#", videoLectures: "#", codeDatasets: "#", cheatSheets: "#" } },
  
  // Year 4, Semester 1
  { title: "Big Data Analytics", year: 4, semester: 1, category: "Coding", resources: { papers: "#", coreReading: "#", videoLectures: "#", codeDatasets: "#", cheatSheets: "#" } },
  { title: "Enterpreneurship", year: 4, semester: 1, category: "Theory", resources: { papers: "#", coreReading: "#", videoLectures: "#", codeDatasets: "#", cheatSheets: "#" } },
  { title: "Networks Administration and Information Security", year: 4, semester: 1, category: "Coding", resources: { papers: "#", coreReading: "#", videoLectures: "#", codeDatasets: "#", cheatSheets: "#" } },
  { title: "Modelling and Simulation", year: 4, semester: 1, category: "Coding", resources: { papers: "#", coreReading: "#", videoLectures: "#", codeDatasets: "#", cheatSheets: "#" } },
  { title: "Fundamentals of Deeplearning", year: 4, semester: 1, category: "Coding", resources: { papers: "#", coreReading: "#", videoLectures: "#", codeDatasets: "#", cheatSheets: "#" } },
  
  // Year 4, Semester 2
  { title: "Contemporary and Emerging Issues in AI and ML", year: 4, semester: 2, category: "Coding", resources: { papers: "#", coreReading: "#", videoLectures: "#", codeDatasets: "#", cheatSheets: "#" } },
  { title: "Data Science System Project", year: 4, semester: 2, category: "Theory", resources: { papers: "#", coreReading: "#", videoLectures: "#", codeDatasets: "#", cheatSheets: "#" } },
  { title: "Bayesian Decision Theory", year: 4, semester: 2, category: "Stats", resources: { papers: "#", coreReading: "#", videoLectures: "#", codeDatasets: "#", cheatSheets: "#" } },
  { title: "Knowledge Engineering", year: 4, semester: 2, category: "Theory", resources: { papers: "#", coreReading: "#", videoLectures: "#", codeDatasets: "#", cheatSheets: "#" } },
  { title: "Industrial Attachment", year: 4, semester: 2, category: "Theory", resources: { papers: "#", coreReading: "#", videoLectures: "#", codeDatasets: "#", cheatSheets: "#" } }
];

// Category to Icon Mapping
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

// Current Filters
let currentFilters = {
  year: 'all',
  semester: 'all',
  category: 'all'
};

// Currently open accordion card
let openCard = null;

// Mobile Menu Toggle
const menuToggle = document.getElementById('menu-toggle');
const nav = document.getElementById('nav');

if (menuToggle) {
  menuToggle.addEventListener('click', function () {
    nav.classList.toggle('open');
    menuToggle.classList.toggle('open');
  });

  // Close menu when nav link is clicked (mobile)
  nav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', function () {
      if (window.innerWidth <= 650 && nav.classList.contains('open')) {
        nav.classList.remove('open');
        menuToggle.classList.remove('open');
      }
    });
  });

  // Responsive adjustment on window resize
  window.addEventListener('resize', function () {
    if (window.innerWidth > 650) {
      nav.classList.remove('open');
      menuToggle.classList.remove('open');
    }
  });
}

// Render Courses Function
function renderCourses() {
  // Filter courses based on current filters
  const filteredCourses = courses.filter(course => {
    const yearMatch = currentFilters.year === 'all' || course.year.toString() === currentFilters.year;
    const semesterMatch = currentFilters.semester === 'all' || course.semester.toString() === currentFilters.semester;
    const categoryMatch = currentFilters.category === 'all' || course.category === currentFilters.category;
    
    return yearMatch && semesterMatch && categoryMatch;
  });

  // Add fade-out effect
  coursesGrid.classList.add('fade-out');

  // Clear grid and render after fade
  setTimeout(() => {
    coursesGrid.innerHTML = '';

    if (filteredCourses.length === 0) {
      noResults.style.display = 'block';
      coursesGrid.classList.remove('fade-out');
      return;
    }

    noResults.style.display = 'none';

    // Render each course card
    filteredCourses.forEach(course => {
      const card = createCourseCard(course);
      coursesGrid.appendChild(card);
    });

    // Reset open card when filtering
    openCard = null;

    // Remove fade-out class to fade in
    setTimeout(() => {
      coursesGrid.classList.remove('fade-out');
    }, 50);
  }, 300);
}

// Create Course Card Element with Accordion
function createCourseCard(course) {
  const card = document.createElement('div');
  card.className = 'resource-card';

  const iconClass = categoryIcons[course.category] || 'fa-book';
  
  card.innerHTML = `
    <div class="card-content">
      <div class="resource-icon">
        <i class="fa-solid ${iconClass}"></i>
      </div>
      <h3>${course.title}</h3>
      <p>Year ${course.year}, Semester ${course.semester}</p>
      <div class="course-meta">
        <span><i class="fa-solid fa-tag"></i> ${course.category}</span>
      </div>
      <button class="card-link view-resources-btn">View Resources</button>
    </div>
    <div class="resource-panel">
      <div class="resources-list">
        <a href="${course.resources.papers}" class="resource-button">
          <i data-lucide="file-text"></i>
          <span>Past Papers</span>
        </a>
        <a href="${course.resources.coreReading}" class="resource-button">
          <i data-lucide="book-open"></i>
          <span>Core Reading</span>
        </a>
        <a href="${course.resources.videoLectures}" class="resource-button">
          <i data-lucide="play-circle"></i>
          <span>Video Lectures</span>
        </a>
        <a href="${course.resources.codeDatasets}" class="resource-button">
          <i data-lucide="terminal"></i>
          <span>Code & Datasets</span>
        </a>
        <a href="${course.resources.cheatSheets}" class="resource-button">
          <i data-lucide="layers"></i>
          <span>Cheat Sheets</span>
        </a>
      </div>
    </div>
  `;

  // Add click event to View Resources button
  const viewBtn = card.querySelector('.view-resources-btn');
  viewBtn.addEventListener('click', (e) => {
    e.preventDefault();
    toggleAccordion(card);
  });

  // Initialize Lucide icons
  setTimeout(() => {
    lucide.createIcons();
  }, 100);

  return card;
}

// Toggle Accordion Function
function toggleAccordion(card) {
  const isActive = card.classList.contains('active');

  // Close currently open card if different
  if (openCard && openCard !== card) {
    openCard.classList.remove('active');
  }

  // Toggle current card
  if (isActive) {
    card.classList.remove('active');
    openCard = null;
  } else {
    card.classList.add('active');
    openCard = card;
  }

  // Re-initialize Lucide icons after toggle
  setTimeout(() => {
    lucide.createIcons();
  }, 50);
}

// Filter Event Listeners
yearFilter.addEventListener('change', function() {
  currentFilters.year = this.value;
  renderCourses();
});

semesterFilter.addEventListener('change', function() {
  currentFilters.semester = this.value;
  renderCourses();
});

categoryPills.forEach(pill => {
  pill.addEventListener('click', function() {
    // Remove active class from all pills
    categoryPills.forEach(p => p.classList.remove('active'));
    // Add active class to clicked pill
    this.classList.add('active');
    // Update filter
    currentFilters.category = this.getAttribute('data-category');
    renderCourses();
  });
});

// Initial Render
renderCourses();

