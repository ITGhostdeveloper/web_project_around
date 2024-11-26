let popup = document.getElementById("profile-popup");
let button = document.getElementById("edit-button");
let closeButton = document.getElementById("close-button");

let saveButton = document.getElementById("save-button");
let inputName = document.getElementById("name-profile");
let inputDescription = document.getElementById("job-profile");
let namePerson = document.querySelector(".profile__name");
let descriptionPerson = document.querySelector(".profile__text");

button.addEventListener("click", function (evt) {
  popup.showModal();
});

closeButton.addEventListener("click", function (evt) {
  popup.close();
});

saveButton.addEventListener("click", function (evt) {
  evt.preventDefault();

  let nameValue = inputName.value;
  let descriptionValue = inputDescription.value;

  namePerson.textContent = nameValue;
  descriptionPerson.textContent = descriptionValue;

  popup.close();
});
