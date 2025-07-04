function toggleMenu() {
    document.getElementById("navLinks").classList.toggle("show");
}

const texts = ["Programmer", "Developer", "Engineer", "YouTuber","Photograper"];
    let count = 0;
    let index = 0;
    let currentText = '';
    let letter = '';

    function type() {
      if (count === texts.length) {
        count = 0;
      }
      currentText = texts[count];
      letter = currentText.slice(0, ++index);

      document.getElementById('typeText').textContent = letter;

      if (letter.length === currentText.length) {
        setTimeout(() => {
          erase();
        }, 1500); // Wait before erasing
      } else {
        setTimeout(type, 100); // Typing speed
      }
    }

    function erase() {
      letter = currentText.slice(0, --index);
      document.getElementById('typeText').textContent = letter;

      if (index === 0) {
        count++;
        setTimeout(type, 500); // Delay before typing next
      } else {
        setTimeout(erase, 50); // Erasing speed
      }
    }

    // Start animation
    type();