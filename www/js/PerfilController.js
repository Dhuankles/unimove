var IDProjeto = window.localStorage.getItem("IDProjeto");
function exbideDadosPerfil(){

  var nome = window.localStorage.getItem("NOME");
  var email = window.localStorage.getItem("EMAIL");
  var imagem = window.localStorage.getItem("IMAGEM")||'';
  var cidade = window.localStorage.getItem("CIDADE");
  var uf = window.localStorage.getItem("UF");

	$('#perfil-conteudo').text('');

    if(imagem==''){
    $('#perfil-imgx').css('backgroundImage','url(images/icon-camera.png)');
  }else{
    $('#perfil-imgx').css('backgroundImage','url(http://jovempan.xpro.me/'+imagem+')');

  }
    $('#perfil-nome').text(nome);
    if(cidade==''){
      $('#perfil-cidade').text('Cidade: não informada!');
    }else{
			if(uf=='undefined'){
			$('#perfil-cidade').text(cidade);
		}else{
    $('#perfil-cidade').text(cidade+' - '+uf);
	   }



}
}



/// INICIO ATUALIZA PERFIL...
 function updatePerfil(){
   $('#mascara2').addClass('active');
   var IDUser                = window.localStorage.getItem("ID");
   var nome                  = $("#nome_dados").val()||'';
   var email                 = $("#email_dados").val()||'';
   var cidade                = $("#cidade_dados").val()||'';


   var mail = validateEmail(email);
 // Consumir a API...

  if(mail==true){
    mail = 1;
  }else if(mail!=true){
    mail = 0;
    $('#status-perfil-salva').text('Ops.! E-mail inválido!')
  }

  if((mail==1) && nome!=''){

  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4)
      {
        var a;
        var data = JSON.parse(xhr.responseText);
        if(data.error.cod==0){
        //console.log(data);
         window.localStorage.setItem("ID", data.dados.id);
         window.localStorage.setItem("NOME", data.dados.nome);
         window.localStorage.setItem("EMAIL", data.dados.email);
         window.localStorage.setItem("CIDADE", data.dados.cidade);
         window.localStorage.setItem("UF", data.dados.uf);
         window.localStorage.setItem("chaveID", data.dados.tokenandroid);
         alterarDados();
         $('#mascara2').removeClass('active');
         $('#irPaginaPerfil').trigger('click');

         }else{
            // Exibir mensagem de erro, caso aconteça...
            $("#status-txt").html("<center>O servidor não conseguiu processar o pedido. Tente mais tarde...</center>");
            $('#mascara2').removeClass('active');

          }
      }
 };
 var    params = 'idCliente='+IDUser;
        params += '&nome='+nome;
        params += '&email='+email;
        params += '&cidade='+cidade;
        params += '&p='+IDProjeto;

   xhr.open('POST', 'http://jovempan.xpro.me/clientes/wsaddcliente', true);
   xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
   xhr.send(params);
   }else{
     $('#status-perfil-salva').text('Ops.! Preencha todos os campos!');
     $('#mascara2').removeClass('active');

   }
 };

////FIM: ATUALIZA PERFIL


/// INICIO ATUALIZA SENHA...

 function updateSenha(){

   $('#mascara2').addClass('active');

   var IDUser      = window.localStorage.getItem("ID");
   var PassAtual   = window.localStorage.getItem("SENHA");
   var senhaAtual  = $("#senhaAtual_dados").val()||'';
   var SenhaNova   = $("#senhaNova_dados").val()||'';


   if(senhaAtual==PassAtual){
     senhaAtual = true;
   }else{
     senhaAtual = false;
     $('#status_senha').fadeIn('slow');
     $('#status_senha').text('Ops.! A senha Atual não confere!');

   }
 // Consumir a API...
 if((senhaAtual==true)&&(SenhaNova!='')){

  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4)
      {
        var a;
        var data = JSON.parse(xhr.responseText);

        if(data.error.cod==0){
         window.localStorage.setItem("SENHA", SenhaNova);

         alterarSenha();
         $('#mascara2').removeClass('active');

        }else{
            // Exibir mensagem de erro, caso aconteça...

            $("#status_senha").html("<center>O servidor não conseguiu processar o pedido. Tente mais tarde...</center>");
            $('#mascara2').addClass('active');

          }

      }
 };

 var    params = 'idCliente='+IDUser;
        params += '&senha='+SenhaNova;
        params += '&p='+IDProjeto;
 xhr.open('POST', 'http://jovempan.xpro.me/clientes/wsaddcliente', true);
 xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
 xhr.send(params);

    }else{

      if((senhaAtual==false)&&(SenhaNova!='')){
      $('#status_senha').text('Ops.! A senha Atual não confere!');
      $('#mascara2').removeClass('active');
    }else if((senhaAtual=='')&&(SenhaNova=='')){
      $('#status_senha').text('Ops.! Preencha todos os campos!');
      $('#mascara2').removeClass('active');

    }


    }

};



 function abrePerfilUser(id){

   $('#mascara2').addClass('active');
    var IDUser      = window.localStorage.getItem("ID");
    if(id==IDUser){
      $('#irPaginaPerfil').trigger('click');
    }else{

  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4)
      {
        var a;
        var data = JSON.parse(xhr.responseText);

        if(data.error.cod==0){

          $('#perfil-conteudo2').text('');


          $('#perfil-imgx2').css('backgroundImage','url(http://xvision.xpro.me/'+data.dados.imagem+')');
          $('#perfil-nome2').text(data.dados.nome);
          $('#tokenIdx').val(data.dados.tokenandroid);
          $('#nomeUserMsg').val(data.dados.nome);
          $('#mascara2').removeClass('active');


          if(data.dados.cidade==''){
              $('#perfil-cidade2').text('Cidade: não informada!');

          }else{

            $('#perfil-cidade2').text(data.dados.cidade);

          }

            $('#AbreperfilUser').trigger('click');



        }else{
          // Exibir mensagem de erro, caso aconteça...
          $('#status-txt-esqueci').text('tente novamente');
           $('#mascara2').removeClass('active');

          //$("#status-txt").html("<center>O servidor não conseguiu processar o pedido. Tente novamente mais tarde...</center>");

        }


      }
 };
 var    params = 'id='+id;
        params += '&p='+IDProjeto;
 xhr.open('POST', 'http://jovempan.xpro.me/clientes/wsgetperfilcliente', true);
 xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
 xhr.send(params);
  }};


function escolheModoFoto(){

  //$('#titulo-html').addClass('titulo-feeds')
  html   ='<div class="btn-feed-cam offClick" onclick="capturePhoto();"></div>';
  html   +='<div class="btn-feed-galeria offClick" onclick="getPhoto(pictureSource.PHOTOLIBRARY);"></div>';



    html += ' <div class="btn-feed-enviarx offClick" onclick="UploadFilePerfil();"></div>';
    html += ' <div class="btn-feed-cancelar_ offClick" onclick="cancelapublicar();"></div>';


    html += '<div class="del-img-postadax" id="del-img-postadax" onclick="limpaPhoto();"></div>';
    html += '<div class="thumbs-foto">';

    html += '<img  class="img-postada-user"  id="smallImage" src="" />';
    html += '<img  class="img-postada-user-Galeria"  id="smallImageGaleria" src="" />';
    html += '<input type="hidden" id="imagemPadraox">';
    html += '</div>';


  $('#conteudo-retorno').html(html);
  $('#html').fadeIn('slow');

}
////FIM Exibe Perfil
