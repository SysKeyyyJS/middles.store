// Array of livery data (thumbnail and full images)
const liveries = {
  livery1: [
    "https://cdn.middles.store/showcase/com1/bullhorn2.png", "https://cdn.middles.store/showcase/com1/bullhorn3.png", "https://cdn.middles.store/showcase/com1/bullhorn4.png"
  ],
  livery2: [
    "https://cdn.middles.store/showcase/com2/trailer2.png", "https://cdn.middles.store/showcase/com2/trailer3.png", "https://cdn.middles.store/showcase/com2/trailer4.png"
  ],
  livery3: [
    "https://cdn.middles.store/showcase/com3/statetroopersuv2.png", "https://cdn.middles.store/showcase/com3/statetroopersuv3.png", "https://cdn.middles.store/showcase/com3/statetroopersuv4.png"
  ],
  livery4: [
    "https://cdn.middles.store/showcase/com4/", "https://cdn.middles.store/showcase/com4/", "https://cdn.middles.store/showcase/com4"
  ]
};

// Function to open the modal and display images
function openModal(liveryKey) {
  const modal = document.getElementById("modal");
  const modalImages = document.getElementById("modal-images");

  // Clear any existing images
  modalImages.innerHTML = "";

  // Loop through the livery images and add them to the modal
  liveries[liveryKey].forEach(imageSrc => {
    const img = document.createElement("img");
    img.src = imageSrc;
    img.alt = `Image for ${liveryKey}`;
    modalImages.appendChild(img);
  });

  // Show the modal
  modal.style.display = "block";
}

// Close the modal
function closeModal() {
  const modal = document.getElementById("modal");
  modal.style.display = "none";
}

// Event listener for close button
document.getElementById("close-modal").addEventListener("click", closeModal);

// Event listener for gallery images
const galleryItems = document.querySelectorAll(".gallery-item");
galleryItems.forEach(item => {
  item.addEventListener("click", function() {
    const liveryKey = item.getAttribute("data-livery");
    openModal(liveryKey);
  });
});

// Close modal if clicked outside of modal content
window.onclick = function(event) {
  const modal = document.getElementById("modal");
  if (event.target === modal) {
    closeModal();
  }
};
