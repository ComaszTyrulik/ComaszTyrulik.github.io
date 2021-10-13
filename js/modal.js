var modal = document.getElementById("images-modal");
var modalImg = document.getElementById("img01");
var wideModalImage = document.getElementById("img02");
var captionText = document.getElementById("caption");

let closeModal = function() {
  modal.style.display = "none";
  modalImg.style.display = "none";
  wideModalImage.style.display = "none";
}

var images = document.getElementsByClassName("modal-image");
for (x in images)
{
    images[x].onclick = function() {
        modal.style.display = "block";
        let isWide = this.dataset.wide
        if (isWide != undefined && isWide) {
          wideModalImage.src = this.src;
          wideModalImage.style.display = "block";
        } else {
          modalImg.src = this.src;
          modalImg.style.display = "block";
        }

        captionText.innerHTML = this.alt;
    };
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  closeModal();
}

let modalContents = document.getElementsByClassName("modal-content");
for (x in modalContents)
{
  modalContents[x].onclick = function(e) {
    e.stopPropagation();
  }
}

modalImg.onclick = function(e) {
  e.stopPropagation();
}

modal.onclick = function() {
  closeModal();
}

document.onkeydown = function(e) {
  if (e.key == "Escape") {
    closeModal();
  }
}