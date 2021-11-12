function playSound(e) {
	const audio = this.document.querySelector(`audio[data-key="${e.keyCode}"]`);
	const key = this.document.querySelector(`.key[data-key="${e.keyCode}"]`);

	if (!audio) {
		return;
	}
	else {
		key.classList.add('playing')
		audio.currentTime = 0;
		audio.play();
	}
}

function removeTransition(e) {
	if (e.propertyName !== "transform") {
		return;
	}
	this.classList.remove('playing');
}

window.addEventListener('keydown', playSound)
const keys = this.document.querySelectorAll('.key')
keys.forEach(key => key.addEventListener('transitionend', removeTransition))