// Function to open the modal with clicked image
function openModal(imageElement) {
  var modal = document.getElementById('modal');
  var modalImage = document.getElementById('modal-img');
  var modalGallery = document.getElementById('modal-gallery');

  // Get the value of the data-modal attribute of the clicked image
  var productId = imageElement.getAttribute('data-modal');

  // Set the main image in the modal
  modalImage.src = imageElement.src;

  // Clear any existing gallery images
  modalGallery.innerHTML = '';

  // Load the appropriate set of images for the modal gallery based on the clicked image
  var galleryImages = getGalleryImages(productId);
  galleryImages.forEach(function(imageSrc) {
      var imgElement = document.createElement('img');
      imgElement.src = imageSrc;
      imgElement.alt = 'Product Image';
      modalGallery.appendChild(imgElement);
  });

  // Display the modal
  modal.style.display = 'flex';
}

// Function to close the modal
function closeModal() {
  var modal = document.getElementById('modal');
  modal.style.display = 'none';
}

// Close the modal if clicked outside the modal content
window.onclick = function(event) {
  var modal = document.getElementById('modal');
  if (event.target == modal) {
      closeModal();
  }
}

// Function to return different sets of images based on the product ID
function getGalleryImages(productId) {
  var images = {
      product1: [
          "https://via.placeholder.com/600x400?text=Product+1+Image+1",
          "https://via.placeholder.com/600x400?text=Product+1+Image+2",
          "https://via.placeholder.com/600x400?text=Product+1+Image+3"
      ],
      product2: [
          "https://via.placeholder.com/600x400?text=Product+2+Image+1",
          "https://via.placeholder.com/600x400?text=Product+2+Image+2",
          "https://via.placeholder.com/600x400?text=Product+2+Image+3"
      ],
      product3: [
          "https://via.placeholder.com/600x400?text=Product+3+Image+1",
          "https://via.placeholder.com/600x400?text=Product+3+Image+2",
          "https://via.placeholder.com/600x400?text=Product+3+Image+3"
      ],
      product4: [
          "https://via.placeholder.com/600x400?text=Product+4+Image+1",
          "https://via.placeholder.com/600x400?text=Product+4+Image+2",
          "https://via.placeholder.com/600x400?text=Product+4+Image+3"
      ]
  };

  // Return the corresponding image array
  return images[productId] || [];
}