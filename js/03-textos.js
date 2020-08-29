$(document).ready(function(){

	reloadLinks();

	$('#add_button')
		.removeAttr('disabled')
		.click(function(){
			$('#menu').append('<li><a href="'+$("#add_link").val()+'"></a></li>');  //Val toma el valor que hay dentro del input
			
			$("#add_link").val('');//Vacía el input
			reloadLinks();
	});

	
});

function reloadLinks(){
	$('a').each(function(index){
		var that= $(this);
		var enlace= that.attr("href");
		//attr tambien sirve para modificar los atributos de un enlace
		that.attr('target','_blank');
		

		that.text(enlace);
	});
}