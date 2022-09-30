const options = {
	method: 'GET',
	headers: {
		'x-api-key': 'live_KuWLLx4nsriUYMDrbBEu74DEPus0SDWVc5QE5WMUcFWScVuYIYI6ZOfrgV6eB9xV'
	}
};


function createImg(res){
	let url = res[0].url
	let img = document.createElement("img")
	img.src = url
	let div = document.getElementById("div")
	div.appendChild(img)
}

fetch('https://api.thecatapi.com/v1/images/search')
	.then(response => response.json())
	.then(response => createImg(response))
	.catch(err => console.error(err));