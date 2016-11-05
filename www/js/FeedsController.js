var IDProjeto = window.localStorage.getItem("IDProjeto");
function listaFeeds(id,qtd,pagina,x){
        var xhr = new XMLHttpRequest();

        $('#mascara2').addClass('active');
        var  x = x || 0;
        if(x==0){
        $("#feedsView").html('');
        var html;
        html ='<div id="pai_progress" class="progress_div">';
        html +'</div>';
        $("#feedsView").html(html);

        }

       var txtchare;
       var imgchare;

       var IDUser = window.localStorage.getItem("ID");

       // Consumir a API...
       var url;
        if(id==1){

           var IDUser = window.localStorage.getItem("ID");
           url = 'http://jovempan.xpro.me/aplicativos/wsfeeds/?pp=313&m=1&idperfil='+IDUser;
      }else if(id==0){
           url = 'http://jovempan.xpro.me/aplicativos/wsfeeds/?pp=313&m=1';
      }

      var pagina = pagina || '';
      var qtd    = qtd || 20;



  var email = $('#campo-login-email').val() || '';
  var senha = $('#campo-login-senha ').val() || '';
  window.localStorage.setItem("SENHA",senha);
  $('#status-erros-login').text('Aguarde...');

   xhr.onreadystatechange = function () {
     if (xhr.readyState == 4)
       {
         var json = JSON.parse(xhr.responseText);


             if(json.error.cod==0){

               if(json.quantidade>0){
               total = json.dados.length;
                 $('#mascara2').removeClass('active');
                $.each(json.dados, function(i, arr) {
                 var txtchare = arr.txtFeed;
                 var imgchare = 'http://jovempan.xpro.me/'+arr.imgFeed;


                 html = '<input type="hidden" id="curtida'+arr.id+'" value="'+arr.numeroLikes+'" >';
                 html += '<input type="hidden" id="tipo-'+arr.id+'" value="'+arr.like+'" >';
                 html += '<input type="hidden" id="coments-'+arr.id+'" value="'+arr.numeroComentarios+'" >';


          html +='<div class="bloco_feeds" id="idDoFeed'+arr.id+'"  style="overflow:hidden;">';
          html +='<div class="feeds_users">';
          html +='<div class="feed_foto_user">';
          html +='<div class="foto-user" style="background-image: url(http://jovempan.xpro.me/'+arr.fotoCliente+');" onclick="abrePerfilUser('+arr.id_cliente+');"></div>';
          html +='</div>';
          html +='<div class="feed_txt">';
          html +='<span class="nome-user-txt">'+arr.nomeCliente+'</span>  <i  class="icon-seta" id="iconSeta'+arr.id+'" onclick="slideUp(\'' + 1 + '\',\'' + arr.id + '\',\'' + arr.id_cliente + '\',\'' + txtchare + '\',\'' + imgchare + '\')"></i> <br>';
          html +='<span class="data-user-txt">'+arr.data_cadastro+'</span>';
          html +='</div>';
          html +='</div>';
          if((arr.imgFeed!='') && (arr.imgFeed!='/images/default.png')){
          html +='<div class="feed_foto" >';

          html +='<div  style="background-image: url(http://jovempan.xpro.me/'+arr.imgFeed+'); overflow:hidden;" class="img-user-post"></div>';
          html +='</div>';
           }
          html +='<div class="feeds-txt-coment">'+arr.txtFeed+'</div>';
          html +='<div class="txt-acao">';
          html +='<div class="txt-total-acao" id="total-curtidas'+arr.id+'" onclick="listaLikesFeeds('+arr.id+')">Curtidas: '+arr.numeroLikes+'</div>';
          html +='<div class="txt-total-acao" onclick="listaComentariosFeeds('+arr.id+')" id="id-coments-txt-'+arr.id+'">Comentarios: '+arr.numeroComentarios+'</div>';
          html +='</div>';
          html +='<div class="clear"></div>';
          html +='<div class="btn-acao-user">';
          html +='<span id="curtir'+arr.id+'">';


          if(arr.like==1){
          html +='<div class="btn-curtir offClick descurtir" id="acao-curtir-txt-'+arr.id+'" onclick="insereCurtida('+arr.id+')">Curtir</div>';
          }else{
          html +='<div class="btn-curtir offClick curtir" id="acao-curtir-txt-'+arr.id+'"  onclick="insereCurtida('+arr.id+')">Curtir</div>';
            }
          html +='</span>';
          html +='<div class="btn-comentar offClick " onclick="listaComentariosFeeds('+arr.id+')">Comentar</div>';
          html +='<div class="btn-compartilhar offClick" onclick="share(\'' + txtchare + '\',\'' + imgchare + '\')" >Compartilhar</div>';
          html +='</div>';

           html += '<div class="coments_post">';
           $.each(arr.comentarios, function(i, coments) {
           html += '<p><b>'+coments.nomeCliente+'</b> <br>'+coments.texto+'</p>';
           });
           html += '</div>'

          html +='</div>';

                     $("#feedsView").append(html);


              });
             }else if(json.quantidade==0){

                   if(x==1){
                   $('#lsPaginacao').val(1);


                 }else{
                   $("#feedsView").html("<p class='nao_tem_feeds'>Ainda não há nenhum feeds publicado!</p>");
                 }
                   $('#mascara2').removeClass('active');
               }




             }else{

               $("#feedsView").html("<center>O servidor não conseguiu processar o pedido. Tente novamente mais tarde...</center>");
               $('#mascara2').removeClass('active');


             }

       }
  };



  var    params = 'idcliente='+IDUser;
         params += '&comentarios=3';
         params += '&qtd='+qtd;
         params += '&pagina='+pagina;
  xhr.open('POST', url, true);
  xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
  xhr.send(params);
};

////FIM: LOGIN


  function insereCurtida(idFeed){
    var idUser = window.localStorage.getItem("ID");
    // Consumir a API...
    var tipo = parseInt($('#tipo-'+idFeed).val())||0;
    var tipoDiv  = tipo;
    $('#status-txt-esqueci').text('Aguarde...');

    var post = parseInt($('#curtida'+idFeed).val());

    if(tipoDiv==0){

    var soma = post+1;
    $('#tipo-'+idFeed).val(1);
    $('#curtida'+idFeed).val(soma);
    $('#total-curtidas'+idFeed).text('Curtidas: '+soma);


    $('#acao-curtir-txt-'+idFeed).removeClass('curtir');
    $('#acao-curtir-txt-'+idFeed).addClass('descurtir');
  }else{

    var soma = post-1;
    $('#tipo-'+idFeed).val(0);
    $('#curtida'+idFeed).val(soma);
    $('#total-curtidas'+idFeed).text('Curtidas: '+soma);
    $('#acao-curtir-txt-'+idFeed).removeClass('descurtir');
    $('#acao-curtir-txt-'+idFeed).addClass('curtir');
  }


    if(tipo==0){ // registrar
      var url = 'http://jovempan.xpro.me/aplicativos/wsfeedslike/?pp=313';
      tipo = 'registrar';


    }else if (tipo==1) { // remover
      var url = 'http://jovempan.xpro.me/aplicativos/wsfeedslike/?pp=313';
      tipo = 'remover';


    }


   var xhr = new XMLHttpRequest();
   xhr.onreadystatechange = function () {
     if (xhr.readyState == 4)
       {
         var json = JSON.parse(xhr.responseText);
       }
  };

  var    params = 'idFeed='+idFeed;
         params += '&tipo='+tipo;
         params += '&idCliente='+idUser;
         params += '&p='+IDProjeto;
  xhr.open('POST', url, true);
  xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
  xhr.send(params);
};
///




function listaLikesFeeds(idfeed){


  var totalDeCurtidas = $('#curtida'+idfeed).val() || 0;

  if(totalDeCurtidas >0){

   var IDUser = window.localStorage.getItem("ID");
   var html;
       $('#titulo-html').removeClass('titulo-comentarios');
       $('#titulo-html').addClass('titulo-curtidas');
       html   ='<div class="bloco_coments" id="ls-likes-dh">';
       html +='</div>';
       $('#conteudo-retorno').html(html);
       $('#html').fadeIn('slow');


 var xhr = new XMLHttpRequest();
 xhr.onreadystatechange = function () {
   if (xhr.readyState == 4)
     {
       var json = JSON.parse(xhr.responseText);

       if(json.quantidade>0){

           $.each(json.dados, function(i, arr) {
            html ='<div style="border-bottom:2px  dotted #ffffff; min-height: 79px; margin-top:10px;">';
            html +='<div class="feed_foto_user" style="margin-left:20px">';
             html +='<div class="foto-user" style="background-image: url(http://jovempan.xpro.me/'+arr.fotoCliente+');" onclick="abrePerfilUser('+arr.id_cliente+');"></div>';
             html +='</div>';
             html +='<div class="feed_txt">';
             html +='<span class="nome-user-txt">'+arr.nomeCliente+'</span>  <i  class="icon-seta"></i> <br>';
             html +='<span class="data-user-txt">'+arr.data_cadastro+'</span>';
             html +='</div>';
             html +='</div>';

             $("#ls-likes-dh").append(html);
           });

       }else if(json.quantidade==0){
           // Exibir mensagem de erro, caso aconteça...
           $('#ls-comentarios-dh').html('<p class="status-txt-dh-x">Não há comentários neste post!</p>');
           //$("#status-txt").html("<center>O servidor não conseguiu processar o pedido. Tente novamente mais tarde...</center>");

         }else{

           $('#status-txt-coment').text('tente novamente!');
         }

     }
};
};
var    params = 'idfeed='+idfeed;
       params += '&pp=313';
       params += '&m=1';

var url = 'http://jovempan.xpro.me/aplicativos/wsfeedslikes';
xhr.open('POST', url, true);
xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
xhr.send(params);

}




function listaComentariosFeeds(idfeed){
  var IDUser = window.localStorage.getItem("ID");
  var html;
  //$('#loading').fadeIn('slow');
  $('#titulo-html').removeClass('titulo-curtidas');
  $('#titulo-html').addClass('titulo-comentarios');

  html   ='<div class="bloco_coments" id="ls-likes-dh">';
  html +='</div>';
  html +='<div class="class-comentar-bloco">';
  html +='<div class="input_comentar_">';
  html +='<input class="Coments_input" id="campo_comentar_feed" onClick="empurraDivComentar(0)" onBlur="empurraDivComentar(1)" type="text" placeholder="Comentar"/>';

  html +='</div>';
  html +='<div class="btn_comenta_pub offClick" onclick="comentarFeeds('+idfeed+')">';
  html +='</div>';
  html +='</div>';
  html +='</div>';
  $('#conteudo-retorno').html(html);
  $('#html').fadeIn('slow');

   var xhr = new XMLHttpRequest();
   xhr.onreadystatechange = function () {
     if (xhr.readyState == 4)
       {

         var json = JSON.parse(xhr.responseText);
         if(json.quantidade>0){
             $.each(json.dados, function(i, arr) {

               html ='<div style="border-bottom:2px  dotted #ffffff; min-height: 79px; margin-top:10px;  padding-bottom:10px;">';
               html +='<div class="feed_foto_user" style="margin-left:20px">';
               html +='<div class="foto-user" style="background-image: url(http://jovempan.xpro.me/'+arr.fotoCliente+');" onclick="abrePerfilUser('+arr.id_cliente+');"></div>';
               html +='</div>';
               html +='<div class="feed_txt">';
               html +='<span class="nome-user-txt">'+arr.nomeCliente+'</span>  <i  class="icon-seta"></i> <br>';
               html +='<span class="data-user-txt">'+arr.data_cadastro+'</span>';
               html +='</div>';
               html +='<div style="margin-left:10px; font-size:11px;  text-transform:none ">'+arr.texto+'</div>';
               html +='</div>';
               $("#ls-likes-dh").append(html);

             });
         }else if(json.quantidade==0){
             // Exibir mensagem de erro, caso aconteça...
             $('#ls-likes-dh').html('<p class="status-txt-dh-x">Não há comentários neste post!</p>');
             //$("#status-txt").html("<center>O servidor não conseguiu processar o pedido. Tente novamente mais tarde...</center>");
           }else{

             $('#status-txt-coment').text('tente novamente!');
           }
       }
  };
  var    params = 'idfeed='+idfeed;
         params += '&pp=313';
         params += '&m=1';

  xhr.open('GET', 'http://jovempan.xpro.me/aplicativos/wsfeedscomentarios', true);
  xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
  xhr.send(params);

}



////FIM Lista Comentarios Feeds
function comentarFeeds(idFeed){

$('#mascara2').addClass('active');

  var IDUser = window.localStorage.getItem("ID");

  var texto  = $('#campo_comentar_feed').val()||'';
  $('#campo_comatar_feed').val('');
  var tipo = parseInt($('#coments-'+idFeed).val())||0;
  if(texto!=''){

   var xhr = new XMLHttpRequest();
   xhr.onreadystatechange = function () {
     if (xhr.readyState == 4)
       {

         var data = JSON.parse(xhr.responseText);

        if(data.error.cod==0){
        listaComentariosFeeds(idFeed);
        var soma = tipo + 1;

        $('#id-coments-txt-'+idFeed).text('Comentários: '+soma);
        $('#coments-'+idFeed).val(soma);
        $('#mascara2').removeClass('active');


       }else{
           // Exibir mensagem de erro, caso aconteça...
           $('#status-txt-coment').text('tente novamente!');
           $('#mascara2').removeClass('active');


           //$("#status-txt").html("<center>O servidor não conseguiu processar o pedido. Tente novamente mais tarde...</center>");

         }

       }
  };
  var  params = 'idFeed='+idFeed;
       params += '&tipo=0';
       params += '&idCliente='+IDUser;
       params += '&texto='+texto;
       params += '&pp=313';

  xhr.open('POST', 'http://jovempan.xpro.me/aplicativos/wsfeedscomentar', true);
  xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
  xhr.send(params);
  }
};



/// INICIO Excluir Feeds ...

function excluirFeedsID(idFeed){

  var IDUser = window.localStorage.getItem("ID");

   var xhr = new XMLHttpRequest();
   xhr.onreadystatechange = function () {
     if (xhr.readyState == 4)
       {
         var a;
         var data = JSON.parse(xhr.responseText);


                  //console.log(data);
        if(data.error.cod==0){

          $('#idDoFeed'+idFeed).remove();
          $('#slider_up').remove();
          $('#iconSeta'+idFeed).show('fast');
          $('#mascara').fadeOut('slow');
        }else{
            // Exibir mensagem de erro, caso aconteça...
            $('#status-txt-coment').text('tente novamente!');
            loadingProg(0);
            //$("#status-txt").html("<center>O servidor não conseguiu processar o pedido. Tente novamente mais tarde...</center>");

          }
       }
  };
  var    params = 'idCliente='+IDUser;
         params += '&idFeed='+idFeed;
         params += '&pp=313';
  xhr.open('POST', 'http://jovempan.xpro.me/aplicativos/wsfeedsexcluir', true);
  xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
  xhr.send(params);
};

////FIM Excluir Feeds
function cancelapublicar(){
  $('#conteudo-retorno').html('');
  $('#html').fadeOut('slow');



}
function abrePublicar(){

  $('#titulo-html').addClass('titulo-feeds')
     html   ='<div class="btn-feed-cam offClick" onclick="capturePhoto();"></div>'
            +'<div class="btn-feed-galeria offClick" onclick="getPhoto(pictureSource.PHOTOLIBRARY);"></div>'
            +'<div class="div-publicar-text">'
            +' <input type="text" class="campo-publicar-text" id="campo-publicar-text" onkeyup="limite_textarea(this.value)" placeholder="DIGITE SEU TEXTO">'
            +'</div>'
            +' <div class="btn-feed-enviar offClick" onclick="publicarUploadFileFeed();"></div>'
            +' <div class="btn-feed-cancelar_ offClick" onclick="cancelapublicar();"></div>'
            +'<span id="status-txt-modal" class="danger-publicar"></span>'
            +'<span id="cont_char"> <span id="cont">140</span> Restantes</span>'


            +'<div class="del-img-postadax" id="del-img-postadax" onclick="limpaPhoto();"></div>'
            +'<div class="thumbs-foto">'

            +'<img  class="img-postada-user"  id="smallImage" src="" />'
            +'<img  class="img-postada-user-Galeria"  id="smallImageGaleria" src="" />'
            +'<input type="hidden" id="imagemPadraox">'
            +'</div>';


  $('#conteudo-retorno').html(html);
  $('#html').fadeIn('slow');

}

$(document).ready(function() {



    $("#feedsView").scroll(function() {
    var pagina = $('#paginacaoFeeds').val() || 1;
    var ls = $('#lsPaginacao').val() || 0;
    var feedsUser = $('#feedsUser').val() || 0;



    var total = $(this).scrollTop() + $(this).height();
    //9750
    var tmDiv  = $(this).get(0).scrollHeight;
    var tmDiv2 = $(this).get(0).scrollHeight - 5;

      //$("#totalScrool").html(tmDiv+' : '+total);

      if ((total == tmDiv) || (total > tmDiv2 )) {
        //requisição ajax para selecionar postagens
        if(ls==0){
        listaFeeds(feedsUser,20,pagina,1);
        var soma = parseInt(pagina)+1;
        $('#paginacaoFeeds').val(soma);
        }

      } // fim do if
    }); // fim scroll

}); // fim document ready
