function abreEditaFoto(){
$('#menu_abre_foto').fadeIn('slow');

var html = '<button id="bt_tira_foto" class="btn_tirar_foto" onclick="capturePhoto();">Tirar foto</button><br>'
+'<button id="bt_galeria_foto" class="btn_tirar_foto" onclick="getPhoto(pictureSource.PHOTOLIBRARY);">Galeria de Fotos</button><br>'
$('#tt_').html(html);


}
function fechaEditaFoto(){
$('#menu_abre_foto').fadeOut('slow');
}


function PgBuscaonfiguracoes(){

     $('#conexaoVerifica').trigger('click');
     mudaHeader(1)
   	 menuInterno('menu_pg_base');
     $('#irPaginaBase').trigger('click');
     $('#base').addClass('BkgBase');
     $('#base').removeClass('BkgBaseSemConexao');


  var nome = window.localStorage.getItem("NOME")||'';
  var sobrenome = window.localStorage.getItem("SOBRENOME")||'';
  var celular = window.localStorage.getItem("CELULAR")||'';
  var email = window.localStorage.getItem("EMAIL")||'';

  var foto = window.localStorage.getItem("FOTO")||'';
  if(foto==''){
    http://www.fastmedicamentos.com.br/IZE/imgs/'+foto+'
      var perfilIMg = "images/menu/profile.png"
  }else{
      var perfilIMg = 'http://www.fastmedicamentos.com.br/IZE/imgs/'+foto;
  }



   html = '<div class="menu_abre_foto" id="menu_abre_foto">'
  +'<span id="tt_">'
  +'</span>'






  +'<button class="btn_tirar_foto_cancel" onclick="fechaEditaFoto();">Cancelar</button>'
  +'</div>'

  +'<div class="alert_sucess_user" id="alert_sucess_user">Dados Alterados com Sucesso!</div>'


  +'<div class="titulo_header_top">Configurações</div>'
  +'<div class="fundo_bk_foto"></div>'
  +'<div  class="foto_configuracao offClick" onclick="abreEditaFoto();" id="foto_configuracao" style="background-image: url('+perfilIMg+');"></div>'
  +'<div class="row_padrao" style="margin-top: 43%;">'
  +'<div class="col_meio_left place_">'
  +'<span class="titulo_input_interna">PRIMEIRO NOME</span>'
  +'<input type="text" class="input_novo2_" value="'+nome+'" id="nome_config" placeholder="Digite seu Nome">'
  +'</div>'
  +'<div class="col_meio_right place_">'
  +'<span class="titulo_input_interna">SOBRENOME</span>'
  +'<input type="text" class="input_novo2_" value="'+sobrenome+'" id="sobrenome_config" placeholder="Digite seu Sobrenome">'
  +'</div>'
  +'<div class="limpa"></div>'

  +'<div class="col_meio_center place_">'
  +'<span class="titulo_input_interna">CELULAR</span><br>'
  +'<input type="tel" maxlength="13" class="input_novo2_" id="celular_config" value="'+celular+'" placeholder="00-0000-00000">'
  +'</div>'

  +'<div class="col_meio_center place_">'
  +'<span class="titulo_input_interna">E-MAIL</span><br>'
  +'<input type="text" maxlength="60" disabled="disabled" style="width:100%;"  value="'+email+'" class="input_novo2_" placeholder="Digite o E-mail">'
  +'</div>'



  +'<div class="offClick btn_padrao" onclick="UpdadeUsuario();">'
  +'<a href="javascript:void(0);" class="bt-destaqueEntrada">'
  +'<i class=""></i>Salvar</a>'

  +'</div>'
  +'<div class="error_azul" id="erro_cadastro">Ops! Preencha todos os Campos.</div>'

  +'<div class="col_meio_center place_" style="margin-top: 30px;">'
  +'</div>'

  +'</div>'
  $('#return-base').html(html);


}
