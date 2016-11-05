function wsLead(hash,idLead){



var IDUser = window.localStorage.getItem("ID");
var xhr = new XMLHttpRequest();
var IDUser = window.localStorage.getItem("ID");

var    data = 'h='+hash;
       data += '&idLead='+idLead;

       //data += '&retorno=json';

   xhr.onreadystatechange = function () {
     if (xhr.readyState == 4)
       {
       var json = JSON.parse(xhr.responseText);
       var total =json.dados.mensagens.length;


       $.each(json.dados.mensagens, function(i, arr) {

       var html;
       if(arr.nomecliente!=''){
         var classeEu ="lead-aberto";
         var txt ="";
       }else{
         var classeEu ="lead-aberto-consultor";
         var txt ="xpro";
       }

       if(i==total){

         id ='id="fimScroll"';
       }else {
          id ='id=""';

       }
       html ='<div '+id+' class="'+classeEu+'">';
       html +='<div class="msg-lead-aberto '+txt+'">'+arr.mensagem+'</div>';
       html +='<div class="data-lead-aberto">'+arr.data_cadastro+'</div>';
       html +='</div>';


       $("#ls-chatAberto-dh").append(html);
       });
         //console.log(json.dados);
         //json.dados.id;
         //json.error.cod;
       }
       $('.bloco_coments').animate({scrollTop: $('.bloco_coments')[0].scrollHeight}, 0);


  };
  xhr.open('POST', 'http://jovempan.xpro.me/gestaodeleads/wslead', true);
  xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
  xhr.send(data);


}




function wsLeads(hash){


var IDUser = window.localStorage.getItem("ID");

var xhr = new XMLHttpRequest();
       //data += '&retorno=json';

   xhr.onreadystatechange = function () {
     if (xhr.readyState == 4)
       {

         var json = JSON.parse(xhr.responseText);

         var total = json.dados.length || 0;
         if(total > 0){
         $.each(json.dados, function(i, arr) {


       var html;

           html = '<div class="bloco-xx-chat" onclick="abreLead(\'' + arr.id + '\',\'' + arr.tokenorigem + '\',\'' + arr.tokentipo + '\');" >';
           html += '<div class="ld-A-chat"><span class="lead-chat-tipo">'+arr.tipo+'<br>'+arr.data_cadastro+'</span></div>';

           if(arr.status==0){
           html += '<div class="ld-B-chat"><div class="status_Lead_aberto"></div></div>';
           }else if(arr.status==1){
           html += '<div class="ld-B-chat"><div class="status_Lead_pendente"></div></div>';
           }
           html += '</div>';



         $("#retorno-msg-chat").append(html);
         });
       }else{

          $("#ls-solicitacao-dh").html("<p class='nao_tem_feeds'>Você não possui atendimentos!</p>");

       }
         //console.log(json.dados);
         //json.dados.id;
         //json.error.cod;


       }


  };
  var    data = 'h='+hash;
         data += '&status=0,1';
         data += '&cliente='+IDUser;

  xhr.open('GET', 'http://jovempan.xpro.me/gestaodeleads/wsleads/?'+data, true);
  xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
  xhr.send();


}


function wsLeadsMSGmenu(hash){


var IDUser = window.localStorage.getItem("ID");

var xhr = new XMLHttpRequest();


       //data += '&retorno=json';

   xhr.onreadystatechange = function () {
     if (xhr.readyState == 4)
       {

         var json = JSON.parse(xhr.responseText);

         var total = json.dados.length || 0;
         if(total > 0){
         $.each(json.dados, function(i, arr) {


       var html;

           html = '<div class="bloco-xx-chat" onclick="abreLead(\'' + arr.id + '\',\'' + arr.tokenorigem + '\',\'' + arr.tokentipo + '\');" >';
           html += '<div class="ld-A-chat2"><span class="lead-chat-tipo2">'+arr.tipo+'</span><br><span class="data_msg">'+arr.data_cadastro+'</span></div>';

           if(arr.status==0){
           html += '<div class="ld-B-chat2"><div class="status_Lead_aberto"></div></div>';
           }else if(arr.status==1){
           html += '<div class="ld-B-chat2"><div class="status_Lead_pendente"></div></div>';
           }
           html += '</div>';



         $("#retorno-msg-chat-msg").append(html);
         });
       }else{

          $("#ls-solicitacao-dh").html("<p class='nao_tem_feeds'>Você não possui atendimentos!</p>");

       }
         //console.log(json.dados);
         //json.dados.id;
         //json.error.cod;


       }


  };
  var    data = 'h='+hash;
         data += '&status=0,1';
         data += '&cliente='+IDUser;

  xhr.open('POST', 'http://jovempan.xpro.me/gestaodeleads/wsleads', true);
  xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
  xhr.send(data);


}



function tipoDeEnvio(tokengerado,idLead,hashGerado){
  var text = $('#txt_area_chat').val()||'';
  if(text!=''){

    var html = '<button id="txt-chat-dh" class="btn-confirma-coment" onclick="mensagemlead(\'' + tokengerado + '\',\'' + idLead + '\',\'' + hashGerado + '\');">Ok</button>';
    $('#retorno-btn-chat').html(html);

  }else{


    html = '<button id="mic" class="mic" onclick="startRecording(\'' + tokengerado + '\',\'' + idLead + '\',\'' + hashGerado + '\');" >&nbsp;</button>';
    $('#retorno-btn-chat').html(html);

  }

}
function abreLead(idLead,tokenOrigem,tokenTipo){

  d = new Date();
  var timestamp = d.timestamp();
  $('#idLead-comentar').val(idLead);


  d = new Date();

  var week = d.getWeekNumber()-1;

  var modal = 'modal-alerts';
  var tokenOrigem = tokenOrigem;
  var tokenTipo = tokenTipo;
  var idprojeto = window.localStorage.getItem("IDProjeto");
  var MontaToken = timestamp+tokenOrigem+'|'+idprojeto+'|'+tokenTipo+'|'+week;
  var tokengerado = $.base64.encode(MontaToken);


  var IDUser = window.localStorage.getItem("ID");
  var idProjeto = randomNumber(11,99)+''+idprojeto;
  var idCliente = randomNumber(11,99)+''+IDUser;
  var idContato = randomNumber(11,99)+''+1;
  var tipo      = randomNumber(11,99)+''+1;

  var dataTxt   = timestamp;
  var validade  = randomNumber(11,99)+''+1;

  var hash= idProjeto+'|'+idCliente+'|'+idContato+'|'+tipo+'|'+dataTxt+'|'+validade;
  var hashGerado = $.base64.encode(hash);


	//$( ".mascara" ).addClass( "active" );

       var modal = 'modal-alerts';
       var html;



	     html  ='<div class="bloco-foto-post">';
	     html +='<div class="bloco_coments">';
		   html +='<div id="ls-chatAberto-dh"></div>';

		   html += '<div style="margin-top:10px; margin-bottom:5px;"></div>';



       html2 = '<div style="margin-top:10px; margin-bottom:5px; margin-left:5px; margin-right:5px;">';
			 html2 += '<input type="hidden" id="idLead-comentar">';
		 	 html2 += '<input type="text" placeholder="Digite sua mensagem" onkeyup="tipoDeEnvio(\'' + tokengerado + '\',\'' + idLead + '\',\'' + hashGerado + '\');" onClick="empurraDivMsg(0)" onBlur="empurraDivMsg(1)" class="ipnut-area-post" id="txt_area_chat">';
       html2 += '<span id="retorno-btn-chat"><button id="mic" class="mic" onclick="startRecording(\'' + tokengerado + '\',\'' + idLead + '\',\'' + hashGerado + '\');" >&nbsp;</button></span>';

       html2 += '</div>';
		   html2 += '<div style="width:100%; height:5px;">&nbsp;</div>';

		   html += '</div>';
       html += '</div>';

	$('#mesagem-lead').html(html);
  $('#mesagem-input').html(html2);
  $('#irPaginaMSG').trigger('click');
  $('#chat_atendimento').html('');
  $('#mesagem-input').fadeIn('slow');
  wsLead(hashGerado,idLead);


}


function mensagemlead(token,idLead,hash){


//loadingProg(1);
var deviceToken      = $("#gcm_id").val()||'';
var mensagem         = $("#txt_area_chat").val()||'';
var nome  = window.localStorage.getItem("NOME");
var email = window.localStorage.getItem("EMAIL");
var telefone = '00000000';



if(mensagem!=''){

insereTxtChat(mensagem);

var xhr = new XMLHttpRequest();
var IDUser = window.localStorage.getItem("ID");

var    data = 'deviceToken='+deviceToken;
       data += '&token='+token;
       data += '&nome='+nome;
       data += '&telefone='+telefone;
       data += '&email='+email;
       data += '&mensagem='+mensagem;
       data += '&campanha=Padão';
       data += '&produto=Chat Jovem pan';
       data += '&retorno=json';
       data += '&idlead='+idLead;

   xhr.onreadystatechange = function () {
     if (xhr.readyState == 4)
       {

         var json = JSON.parse(xhr.responseText);
         //console.log(json.dados);
         //json.dados.id;
         //json.error.cod;

         //wsLead(hash,idLead);
         $("#txt_area_chat").val('');
         $(".loginMsgChat").fadeOut('slow');

         //loadingProg(0);


       }
  };
  xhr.open('POST', 'http://jovempan.xpro.me/gestaodeleads/gravalead', true);
  xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
  xhr.send(data);
}

}




function insereTxtChat(msg){
               //08/08/20016 14:24:56
               var d = new Date();
               var data = d.getDay()+'/'+d.getMonth()+'/'+d.getFullYear()+' '+horas();
               var html;

                 var classeEu ="lead-aberto";
                 var txt ="";
                 var id ='id="fimScroll"';


               html ='<div '+id+' class="'+classeEu+'">';
               html +='<div class="msg-lead-aberto '+txt+'">'+msg+'</div>';
               html +='<div class="data-lead-aberto">'+data+'  <img class="loginMsgChat" src="images/rolling.gif" width="15" height="15"></div>';
               html +='</div>';

               $("#ls-chatAberto-dh").append(html);

               $('.bloco_coments').animate({scrollTop: $('.bloco_coments')[0].scrollHeight}, 0);


}


/// INICIO Lista Publicidade ...


 function listaAtendimento(){
  var IDProjeto = window.localStorage.getItem("IDProjeto");

   $('#chat_atendimento').html('');
   $('#mesagem-lead').fadeOut('slow');
   $('.mesagem-input').fadeOut('slow');


   limpaMSGx();


  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4)
      {
        var a;
        var data = JSON.parse(xhr.responseText);
        console.log(data);

        if(data.quantidade>0){
            $.each(data.dados, function(i, arr) {
              var html = '<div class="bloco_tipo_chat" onclick="abrechat(\'' + arr.campo2 + '\',\'' + arr.campo3 + '\',\'' + arr.campo0 + '\',\'' + IDProjeto + '\',\'' + arr.campo4 + '\');">';
              html += '<div class="userDefinidoChat"  style="background-image: url(http://jovempan.xpro.me/midias/imagens/'+arr.campo1+');"></div>';
              html +=''+arr.campo0+'';
              html += '</div>';
             $('#chat_atendimento').append(html);
             $('#irPaginaMSGSlide').trigger('click');

          });
      };

      }
 };

 xhr.open('GET', 'http://jovempan.xpro.me/aplicativos/ws/?pp=313&m=6&t=GET& c[]=4& c[]=5& c[]=6& c[]=7& c[]=8', true);
 xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
 xhr.send();
  };


  ////FIM Lista publicidade


function abrechat(token,msg,titulo,idprojeto,tokenOrigem){

  d = new Date();
  var timestamp = d.timestamp();
  var week = d.getWeekNumber()-1;

  var modal = 'modal-alerts';
  var tokenOrigem = tokenOrigem;
  var tokenTipo = token;
  var idprojeto = idprojeto;
  var MontaToken = timestamp+tokenOrigem+'|'+idprojeto+'|'+tokenTipo+'|'+week;
  var tokengerado = $.base64.encode(MontaToken);



  //$("#item_modal_alert").text('CHAT - '+titulo);
  //$("#subtitulo_alert").text(msg);

   var html2 ='<div class="titulo_msg">'+titulo+'</div>';
   html2 +='<div class="subtitulo_alert">'+msg+'</div>';

  $('#chat_atendimento').html(html2);



  var html;
    html='<div class="bloco-campo-msg-">';
    //html+='<div class="cam_incon"></div>';
    html+='<input type="hidden" id="idFeed-comentar">';
    html+='<input type="text" placeholder="Digite Sua Mensagem"  onClick="empurraDivMsg(0)" onBlur="empurraDivMsg(1)"  onKeyUp="habilitaMic();"  class="ipnut-area-post" id="txt_area_chat">';

    html += '<button id="btn_send_Chat" class="btn-confirma-coment" onclick="gravalead(\'' + tokengerado + '\');" >Ok</button>';
    html2 += '</div>';
    html+='</div>';



    $('#mesagem-input').html(html);
    $('#mesagem-input').fadeIn('slow');



}


function abreCriaChat(idLead,token){
      var IDProjeto = window.localStorage.getItem("IDProjeto");
      d = new Date();
      var timestamp = d.timestamp();
      //862|55157304|346|231|78|9920160727175324|561
      //http://xvision.xpro.me/gestaodeleads/wsleads/?h=ODY2Mnw1NTE1NzMwNHwzNDZ8MjMxfDIwMTYwNzI4MTc1MzI0fDIzMQ==&tipo=0&cliente=157304
      var IDUser = window.localStorage.getItem("ID");
      var idProjeto = randomNumber(11,99)+''+IDProjeto;
      var idCliente = randomNumber(11,99)+''+IDUser;
      var idContato = randomNumber(11,99)+''+1;
      var tipo      = randomNumber(11,99)+''+1;

      var dataTxt   = timestamp;
      var validade  = randomNumber(11,99)+''+1;
      //var hash= idProjeto+'|55157304|346|231|20160728175324|231';
      var hash= idProjeto+'|'+idCliente+'|'+idContato+'|'+tipo+'|'+dataTxt+'|'+validade;
      var hashGerado = $.base64.encode(hash);



             var modal = 'modal-alerts';
             var html;



      	     html  ='<div class="bloco-foto-post">';
      	     html +='<div class="bloco_coments">';
      		   html +='<div id="ls-chatAberto-dh"></div>';

      		   html += '<div style="margin-top:10px; margin-bottom:5px;"></div>';



             html2 = '<div style="margin-top:10px; margin-bottom:5px; margin-left:5px; margin-right:5px;">';
      			 html2 += '<input type="hidden" id="idLead-comentar">';
      		 	 html2 += '<input type="text" placeholder="Digite sua mensagem" onkeyup="tipoDeEnvio(\'' + token + '\',\'' + idLead + '\',\'' + hashGerado + '\');" onClick="empurraDivMsg(0)" onBlur="empurraDivMsg(1)" class="ipnut-area-post" id="txt_area_chat">';
             html2 += '<span id="retorno-btn-chat"><button id="mic" class="mic" onclick="startRecording(\'' + token + '\',\'' + idLead + '\',\'' + hashGerado + '\');" >&nbsp;</button></span>';

             html2 += '</div>';
      		   html2 += '<div style="width:100%; height:5px;">&nbsp;</div>';

      		   html += '</div>';
             html += '</div>';

      	$('#mesagem-lead').html(html);
        $('#mesagem-input').html(html2);
        $('#irPaginaMSG').trigger('click');
        $('#chat_atendimento').html('');
        $('#mesagem-input').fadeIn('slow');


     wsLead(hashGerado,idLead); // lista leads em atendimento


}


function gravalead(token){

var deviceToken      = $("#gcm_id").val()||'';
var mensagem         = $("#txt_area_chat").val()||'';
var nome  = window.localStorage.getItem("NOME");
var email = window.localStorage.getItem("EMAIL");
var telefone = '00000000';

var xhr = new XMLHttpRequest();
var IDUser = window.localStorage.getItem("ID");

var    data = 'deviceToken='+deviceToken;
       data += '&token='+token;
       data += '&nome='+nome;
       data += '&telefone='+telefone;
       data += '&email='+email;
       data += '&mensagem='+mensagem;
       data += '&campanha=Padrão';
       data += '&produto=Chat Jovem pan';
       data += '&retorno=json';

   xhr.onreadystatechange = function () {
     if (xhr.readyState == 4)
       {

         var json = JSON.parse(xhr.responseText);

         console.log(json.dados);
         var idLead = json.dados.id;
         abreCriaChat(idLead,token);
         //console.log(json.dados);
         //json.dados.id;
         //json.error.cod;
        // wsLead(hash,idLead);




       }
  };
  xhr.open('POST', 'http://jovempan.xpro.me/gestaodeleads/gravalead', true);
  xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
  xhr.send(data);



}


function abreMensagensMenu(){
  var IDProjeto = window.localStorage.getItem("IDProjeto");

  d = new Date();
  var timestamp = d.timestamp();
  var IDUser = window.localStorage.getItem("ID");
  var idProjeto = randomNumber(11,99)+''+IDProjeto;
  var idCliente = randomNumber(11,99)+''+IDUser;
  var idContato = randomNumber(11,99)+''+1;
  var tipo      = randomNumber(11,99)+''+1;

  var dataTxt   = timestamp;
  var validade  = randomNumber(11,99)+''+1;
  var hash= idProjeto+'|'+idCliente+'|'+idContato+'|'+tipo+'|'+dataTxt+'|'+validade;
  var hashGerado = $.base64.encode(hash);


  var html;


  html = '';
  html +='<div class="btn-enviar-msg offClick" onclick="listaAtendimento();"></div>';

  html +='<div class="retorno-msg-chat" id="retorno-msg-chat-msg">';

  html +='</div>';
  $('#chat_atendimento').html(html);
  $('#mesagem-input').fadeOut('slow');

  wsLeadsMSGmenu(hashGerado); // lista leads em atendimento

}


function listapublicidade(){


  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4)
      {
        var a;
        var data = JSON.parse(xhr.responseText);
        if(data.quantidade>0){

          function shuffleArray(d) {
            for (var c = d.length - 1; c > 0; c--) {
              var b = Math.floor(Math.random() * (c + 1));
              var a = d[c];
              d[c] = d[b];
              d[b] = a;
            }
            return d
          };

        var arr = shuffleArray(data.dados);
        console.log(arr);
        //for (var i = 0; i < arr.length; ++i) {

        var img = arr[0].campo0;

        var bkg = "http://jovempan.xpro.me/midias/imagens/"+img;
        $('#mainpage').html('<img style="width:110%; height:100%;" src="'+bkg+'" />');
        //}

        }


      }
 };

 xhr.open('GET', 'http://jovempan.xpro.me/aplicativos/ws/?pp=313&m=5&t=GET&%20c[]=2', true);
 xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
 xhr.send();
  };
