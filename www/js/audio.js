// Gravação e Envio do Microfone usando
// Biblioteca media e filetransfer
// Por: Dhuankles Castro

var IDProjeto = window.localStorage.getItem("IDProjeto");
var extension = null;

var mediaRecFile = "myRecording100.wav";


function startRecording(tokengerado,idLead,hashGerado){

   var html = "<input type='hidden' id='tokengerado'>";
   html += "<input type='hidden' id='idLead'>";
   html += "<input type='hidden' id='hashGerado'>";

   $('#div_tokens').html(html);
   $('#tokengerado').val(tokengerado);
   $('#idLead').val(idLead);


  myMedia = new Media(mediaRecFile, onSuccess, onError);

  function onSuccess() {
      console.log("Gravação criada com sucesso");
  }
  function onError() {
      console.log('code: '    + error.code    + '\n' +
            'message: ' + error.message + '\n');
  }


  myMedia.startRecord();
  html2 = '<button id="mic" class="micStop" onclick="stopRecording();" >&nbsp;</button>';
  $('#retorno-btn-chat').html(html2);



}
function stopRecording(){
    myMedia.stopRecord();
    var plataforma = $('#tipoDePlataforma').val();
    console.log(plataforma);
    if(plataforma=='ios'){
    var path = cordova.file.tempDirectory;

  }else if(plataforma=='android'){
    var path = cordova.file.externalRootDirectory;
  }
    UploadFile(path+mediaRecFile);

console.log("File path is: " + path + mediaRecFile);


  html = '<button id="mic" class="mic" onclick="startRecording();" >&nbsp;</button>';
  $('#retorno-btn-chat').html(html);
}



function UploadFile(fileURL){
        //Method to upload Audio file to server


        var deviceToken      = $("#gcm_id").val()||'';
        var nome  = window.localStorage.getItem("NOME");
        var email = window.localStorage.getItem("EMAIL");
        var telefone = '00000000';
        var tokengerado      = $("#tokengerado").val()||'';
        var idLead           = $("#idLead").val()||'';
        var hashGerado       = $("#hashGerado").val()||'';

console.log('token:'+tokengerado+ ' idLead'+idLead+' nome: '+nome+ 'telefone: '+telefone+ ' email: '+ email);
            console.log(fileURL);
            var win = function (r) {
                console.log("Code = " + r.responseCode);
                console.log("Response = " + r.response);
                console.log("Sent = " + r.bytesSent);
            }

            var fail = function (error) {
                alert("An error has occurred: Code = " + error.code);
                console.log("upload error source " + error.source);
                console.log("upload error target " + error.target);
            }



            var options = new FileUploadOptions();
            options.fileKey = "anexo";
            //options.fileName = "record.wav";
            options.fileName="myRecording100.wav";
            options.mimeType = "audio/wav";
            var params = {};
            params.deviceToken = deviceToken;
            params.token = tokengerado;
            params.nome = nome;
            params.telefone = telefone;
            params.email = email;
            params.campanha = 'Padrão';
            params.produto = 'Chat Jovem pan';
            params.retorno = 'json';
            params.idlead = idLead;

            options.params = params;


            var ft = new FileTransfer();
            var uri = encodeURI("http://jovempan.xpro.me/gestaodeleads/gravalead");
            ft.upload(fileURL, uri, win, fail, options);

            $('#retorno-btn-chat').html('');





}
