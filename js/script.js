const starsBtn = document.getElementsByClassName("star-btn");
const confirmBtn = document.getElementById("confirm-btn");

var starsAmount = 0;

for (let index = 0; index < starsBtn.length; index++) {
    starsBtn[index].starNbr = index;
    starsBtn[index].addEventListener('click', toggleStars);
}

function toggleStars(evt) {
    starsAmount = evt.currentTarget.starNbr + 1;
    for (var index = 0; index < evt.currentTarget.starNbr + 1; index++) {
        starsBtn[index].querySelector(".star").src = "./assets/estrela_cheia.svg";
    }

    for (; index < starsBtn.length; index++) {
        starsBtn[index].querySelector(".star").src = "./assets/estrela_vazia.svg";
    }

    document.getElementById("confirm-btn").disabled = false;
}

confirmBtn.addEventListener('click', function() {
    let xhr = new XMLHttpRequest();
    xhr.open('POST', 'http://localhost:3000/rate_stars');
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(JSON.stringify({
        value: starsAmount
    }));
});
