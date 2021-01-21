const container = document.getElementById("container");

// Creates the grid
function make_items(cell_num) {
	let r = "";
	for (let i = 0; i < cell_num; i++) {
		r += '<div class="row">';
		for (let j = 0; j < cell_num; j++) {
			r += '<div class="cell"></div>';
		}
		r += "</div>";
	}
	container.innerHTML = r;
}
make_items(16);

// For changing of cell color when hovered
const cells = document.querySelectorAll(".cell");

function change_background() {
	this.classList.add("hovered");
}

cells.forEach((cell) => {
	cell.addEventListener("mouseover", change_background);
	cell.addEventListener("mouseout", change_background);
});
