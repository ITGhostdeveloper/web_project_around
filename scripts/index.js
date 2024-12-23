import "./validate.js";

let popup = document.getElementById("profile-popup");
let button = document.getElementById("edit-button");
let closeButton = document.getElementById("close-button");
let saveButton = document.getElementById("save-button");
let inputName = document.getElementById("name-profile");
let inputDescription = document.getElementById("job-profile");
let namePerson = document.querySelector(".profile__name");
let descriptionPerson = document.querySelector(".profile__text");

const popupCard = document.getElementById("card-popup");
const buttonCard = document.getElementById("add-card");
const closeCard = document.getElementById("close-card");
const saveCard = document.getElementById("save-card");
const inputCardName = document.getElementById("card-title");
const cardUrl = document.getElementById("card-url");
const cardGallery = document.querySelector(".card__gallery");
const cardTemplate = document.getElementById("card-template");

const initialCards = [
  {
    name: "Valle de Yosemite",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/yosemite.jpg",
  },
  {
    name: "Lago Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lake-louise.jpg",
  },
  {
    name: "Montañas Calvas",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/bald-mountains.jpg",
  },
  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/latemar.jpg",
  },
  {
    name: "Parque Nacional de la Vanoise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/vanoise.jpg",
  },
  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lago.jpg",
  },
];

initialCards.forEach((card) => {
  let newCard = cardTemplate.content.querySelector(".card").cloneNode(true);
  let cardImage = newCard.querySelector(".card__image");
  let cardName = newCard.querySelector(".card__text");
  let likeButton = newCard.querySelector("#like-button");
  let removeCardButton = newCard.querySelector(".remove-card");
  let popupImage = document.querySelector("#image-popup");
  let closePopupImage = document.querySelector("#close-image");
  let imageLabel = document.querySelector("#popup-image");
  let popupLabel = document.querySelector("#popup-label");

  likeButton.addEventListener("click", function (evt) {
    likeButton.classList.toggle("liked-button");
  });

  removeCardButton.addEventListener("click", function (evt) {
    newCard.remove();
  });

  cardImage.addEventListener("click", function (evt) {
    popupImage.showModal();

    imageLabel.src = card.link;
    popupLabel.textContent = card.name;
  });

  closePopupImage.addEventListener("click", function (evt) {
    popupImage.close();
  });

  cardImage.src = card.link;
  cardName.textContent = card.name;

  cardGallery.prepend(newCard);
});

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

buttonCard.addEventListener("click", function (evt) {
  popupCard.showModal();
});

closeCard.addEventListener("click", function (evt) {
  popupCard.close();
});

saveCard.addEventListener("click", function (evt) {
  evt.preventDefault();

  let cardValue = inputCardName.value;
  let cardLink = cardUrl.value;

  let newCard = cardTemplate.content.querySelector(".card").cloneNode(true);
  let cardImage = newCard.querySelector(".card__image");
  let cardName = newCard.querySelector(".card__text");
  let likeButton = newCard.querySelector("#like-button");
  let removeCardButton = newCard.querySelector(".remove-card");

  likeButton.addEventListener("click", function (evt) {
    likeButton.classList.toggle("liked-button");
  });

  removeCardButton.addEventListener("click", function (evt) {
    newCard.remove();
  });

  cardImage.src = cardLink;
  cardName.textContent = cardValue;

  cardGallery.prepend(newCard);
  popupCard.close();

  cardImage.addEventListener("click", function (evt) {
    popupImage.showModal();

    imageLabel.src = card.link;
    popupLabel.textContent = card.name;
  });

  closePopupImage.addEventListener("click", function (evt) {
    popupImage.close();
  });

  cardImage.src = card.link;
  cardName.textContent = card.name;
});

popup.addEventListener("click", (evt) => {
  if (evt.target.classList.contains("popup")) {
    popup.close();
  }
});

popupCard.addEventListener("click", function (evt) {
  if (evt.target.classList.contains("popup")) {
    popupCard.close();
  }
});
