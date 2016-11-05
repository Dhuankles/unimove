
function cancelaSolictacao(idprofissional){

  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {

    if (xhr.readyState == 4) {
      var json = eval(xhr.responseText);

      PgBuscaSimples();

       }

      }

      var IDUser  = window.localStorage.getItem("IDUser");
      var data = 'IDUser='+IDUser;
          data += '&idprofissional='+idprofissional;
          data += '&tipo=cancela_solicitacao';
          data += '&status=1';

 xhr.open('POST', 'http://fastmedicamentos.com.br/IZE/usuarios.php', true);
 xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
 xhr.send(data);
 checkConnection();


}


function onSolicita(idprofissional){
  var msg = $('#input_desc_solic').val() || '';


  if(msg!=''){

  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {

    if (xhr.readyState == 4) {
      var json = eval(xhr.responseText);

        solicitacaoOk(idprofissional);

       }

      }

var IDUser  = window.localStorage.getItem("IDUser");
    var  data = 'IDUser='+IDUser;
         data += '&idprofissional='+idprofissional;
         data += '&tipo=solicita';
         data += '&msg='+msg;
         data += '&status=0';

 xhr.open('POST', 'http://fastmedicamentos.com.br/IZE/usuarios.php', true);
 xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
 xhr.send(data);
 checkConnection();

}else{


     $('#desc_solic').html('<spa class="erro_soli">Ops!Por favor Preencha a Descrição</span>');



}
}
////FIM: CADASTRO




/// INICIO BUSCA CATEGORIAS ...

      function buscarProfissional(valor){

        $('#autoComplete').html('');
       	var valor;
       	var x = $('#campoBusca').val() || '';


       	if(x!=''){

        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {

          if (xhr.readyState == 4) {
            var json = eval(xhr.responseText);

            $.each(json, function(i, arr) {

              if(arr.status!=0){
                html ='<p class="liComplete"  onclick="abreMapaBusca(\'' + arr.NOME + '\',\'' + arr.idCategoria + '\')">'+arr.NOME+'</p>'
                $('#autoComplete').append('');
                $('#autoComplete').append(html);
                $('#autoComplete').fadeIn('slow');


             }else{
               $('#autoComplete').html('');
               html ='<p class="liComplete">Categoria não encontrada!</p>'
               $('#autoComplete').append(html);
               $('#autoComplete').fadeIn('slow');
    				   }

                 });
             }



            }


       var    data = 'cat='+x;
       xhr.open('POST', 'http://fastmedicamentos.com.br/IZE/servicos.php', true);
       xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
       xhr.send(data);

     }else{
         $('#autoComplete').fadeOut('slow');
        $("#erro_login").html("O servidor não conseguiu processar o pedido. Tente novamente mais tarde...");
     }
     }
 ////FIM: CADASTRO



 /// INICIO BUSCA CATEGORIAS ...

       function buscarProfissional2(){

         $('#bl_busc3').html('');
        	var valor;
        	var x = $('#buscar_bsc').val() || '';


        	if(x!=''){

         var xhr = new XMLHttpRequest();
         xhr.onreadystatechange = function () {

           if (xhr.readyState == 4) {
             var json = eval(xhr.responseText);

             $.each(json, function(i, arr) {

               if(arr.status!=0){
                 html ='<p class="liComplete2"  onclick="abreMapaBusca(\'' + arr.NOME + '\',\'' + arr.idCategoria + '\')">'+arr.NOME+'</p>'

                 $('#bl_busc3').append(html);
                 $('#bl_busc3').fadeIn('slow');


              }else{
                $('#bl_busc3').html('');
                html ='<p class="liComplete2">Categoria não encontrada!</p>'
                $('#bl_busc3').append(html);
                $('#bl_busc3').fadeIn('slow');
     				   }

                  });
              }



             }


        var    data = 'cat='+x;
        xhr.open('POST', 'http://fastmedicamentos.com.br/IZE/servicos.php', true);
        xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
        xhr.send(data);

      }else{
         $('#bl_busc3').fadeOut('slow');
         $("#erro_login").html("O servidor não conseguiu processar o pedido. Tente novamente mais tarde...");
      }
      }
  ////FIM: CADASTRO

  function buscarProfissional3(){

    $('#bl_busc').html('');
     var valor;
     var x = $('#buscar_bsc').val() || '';


     if(x!=''){

    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {

      if (xhr.readyState == 4) {
        var json = eval(xhr.responseText);

        $.each(json, function(i, arr) {

          if(arr.status!=0){
            html ='<p class="liComplete2"  onclick="abreMapaBusca(\'' + arr.NOME + '\',\'' + arr.idCategoria + '\')">'+arr.NOME+'</p>'

            $('#bl_busc').append(html);
            $('#bl_busc').fadeIn('slow');


         }else{
           $('#bl_busc').html('');
           html ='<p class="liComplete2">Categoria não encontrada!</p>'
           $('#bl_busc').append(html);
           $('#bl_busc').fadeIn('slow');
          }

             });
         }



        }


   var    data = 'cat='+x;
   xhr.open('POST', 'http://fastmedicamentos.com.br/IZE/servicos.php', true);
   xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
   xhr.send(data);

 }else{
    $('#bl_busc').fadeOut('slow');
    $("#erro_login").html("O servidor não conseguiu processar o pedido. Tente novamente mais tarde...");
 }
 }



  var retries = 0;
  function uploadFoto(){

    var IDUser  = window.localStorage.getItem("IDUser");
    var fileURI = $("#i_foto").val()|| '';

    $('#status-txt-modal').text('Aguarde...');


//html +='<img  class="img_progress_src"   src="'+fileURI+'" />';


      var win = function (r) {
      clearCache();
      retries = 0;
      cancelapublicar();
      setTimeout(function() {

      $("#imagemPadraox").val('');
        alert('envio ok');

      }, 3000)
  }

  var fail = function (error) {
      if (retries == 0) {
          retries ++
          setTimeout(function() {
              onCapturePhoto(fileURI);
              alert('erro');
          }, 1000)
      } else {
          retries = 0;
          clearCache();
          alert('Ops!. Erro ao enviar foto!');

      }
  }

  var uri = encodeURI("http://fastmedicamentos.com.br/IZE/upload.php");

  var options = new FileUploadOptions();
  options.fileKey = "anexo";
  options.fileName = fileURI.substr(fileURI.lastIndexOf('/') + 1);
  options.mimeType = "image/jpeg";
  var params = {};
  params.IDUser = IDUser;
  options.params = params;

  var ft = new FileTransfer();
  ft.upload(fileURI, uri, win, fail, options);
}//else
