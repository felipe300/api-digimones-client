let formNombre = document.getElementById('busquedaNombre');
const urlBase = 'http://localhost:3000/api/digimones/';

formNombre.addEventListener('submit', (event) => {
	event.preventDefault();
	let nombre = searchNombre.value;
	getData(`nombre/${nombre}`).then((digimon) => {
		cardTitle.innerHTML = digimon.name;
		cardDescription.innerHTML = digimon.level;
		cardImg.setAttribute('src', digimon.img);
		cardImg.setAttribute('alt', digimon.name);
		card.classList.remove('d-none');
	});
});

const getData = (path) => {
	return new Promise(async (resolve, reject) => {
		try {
			let response = await fetch(`${urlBase}${path}`);
			let data = await response.json();
			if (response.status == 200) {
				// console.log(data);
				resolve(data);
			} else if (response.status == 404) {
				alert('Pokemon no encontrado');
			} else {
				alert('Algo salió mal');
			}
		} catch (error) {
			console.log(error);
			reject('No se pudo hacer la peticion');
		}
	});
};
