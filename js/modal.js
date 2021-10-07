var modal = document.getElementById("images-modal");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");

var images = document.getElementsByClassName("modal-image");
for (x in images)
{
    images[x].onclick = function() {
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
    };
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
} 