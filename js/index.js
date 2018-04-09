
alert("a");
$(".l").click(function(event){

if($(this).data('login')!=null){
    alert($(this).data('login'));
$("#contenedor").load('paginas/formu.html');


} else if($(this).data('cliente')!=null){
   
$("#contenedor").load('paginas/cliente.html');


 
}   
else  if($(this).data('empleado')!=null){
   
$("#contenedor").load('paginas/empleado.html');



}
  
});