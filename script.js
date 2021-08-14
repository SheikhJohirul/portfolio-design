let menuBtn = document.querySelector('#menu-btn');
let searchBtn = document.querySelector('#search-btn');
let colorBtn = document.querySelector('#color-btn');
let themeBtn = document.querySelector('#theme-btn');


let navber = document.querySelector('.navber');
let searchForm = document.querySelector('.search-form');
let colorsPatette = document.querySelector('.colors-palette');


menuBtn.onclick = () =>{
	navber.classList.toggle('active');
	searchForm.classList.remove('active');
	colorsPatette.classList.remove('active');
}


searchBtn.onclick = () =>{
	searchForm.classList.toggle('active');
	navber.classList.remove('active');
	colorsPatette.classList.remove('active');
}

colorBtn.onclick = () =>{
	colorsPatette.classList.toggle('active');
	navber.classList.remove('active');
	searchForm.classList.remove('active');
}
window.onscroll = () =>{
	navber.classList.remove('active');
	searchForm.classList.remove('active');
	colorsPatette.classList.remove('active');
}


document.querySelectorAll('.colors-palette .color').forEach(btn =>{
	btn.onclick = () =>{
		let color = btn.style.background;
		document.querySelector(':root').style.setProperty('--main-color',color);
	}
});


themeBtn.onclick = () => {
	themeBtn.classList.toggle('fa-sun');
	if(themeBtn.classList.contains('fa-sun')){
		document.body.classList.add('active');
	}else{
		document.body.classList.remove('active');
	}
}




