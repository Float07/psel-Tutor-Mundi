const starsBtn = document.getElementsByClassName("star-btn");

for (let index = 0; index < starsBtn.length; index++) {
    starsBtn[index].starNbr = index;
    starsBtn[index].addEventListener('click', toggleStars);
}

function toggleStars(evt) {
    for (var index = 0; index < evt.currentTarget.starNbr + 1; index++) {
        starsBtn[index].querySelector(".star").src = "./assets/estrela_cheia.svg";
    }

    for (; index < starsBtn.length; index++) {
        starsBtn[index].querySelector(".star").src = "./assets/estrela_vazia.svg";
    }

    document.getElementById("confirm-btn").disabled = false;
}
