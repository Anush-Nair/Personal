const toggleBtn = document.getElementById('toggleButton');
const toggleBtnBottom = document.getElementById('toggleButtonBottom');
const content = document.getElementById('content');
const duration = 400; // match CSS transition time
const scrollOffset = 500; // pixels to scroll down slightly

// Function to collapse
function collapseContent() {
    content.classList.add('hiding');
    content.style.maxHeight = content.scrollHeight + 'px';
    requestAnimationFrame(() => {
        content.style.maxHeight = '0px';
        content.classList.remove('show');
    });
    setTimeout(() => {
        content.classList.remove('hiding');
    }, duration);
    toggleBtn.textContent = 'Show More';
}

// Function to expand
function expandContent() {
    content.classList.add('show', 'showing');
    content.style.maxHeight = content.scrollHeight + 'px';
    setTimeout(() => {
        content.style.maxHeight = 'none';
        content.classList.remove('showing');
    }, duration);
    toggleBtn.textContent = 'Show Less';

    // Slight scroll down to reveal the hidden section
    setTimeout(() => {
        window.scrollBy({ top: scrollOffset, behavior: 'smooth' });
    }, 50); // small delay to start scroll after expansion begins
}

// Top toggle button
toggleBtn.addEventListener('click', function () {
    if (content.classList.contains('show')) {
        collapseContent();
    } else {
        expandContent();
    }
});

// Bottom close button
toggleBtnBottom.addEventListener('click', () => {
    if (content.classList.contains('show')) {
        collapseContent();
    }
    // Scroll to top button
    toggleBtn.scrollIntoView({ behavior: 'smooth', block: 'start' });
});








// Scroll reveal animations
const observerOptions = {
  threshold: 0.2 // triggers when 20% of the element is visible
};

const revealOnScroll = (entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in-view');
      entry.target.classList.remove('out-of-view');
    } else {
      entry.target.classList.remove('in-view');
      entry.target.classList.add('out-of-view');
    }
  });
};

const observer = new IntersectionObserver(revealOnScroll, observerOptions);

// Observe all sections and cards
document.querySelectorAll('section, .skill-card, .work-card, .iitc, .srmi, .prj1, .prj2, .prj3, .awards, .interest-card').forEach(el => {
  observer.observe(el);
});






// --- Change "Home" text to "Top" after scrolling past intro ---

// Select the first section (your intro container)
const introSection = document.querySelector('.container');
const homeLink = document.querySelector('.topnav a[href="#home"]');

// Create an intersection observer to detect when intro is mostly out of view
const introObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) {
        homeLink.textContent = 'Go to Top';
      } else {
        homeLink.textContent = 'Home';
      }
    });
  },
  {
    root: null,
    threshold: 0.3 // triggers when 30% of intro is visible
  }
);

// Observe the intro section
if (introSection && homeLink) {
  introObserver.observe(introSection);
}




homeLink.addEventListener('click', (e) => {
  e.preventDefault();
  window.scrollTo({ top: 0, behavior: 'smooth' });
});




