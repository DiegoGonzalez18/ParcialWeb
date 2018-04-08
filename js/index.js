
$(".l").click(function(event){

if($(this).data('login')!=null){
    alert($(this).data('login'));
$("#contenedor").load('paginas/formu.html');


} else {
	if($(this).data('cliente')!=null){
    alert($(this).data('cliente'));
$("#contenedor").load('paginas/cliente.html');


} 
}
  
});