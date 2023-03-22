console.log('funguju!');


const auto = document.querySelector('.auto');
const buttonLeft = document.querySelector('.buttonL');
const buttonRight = document.querySelector('.buttonR');


const move = (evt) => {
	if (evt.target == buttonRight) {
        auto.classList.add('margin')
    } else if (evt.target == buttonLeft)
    auto.classList.remove('margin')
}

buttonRight.addEventListener('click', move)
buttonLeft.addEventListener('click', move)


