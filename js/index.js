
$(".l").click(function(event){

if($(this).data('login')!=null){
    alert($(this).data('login'));
$("#contenedor").load('paginas/formu.html');


} else { alert($(this).data('cliente'));
	if($(this).data('cliente')!=null){
   
$("#contenedor").load('paginas/cliente.html');


} 
}
  
});