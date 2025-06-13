document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.clickable-image');
    const captions = {
      img1: document.getElementById('caption1'),
      img2: document.getElementById('caption2'),
      img3: document.getElementById('caption3')
    };
    const finalMessage = document.getElementById('final-message');
    const clickedImages = new Set();
  
    images.forEach((img) => {
      img.addEventListener('click', () => {
        const imgId = img.id;
        if (!clickedImages.has(imgId)) {
          captions[imgId].textContent = '냠';
          clickedImages.add(imgId);
  
          if (clickedImages.size === images.length) {
            finalMessage.textContent = 'Time to eat lunch';
            finalMessage.style.cursor = 'pointer';
            finalMessage.style.textDecoration = 'underline';
  
            // Add click event to redirect to main.html
            finalMessage.addEventListener('click', () => {
              window.location.href = 'main.html';
            });
          }
        }
      });
    });
  });
  