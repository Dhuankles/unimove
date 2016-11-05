/*jshint browser:true */
/*global $ */(function()
{
 "use strict";
 /*
   hook up event handlers
 */
 function register_event_handlers()
 {

   setTimeout(function() {

     $('#mainpage').animate({opacity: 0}, 100);

    setTimeout(function() {
     var ID =window.localStorage.getItem("IDUser")||'';


     if((ID==null) || (ID=='undefined') || (ID=='')){
       removeToggle_();
       refPagina('entrar');
       activate_page("#entrar");
       mudaBackGround('entrar');



    }else{
      removeToggle_();
      PgBuscaSimples();




    }
  }, 100);

}, 100);



     /* button  Button */
    $(document).on("click", "#Entrar", function(evt)
    {
         /*global activate_page */
         activate_page("#entrar");
         pegaPagina('entrar');
         mudaBackGround('entrar');

         return false;
    });
    $(document).on("click", "#irPaginaLogin", function(evt)
    {

         activate_page("#login");

         mudaBackGround('login');
         refPagina('login');
         removeToggle_();

         return false;
    });
    $(document).on("click", "#irPaginaCadastro", function(evt)
    {

         activate_page("#cadastro");
         pegaPagina('cadastro');
         mudaBackGround('cadastro');

         return false;
    });

    $(document).on("click", "#irPaginaEsqueci", function(evt)
    {

         $('#status-error-esqueci').html('');
         activate_page("#esqueci");
         pegaPagina('esqueci');
         mudaBackGround('esqueci');

         return false;
    });

    $(document).on("click", "#irPaginaBase", function(evt)
    {    removeToggle_();
        refPagina('base');
         activate_page("#base");
         pegaPagina('base');
         mudaBackGround('base');

         return false;
    });

    $(document).on("click", "#irPaginaMapa", function(evt)
    {    removeToggle_();
        refPagina('maps');
         activate_page("#maps");
         pegaPagina('maps');
         mudaBackGround('maps');

         return false;
    });



$(document).on("click", "#perfil-feeds-x", function(evt)
{    verificaPlay();

     var ID =window.localStorage.getItem("ID");
     if(ID==null){
     refPagina('login');
     activate_page("#login");
     mudaBackGround('login');
   }else{
     removeToggle_();
     refPagina('feeds');
     controlaScrollFeeds();
     $('#feedsUser').val(1);
     listaFeeds(1);
     activate_page("#feeds");


     //mudaBackGround('feeds');
   }
     return false;
});


    $(document).on("click", "#irPaginaFeeds", function(evt)
    {    verificaPlay();
         controlaScrollFeeds();
         $('#feedsUser').val(0);

         var ID =window.localStorage.getItem("ID");
         if(ID==null){

         refPagina('login');
         activate_page("#login");
         mudaBackGround('login');
       }else{
         removeToggle_();
         refPagina('feeds');

         listaFeeds(0);
         activate_page("#feeds");


         //mudaBackGround('feeds');
       }
         return false;
    });




$(document).on("click", "#AbreperfilUser", function(evt)
{    verificaPlay();

     var ID =window.localStorage.getItem("ID");
     if(ID==null){
     refPagina('login');
     activate_page("#login");
     mudaBackGround('login');
   }else{
     $('#status_senha').fadeOut('slow');
     removeToggle_();
     refPagina('perfilUser');
     activate_page("#perfilUser");


     //mudaBackGround('feeds');
   }
     return false;
});


    $(document).on("click", "#irPaginaPerfil", function(evt)
    {    verificaPlay();

         var ID =window.localStorage.getItem("ID");
         if(ID==null){
         refPagina('login');
         activate_page("#login");
         mudaBackGround('login');
       }else{
        $('#status_senha').fadeOut('slow');
         removeToggle_();
         refPagina('perfil');
         exbideDadosPerfil();

        var   nome   = window.localStorage.getItem("NOME");
        var   cidade = window.localStorage.getItem("CIDADE");
        var   email  = window.localStorage.getItem("EMAIL");
        $('#nome_dados').val(nome);
        $('#cidade_dados').val(cidade);
        $('#email_dados').val(email);

         activate_page("#perfil");


         //mudaBackGround('feeds');
       }
         return false;
    });


    $(document).on("click", "#irPaginaMSG", function(evt)
    {    verificaPlay();
         removeToggle_();
         var ID =window.localStorage.getItem("ID");
         if(ID==null){
         activate_page("#login");
         mudaBackGround('login');
         refPagina('login');
       }else{
         refPagina('mensagens');
         $('#mesagem-lead').fadeIn('slow');
         abreMensagensMenu();
         activate_page("#mensagens");

         //mudaBackGround('feeds');
       }
         return false;
    });

    $(document).on("click", "#irPaginaMSGSlide", function(evt)
    {    verificaPlay();
         removeToggle_();
         $('#chat_atendimento').append('');
         var ID =window.localStorage.getItem("ID");
         if(ID==null){
         activate_page("#login");
         mudaBackGround('login');
         refPagina('login');
       }else{
         refPagina('mensagens');

         activate_page("#mensagens");

         //mudaBackGround('feeds');
       }
         return false;
    });




    $(document).on("click", "#LogoutSair", function(evt)
    {
         localStorage.clear();
         activate_page("#entrar");
         pegaPagina('entrar');
         mudaBackGround('entrar');
         removeToggle_();
         $('#mascara').removeClass('active');

    });


    /* button  Button */
   $(document).on("click", ".swipe", function(evt)
   {
     	var Class = $('.swipe').hasClass('uib_bar_visible');
      if(Class==true){
      var pagina = $('#pagina').val();
      $('#'+pagina).addClass('leftPage');
      }

   });



        /* button  Button */
    $(document).on("click", ".btn-menu-topo-", function(evt)
    {

         //uib_sb.toggle_sidebar($(".uib_w_1"));
         var pagina = $('#pagina').val();
         $('#'+pagina).toggleClass('leftPage');
         $("#"+pagina).animate({left:'155'});
         return false;
    });

    }
 document.addEventListener("app.Ready", register_event_handlers, false);
})();
