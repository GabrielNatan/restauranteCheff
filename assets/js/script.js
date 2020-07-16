var close = document.querySelector('.close');
var menu = document.querySelector('.open');
var nav = document.querySelector('nav');
var section = document.querySelectorAll('section');


function addActive(element){
	element.classList.add('active');
}

function removeActive(element){
	element.classList.remove('active');
}


 function show(){
section.forEach((item)=>{
		let top = item.offsetTop;
		if(window.pageYOffset + ((window.innerHeight * 3) / 4) > top - 60){
			addActive(item);
		}
		
})
}

show();


const debounce = function(func, wait, immediate) {
  let timeout;
  return function(...args) {
    const context = this;
    const later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
};









window.addEventListener('scroll', debounce(()=>{
	if(window.pageYOffset > 60 ){
		var navbar = document.querySelector('.navbar');
		var body = document.querySelector('body');

		addActive(navbar)
		addActive(body)
	}else{
		var navbar = document.querySelector('.navbar');
		var body = document.querySelector('body');

		removeActive(navbar);
		removeActive(body);
	}
	show()
	
}, 50))




menu.addEventListener('click', ()=>{
		addActive(nav);
})


nav.querySelectorAll('ul li a').forEach((item)=>{
	item.addEventListener('click',(e)=>{
		e.preventDefault();
		var itemSelected = document.querySelector(`${item.getAttribute('href')}`);
		
		window.scroll(0, itemSelected.offsetTop - 60);
		removeActive(nav);
	})
})

close.addEventListener('click', ()=>{
		removeActive(nav);
})