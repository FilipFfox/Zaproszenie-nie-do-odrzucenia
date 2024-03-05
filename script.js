let runawayBtn = document.getElementById('runawayBtn');

runawayBtn.addEventListener('mousemove', (e) => {
	let randomPositionTop = Math.floor(Math.random() * 300);
	let randomPositionRight = Math.floor(Math.random() * 500);
  let randomPositionBottom = Math.floor(Math.random() * 300);
	let randomPositionLeft = Math.floor(Math.random() * 500);


	runawayBtn.style.top = `${randomPositionTop}px`;
	runawayBtn.style.left = `${randomPositionRight}px`;
	runawayBtn.style.left = `${randomPositionBottom}px`;
	runawayBtn.style.left = `${randomPositionLeft}px`;
});
function changeText() {
	var button = document.getElementById('myButton');
  
	if (button.innerHTML === 'Tak') {
	  button.innerHTML = 'Kocham cię';
	} else {
	  button.innerHTML = 'Tak';
	}
  }