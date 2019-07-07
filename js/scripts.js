
$(window).on('load', function(){

	$('#overlay').fadeOut(800);
});




$(document).on('mousemove', function(e){

			$('.fondo-grande').css('transform', 'translate('+ -e.pageY*.05 +'px, '+ e.pageX*.07 +'px)');
			$('.fondo-pequeizquierda').css('transform', 'translate('+ e.pageX*.09 +'px, '+ e.pageY*.09 +'px)');
			$('.fondo-pequederecha').css('transform', 'translate('+ e.pageY*.09 +'px, '+ -e.pageX*.07 +'px)');
		
		
		});


$(document).ready(function(){

$('.barras').on('click', muestraMenu);
$('#cerrar').on('click', muestraMenu);
$('.desplazar').on('click', muestraMenu);

	function muestraMenu() {
	$('nav').toggleClass('abierto');
}

$('.desplazar').on('click', function(){

	let id = $(this).data('nivel');			
	let profundidad = $(id).offset().top;

	$('html').animate({
		scrollTop: profundidad
	}, 1000);

});

});

