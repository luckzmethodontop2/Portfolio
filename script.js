// Function to simulate testing the Memory Game
function testMemoryGame() {
  // Display the Memory Game in a new window or iframe for testing
  openTestWindow('Memory Game', 'memory-game.html');
}

// Function to simulate testing the Snake Game
function testSnakeGame() {
  // Display the Snake Game in a new window or iframe for testing
  openTestWindow('Snake Game', 'snake-game.html');
}

// Function to open a test window with the specified game
function openTestWindow(gameName, gameUrl) {
  const testWindow = window.open(gameUrl, '_blank', 'width=600,height=400');
  if (!testWindow) {
    alert(`Failed to open ${gameName}. Please enable pop-ups for this website.`);
  }
}

// Function to close the project details popup
function closeProjectDetails() {
  document.getElementById('projectDetailsModal').style.display = 'none';
}

// Logic for the Memory Game
function testMemoryGame() {
  openTestWindow('Memory Game', 'memory-game.html');
}

// Logic for the Snake Game
function testSnakeGame() {
  openTestWindow('Snake Game', 'snake-game.html');
}

// ... (other functions if any) ...
