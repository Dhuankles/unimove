
       function insereCadastro(celular,email,senha){

            $("#erro_cadastro").html("Aguarde... registrando");
             var tipoDePlataforma      = $("#tipoDePlataforma_").val()||'';
             var gcm_id                = $("#gcm_id").val()||'';

             //window.localStorage.setItem("chaveID", gcm_id);
             var gcm_id_ios;
             var gcm_id_android;

             if(tipoDePlataforma=='ios'){
                gcm_id_ios=gcm_id;
                gcm_id_android ='';


             }else if(tipoDePlataforma=='android'){
               gcm_id_ios='';
               gcm_id_android =gcm_id;
             }

      var IDUser = window.localStorage.getItem("IDUser");
      var xhr = new XMLHttpRequest();

        var lat = window.localStorage.setItem("latitude", lat)||'';
        var long =  window.localStorage.setItem("longitude", long)||'';
          // Consumir a API...

         xhr.onreadystatechange = function () {
           if (xhr.readyState == 4) {

             var json = eval(xhr.responseText);

             $.each(json, function(i, arr) {

               if(arr.status!=0){


                 window.localStorage.setItem("IDUser", arr.IDUser);
                 window.localStorage.setItem("NOME", '');
                 window.localStorage.setItem("SOBRENOME", '');
                 window.localStorage.setItem("EMAIL", email);
                 window.localStorage.setItem("FOTO", '');
                 window.localStorage.setItem("SEXO", '');
                 window.localStorage.setItem("CIDADE", '')|| '';
                 window.localStorage.setItem("UF", '')|| '';
                 window.localStorage.setItem("tokenIos", gcm_id_ios) || '' ;
                 window.localStorage.setItem("tokenAndroid", gcm_id_android)|| '';
                 window.localStorage.setItem("CELULAR", celular)|| '';
                $("#erro_cadastro").html('');

                //$("#nome_cadastro").val('');
                //$("#sobrenome_cadastro").val('');
                $("#celular_cadastro").val('');
                $("#email_cadastro").val('');
                $("#senha_cadastro").val('');

                 loginCriado();

              }else{
                $("#erro_cadastro").html("O servidor não conseguiu processar o pedido. Tente novamente mais tarde...");
              }

             });

             }
           };

      //  var    //data = 'nome='+nome;
               //data += '&sobrenome='+sobrenome;
               var data = 'celular='+celular;
               data += '&email='+email;
               data += '&senha='+senha;
               //data += '&latitude='+lat;
               //data += '&longetude='+long;
               data += '&tokenAndroid='+gcm_id_android;
               data += '&tokenIos='+gcm_id_ios;

        xhr.open('POST', 'http://fastmedicamentos.com.br/UNI/registro.php', true);
        xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
        xhr.send(data);

        }



  ////FIM: CADASTRO


  /// INICIO CADASTRO...
         function cadastra(){

           //var nome                 = $("#nome_cadastro").val()||'';
           //var sobrenome            = $("#sobrenome_cadastro").val()||'';
           var celular              = $("#celular_cadastro").val()||'';
           var email                = $("#email_cadastro").val()||'';
           var senha                = $("#senha_cadastro").val()||'';


           verificaEmail = validateEmail(email);
           if(verificaEmail==true){
             var mail = email;

           }else if(verificaEmail==false){
             $("#erro_cadastro").html("Ops! Email incorreto!");
             var mail = '';
           }


       if((celular!='')&&(mail!='')&&(senha!='')){


        var xhr = new XMLHttpRequest();
         xhr.onreadystatechange = function () {
             if (xhr.readyState == 4) {
               var json = eval(xhr.responseText);
               switch (json[0].conect){
                 case 'x':
                 insereCadastro(celular,email,senha);
                 
                 break;

                 case 'y':
                 $("#erro_cadastro").html("Ops! E-mail já existe.");
                 break;

                 case 'no':
                 $("#erro_cadastro").html("Ops! Sem conexão tente novamente.");
                 break;


               }

              //arr.conect=='y'

               }
             };

             var    data = 'email='+email;
             xhr.open('POST', 'http://fastmedicamentos.com.br/UNI/functions.php', true);
             xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
             xhr.send(data);


           }else{
                 $("#erro_cadastro").html("Ops! Preencha todos os campos Corretamente.");
           }
        }

    ////FIM: CADASTRO






    function UpdadeUsuario(){

         $("#erro_cadastro").html("Aguarde... salvando");

         var nome                 = $("#nome_config").val()||'';
         var sobrenome            = $("#sobrenome_config").val()||'';
         var celular              = $("#celular_config").val()||'';



         var IDUser = window.localStorage.getItem("IDUser");
         var xhr = new XMLHttpRequest();

         var lat = window.localStorage.setItem("latitude", lat)||'';
         var long =  window.localStorage.setItem("longitude", long)||'';
         // Consumir a API...

      xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
          var json = eval(xhr.responseText);

          $.each(json, function(i, arr) {

            if(arr.status!=0){



              window.localStorage.setItem("NOME", nome);
              window.localStorage.setItem("SOBRENOME", sobrenome);
              window.localStorage.setItem("CELULAR", celular)|| '';
             $("#erro_cadastro").html('');
             $('#alert_sucess_user').fadeIn('slow');
             $('.nome_menu').html(nome);
             setTimeout(function() {
               $('#alert_sucess_user').fadeOut('slow');
              }, 4000);





           }else{
             $("#erro_cadastro").html("O servidor não conseguiu processar o pedido. Tente novamente mais tarde...");
           }

          });

          }
        };

     var    data =  'nome='+nome;
            data += '&sobrenome='+sobrenome;
            data += '&celular='+celular;
            data += '&IDUser='+IDUser;
            data += '&tipo=up';


     xhr.open('POST', 'http://fastmedicamentos.com.br/UNI/usuarios.php', true);
     xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
     xhr.send(data);

     }



 ////FIM: CADASTRO
