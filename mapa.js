// Inicializar el mapa con una vista central (setview) y un zoom (3)
var map = L.map('map').setView([-34.7909491,-58.3370924], 13, );
//Agregar mapa base de IGN
var ign_clasico = L.tileLayer('https://wms.ign.gob.ar/geoserver/gwc/service/tms/1.0.0/capabaseargenmap@EPSG%3A3857@png/{z}/{x}/{-y}.png', {
    attribution: '<a href="http://leafletjs.com" title="A JS library for interactive maps">Leaflet</a> | <a href="http://www.ign.gob.ar/AreaServicios/Argenmap/IntroduccionV2" target="_blank">Instituto Geográfico Nacional</a> + <a href="http://www.osm.org/copyright" target="_blank">OpenStreetMap</a>',
    minZoom: 10,
    maxZoom: 18,
   }).addTo(map);

// ZOOM A MARCADOR
var xxy = function(e){
    var coord = e.latlng.toString().split(',');
    var lat = coord[0].split('(');
    var lng = coord[1].split(')');
    console.log("You clicked the map at latitude: " + lat[1] + " and longitude:" + lng[0]);
    map.flyTo([lat[1], lng[0]], 16, {animate: true,duration: 2 });}

var azul = L.icon
		({
		iconUrl: 'https://atodaspartes.ar/wp-content/uploads/2023/09/claypole.png',
		shadowUrl: '',
		iconSize: [30, 30], //recomendado
		iconAnchor: [15, 30], //la itad e igual
		popupAnchor: [0, -10],
		//shadowSize: [50, 50] // igual a icono
		});

var lospibesdesolano = L.marker([-34.7879085,-58.3179796], {icon: azul},13).bindPopup("<strong>Peña 3 de Marzo</strong>" + "<br/>" + "Ubicacion: Clavel N°630, Solano" + "<br/>"  + "<img src= 'https://atodaspartes.ar/wp-content/uploads/2023/09/IMG-20230929-WA0049.jpg'/>" + "<A HREF='https://forms.gle/33CVhuAnv3w9jPVZA'target=_blank> Subí el mural de tu barrio </A> " ).on('click', xxy).addTo(map);
var barriosanlucas = L.marker([-34.8167036,-58.3580534], {icon: azul},13).bindPopup("<strong>Barrio San Lucas</strong>" + "<br/>" + "Ubicacion: 2 de abril N° 2843, Claypole" + "<br/>"  + "<img src= 'https://atodaspartes.ar/wp-content/uploads/2023/09/IMG_20230922_143752_952-min-Javier-agustin-111-scaled.webp'/>" + "<A HREF='https://forms.gle/33CVhuAnv3w9jPVZA'target=_blank> Subí el mural de tu barrio </A> " ).on('click', xxy).addTo(map);

var baseMaps = [
			                { 
								groupName : "Mapas Base",
								expanded : true,
								layers    : {
									
									
						
								}
					        },

                        ]

var overlays = [
							 {
								groupName : "MURALES DEL TAMBO",
								expanded : true,
								layers    : { 
									"Peña 3 de Marzo":lospibesdesolano,
									"Barrio San Lucas": barriosanlucas,
									
									
								}	
                             },
							 
                             {
								groupName : "servicios bancarios",
								expanded : true,
								layers    : { 
									
								}	
                             },
							 {
								groupName : "Recorridos en Bicicleta",
								expanded : true,
								layers    : { 
									
									
									
								}	
                             },
                             
                             ]

// configuracion de los estilos de capas


var options = {
				container_width 	: "300px",
				group_maxHeight     : "150px",
				//container_maxHeight : "350px", 
				exclusive       	: false,
				collapsed : true, 
				position: 'topright'
			};
		
var control = L.Control.styledLayerControl(baseMaps, overlays, options);
map.addControl(control);
map.scrollWheelZoom.disable();

			

			
