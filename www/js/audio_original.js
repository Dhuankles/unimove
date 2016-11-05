// Gravação e Envio do Microfone usando
// Biblioteca media e filetransfer
// Por: Dhuankles Castro

    var audioRecord = 'record.wav';
    function startRecording()
            {

                myMedia = new Media(audioRecord, onSuccess, onError);
                myMedia.startRecord();
                //alert("Iniciando Gravaçao de Audio");
             }
            function onSuccess() {
                //console.log("Gravação criada com sucesso");
            }
            function onError(error) {
                alert('code: '    + error.code    + '\n' +
                      'message: ' + error.message + '\n');
            }

            function stopRecording()
            {

                myMedia.stopRecord();
                //alert("Para Gravação");
                window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, gotFS, fail);

                function gotFS(fileSystem) {
                  fileSystem.root.getFile(audioRecord, {create: true, exclusive: false}, gotFileEntry);
                }
                function gotFileEntry(fileEntry) {
                  //alert('File URI: ' + fileEntry.toURI());

                  fileURL = fileEntry.toURL();
                  //console.log(fileURL);
                  UploadFile(fileURL);

                }

            }


function UploadFile(fileURL){
        //Method to upload Audio file to server

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
            options.fileKey = "file";
            options.fileName = "record.wav";
            options.mimeType = "audio/wav";

            var ft = new FileTransfer();
            var uri = encodeURI("http://fastmedicamentos.com.br/api/uploadAudio.php");
            ft.upload(fileURL, uri, win, fail, options);

}
