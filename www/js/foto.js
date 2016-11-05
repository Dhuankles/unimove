
    var pictureSource;   // picture source
    var destinationType; // sets the format of returned value

    // Wait for PhoneGap to connect with the device
    //
    document.addEventListener("deviceready",onDeviceReady,false);

    // PhoneGap is ready to be used!
    //
    function onDeviceReady() {
        pictureSource=navigator.camera.PictureSourceType;
        destinationType=navigator.camera.DestinationType;
    }

    // Called when a photo is successfully retrieved
    //
    function onPhotoDataSuccess(imageData) {
//alert(imageData);
    $('#foto_configuracao').css('background-image', imageData);
      $('#i_foto').val(imageData);

      //var largeImage = document.getElementById('foto_testes');
      //largeImage.style.display = 'block';
      //largeImage.src = imageData;
      $('#foto_configuracao').css('background', 'url(\'' + imageData + '\') no-repeat');
      var html = '<button id="bt_salva_foto" class="btn_tirar_foto" onclick="uploadFoto();">Salvar</button><br>'
      +'<button id="bt_tira_outra_foto" class="btn_tirar_foto" onclick="abreEditaFoto();">Tirar Outra</button><br>'
      $('#tt_').html(html);
}






    // Called when a photo is successfully retrieved
    //
    function onPhotoURISuccess(imageURI) {
    //alert(imageURI);
    $('#foto_configuracao').css('background-image', imageURI);
    $('#i_foto').val(imageData);

    //var largeImage = document.getElementById('foto_testes');
          //largeImage.style.display = 'block';
          //largeImage.src = imageURI;
    $('#foto_configuracao').css('background', 'url(\'' + imageURI + '\') no-repeat');

    var html = '<button id="bt_salva_foto" class="btn_tirar_foto" onclick="uploadFoto();">Salvar</button><br>'
    +'<button id="bt_tira_outra_foto" class="btn_tirar_foto" onclick="abreEditaFoto();">Tirar Outra</button><br>'
    $('#tt_').html(html);



    }

    // A button will call this function
    //
    function capturePhoto() {
      // Take picture using device camera and retrieve image as base64-encoded string
      navigator.camera.getPicture(onPhotoDataSuccess, onFail, { quality: 50 });
    }

    // A button will call this function
    //
    function capturePhotoEdit() {
      // Take picture using device camera, allow edit, and retrieve image as base64-encoded string
      navigator.camera.getPicture(onPhotoDataSuccess, onFail, { quality: 20, allowEdit: true });
    }

    // A button will call this function
    //
    function getPhoto(source) {
      // Retrieve image file location from specified source
      navigator.camera.getPicture(onPhotoURISuccess, onFail, { quality: 50,
        destinationType: destinationType.FILE_URI,
        sourceType: source });
    }

    // Called if something bad happens.
    //
    function onFail(message) {
      alert('Failed because: ' + message);
    }
