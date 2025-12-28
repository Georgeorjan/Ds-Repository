// Past Papers Modal Logic for QueryMzuni

// Assuming a global 'courses' array exists, e.g. [{ id: 1, title: "...", resources: { papers: [...] } }, ...]

// --- Modal Show/Hide Helpers ---

/**
 * Shows the Past Papers modal.
 */
function showPapersModal() {
  const modal = document.getElementById('past-papers-modal');
  if (modal) {
    modal.style.display = 'flex'; // Use flex as per CSS
    setTimeout(() => {
      modal.classList.add('active'); // Used for possible transitions if desired
    }, 10);
    document.body.style.overflow = 'hidden'; // Prevent background scroll
  }
}

/**
 * Hides the Past Papers modal.
 */
function hidePapersModal() {
  const modal = document.getElementById('past-papers-modal');
  if (modal) {
    modal.classList.remove('active');
    modal.style.display = 'none';
    document.body.style.overflow = '';
  }
}

// --- Main Modal Logic ---

/**
 * Opens the modal and populates it with past paper links for a specific course.
 * @param {string|number} courseId 
 */
function openPapersModal(courseId) {
  // Get modal elements
  const modal = document.getElementById('past-papers-modal');
  const listContainer = document.getElementById('past-papers-list');
  const emptyState = document.getElementById('past-papers-empty-state');

  if (!listContainer || !emptyState) return;

  // Find the relevant course (by ID or title)
  let course = courses.find(c => c.id == courseId || c.title == courseId);
  if (!course || !course.resources || !Array.isArray(course.resources.papers)) {
    emptyState.style.display = '';
    listContainer.innerHTML = '';
    showPapersModal();
    lucide?.createIcons?.();
    return;
  }

  const papers = course.resources.papers;

  // Clear previous content
  listContainer.innerHTML = '';

  if (!papers || papers.length === 0) {
    // Show empty state
    emptyState.style.display = '';
    showPapersModal();
    lucide?.createIcons?.();
    return;
  }

  // Hide empty state
  emptyState.style.display = 'none';

  // Populate file-list
  papers.forEach(paper => {
    // Paper properties: year, type, url
    const row = document.createElement('div');
    row.className = 'file-list-item';

    row.innerHTML = `
      <span class="file-icon">
        <i data-lucide="file-text"></i>
      </span>
      <span class="file-year">${paper.year || 'Unknown Year'}</span>
      <span class="file-type">${paper.type || 'Unknown Type'}</span>
      <a class="download-btn" href="${paper.url || '#'}" target="_blank" rel="noopener" download>
        <i data-lucide="download"></i>
        Download
      </a>
    `;

    listContainer.appendChild(row);
  });

  showPapersModal();
  if (typeof lucide !== 'undefined' && lucide.createIcons) {
    lucide.createIcons();
  }
}

// --- Modal Event Listeners ---
// Close button
document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('past-papers-modal');
  const closeBtn = document.getElementById('close-past-papers-modal');

  if (closeBtn) {
    closeBtn.addEventListener('click', hidePapersModal);
  }

  // Dark overlay click (close only if clicking outside modal-content)
  if (modal) {
    modal.addEventListener('mousedown', function (e) {
      if (e.target === modal) {
        hidePapersModal();
      }
    });
  }

  // Contribute button (Optional: link to upload or contribute page)
  const emptyState = document.getElementById('past-papers-empty-state');
  if (emptyState) {
    const contributeBtn = emptyState.querySelector('.contribute-button');
    if (contributeBtn) {
      contributeBtn.addEventListener('click', function (e) {
        e.preventDefault();
        // You may integrate this with your upload/contribute modal or process
        alert('Contribution functionality coming soon!');
      });
    }
  }
});

// --- Usage in createCourseCard ---

// Example integration (pseudo-code, to insert in createCourseCard):
// const papersBtn = ...; // Reference to the 'Past Papers' button for this course
// papersBtn.addEventListener('click', () => openPapersModal(course.id));

