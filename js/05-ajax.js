$(document).ready(function(){
	
	//Load
	//$('#datos').load("https://reqres.in");

	//GET y POST
	$.get("https://reqres.in/api/users",{page:2},function(response){
		response.data.forEach((element, index)=>{
			$("#datos").append("<p>"+element.first_name+" "+element.last_name+"</p>");
		});
	});

	
	$("#formulario").submit(function(e){
		e.preventDefault(); //Para que no nos redirija a otra pagina, entonces capturo el evento
		var usuario={
			name: $('input[name="name"]').val(),
			web: $('input[name="web"]').val()
	    };

		  
		/*$.post($(this).attr("action"),usuario,function(response){
			console.log(response);
		}).done(function(){
			alert("usuario añadido correctamente");
		});*/

		//return false; //Para que tampoco haga la accion por defecto que tiene el formulario
		$.ajax({
			type:'POST',
			url:$(this).attr("action"),
			data:usuario,
			beforeSend:function(){
				console.log("Enviando usuario...");
			},
			success:function(response){
				console.log(response);
			},
			error:function(){
				console.log("Hubo un error");
			},
			timeout:10000
		});
		return false;
	});

	
});