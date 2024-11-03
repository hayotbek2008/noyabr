document.addEventListener('DOMContentLoaded', () => {
  const emojisContainer = document.querySelector('.emojis');

  // Set emojis content (more emojis)
  const emojis = '🎉 🎈 🎂 🎊 🎁 🎉 🎈 🎂'; // Multiple birthday emojis
  emojisContainer.textContent = emojis; // Set emojis content

  // Function to animate emojis
  const animateEmojis = () => {
    emojisContainer.style.top = '-50px'; // Start position
    emojisContainer.style.opacity = '1'; // Make emojis visible

    // Create a falling animation
    let position = -50; // Initial position above the card
    const interval = setInterval(() => {
      position += 2; // Move down by 2 pixels
      emojisContainer.style.top = `${position}px`;

      // When it reaches the center of the screen
      if (position > window.innerHeight / 2) {
        clearInterval(interval); // Stop the current animation
        emojisContainer.style.opacity = '0'; // Fade out
        emojisContainer.style.top = `${window.innerHeight}px`; // Move out of view
      }
    }, 50); // Interval for movement speed

    // Restart the animation after a short delay
    setTimeout(() => {
      animateEmojis();
    }, 500); // Time delay before restarting
  };

  animateEmojis(); // Start the animation
});
