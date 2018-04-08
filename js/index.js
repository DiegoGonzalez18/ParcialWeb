
$(".l").click(function(event){

if($(this).data('login')!=null){
    alert($(this).data('login'));
$("#contenedor").load('paginas/'+ $(this).data('formu')+'.html');

} 
  
});