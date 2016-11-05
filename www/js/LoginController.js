
/// INICIO CADASTRO...

function fazLogin(){

  var email = $('#campo-login-email').val() || '';
  var senha = $('#campo-login-senha ').val() || '';
  window.localStorage.setItem("SENHA",senha);
  $('#erro_login').text('Aguarde...');


var IDUser = window.localStorage.getItem("IDUser");
var xhr = new XMLHttpRequest();


if(email!='' && senha!=''){

var tipoDePlataforma      = $("#tipoDePlataforma").val()||'';
var gcm_id     = $("#gcm_id").val()||'';


   xhr.onreadystatechange = function () {
     if (xhr.readyState == 4)
       {
         var json = eval(xhr.responseText);
       //var json = xhr.responseText;
       //var total =json.length;

       $.each(json, function(i, arr) {

         if(arr.status!=0){

            if(tipoDePlataforma=='ios'){

            if(arr.tokenios!=gcm_id){
              atualizaToken_('ios');
            }
           }else if(tipoDePlataforma=='android'){
            if(arr.tokenandroid!=gcm_id){
              atualizaToken_('android');
            }
          }

           window.localStorage.setItem("IDUser", arr.IDUser);
           window.localStorage.setItem("NOME", arr.NOME);
           window.localStorage.setItem("SOBRENOME", arr.SOBRENOME);
           window.localStorage.setItem("EMAIL", arr.EMAIL);
           window.localStorage.setItem("FOTO", arr.FOTO);
           window.localStorage.setItem("SEXO", arr.SEXO);
           window.localStorage.setItem("CIDADE", arr.CIDADE)|| '';
           window.localStorage.setItem("UF", arr.UF)|| '';
           window.localStorage.setItem("tokenIos", arr.tokenIos) || '' ;
           window.localStorage.setItem("tokenAndroid", arr.tokenAndroid)|| '';
           window.localStorage.setItem("CELULAR", arr.CELULAR)|| '';
        $('#erro_login').text('');

         PgBuscaSimples();


    }else{
   $("#erro_login").html("Login/Senha inválidos");
      }

       });
         //console.log(json.dados);
         //json.dados.id;
         //json.error.cod;
       }




  };

  var    data = 'email='+email;
         data += '&senha='+senha;


  xhr.open('POST', 'http://fastmedicamentos.com.br/UNI/login.php', true);
  xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
  xhr.send(data);

}else{

  $('#erro_login').text('Ops! preencha todos os campos!.');
}


}

      ////FIM: CADASTRO

      ///// FIM: Atualiza token
      function atualizaToken_(tipo){

      var IDUser = window.localStorage.getItem("ID");
      var xhr = new XMLHttpRequest();
      var IDUser = window.localStorage.getItem("ID");

      var IDUser                = window.localStorage.getItem("IDUser");
      var tipoDePlataforma      = tipo;
      var gcm_id                = $("#gcm_id").val()||'';
      //window.localStorage.setItem("chaveID", gcm_id);
      //alert('tipo de pla:' +tipoDePlataforma+' User: '+IDUser);
      var gcm_id_ios;
      var gcm_id_android;

      if(tipoDePlataforma=='ios'){

         gcm_id_ios=gcm_id;
         gcm_id_android ='';

      }else if(tipoDePlataforma=='android'){

        gcm_id_ios='';
        gcm_id_android =gcm_id;
      }

      xhr.onreadystatechange = function () {
           if (xhr.readyState == 4)
             {
               var json = eval(xhr.responseText);
           }
         };
         var    data = 'IDUser='+IDUser;
               data += '&tokenAndroid='+tokenAndroid;
               data += '&tokenIos='+tokenIos;
               data += '&token=token';


        xhr.open('POST', 'http://fastmedicamentos.com.br/IZE/usuarios.php', true);
        xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
        xhr.send(data);



      }
