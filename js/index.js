// Global Variables
let paintingAreaDimension = 16;
let color = $("#color").val();
let action = $("#action").val();


// Functions
function changeColor(pixel, color) {
	$(pixel).css("background-color", color)
}


// Generating the painting area
for (let i = 1; i<= paintingAreaDimension; i++) {
	for (let j = 1; j<= paintingAreaDimension; j++) {
		$("#painting-area").append(`<button class="pixel" id="pixel${i}${j}"></button>`);
		$(`#pixel${i}${j}`).css("grid-area", `${i} / ${j} / span 1 / span 1`);
	}
}


// Setting the pixel's height the same as their width
const PIXEL_WIDTH = $(".pixel").css("width");
$(".pixel").css("height", `${PIXEL_WIDTH}`);


// Choosing the color
$("#color").change(function() {
	color = $(this).val();
});


// Changing the action
$("#action").change(function() {
	action = $(this).val();
});


// Doing things on pixels
$("#painting-area").mousedown(function() {

	$(".pixel").mousemove(function() {
    switch (action) {
      case "paint":
        changeColor(this, color);
        break;
      case "erase":
        changeColor(this, "transparent");
        break;
      default:
        console.log("weird");
    }
  });

  $(".pixel").mouseup(function() {
    $(".pixel").off();
    switch (action) {
      case "paint":
        changeColor(this, color);
        break;
      case "erase":
        changeColor(".pixel:hover", "#ccc");
        changeColor(this, "transparent");
        break;
      default:
        console.log("weird");
    }
  });

});


// Clearing the painting area
$("#clear").click(() => {
	changeColor(".pixel", "transparent");
  changeColor(".pixel:hover", "#ccc");
});
