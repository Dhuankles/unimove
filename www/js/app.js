
 var html;
 var IDProjeto = window.localStorage.getItem("IDProjeto");
 // identifica a plataforma
 function getMobileOperatingSystem() {
       var userAgent = navigator.userAgent || navigator.vendor || window.opera;

       if( userAgent.match( /iPad/i ) || userAgent.match( /iPhone/i ) || userAgent.match( /iPod/i ) )
       {
         return 'iOS';

       }
       else if( userAgent.match( /Android/i ) )
       {

         return 'Android';
       }
       else
       {
         return 'unknown';
       }
 }








function menuInterno(pagina){
	 $('.menu_interno').html('');
  var nome = window.localStorage.getItem("NOME");
  var foto = window.localStorage.getItem("FOTO");

	html = '<div class="menu_inc_feeds"><i  class="icon-menu-perfil offClick" id="" onclick="PgBuscaonfiguracoes();"><div class="foto_menu_perfil" style="background-image: url(http://www.fastmedicamentos.com.br/IZE/imgs/'+foto+');"></div> <div class="nome_menu">'+nome+'</div></i> </div>'
                          +'<div class="menu_inc_feeds"><i  class="icon-menu-home offClick" id="" onclick="PgBuscaSimples();">Inicio</i> </div>'
                          +'<div class="menu_inc_feeds"><i  class="icon-menu-ajuda offClick" id="" onclick="PgAjuda();">Ajuda</i> </div>'
                          +'<div class="menu_inc_feeds"><i  class="icon-men-sobre offClick" onclick="PgSobre();" id="">Sobre</i> </div>'
                          +'<div class="menu_inc_feeds"><i  class="icon-menu-notificacao offClick" id="">Notificação</i> </div>'
                          +'<div class="menu_inc_feeds"><i  class="icon-menu-config offClick" onclick="PgBuscaonfiguracoes();">Configurações</i> </div>'
                          +'<div class="menu_inc_feeds"><i  class="icon-menu-sair offClick" id="LogoutSair">Sair</i> </div>'

		 $('#'+pagina).html(html);

}


function onfocusInput(valor){

   $(".row_padrao").css({ 'margin-top': valor+'%' });
   $(".logo_top_Inicio_logins").hide('fast');
   $(".btn-login-txt-cadastro").hide('fast');
   $(".btn-login-face").hide('fast');

}
function DesonfocusInput(valor){


    $(".row_padrao").css({ 'margin-top': valor+'%' });
    $(".logo_top_Inicio_logins").fadeIn('slow');
    $(".btn-login-txt-cadastro").fadeIn('slow');
    $(".btn-login-face").fadeIn('slow');

}

function abreMapaBusca(titulo,id){
	$('.titulo_header_top3').html('');
	menuInterno('menu_pg_maps');
	$('#irPaginaMapa').trigger('click');
  $('#id_campo_categoria').val(id);
  $('#mapaClick').trigger('click');


    $('#tipo_ti_ti').val(titulo);


  var html ='<div class="titulo_header_top3"><div class="busca_result divs"  id="input_bsc"><p id="sp_bsc">'+titulo+'<span onclick="buscaNova();">x</span></p></div></div>'
     +'<div class="bl_busc2" id="bl_busc" ></div>'


    $('#return-mapa').append(html);

 $('#bl_busc').fadeOut('slow');

}
function mudaHeader(valor){

if(valor==1){
$('.headS').removeClass('header');
$('.headS').addClass('header2');
}else{

  var Class = $('.headS').hasClass('header2');
  if(Class==true){
  $('.headS').removeClass('header2');
  $('.headS').addClass('header');
  }

}
}

function abreSemConexao(){

  mudaHeader(1);
  menuInterno('menu_pg_base');
   $('#irPaginaBase').trigger('click');
   $('#base').addClass('BkgBaseSemConexao');

       var html = '<div>'
       +'<a href="javascript:void(0);" class="bt-destaqueBUSCA" onclick="PgBuscaSimples();">'
       +'<i class=""></i><span style="font-size:11px;">TENTAR NOVAMENTE</span></a>'
       +'</div>'



       $('#return-base').html(html);

}
function PgBuscaSimples(){

  mudaHeader(1);
	menuInterno('menu_pg_base');
   $('#irPaginaBase').trigger('click');
   $('#base').addClass('BkgBase');
   $('#base').removeClass('BkgBaseSemConexao');

   html = ''
       +'<div class="ret_container" >'
       +'<div class="resumo_geral"></div>'


       +'<div>'
      //dhuankles  +'<button onclick="resultadoBusca();">Busca</button>'





       +'<a href="javascript:void(0);" class="bt-destaqueBUSCA" onclick="PgOferecerServicos();">'
       +'<i class=""></i><span style="font-size:11px;">OFERECER MEUS SERVIÇOS</span></a>'
       +'</div>'



       $('#return-base').html(html);
       checkConnection();




}






// Tempo em segundos

var tempo = new Number();
tempo = 180;
var myVar;

function startCountdown(){


	// Se o tempo não for zerado
	if((tempo - 1) >= 0){

		// Pega a parte inteira dos minutos
		var min = parseInt(tempo/60);
		// Calcula os segundos restantes
		var seg = tempo%60;

		// Formata o número menor que dez, ex: 08, 07, ...
		if(min < 10){
			min = "0"+min;
			min = min.substr(0, 2);
		}
		if(seg <=9){
			seg = "0"+seg;
		}

		// Cria a variável para formatar no estilo hora/cronômetro
		horaImprimivel = '' + min + ':' + seg;
		//JQuery pra setar o valor
		$("#contador").html(horaImprimivel);

		// Define que a função será executada novamente em 1000ms = 1 segundo
	  myVar = 	setTimeout('startCountdown()',1000);

		// diminui o tempo
		tempo--;

	// Quando o contador chegar a zero faz esta ação
} //else {
		//window.open('../controllers/logout.php', '_self');
	//}

}

// Chama a função ao carregar a tela




function solicitacaoOk(idprofissional){

  mudaHeader(1);
	menuInterno('menu_pg_base');
   $('#irPaginaBase').trigger('click');
   $('#base').removeClass('BkgBase');
   $('#base').addClass('BkgBaseSol');
   $('#base').removeClass('BkgBaseSemConexao');


   html = '<div class="ret_container" >'
       +'<div class="contador" id="contador"></div>'
       +'<div class="nome_solic">Aguarde O profissional <br>irá lhe atender </span></div>'
       +'<div onclick="cancelaSolictacao(\'' + idprofissional + '\');" class="btn_cancela_solic"></div>'

       +'</div>'



       $('#return-base').html(html);
       tempo = 180;
       clearTimeout(myVar);
       startCountdown();

}



function PreSolicita(idUser){

  $('#mascara2').fadeIn('slow');
  $('#loadd_').html('Aguarde...');




   var xhr = new XMLHttpRequest();
   xhr.onreadystatechange = function () {
        if (xhr.readyState == 4)
          {
            var json = eval(xhr.responseText);

            mudaHeader(1);
            menuInterno('menu_pg_base');
             $('#irPaginaBase').trigger('click');
             $('#base').removeClass('BkgBase');
             $('#base').addClass('BkgBaseSol');
             $('#base').removeClass('BkgBaseSemConexao');
   $.each(json, function(i, arr) {
   html = '<div class="ret_container" >'
       +'<div class="bg_solicita_foto"><img src="http://www.fastmedicamentos.com.br/IZE/imgs/'+arr.FOTO+'" class="foto_pss"></div>'
       +'<div class="nome_solic">'+arr.NOME+' '+arr.SOBRENOME+'<br><span>Há 5 Min de Você</span></div>'
        +'<div class="desc_solic" id="desc_solic">Descreva o que você Precisa!</div>'
        +'<div class="bloco_txt_solic"><textarea class="input_desc_solic" id="input_desc_solic"></textarea> </div>'
        +'<div class="btn_ssolicit" onclick="onSolicita(\'' + arr.IDUser + '\');"></div>'
        +'<div onclick="PgBuscaSimples();" class="btn_cancela_solic"></div>'
       +'</div>'



       $('#return-base').html(html);
       $('#input_desc_solic').focus();
       });
                     setTimeout(function() {
                       $('#mascara2').fadeOut('slow');
                       $('#loadd_').html('');

                     }, 1000);


        checkConnection();

      }
    }

        var  data = 'idUser='+idUser;


   xhr.open('POST', 'http://fastmedicamentos.com.br/IZE/profissional.php', true);
   xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
   xhr.send(data);

}


function buscaNova(){
$('#sp_bsc').html('');
var html='<input type="text" class="buscar_bsc" id="buscar_bsc" onkeyup="buscarProfissional3();" autocomplete="off">';
$('#input_bsc').html(html);

$("#buscar_bsc").focus();

}

function buscaNovaRepeat(){
$('#sp_bsc').html('');
var html='<input type="text" class="buscar_bsc" id="buscar_bsc" onkeyup="buscarProfissional2();" autocomplete="off">';
$('#input_bsc').html(html);

$("#buscar_bsc").focus();

}

function abre_info(){
$('#bloco_info_det').fadeIn('slow');

}

function fecha_info_(){
$('#bloco_info_det').fadeOut('slow');

}

function resultadoBusca(){
  mudaHeader(0);
  var titulo = $('#tipo_ti_ti').val();
	menuInterno('menu_pg_base');
   $('#irPaginaBase').trigger('click');
   $('#base').addClass('BkgBase');
   $('#base').removeClass('BkgBaseSemConexao');

   var IDUser                = window.localStorage.getItem("IDUser");
   var idCategoria =   $('#id_campo_categoria').val()||'';

   var lat =  $('#latitude_put').val()||'';
   var long = $('#longetude_put').val()||'';

   var html ='<div class="bl_busc3" id="bl_busc3" ></div>'
      +'<div class="titulo_header_top4"><div class="busca_result"  id="input_bsc"><p id="sp_bsc">'+titulo+'<span onclick="buscaNovaRepeat();">x</span></p></div></div>'

      +'<div class="ret_container" >'

      +'<div class="info_titulo_result">Foram encontrado <span id="id_total_profissa"></span> próximos a você</div>'

      +'<span id="return_profissa"></span>'
      +'<div class="bloco_info_det" id="bloco_info_det"><div class="fecha_info" onclick="fecha_info_();">X</div></div>'
      +'<div class="rod_rrr">IZE</div>'
      +'</div>'

       $('#return-base').html(html);

   var xhr = new XMLHttpRequest();
   xhr.onreadystatechange = function () {
        if (xhr.readyState == 4)
          {
            var json = eval(xhr.responseText);

            var total = json.length;
            $('#id_total_profissa').html(total);


            setTimeout(function() {
              $('#mascara2').fadeOut('slow');
              $('#loadd_').html('');

            }, 5000);


      $.each(json, function(i, arr) {
      // inicio

      if(i+1==total){
        var mgnbottom = 'mgnbottom';
      }else{
        var mgnbottom = '';
      }
      html2 = '<div class="bloco_reput '+mgnbottom+'">'

	  	+'<div class="info_foto_result_lft">'
      +'<div class="foto_user_rst" style="background-image: url(http://www.fastmedicamentos.com.br/IZE/imgs/'+arr.FOTO+');">'
      +'<div class="bbbb">'
      +'<div class="img_estrela">'
      +'<img src="images/estrela.png">'
      +'<img src="images/estrela.png">'
      +'<img src="images/estrela.png">'
      +'</div>'



      +'</div>'

      +'</div>'
      +'<div class="tttt">'+arr.NOME+' '+arr.SOBRENOME+'<br><span class="ver_deta" onclick="abre_info();">Ver Detalhes +</span></div>'
      +'</div>'



      +'<div class="info_foto_result_rght">'
      +'<div class="marcador_mini"></div>'
      +'<div class="min_reputacao">HÁ 5 MIN DE VOCÊ</div>'
      +'<div class="ind_reputa"><span class="cor_reput">30</span> ATENDIMENTOS <br><span class="cor_reput">5</span> INDICAÇÕES</div>'
      +'<div class="desc_reputaca">'+arr.DESCRICAO+'</div>'

      +'<div class="btn_solicitar" onclick="PreSolicita(\'' + arr.idUser + '\');">SOLICITAR<br><span>agendar/orçar</span></div>'

      +'</div>'

      +'</div>'
      // fim
       $('#return_profissa').append(html2);

      });

    }
  }




       var   data = 'latitude= -16.6147642'; //+la-16.6147642;//+latitude;
             data += '&longetude=-49.320582'//+long;//-49.320582';//+longetude;
             data += '&idUser='+IDUser;
             data += '&idCategoria='+idCategoria;

      xhr.open('POST', 'http://fastmedicamentos.com.br/IZE/mapa2.php', true);
      xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
      xhr.send(data);
      checkConnection();




}

function mascara(){
  removeToggle_();
}

function loginCriado(){

	 menuInterno('menu_pg_base');
   $('#irPaginaBase').trigger('click');
   $('#base').addClass('BkgBase2');
   $('#base').removeClass('BkgBaseSemConexao');

   var html ='<div class="titulo_header_top4">Cadastro</div>'
        +'<div class="ret_container" >'



	    +'<div class="tituloIZE_">Confirme o código recebido por SMS <br>e comece a Ganhar pontos</div>'

       +'<div class="marginvinte">'
       +'<div class="camposBusca">'
       +'<input type="tel" class="code" name="cel" onkeyup="confereCodigo();" id="code" autocomplete="off" placeholder="Digite o Código">'
       +'</div>'
       +'</div>'



	    +'</div>'

       $('#return-base').html(html);
       checkConnection();
}

function confereCodigo(){
inserirCpf();

}

function inserirCpf(){

	menuInterno('menu_pg_base');
   $('#irPaginaBase').trigger('click');
   $('#base').addClass('BkgBase2');
   $('#base').removeClass('BkgBaseSemConexao');

   var html ='<div class="titulo_header_top4">Cadastro</div>'
        +'<div class="ret_container" >'
	      +'<div class="tituloIZE2_"><b>Você acaba de conquistar 30 Pontos!</b> <br>Para armazenar precisamos vincular seu CPF<br><br>Pode Informar?</div>'
        +'<div class="marginvinte2">'
        +'<div class="camposBusca">'
        +'<input type="tel" class="code" name="cel" id="code" autocomplete="off" placeholder="Digite o CPF">'
        +'</div>'
        +'</div>'

        +'<div class="offClick btn_padrao" style="margin-top:10px;">'
        +'<a href="javascript:void(0);" class="bt-destaquePular">'
        +'Pular</a>'
        +'</div>'


	      +'</div>'
        $('#return-base').html(html);
        checkConnection();




}





function AtivaServico(){
 valor = $('#campoAtiva').val() ||'0';
 if(valor==0){
 $('#ativarServico_').removeClass('bt-destaqueATIVA');
  $('#ativarServico_').addClass('bt-destaqueATIVAon');
  $('#campoAtiva').val(1);
  $('#disp_s').html('DISPONÍVEL');

 }else if(valor==1){
   $('#ativarServico_').removeClass('bt-destaqueATIVAon');
 $('#ativarServico_').addClass('bt-destaqueATIVA');
 $('#campoAtiva').val(0);
 $('#disp_s').html('INDISPONÍVEL');
 }

}

function PgOferecerServicos(){
  mudaHeader(0);
	menuInterno('menu_pg_base');
   $('#irPaginaBase').trigger('click');
   $('#base').addClass('BkgBase2');
   $('#base').removeClass('BkgBaseSemConexao');
     html = '<div class="titulo_header_top">Oferecer Meus Serviços</div>'
       +'<div class="logo_top_Inicio_base2"></div>'
       +'<div class="foto_oferecer" style="background-image: url(images/foto.jpg);"></div>'
       +'<div class="ret_container" style="margin-top:-16px;" >'
       +'<div class="bloco_sss">'
       +'<div class="ssl-oferecer">SELECIONE UMA CATEGORIA</div>'
       +'<select class="bt-Select">'
       +'<option value="Eletricista">Eletricista</option>'
       +'<option value="Chaveiro">Chaveiro</option>'
       +'<option value="Pedreiro">Pedreiro</option>'
       +'<option value="MotoBoy">MotoBoy</option>'
       +'<option value="Jardineiro">Jardineiro</option>'
       +'<option value="Encanador">Encanador</option>'
       +'<option value="Serrallheiro">Serrallheiro</option>'
       +'<option value="Guincho">Guincho</option>'
       +'<option value="Vidraceiro">Vidraceiro</option>'
       +'</select>'
       +'</div>'

       +'<div class="ssl-oferecer">SEU CELULAR</div>'
       +'<input type="text" class="txt_area_oferecer" placeholder="Digite com DDD">'

       +'</div>'

       +'<div class="ssl-oferecer">SEU CPF</div>'
       +'<input type="text" class="txt_area_oferecer">'

       +'</div>'

      /* +'<div class="ssl-oferecer">SEU ESTADO</div>'
       +'<select class="bt-Select">'
       +'<option value="Goiás">Goiás</option>'
       +'<option value="Chaveiro">Minas Gerais</option>'

       +'</select>'
       +'</div>'*/

      /* +'<div class="ssl-oferecer">CIDADE</div>'
       +'<select class="bt-Select">'
       +'<option value="Goiás">Goiânia</option>'
       +'<option value="Chaveiro">Aparecida de Goiânia</option>'
       +'<option value="Pedreiro">Senador Canedo</option>'
       +'</select>'
       +'</div>'*/


       +'<div class="ssl-oferecer">UMA DESCRIÇÃO - <span id="cont">140 Caracteres</span><span> Restante</span></div>'
       +'<textarea class="txt_area_oferecer" onKeyUp="limite_textarea(this)" id="txt_area_oferecer"></textarea>'

       +'</div>'

       +'<!--<div class="ssl-oferecer">ATENDER EM UM RAIO DE:</div>-->'
       +'<!--<div  class="range_oferecer"><input type="range"  id="range_oferec_" value="1"  min="1" max="30" step="1" /></div>-->'
       +'<!--<div class="km_oferecer" id="km_oferecer">1KM</div>-->'
       +'<!--</div>-->'


       +'<!-- <div class="botao_liga_desliga" onclick="trocarImagem()">'
       +'<img class="img_liga_desliga" src="images/indisponivel.png" id="liga_desliga_imagem" /><br>'
       +'<input type="hidden" id="input_liga_desliga" value="0" >'
       +'</div>'
       +'<div>-->'
       +'<input type="hidden" valor="0" id="campoAtiva">'
       +'<a href="javascript:void(0);" onclick="AtivaServico()" id="ativarServico_" class="bt-destaqueATIVA" >'
       +'<i class=""></i><span style="font-size:12px;" id="disp_s">INDISPONÍVEL</span><br>'
       +'<span class="info_liga">Só ative se realmente estiver dispónivel pois, <br>pode afetar diretamente em sua reputação.</span>'
       +'</a>'
       +'</div>'


       $('#return-base').html(html);
       checkConnection();

}



function insereTopCss(){

  $('.esPadding').remove();
  $('.info_sobre3').html('<div class="esPadding"></div>')



}
function PgAjuda(){
  mudaHeader(0);
	menuInterno('menu_pg_base');
   $('#irPaginaBase').trigger('click');
   $('#base').removeClass('BkgBase');
   $('#base').removeClass('BkgBase2');
   $('#base').addClass('BkgBase3');
   $('#base').removeClass('BkgBaseSemConexao');


     html = '<div class="titulo_header_top2">Ajuda</div>'
       //+'<div class="logo_top_Inicio_base2"></div>'
       +'<div class="info_sobre"><span class="titulo_sobre">Principais Dúvidas</span><br><span class="titulo_sobre2">Sobre o IZE</span></div>'
       +'<div class="info_sobre2"><span class="titulo_sobre"><a href="#como_funciona">Como Funciona o IZE?</a></span></div>'
       +'<div class="info_sobre2"><span class="titulo_sobre"><a href="#como_ofereco">Como Ofereço Meus Serviços?</a></span></div>'
       +'<div class="info_sobre2"><span class="titulo_sobre"><a href="#pago_divulgar">Pago alguma coisa para divulgar?</a></span></div>'
       +'<div class="info_sobre2"><span class="titulo_sobre"><a href="#como_sou_avaliado">Como sou Avaliado?</a></span></div>'
       +'<div class="info_sobre2"><span class="titulo_sobre"><a href="#posso_ser_banido">Posso ser banido?</a></span></div>'

       +'<div class="info_sobre3"><a name="como_funciona"></a><div class="esPadding"></div><span class="titulo_sobre">Como Funciona o IZE?</span><br><span class="titulo_sobre3">O IZE é um App que veio para facilitar a vida de muitas pessoas'
       +' que precisam de um profissional, em diversas áreas, tais com; Eletricistas, Chaveiros, Guincho e Ate Moto taxi, entre ouras áreas. É muito facil usar,'
       +' basta apenas se cadastrar, buscar por um profisional próximo a você e pronto é Simple e totalmente Grãtis!</span></div>'

       +'<div class="info_sobre3"><a name="como_ofereco">&nbsp;</a><div class="esPadding"></div><span class="titulo_sobre">Como Ofereço Meus Serviços?</span><br><span class="titulo_sobre3">Com IZE é muito simples! Clique no menu Meus serviços ou no botão Oferecer meus Serviços,'
       +' na tela que se abre informe corretamente o seus dados como uma breve descrição do que você faz, e por fim clique no botão para estar disponível. A partir deste momento '
       +' você jã esta habilitado!</span></div>'

       +'<div class="info_sobre3"><a name="pago_divulgar">&nbsp;</a><div class="esPadding"></div><span class="titulo_sobre">Pago alguma coisa para divulgar?</span><br><span class="titulo_sobre3">O IZE é totalmente Gratis, Quem avalia você, são os proprios usuários, a medida que você atende um cliente.'
       +'</span></div>'



       +'<div class="info_sobre3"><a name="como_sou_avaliado">&nbsp;</a><div class="esPadding"></div><span class="titulo_sobre">Como sou Avaliado?</span><br><span class="titulo_sobre3">NO IZE, Quem avalia você, são os próprios usuários, juntamente com nossos algoritimos, fique atento em estar disponível e não atender um cliente, isso tambem conta pontos a seu favor. Então quando não tiver disponivel desative, '
       +' Tornando indisponivel. Lembre-se você escolhe quando quer trabalhar!</span></div>'

       +'<div class="info_sobre3"><a name="posso_ser_banido">&nbsp;</a><div class="esPadding"></div><span class="titulo_sobre">Posso ser banido?</span><br><span class="titulo_sobre3">Sim! ao desrespeitar a politica de privacidade você pode inclusive perder seu perfil e reputação! Não crie perfils falsos, Lembre-se você tem uma reputação a Zelar! '
       +' Tornando indisponivel. Lembre-se você escolhe quando quer trabalhar!</span></div>'



       +'<div class="info_sobre3"><span class="titulo_sobre">Facilidade e Confiança</span><br><span class="titulo_sobre3">Voçê mesmo avalia a cada profissional, desde o atendimento'
       +'ao preço e também por indicação de amigos de uma forma bem segura. </span></div>'
       +'<div class="div_img_sobre"><img class="img_sobre2" src="images/encontre.png"  /></div>'

       $('#return-base').html(html);
}

function PgSobre(){
  mudaHeader(0)
	menuInterno('menu_pg_base');
   $('#irPaginaBase').trigger('click');
   $('#base').removeClass('BkgBase');
   $('#base').removeClass('BkgBase2');
   $('#base').addClass('BkgBase3');
   $('#base').removeClass('BkgBaseSemConexao');
     html = '<div class="titulo_header_top2">IZE</div>'
       //+'<div class="logo_top_Inicio_base2"></div>'
       +'<div class="info_sobre"><span class="titulo_sobre">É Facil</span><br><span class="titulo_sobre2">Rápido e Grátis</span></div>'
       +'<div class="div_img_sobre"><img class="img_sobre" src="images/encanador.jpg"  /></div>'
       +'<div class="info_sobre2"><span class="titulo_sobre">Precisa de um Profissional?</span><br><span class="titulo_sobre3">O Ize é a maneira mais inteligente de Solicitar um Profissional.'
       +' Basta Consultar no App, verificar o mais próximo de você  ver a reputação e Solicitar. </span></div>'

       +'<div class="info_sobre2"><span class="titulo_sobre">Facilidade e Confiança</span><br><span class="titulo_sobre3">Voçê mesmo avalia a cada profissional, desde o atendimento'
       +'ao preço e também por indicação de amigos de uma forma bem segura. </span></div>'
       +'<div class="div_img_sobre"><img class="img_sobre2" src="images/encontre.png"  /></div>'

       $('#return-base').html(html);
}

$(document).on('input change', '#range_oferec_', function() {
   var valor = $(this).val();
    $('#km_oferecer').html(valor+'KM');

});


function trocarImagem(){

    var valor = $("#input_liga_desliga").val() ||'';
    var img = document.getElementById("liga_desliga_imagem");


    if( valor == 0 ){
         img.src = "images/disponivel.png";
         $('#input_liga_desliga').val(1);
    }else if(valor ==1){

         img.src = "images/indisponivel.png";
         $('#input_liga_desliga').val(0);
    }
}



 function btnMenuTopo(){
    var pagina = $('#ref_pagina').val();

  	$( ".btn-header-menu" ).toggleClass( "active" );
    $( "#btn-menu-top" ).toggleClass( "active" );
		$( ".nav-menu-topo" ).toggleClass( "active" );
    $( ".sidebar-left" ).toggleClass( "active" );
    //$( "#"+pagina).toggleClass( "pgLeft" );
    $( ".publicar-txt").toggleClass( "left" );
    $( ".chat-xv").toggleClass( "left" );
    $( "#mascara").toggleClass('active');



}
function refPagina(pagina){
 $('#ref_pagina').val(pagina);
}
function removeToggle_(){

  var pagina = $('#ref_pagina').val();

  $( ".btn-header-menu").removeClass( "active" );
  $( ".nav-menu-topo").removeClass( "active" );

  $( ".sidebar-left" ).removeClass( "active" );
  $( "#"+pagina).removeClass( "pgLeft" );
  $( ".publicar-txt").removeClass( "left" );
  $( ".chat-xv").removeClass( "left" );
  $( "#mascara").removeClass('active');

  $( ".sidebar-right").removeClass('active');
  $( "#"+pagina).removeClass( "pgRight" );
  $( ".publicar-txt").removeClass( "right" );
  $( ".chat-xv").removeClass( "right" );

}
//// abre chat
    //// Conta o numero de semanas do ano
    Date.prototype.getWeekNumber = function(){
    var d = new Date(+this);
    d.setHours(0,0,0);
    d.setDate(d.getDate()+4-(d.getDay()||7));
    return Math.ceil((((d-new Date(d.getFullYear(),0,1))/8.64e7)+1)/7);
};

 //  gera horas formato 24 horas - Padrao
 function horas() {
     var date = new Date();
     var hours = date.getHours() < 10 ? "0" + date.getHours() : date.getHours();
     var minutes = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
     var seconds = date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();
     time = hours + ":" + minutes + ":" + seconds;
     return time;
 };


  // gera horas formato 24 horas
  function updateclock() {
      var date = new Date();
      var hours = date.getHours() < 10 ? "0" + date.getHours() : date.getHours();
      var minutes = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
      var seconds = date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();
      time = hours + "" + minutes + "" + seconds;
      return time;
  };

// gera data
Date.prototype.timestamp = function() {
var yyyy = this.getFullYear().toString();
var mm = (this.getMonth()+1).toString(); // getMonth() is zero-based
var dd  = this.getDate().toString();
return yyyy+""+(mm[1]?mm:"0"+mm[0]) + "" + (dd[1]?dd:"0"+dd[0])+updateclock();
};
"use strict";jQuery.base64=(function($){var _PADCHAR="=",_ALPHA="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",_VERSION="1.0";function _getbyte64(s,i){var idx=_ALPHA.indexOf(s.charAt(i));if(idx===-1){throw"Cannot decode base64"}return idx}function _decode(s){var pads=0,i,b10,imax=s.length,x=[];s=String(s);if(imax===0){return s}if(imax%4!==0){throw"Cannot decode base64"}if(s.charAt(imax-1)===_PADCHAR){pads=1;if(s.charAt(imax-2)===_PADCHAR){pads=2}imax-=4}for(i=0;i<imax;i+=4){b10=(_getbyte64(s,i)<<18)|(_getbyte64(s,i+1)<<12)|(_getbyte64(s,i+2)<<6)|_getbyte64(s,i+3);x.push(String.fromCharCode(b10>>16,(b10>>8)&255,b10&255))}switch(pads){case 1:b10=(_getbyte64(s,i)<<18)|(_getbyte64(s,i+1)<<12)|(_getbyte64(s,i+2)<<6);x.push(String.fromCharCode(b10>>16,(b10>>8)&255));break;case 2:b10=(_getbyte64(s,i)<<18)|(_getbyte64(s,i+1)<<12);x.push(String.fromCharCode(b10>>16));break}return x.join("")}function _getbyte(s,i){var x=s.charCodeAt(i);if(x>255){throw"INVALID_CHARACTER_ERR: DOM Exception 5"}return x}function _encode(s){if(arguments.length!==1){throw"SyntaxError: exactly one argument required"}s=String(s);var i,b10,x=[],imax=s.length-s.length%3;if(s.length===0){return s}for(i=0;i<imax;i+=3){b10=(_getbyte(s,i)<<16)|(_getbyte(s,i+1)<<8)|_getbyte(s,i+2);x.push(_ALPHA.charAt(b10>>18));x.push(_ALPHA.charAt((b10>>12)&63));x.push(_ALPHA.charAt((b10>>6)&63));x.push(_ALPHA.charAt(b10&63))}switch(s.length-imax){case 1:b10=_getbyte(s,i)<<16;x.push(_ALPHA.charAt(b10>>18)+_ALPHA.charAt((b10>>12)&63)+_PADCHAR+_PADCHAR);break;case 2:b10=(_getbyte(s,i)<<16)|(_getbyte(s,i+1)<<8);x.push(_ALPHA.charAt(b10>>18)+_ALPHA.charAt((b10>>12)&63)+_ALPHA.charAt((b10>>6)&63)+_PADCHAR);break}return x.join("")}return{decode:_decode,encode:_encode,VERSION:_VERSION}}(jQuery));

function randomNumber(minimum, maximum){
    var n1 = Math.round( Math.random() * (maximum - minimum) + minimum);

    return n1;
}
function limpaMSGx(){

  $( "#mesagem-lead").html('');
  $( "#mesagem-input").html('');

}
function abreSidebarChat(){

  var pagina = $('#ref_pagina').val();
  $('.sidebar-right').html('');
  $( ".sidebar-right").toggleClass('active');
  $( "#"+pagina).toggleClass( "pgRight" );
  $( ".publicar-txt").toggleClass( "right" );
  $( ".chat-xv").toggleClass( "right" );
  $( "#mascara").toggleClass('active');


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
alert(hashGerado);

  var html;


  html = '<div class="titulo-msg-chat">MENSAGENS</div>';
  html +='<button class="btn-criar-msg offClick" onclick="listaAtendimento();">ENVIAR MENSAGEM</button>';
  html +='<div class="retorno-msg-chat" id="retorno-msg-chat">';

  html +='</div>';
  $('#sidebar-right-'+pagina).html(html);
  wsLeads(hashGerado); // lista leads em atendimento


}
function controlaScrollFeeds(){
$(window).unbind('scroll');
$('#lsPaginacao').val(0);
$('#paginacaoFeeds').val(0);

}
function shareOnline(){ // compartilha redessociais

  var txt = $('#txtCompartilhaFeed').val();
  var img = $('#imgCompartilhaFeed').val();
  window.plugins.socialsharing.share(txt,null,img,'');
}

function share(txt,img){ // compartilha redessociais
      $('#mascara2').addClass('active');
      setTimeout(function() {
          $('#mascara2').removeClass('active');
      }, 3000)

  window.plugins.socialsharing.share(txt,null,img,'');

}

function empurraDivComentar(valor){

  var plt = $("#tipoDePlataforma").val() || '';

  if((plt!='')&&(plt!='ios')){
  if(valor==0){
  $(".class-comentar-bloco").css({ 'bottom': '43%' });
  }
  if(valor==1){
  $(".class-comentar-bloco").css({ 'bottom': '0' });
  }
}
}

function empurraDivCad(valor){

  var plt = $("#tipoDePlataforma").val() || '';

  if((plt!='')&&(plt!='ios')){
  if(valor==0){
  $("#campo-cadastro-nome").css({ 'top': '26%' });
  $("#campo-cadastro-email").css({ 'top': '34%' });
  $("#campo-cadastro-senha").css({ 'top': '42.3%' });
  }
  if(valor==1){
    $("#campo-cadastro-nome").css({ 'top': '42%' });
    $("#campo-cadastro-email").css({ 'top': '50%' });
    $("#campo-cadastro-senha").css({ 'top': '58%' });
  }
}
}



function empurraDivMsg(valor){

  var plt = $("#tipoDePlataforma").val() || '';

  if((plt!='')&&(plt!='ios')){
  if(valor==0){
  $(".mesagem-input").css({ 'bottom': '43%' });
  }
  if(valor==1){
  $(".mesagem-input").css({ 'bottom': '69px' });
  }
}
}




function defineSO(tipo){
      $(document).ready(function() {
      if(tipo=='ios'){

      $("#feedsView").css({ 'margin-top': '37px' });
      $(".header").css({ 'height': '72px' });
      $(".logo_top_header").css({ 'margin-top': '4px' });
      $(".btn-header-menu").css({ 'top': '20px' });
      $(".chat-xv").css({ 'top': '33px' });
      $(".publicar-txt").css({ 'top': '76px' });
      $(".icon-menu-feeds").css({ 'top': '7px' });
      $(".titulo-msg-chat").css({ 'margin-top': '26px' });



      $('#tipoDePlataforma').val('ios');
    }else if(tipo=='android'){
      $('#tipoDePlataforma').val('android');

    }


      });
 }


function alterarSenha(){
var html ;

html  = '<input class="inputs_perfil_" id="senhaAtual_dados" type="text" placeholder="SENHA ATUAL">';
html += '<input class="inputs_perfil_" id="senhaNova_dados" type="text" placeholder="NOVA SENHA">';
html += '<div class="btn-alterar-dados offClick" onclick="updateSenha();"></div>';
html += '<div class="alert alert-danger" style="width:80%; height;20px; display:none" id="status_senha"></div>';
$('#dados_perf').html(html);

}

function alterarDados(){
var html ;

html  = '<input class="inputs_perfil_" id="nome_dados" type="text" placeholder="SEU NOME">';
html += '<input class="inputs_perfil_" id="cidade_dados" type="text" placeholder="SUA CIDADE">';
html += '<input class="inputs_perfil_" id="email_dados" type="text" placeholder="SEU EMAIL">';
html += '<div class="btn-alterar-dados offClick" onclick="updatePerfil();"></div>';

var   nome   = window.localStorage.getItem("NOME");
var   cidade = window.localStorage.getItem("CIDADE");
var   email  = window.localStorage.getItem("EMAIL");


$('#dados_perf').html(html);

$('#nome_dados').val(nome);
$('#cidade_dados').val(cidade);
$('#email_dados').val(email);

}


function validateEmail(emailaddress){
       var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
       if(!emailReg.test(emailaddress)) {
            return false;
       }else{

         return true;
       }
}

 function pegaPagina(pagina){
    $('#pagina').val(pagina)
}
 function mudaBackGround(pagina){
    $('#'+pagina).addClass('Bkginicial');
}
 function carregaPagina(div,pagina){
   var caminho = pagina
   $("#"+div).load('view/'+pagina);
 }
 function fecharHtml(){
   $('#html').fadeOut('fast');
   $('#conteudo-retorno').html('');
 }

 function slideUp(val,id,idCliente,txt,img){
 var IDUser = window.localStorage.getItem("ID");
 if(val==1){
 $('#iconSeta'+id).hide('fast');

 $('#mascara').fadeIn('slow');
 html = '<div id="slider_up" class="slider_up abre">';
  if(idCliente==IDUser){
 html += ' <div class="btn-feed-excluir offClick" onclick="excluirFeedsID('+id+')"></div>';
 }
 html += ' <div class="btn-feed-compartilhar offClick" onclick="share(\'' + txt + '\',\'' + img + '\')"></div>';
 html += ' <div class="btn-feed-cancelar offClick" onclick="slideUp(\'' + 0 + '\',\'' + id + '\',\'' + idCliente + '\',\'' + txt + '\',\'' + img + '\')"></div>';

 html += '</div>'
 $('body').append(html);

 }else if(val==0){
   $('#slider_up').remove();
   $('#iconSeta'+id).show('fast');
  $('#mascara').fadeOut('slow');
 }

 }
 function limite_textarea() { // limita caracters txtarea

    var valor = $('#txt_area_oferecer').val() || '';

     quant = 140;
     total = valor.length;
     if(total <= quant) {
         resto = quant - total;
         $('#cont').html(resto);

     } else {
         document.getElementById('txt_area_oferecer').value = valor.substr(0,quant);
     }
 }


 function habilitaMic(){
   var valor = $('#txt_area_chat').val()|| '';
   if(valor==''){
   $('.cam_incon').fadeIn('slow');
   $('#btn_send_Chat').removeClass('active');
 }else{
   $('#btn_send_Chat').addClass('active');
   $('.cam_incon').fadeOut('slow');
 }
   }
 function sobeLoginIn(){

   $('.up').addClass('sobe');



 }
 function desceLoginIn(){

   $('.up').removeClass('sobe');

 }

 function empurra(div){

       $('#'+div).addClass('empurra');
 }

 function empurraDesactive(div){

       $('#'+div).removeClass('empurra');
 }

 function empurraModal(div){

       $('#'+div).css({ 'margin-top': '-15%' });
 }

 function empurraModalDesactive(div){

       $('#'+div).css({ 'margin-top': '5%' });
 }


 function LoginToFB(){

   CordovaFacebook.login({
   permissions: ['email', 'user_likes'],
   onSuccess: function(result) {
      if(result.declined.length > 0) {
         alert("The User declined something!");
      }
      /* ... */
   },
   onFailure: function(result) {
      if(result.cancelled) {
         alert("The user doesn't like my app");
      } else if(result.error) {
         alert("There was an error:" + result.errorLocalized);
      }
   }
});

 }
