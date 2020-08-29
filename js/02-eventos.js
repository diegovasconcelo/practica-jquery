$(document).ready(function(){
	//mouseOver y MouseOut
	var caja=$("#caja");

	/*
	caja.mouseover(function(){
		$(this).css("background","red");
	});

	caja.mouseout(function(){
		$(this).css("background","green");
	});*/

	function cambiaRojo(){
		$(this).css("background","red");
	};

	function cambiaVerde(){
		$(this).css("background","green");
	};

	//Hover
	caja.hover(cambiaRojo,cambiaVerde);

	//Click, doble click

	caja.click(function(){
		$(this).css("background","blue")
			   .css("color","white");
	});

	caja.dblclick(function(){
		$(this).css("background","pink")
			   .css("color","yellow");
	});


	//Focus y blur
	var nombre=$("#nombre");
	var datos=$("#datos");

	nombre.focus(function(){
		$(this).css("border", "2px solid green");
	});
	nombre.blur(function(){
		$(this).css("border", "1px solid #ccc");

		//A continuacion pongo visible la caja, y le agrego los datos que tiene el input
		//para ello se agrega el $(this).val() Que SACA ese valor, y se lo INSERTAMOS dentro del 
		//metodo .text()
		datos.text($(this).val()).show(); 
	});

    //mousedown y mouseup
	datos.mousedown(function(){
		$(this).css("border-color","gray");
	});
	datos.mouseup(function(){
		$(this).css("border-color","black");
	});

	//mousemove
	$(document).mousemove(function(){
		$("body").css("cursor","none");
		$("#sigueme").css("left",event.clientX)
		             .css("top",event.clientY);
	})
});