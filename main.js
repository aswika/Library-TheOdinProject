let myLibrary = [];

function Book(title, author, pages) {
  // the constructor...
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary() {
  // do stuff here
    myLibrary.push(newBook);

}

function openPopUp() {
    document.getElementById("pop-up").style.visibility = "visible";
}

var closeButton = document.getElementById("close");

/*closeButton.addEventListener("onmouseover", emphasizeButton);

function emphasizeButton() {
  closeButton.style.color = "red";
}*/

closeButton.addEventListener("click", closePopUp);

function closePopUp() {
  document.getElementById("pop-up").style.visibility = "hidden";
}
