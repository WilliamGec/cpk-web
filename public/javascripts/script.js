document.addEventListener('DOMContentLoaded',function(){
$('.menu-mobil').click(function (){$(this).next().slideToggle();})

})


	var clickEvent = document.getElementById('enviar');
	var mensaje = document.getElementById('mensaje__exito');
	console.log(mensaje.classList);
	clickEvent.addEventListener('click',function () {
		mensaje.classList.toggle('mostrar__mensaje-contacto');
	})


/*document.addEventListener('DOMContentLoaded',function(){
	var correo = document.getElementById(correo);
	var stop = 0;
	var nombre ="";
	console.log(correo.length-1 + correo.charAt(0));
	for (var i = 0; i < correo.length-1; i++) {
		if(correo.charAt(i)==='@'){
			stop = i;
		}
	};
	for (var i = 0; i < stop; i++) {
		nombre=nombre+correo.charAt(i);
	};
	

			console.log (stop + " "+ nombre); 
});*/