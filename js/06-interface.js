$(document).ready(function(){

	//Mover elemento por la pagina
	$('.elemento').draggable();

	//remimensionar 
	$('.elemento').resizable();


	//Seleccionar y ordenar elementos
	//$('.lista-seleccionable').selectable();
	$('.lista-seleccionable').sortable({
		update:function(event, ui){  //Recoge el evento y el ui
			console.log("ha cambiado la lista");
		}
	});

	//Drop
	$("#elemento-movido").draggable();
	$("#area").droppable({
		drop:function(){
			console.log("Has soltado algo dentro de el area");
		}
	});

	//efectos
	$("#mostrar").click(function(){
		//$(".caja-efectos").toggle("explode");
		//$(".caja-efectos").toggle("blind");
		//$(".caja-efectos").toggle("slide");
		//$(".caja-efectos").toggle("drop");
		//$(".caja-efectos").toggle("fold");
		//$(".caja-efectos").toggle("push");
		//$(".caja-efectos").toggle("scale");
		$(".caja-efectos").toggle("shake", 4000);
	});

	//tooltip
	$(document).tooltip();

	//Dialog
	$ ("#lanzar-popup").click(function(){
		$("#popup").dialog();
	});

	//Datepicker - Calendario
	$("#calendario").datepicker();
	

	//Tabs

	$("#pestanas").tabs();
});