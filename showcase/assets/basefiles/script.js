// Function to open the image modal
function openImageModal(imageId) {
  document.getElementById(`imageModal${imageId}`).style.display = 'flex';
}

// Function to close the image modal
function closeImageModal(imageId) {
  document.getElementById(`imageModal${imageId}`).style.display = 'none';
}

// Hamburger menu toggle (same as before)
document.getElementById("hamburger-icon").addEventListener("click", function() {
  const menu = document.getElementById("dropdown-menu");
  menu.classList.toggle("active");
});
