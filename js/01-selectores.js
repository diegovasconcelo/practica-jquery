$(document).ready(function(){
	//Selector de ID
	$("#rojo").css("background","red")
					   .css("color","white");

	$("#amarillo").css("background","yellow")
					   .css("color","white");

	$("#verde").css("background","green")
					   .css("color","white");

	
	var mi_clase= $(".zebra").css("padding", "5px");

	$(".sin_borde").click(function(){
		console.log("Click dado");
		$(this).addClass('zebra');
	});

	//Selectores de etiquetas
	var parrafos= $('p').css("cursor","pointer");

	parrafos.click(function(){
		var that = $(this);

		if(!that.hasClass('grande')){
			that.addClass('grande');
	  	}else{
	  		that.removeClass('grande');
	  	}
	});

	//Selectores de atributos
	$('[title="Google"]').css("background",'#ccc');
	$('[title="YouTube"]').css("background",'blue');

	//otros
	//$('p,a').addClass('margen-superior');

	var busqueda=$("#elemento2").parent().parent().find('.resaltado');
	console.log(busqueda);

	

})

