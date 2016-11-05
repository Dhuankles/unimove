



   		// conteudo das infowindows
$(document).ready(function(){
//  var infowindow = new google.maps.InfoWindow();
//  var pinkmarker = new google.maps.MarkerImage('js/marcador.png', new google.maps.Size(20, 34) );
//  var shadow = new google.maps.MarkerImage('js/marcador_sombra.png', new google.maps.Size(37, 34) );


$( "#mapaClick" ).click(function() {
  $('#mascara2').fadeIn('slow');
  $('#loadd_').html('Localizando...');
      var IDUser                = window.localStorage.getItem("IDUser");
      var idCategoria =   $('#id_campo_categoria').val()||'';

      var lat =  $('#latitude_put').val()||'';    //window.localStorage.getItem("latitude"); // -16.6147642;
      var long = $('#longetude_put').val()||'';   //window.localStorage.getItem("longitude");//-49.320582;
      var latlng = new google.maps.LatLng(lat,long);



      var xhr = new XMLHttpRequest();
      xhr.onreadystatechange = function () {
           if (xhr.readyState == 4)
             {
               var json = eval(xhr.responseText);
              setTimeout(function() {
               if(json.length>1){
                 var total = parseInt(json.length-1);
                $('#fr_busca').html('Foram encontrados <b>'+total+'</b> Próximos à você!');
                $('#fr_busca').fadeIn('slow');
                 var btn = '<button class="btn-solicitar" onclick="resultadoBusca();">Escolher Profissional</button>';
               }else{
                  var btn = '<button class="btn-solicitar_">NÃO HÁ PROFISSIONAIS DISPONÍVEL <br>NESTA LOCALIZAÇÃO</button>';
                $('#fr_busca').fadeOut('slow');
               }

               $('#solicita_profi').html(btn);

                 $('#mascara2').fadeOut('slow');
                 $('#loadd_').html('');

               }, 3000);



//console.log(json);
//alert(json[0]['LATITUDE']);







               //var lag = -16.6799;
               //var long= -49.255;



                   map = new google.maps.Map(document.getElementById('mapa'), {
                       zoom: 15,
                       center: latlng,
                       navigationControl: false,
                           backgroundColor:'none',
                           streetViewControl: true,
                              		//scrollwheel: true,
                       mapTypeControl: true,
                        disableDefaultUI: true,
                       mapTypeId: google.maps.MapTypeId.ROADMAP
                   });




                   for (var i = 0; i < json.length; i++) {
                       if(json[i]['idUser']==IDUser){


                        switch (json[i]['SEXO']) {
                          case 1:
                          sexo="js/eu_ele.png";
                          break;

                          case 2:
                          sexo="js/eu_ela.png";
                          break;
                          default:
                          sexo="js/eu_vc.png";
                          break;

                        }

                       var marker = new google.maps.Marker({
                           position: new google.maps.LatLng(json[i]['LATITUDE'],json[i]['LONGETUDE']),
                       icon: sexo,
                           shadow: "js/marcador_sombra.png",
                       map: map
                       });

                       google.maps.event.addListener(marker, 'click', (function(marker, i) {
                         return function() {
                           infowindow.setContent(locations[i].info);
                       infowindow.open(map, marker);
                         }
                       })(marker, i));
                     }else{
                       var marker = new google.maps.Marker({
                           position: new google.maps.LatLng(json[i]['LATITUDE'],json[i]['LONGETUDE']),
                       icon: "js/marcador.png",
                           shadow: "js/marcador_sombra.png",
                       map: map
                       });

                       google.maps.event.addListener(marker, 'click', (function(marker, i) {
                         return function() {
                           infowindow.setContent(locations[i].info);
                       infowindow.open(map, marker);
                         }
                       })(marker, i));

                     }

                   }


   }

 };


     var   data = 'latitude='+lat;   //-16.6147642';//+latitude;
           data += '&longetude='+long;//-49.320582';//+longetude;
           data += '&idUser='+IDUser;
           data += '&idCategoria='+idCategoria;





    xhr.open('POST', 'http://fastmedicamentos.com.br/IZE/mapa.php', true);
    xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
    xhr.send(data);



     });
	   });





   function onSuccess(position) {
           var element = document.getElementById('geolocation');
           /*element.innerHTML = 'Latitude: '  + position.coords.latitude      + '<br />' +
                               'Longitude: ' + position.coords.longitude     + '<br />' +
                               '<hr />'      + element.innerHTML;
                               */
                               var lat  = position.coords.latitude;
                               var long = position.coords.longitude;
                               window.localStorage.setItem("latitude", lat);
                               window.localStorage.setItem("longitude", long);
                               $('#latitude_put').val(lat);
                               $('#longetude_put').val(long);
                               atualizaGPS(lat,long);
       }

       // onError Callback receives a PositionError object
       //
       function onError(error) {

          // alert('code: '    + error.code    + '\n' +
            //     'message: ' + error.message + '\n');
       }

       // Options: throw an error if no update is received every 30 seconds.
       //

      setInterval(function() {

           watchID = navigator.geolocation.watchPosition(onSuccess, onError);
       }, 30000);


       //chave : AIzaSyB6TVPKavQB_J-GimZl3W0onN8Lkf4ad4Y

       var map;

       // inicializa jquery

        ///// FIM: Atualiza token
        function atualizaGPS(lat,long){


        var xhr = new XMLHttpRequest();


        var IDUser                = window.localStorage.getItem("IDUser");
        if(lat!='' && long!=''){
       xhr.onreadystatechange = function () {
            if (xhr.readyState == 4)
              {
                var json = eval(xhr.responseText);

                //$('#lat').val(lat);
                //$('#long').val(long);
            }
          };
          var   data = 'IDUser='+IDUser;
                data += '&latitude='+lat;
                data += '&longetude='+long;
                data += '&tipo=gps';


         xhr.open('POST', 'http://fastmedicamentos.com.br/IZE/usuarios.php', true);
         xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
         xhr.send(data);

       }

       }
