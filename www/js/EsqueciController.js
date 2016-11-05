var IDProjeto = window.localStorage.getItem("IDProjeto");
function recuperarSenha(){

  var email = $('#campo-esqueci-email').val() || '';
  if(email==''){
    $('#status-error-esqueci').text('Ops! Preencha o Email.');

  }else {


  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4)
      {
        var a;
        var data = JSON.parse(xhr.responseText);

   if(data.error.cod==0){

        var html = 'Em instantes você receberá um E-mail com sua Senha!'
        $('#status-error-esqueci').html(html);

      }else if(data.error.cod==1){

       $('#status-error-esqueci').html(data.error.mensagem);

       }


      }
 };
 var    params = 'email='+email;
        params += '&p='+IDProjeto;
 xhr.open('POST', 'http://jovempan.xpro.me/clientes/wsrecuperarsenha', true);
 xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
 xhr.send(params);
  }};
