// Achievement data
const achievements = [
  {
    id: 1,
    title: "Project Alpha",
    description: "Led team to success with innovative solutions",
    imageUrl: "ACHIVMENT.jpg"
  },
  {
    id: 2,
    title: "Excellence Award",
    description: "Recognized for outstanding performance",
    imageUrl: "https://images.unsplash.com/photo-1607893378714-007fd47c8719?w=1200&h=900&fit=crop"
  },
  {
    id: 3,
    title: "Tech Conference",
    description: "Keynote speaker at industry-leading event",
    imageUrl: "https://images.unsplash.com/photo-1551818255-e6e10975bc17?w=1200&h=900&fit=crop"
  },
  {
    id: 4,
    title: "Publication",
    description: "Research paper published in top journal",
    imageUrl: "https://images.unsplash.com/photo-1512486130939-2c4f79935e4f?w=1200&h=900&fit=crop"
  },
  {
    id: 5,
    title: "Community Impact",
    description: "Volunteer work making positive change",
    imageUrl: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=1200&h=900&fit=crop"
  },
  {
    id: 6,
    title: "Innovation Prize",
    description: "First place in technology competition",
    imageUrl: "https://images.unsplash.com/photo-1560439514-4e9645039924?w=1200&h=900&fit=crop"
  }
];

// DOM elements
const achievementsGrid = document.querySelector('.achievements-grid');
const modal = document.getElementById('achievementModal');
const modalImage = document.getElementById('modalImage');
const modalTitle = document.getElementById('modalTitle');
const modalDescription = document.getElementById('modalDescription');
const closeButton = document.querySelector('.close-button');

// Create achievement cards and add them to the grid
function renderAchievements() {
  achievements.forEach(achievement => {
    const card = document.createElement('div');
    card.className = 'achievement-card';
    card.innerHTML = `
      <div class="card-image-container">
        <img src="${achievement.imageUrl}" alt="${achievement.title}" class="card-image">
        <div class="card-text-overlay">
          <h3 class="card-title">${achievement.title}</h3>
          <p class="card-description">${achievement.description}</p>
        </div>
      </div>
    `;
    
    // Add click event to show modal
    card.addEventListener('click', () => {
      openModal(achievement);
    });
    
    achievementsGrid.appendChild(card);
  });
}

// Function to open modal with achievement details
function openModal(achievement) {
  modalImage.src = achievement.imageUrl;
  modalImage.alt = achievement.title;
  modalTitle.textContent = achievement.title;
  modalDescription.textContent = achievement.description;
  modal.style.display = 'block';
  document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
}

// Close modal when clicking the close button
closeButton.addEventListener('click', () => {
  closeModal();
});

// Close modal when clicking outside the modal content
window.addEventListener('click', (event) => {
  if (event.target === modal) {
    closeModal();
  }
});

// Close modal when pressing escape key
window.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    closeModal();
  }
});

// Function to close the modal
function closeModal() {
  modal.style.display = 'none';
  document.body.style.overflow = ''; // Restore scrolling
}

// Initialize the page
renderAchievements();