var wms_layers = [];


        var lyr_Visicom_0 = new ol.layer.Tile({
            'title': 'Visicom',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tms1.visicom.ua/2.0.0/planet3/base/{z}/{x}/{-y}.png'
            })
        });

        var lyr_OSMStandard_1 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_GoogleHybrid_2 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var lyr__3 = new ol.layer.Image({
                            opacity: 1,
                            title: "Висотка псевдоколір",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/_3.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [2482239.112205, 6094225.057647, 2641766.126928, 6174941.348938]
                            })
                        });
var format__4 = new ol.format.GeoJSON();
var features__4 = format__4.readFeatures(json__4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__4.addFeatures(features__4);
var lyr__4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__4, 
                style: style__4,
                interactive: true,
    title: 'Земельні ділянки<br />\
    <img src="styles/legend/_4_0.png" /> Землі житлової та громадської забудови<br />\
    <img src="styles/legend/_4_1.png" /> Землі сільськогосподарського призначення<br />\
    <img src="styles/legend/_4_2.png" /> Землі промисловості, транспорту, зв’язку, енергетики, оборони та іншого призначення<br />\
    <img src="styles/legend/_4_3.png" /> Землі природно-заповідного та іншого природоохоронного призначення<br />\
    <img src="styles/legend/_4_4.png" /> Землі рекреаційного призначення<br />\
    <img src="styles/legend/_4_5.png" /> Землі лісогосподарського призначення<br />\
    <img src="styles/legend/_4_6.png" /> Землі історико-культурного призначення<br />\
    <img src="styles/legend/_4_7.png" /> Землі водного фонду<br />\
    <img src="styles/legend/_4_8.png" /> <br />'
        });
var format__5 = new ol.format.GeoJSON();
var features__5 = format__5.readFeatures(json__5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__5.addFeatures(features__5);
var lyr__5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__5, 
                style: style__5,
                interactive: false,
                title: '<img src="styles/legend/_5.png" /> Межа громади'
            });

lyr_Visicom_0.setVisible(false);lyr_OSMStandard_1.setVisible(false);lyr_GoogleHybrid_2.setVisible(true);lyr__3.setVisible(false);lyr__4.setVisible(true);lyr__5.setVisible(true);
var layersList = [lyr_Visicom_0,lyr_OSMStandard_1,lyr_GoogleHybrid_2,lyr__3,lyr__4,lyr__5];
lyr__4.set('fieldAliases', {'fid': 'fid', 'landuse.cadnum': 'Кадастровий номер', 'category': 'Категорія земель', 'purpose_code': 'purpose_code', 'purpose': 'Цільове призначення', 'use': 'Цільове використання', 'area': 'Площа', 'unit_area': 'одиниці площі', 'ownershipcode': 'ownershipcode', 'ownership': 'Форма власності', 'address': 'Адреса', });
lyr__5.set('fieldAliases', {'fid': 'fid', });
lyr__4.set('fieldImages', {'fid': 'TextEdit', 'landuse.cadnum': 'TextEdit', 'category': 'TextEdit', 'purpose_code': 'TextEdit', 'purpose': 'TextEdit', 'use': 'TextEdit', 'area': 'TextEdit', 'unit_area': 'TextEdit', 'ownershipcode': 'TextEdit', 'ownership': 'TextEdit', 'address': 'TextEdit', });
lyr__5.set('fieldImages', {'fid': 'TextEdit', });
lyr__4.set('fieldLabels', {'fid': 'no label', 'landuse.cadnum': 'header label', 'category': 'inline label', 'purpose_code': 'no label', 'purpose': 'inline label', 'use': 'inline label', 'area': 'inline label', 'unit_area': 'inline label', 'ownershipcode': 'no label', 'ownership': 'inline label', 'address': 'inline label', });
lyr__5.set('fieldLabels', {'fid': 'no label', });
lyr__5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});