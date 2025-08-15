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