$(document).ready(function(){
   
  //SLIDER
  if(window.location.href.indexOf('index')>-1){
  $(function(){
        $('.slider').bxSlider({
          mode: 'fade',
          captions: true,
          slideWidth: 1200,
          slideHeight:500
          
        });
      }); }
      
  //POST CREACION 5 ARCHIVOS JSON EN UN ARRAY 
  if(window.location.href.indexOf('index')>-1){
  var post = [
    {
      title: 'prueba de titulo 1 ',
      date: new moment().format('MMMM Do YYYY') ,
      content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. At temporibus nisi, nostrum dolorem atque expedita ad dolor quia aspernatur? In doloribus sunt doloremque officia quod magnam quaerat voluptas distinctio iste. Lorem, ipsum '   
    },
    {
      title: 'prueba de titulo 2 ',
      date: new moment().format('MMMM Do YYYY'),
      content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. At temporibus nisi, nostrum dolorem atque expedita ad dolor quia aspernatur? In doloribus sunt doloremque officia quod magnam quaerat voluptas distinctio iste. Lorem, ipsum '   
    },
    {
      title: 'prueba de titulo 3 ',
      date: new moment().format('MMMM Do YYYY'),
      content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. At temporibus nisi, nostrum dolorem atque expedita ad dolor quia aspernatur? In doloribus sunt doloremque officia quod magnam quaerat voluptas distinctio iste. Lorem, ipsum '   
    },
    {
      title: 'prueba de titulo 4 ',
      date: new moment().format('MMMM Do YYYY'),
      content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. At temporibus nisi, nostrum dolorem atque expedita ad dolor quia aspernatur? In doloribus sunt doloremque officia quod magnam quaerat voluptas distinctio iste. Lorem, ipsum '   
    },
    {
      title: 'prueba de titulo 5',
      date: new moment().format('MMMM Do YYYY'),
      content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. At temporibus nisi, nostrum dolorem atque expedita ad dolor quia aspernatur? In doloribus sunt doloremque officia quod magnam quaerat voluptas distinctio iste. Lorem, ipsum '   
    },
   
  ]; };
  /*post.forEach(( item, index)=>{
    var  post= `<article class="post">
    <h2> ${item.title}  </h2>
    <span class="fecha">  ${item.date}</span>
    <p align='justify' class="articulo">
    ${item.content}
    </p>
    <a href="#" class="button" align='center'>LEER MAS</a>
  </article>`;
      $('#post').append(post);
  });*/

  //SELECTOR DE TEMA

  var tema = $("#tema");
    $("#estilo-2").click(function(){
    tema.attr("href", "../css/styles2.css");
    });
    $("#estilo-3").click(function(){
    tema.attr("href", "../css/styles3.css");
   });

   $("#estilo-1").click(function(){
    tema.attr("href", "../css/styles1.css");
    });

  //SCROLL
  
  $('.subir').click(function(e){
    e.preventDefault();  
    $('html, body').animate({
        scrollTop: 0
      },500);
      return false;
  }); 
  //LOGIN FALSO
  /*$('#login form').submit(function(){
     var for_name=  $('#form_name').val();
     localStorage.setItem('for_name', for_name);
  });
  var for_name = localStorage.getItem('for_name');
  if(for_name != null && for_name != "undefined"){
    $('#parrafo').html('Bienvenido, '+ for_name);

    location.reload()
    $('#login form').show();
  }*/
  
  
});
