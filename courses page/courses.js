// Course Data Structure with Resources
const courses = [
  // Year 1, Semester 1
  { 
    title: "Introduction to Programming-C Programming", 
    year: 1, 
    semester: 1, 
    category: "Coding",
    resources: {
      papers: "#",
      texts: "#",
      videos: "#",
      other: "#"
    }
  },
  { 
    title: "Precalculus", 
    year: 1, 
    semester: 1, 
    category: "Maths",
    resources: {
      papers: "#",
      texts: "#",
      videos: "#",
      other: "#"
    }
  },
  { 
    title: "Computer and Communication Technology", 
    year: 1, 
    semester: 1, 
    category: "Coding",
    resources: {
      papers: "#",
      texts: "#",
      videos: "#",
      other: "#"
    }
  },
  { 
    title: "Communication Skills I", 
    year: 1, 
    semester: 1, 
    category: "Theory",
    resources: {
      papers: "#",
      texts: "#",
      videos: "#",
      other: "#"
    }
  },
  { 
    title: "End User Computing", 
    year: 1, 
    semester: 1, 
    category: "Maths",
    resources: {
      papers: "#",
      texts: "#",
      videos: "#",
      other: "#"
    }
  },
  
  // Year 1, Semester 2
  { 
    title: "Python Programming", 
    year: 1, 
    semester: 2, 
    category: "Coding",
    resources: {
      papers: "#",
      texts: "#",
      videos: "#",
      other: "#"
    }
  },
  { 
    title: "Calculus", 
    year: 1, 
    semester: 2, 
    category: "Maths",
    resources: {
      papers: "#",
      texts: "#",
      videos: "#",
      other: "#"
    }
  },
  { 
    title: "Introduction to Statistical Analysis", 
    year: 1, 
    semester: 2, 
    category: "Stats",
    resources: {
      papers: "#",
      texts: "#",
      videos: "#",
      other: "#"
    }
  },
  { 
    title: "Introduction to Data Science", 
    year: 1, 
    semester: 2, 
    category: "Coding",
    resources: {
      papers: "#",
      texts: "#",
      videos: "#",
      other: "#"
    }
  },
  { 
    title: "Communication Skills II", 
    year: 1, 
    semester: 2, 
    category: "Theory",
    resources: {
      papers: "#",
      texts: "#",
      videos: "#",
      other: "#"
    }
  },
  
  // Year 2, Semester 1
  { 
    title: "Java Programming", 
    year: 2, 
    semester: 1, 
    category: "Coding",
    resources: {
      papers: "#",
      texts: "#",
      videos: "#",
      other: "#"
    }
  },
  { 
    title: "Linear Algebra", 
    year: 2, 
    semester: 1, 
    category: "Maths",
    resources: {
      papers: "#",
      texts: "#",
      videos: "#",
      other: "#"
    }
  },
  { 
    title: "Data Wrangling and Exploratory Data Analysis", 
    year: 2, 
    semester: 1, 
    category: "Coding",
    resources: {
      papers: "#",
      texts: "#",
      videos: "#",
      other: "#"
    }
  },
  { 
    title: "Computer Networks I", 
    year: 2, 
    semester: 1, 
    category: "Theory",
    resources: {
      papers: "#",
      texts: "#",
      videos: "#",
      other: "#"
    }
  },
  { 
    title: "Cloud Computing", 
    year: 2, 
    semester: 1, 
    category: "Theory",
    resources: {
      papers: "#",
      texts: "#",
      videos: "#",
      other: "#"
    }
  },
  
  // Year 2, Semester 2
  { 
    title: "Databases", 
    year: 2, 
    semester: 2, 
    category: "Coding",
    resources: {
      papers: "#",
      texts: "#",
      videos: "#",
      other: "#"
    }
  },
  { 
    title: "Discrete mathematics", 
    year: 2, 
    semester: 2, 
    category: "Maths",
    resources: {
      papers: "#",
      texts: "#",
      videos: "#",
      other: "#"
    }
  },
  { 
    title: "System Analysis and Design", 
    year: 2, 
    semester: 2, 
    category: "Theory",
    resources: {
      papers: "#",
      texts: "#",
      videos: "#",
      other: "#"
    }
  },
  { 
    title: "Non-Parametric Inference", 
    year: 2, 
    semester: 2, 
    category: "Stats",
    resources: {
      papers: "#",
      texts: "#",
      videos: "#",
      other: "#"
    }
  },
  { 
    title: "Machine Learning", 
    year: 2, 
    semester: 2, 
    category: "Coding",
    resources: {
      papers: "#",
      texts: "#",
      videos: "#",
      other: "#"
    }
  },
  
  // Year 3, Semester 1
  { 
    title: "Stochastic Modelling", 
    year: 3, 
    semester: 1, 
    category: "Stats",
    resources: {
      papers: "#",
      texts: "#",
      videos: "#",
      other: "#"
    }
  },
  { 
    title: "Optimization", 
    year: 3, 
    semester: 1, 
    category: "Maths",
    resources: {
      papers: "#",
      texts: "#",
      videos: "#",
      other: "#"
    }
  },
  { 
    title: "Data Structures and Algorithms", 
    year: 3, 
    semester: 1, 
    category: "Coding",
    resources: {
      papers: "#",
      texts: "#",
      videos: "#",
      other: "#"
    }
  },
  { 
    title: "Research Methods", 
    year: 3, 
    semester: 1, 
    category: "Theory",
    resources: {
      papers: "#",
      texts: "#",
      videos: "#",
      other: "#"
    }
  },
  { 
    title: "Web Programming", 
    year: 3, 
    semester: 1, 
    category: "Coding",
    resources: {
      papers: "#",
      texts: "#",
      videos: "#",
      other: "#"
    }
  },
  
  // Year 3, Semester 2
  { 
    title: "Data Mining and Warehousing", 
    year: 3, 
    semester: 2, 
    category: "Coding",
    resources: {
      papers: "#",
      texts: "#",
      videos: "#",
      other: "#"
    }
  },
  { 
    title: "Data Virtualization & Data Visualization", 
    year: 3, 
    semester: 2, 
    category: "Coding",
    resources: {
      papers: "#",
      texts: "#",
      videos: "#",
      other: "#"
    }
  },
  { 
    title: "Applied Regression Analysis", 
    year: 3, 
    semester: 2, 
    category: "Stats",
    resources: {
      papers: "#",
      texts: "#",
      videos: "#",
      other: "#"
    }
  },
  { 
    title: "Group Projects", 
    year: 3, 
    semester: 2, 
    category: "Coding",
    resources: {
      papers: "#",
      texts: "#",
      videos: "#",
      other: "#"
    }
  },
  { 
    title: "Artificial Intelligence", 
    year: 3, 
    semester: 2, 
    category: "Coding",
    resources: {
      papers: "#",
      texts: "#",
      videos: "#",
      other: "#"
    }
  },
  
  // Year 4, Semester 1
  { 
    title: "Big Data Analytics", 
    year: 4, 
    semester: 1, 
    category: "Coding",
    resources: {
      papers: "#",
      texts: "#",
      videos: "#",
      other: "#"
    }
  },
  { 
    title: "Enterpreneurship", 
    year: 4, 
    semester: 1, 
    category: "Theory",
    resources: {
      papers: "#",
      texts: "#",
      videos: "#",
      other: "#"
    }
  },
  { 
    title: "Networks Administration and Information Security", 
    year: 4, 
    semester: 1, 
    category: "Coding",
    resources: {
      papers: "#",
      texts: "#",
      videos: "#",
      other: "#"
    }
  },
  { 
    title: "Modelling and Simulation", 
    year: 4, 
    semester: 1, 
    category: "Coding",
    resources: {
      papers: "#",
      texts: "#",
      videos: "#",
      other: "#"
    }
  },
  { 
    title: "Fundamentals of Deeplearning", 
    year: 4, 
    semester: 1, 
    category: "Coding",
    resources: {
      papers: "#",
      texts: "#",
      videos: "#",
      other: "#"
    }
  },
  
  // Year 4, Semester 2
  { 
    title: "Contemporary and Emerging Issues in AI and ML", 
    year: 4, 
    semester: 2, 
    category: "Coding",
    resources: {
      papers: "#",
      texts: "#",
      videos: "#",
      other: "#"
    }
  },
  { 
    title: "Data Science System Project", 
    year: 4, 
    semester: 2, 
    category: "Maths",
    resources: {
      papers: "#",
      texts: "#",
      videos: "#",
      other: "#"
    }
  },
  { 
    title: "Bayesian Decision Theory", 
    year: 4, 
    semester: 2, 
    category: "Stats",
    resources: {
      papers: "#",
      texts: "#",
      videos: "#",
      other: "#"
    }
  },
  { 
    title: "Knowledge Engineering", 
    year: 4, 
    semester: 2, 
    category: "Theory",
    resources: {
      papers: "#",
      texts: "#",
      videos: "#",
      other: "#"
    }
  },
  { 
    title: "Industrial Attachment", 
    year: 4, 
    semester: 2, 
    category: "Theory",
    resources: {
      papers: "#",
      texts: "#",
      videos: "#",
      other: "#"
    }
  }
];

// Category to Icon Mapping
const categoryIcons = {
  "Coding": "fa-code",
  "Maths": "fa-calculator",
  "Stats": "fa-chart-line",
  "Theory": "fa-book"
};

// DOM Elements
const coursesAccordion = document.getElementById('courses-accordion');
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

// Currently open accordion item
let openAccordion = null;

// Mobile Menu Toggle
const menuToggle = document.getElementById('menu-toggle');
const nav = document.getElementById('nav');

if (menuToggle) {
  menuToggle.addEventListener('click', function () {
    nav.classList.toggle('open');
    menuToggle.classList.toggle('open');
  });

  nav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', function () {
      if (window.innerWidth <= 650 && nav.classList.contains('open')) {
        nav.classList.remove('open');
        menuToggle.classList.remove('open');
      }
    });
  });

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
  coursesAccordion.classList.add('fade-out');

  // Clear accordion and render after fade
  setTimeout(() => {
    coursesAccordion.innerHTML = '';
    openAccordion = null;

    if (filteredCourses.length === 0) {
      noResults.style.display = 'block';
      coursesAccordion.classList.remove('fade-out');
      return;
    }

    noResults.style.display = 'none';

    // Render each course accordion item
    filteredCourses.forEach((course, index) => {
      const accordionItem = createAccordionItem(course, index);
      coursesAccordion.appendChild(accordionItem);
    });

    // Remove fade-out class to fade in
    setTimeout(() => {
      coursesAccordion.classList.remove('fade-out');
    }, 50);
  }, 300);
}

// Create Accordion Item Element
function createAccordionItem(course, index) {
  const item = document.createElement('div');
  item.className = 'accordion-item';
  item.setAttribute('data-index', index);

  const iconClass = categoryIcons[course.category] || 'fa-book';
  
  item.innerHTML = `
    <div class="accordion-header">
      <div class="accordion-header-content">
        <div class="accordion-icon">
          <i class="fa-solid ${iconClass}"></i>
        </div>
        <div class="accordion-title-group">
          <h3 class="accordion-title">${course.title}</h3>
          <div class="accordion-meta">
            <span>Year ${course.year}</span>
            <span>Semester ${course.semester}</span>
            <span>${course.category}</span>
          </div>
        </div>
      </div>
      <i data-lucide="chevron-down" class="accordion-arrow"></i>
    </div>
    <div class="accordion-panel">
      <div class="resources-grid">
        <a href="${course.resources.papers}" class="resource-button">
          <i data-lucide="file-text"></i>
          <span>Past Papers</span>
        </a>
        <a href="${course.resources.texts}" class="resource-button">
          <i data-lucide="book-open"></i>
          <span>Prescribed Texts</span>
        </a>
        <a href="${course.resources.videos}" class="resource-button">
          <i data-lucide="video"></i>
          <span>Recordings</span>
        </a>
        <a href="${course.resources.other}" class="resource-button">
          <i data-lucide="plus-circle"></i>
          <span>Other Resources</span>
        </a>
      </div>
    </div>
  `;

  // Add click event to header
  const header = item.querySelector('.accordion-header');
  header.addEventListener('click', () => toggleAccordion(item));

  // Initialize Lucide icons
  setTimeout(() => {
    lucide.createIcons();
  }, 100);

  return item;
}

// Toggle Accordion Function
function toggleAccordion(item) {
  const isActive = item.classList.contains('active');

  // Close currently open accordion if different
  if (openAccordion && openAccordion !== item) {
    openAccordion.classList.remove('active');
  }

  // Toggle current item
  if (isActive) {
    item.classList.remove('active');
    openAccordion = null;
  } else {
    item.classList.add('active');
    openAccordion = item;
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
    categoryPills.forEach(p => p.classList.remove('active'));
    this.classList.add('active');
    currentFilters.category = this.getAttribute('data-category');
    renderCourses();
  });
});

// Initial Render
renderCourses();

