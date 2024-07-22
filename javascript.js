document.getElementById('btnNewGrid').addEventListener('click', function() {
  let squaresPerSide = prompt("Enter the number of squares per side for the new grid:");
  squaresPerSide = parseInt(squaresPerSide);
  if (!isNaN(squaresPerSide) && (101 > squaresPerSide > 0)) {
      createGrid(squaresPerSide);
  } else if (squaresPerSide > 100) {
      alert("Please enter a number below 100.");
  } else {
      alert("Please enter a valid number.");
  }
});

function createGrid(squares) {
  const container = document.getElementById('gridContainer');
  container.innerHTML = ''; // Clear existing grid

  // Update the size of each grid item based on the new number of squares
  let size = 960 / squares; // Calculate the size of each square based on the container size
  for (let i = 0; i < squares * squares; i++) {
      const newDiv = document.createElement('div');
      newDiv.className = 'gridItem';
      newDiv.style.width = `${size}px`;
      newDiv.style.height = `${size}px`;
      newDiv.addEventListener('mouseover', function() {
          this.style.backgroundColor = 'red';
      });
      container.appendChild(newDiv);
  }
}

createGrid(16); // Initialize with a default 16x16 grid