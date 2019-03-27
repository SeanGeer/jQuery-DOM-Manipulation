
$(document).ready(function(){
	$("#mainContainer").on('click', 'h2', function(){
		let section = $(this).siblings('.content') 
	 
		$('#mainContainer .content').removeClass('clicked')
	// add class .clicked back to whatever section we clicked on(h2)
		section.addClass('clicked')
	})
})



// (function () {

// 	var elements = document.getElementsByClassName('child');
// 	for (let i = 0; i < elements.length; i++){
// 		elements[i].click = function(){
// 			var el = elements[0];
// 			while(el){
// 				if(el.tagName === '.child'){
// 					el.classList.remove('.clicked');
// 				}
// 			}  
// 			this.classList.add('clicked');
// 		}  
// 	}
	


// // document.querySelector('h2').addEventListener('click', function(event){
// // })  



// })();