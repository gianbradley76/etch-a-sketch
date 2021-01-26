const container = document.querySelector(".container");
const reset = document.getElementById("reset-btn");
const slider = document.getElementById("range");

// Create grid
function makeGrid(cell_num) {
	container.style.gridTemplateColumns = `repeat(${cell_num}, auto)`;

	let r = "";
	for (let i = 0; i < cell_num * cell_num; i++) {
		r += '<div class="grid-cell"></div>';
	}

	container.innerHTML = r;
}

// Create initial grid
makeGrid(slider.value);
let cells = document.querySelectorAll(".grid-cell");

// Change grid size depending on slide value
slider.onmouseup = () => {
	makeGrid(slider.value);
	let cells = document.querySelectorAll(".grid-cell");
	cells.forEach((cell) => {
		cell.addEventListener("mouseover", change_background);
		cell.addEventListener("mouseout", change_background);
	});
};

function change_background() {
	this.classList.add("hovered");
}

// change color when hovered
cells.forEach((cell) => {
	cell.addEventListener("mouseover", change_background);
	cell.addEventListener("mouseout", change_background);
});

// reset grid size and removes drawing
reset.addEventListener("click", () => {
	document.querySelectorAll(".grid-cell").forEach((cell) => {
		cell.classList.remove("hovered");
	});
});
