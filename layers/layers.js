ol.proj.get("EPSG:4326").setExtent([9.582653, 5.089645, 10.604261, 5.598532]);
var wms_layers = [];
var baseLayer = new ol.layer.Group({
    'title': '',
    layers: [
new ol.layer.Tile({
    'title': 'OSM',
    'type': 'base',
    source: new ol.source.OSM()
})
]
});
var format_poste_agricole_0 = new ol.format.GeoJSON();
var features_poste_agricole_0 = format_poste_agricole_0.readFeatures(json_poste_agricole_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_poste_agricole_0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_poste_agricole_0.addFeatures(features_poste_agricole_0);cluster_poste_agricole_0 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_poste_agricole_0
});var lyr_poste_agricole_0 = new ol.layer.Vector({
                declutter: true,
                source:cluster_poste_agricole_0, 
                style: style_poste_agricole_0,
                title: '<img src="styles/legend/poste_agricole_0.png" /> poste_agricole'
            });var format_route_1 = new ol.format.GeoJSON();
var features_route_1 = format_route_1.readFeatures(json_route_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_route_1 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_route_1.addFeatures(features_route_1);var lyr_route_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_route_1, 
                style: style_route_1,
                title: '<img src="styles/legend/route_1.png" /> route'
            });var format_local_2 = new ol.format.GeoJSON();
var features_local_2 = format_local_2.readFeatures(json_local_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_local_2 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_local_2.addFeatures(features_local_2);var lyr_local_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_local_2, 
                style: style_local_2,
                title: '<img src="styles/legend/local_2.png" /> local'
            });var format_arrondissement_3 = new ol.format.GeoJSON();
var features_arrondissement_3 = format_arrondissement_3.readFeatures(json_arrondissement_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_arrondissement_3 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_arrondissement_3.addFeatures(features_arrondissement_3);var lyr_arrondissement_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_arrondissement_3, 
                style: style_arrondissement_3,
                title: '<img src="styles/legend/arrondissement_3.png" /> arrondissement'
            });var format_departement_4 = new ol.format.GeoJSON();
var features_departement_4 = format_departement_4.readFeatures(json_departement_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_departement_4 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_departement_4.addFeatures(features_departement_4);var lyr_departement_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_departement_4, 
                style: style_departement_4,
                title: '<img src="styles/legend/departement_4.png" /> departement'
            });

lyr_poste_agricole_0.setVisible(true);lyr_route_1.setVisible(true);lyr_local_2.setVisible(true);lyr_arrondissement_3.setVisible(true);lyr_departement_4.setVisible(true);
var layersList = [baseLayer,lyr_poste_agricole_0,lyr_route_1,lyr_local_2,lyr_arrondissement_3,lyr_departement_4];
lyr_poste_agricole_0.set('fieldAliases', {'id_p_a': 'id_p_a', 'nom_p_a': 'nom_p_a', 'nom_cpa': 'nom_cpa', 'tel': 'tel', 'nom_zone': 'nom_zone', 'id_arr': 'id_arr', });
lyr_route_1.set('fieldAliases', {'id_route': 'id_route', 'code': 'code', 'Type_route': 'Type_route', });
lyr_local_2.set('fieldAliases', {'id': 'id', 'nom_local': 'nom_local', });
lyr_arrondissement_3.set('fieldAliases', {'id_arr': 'id_arr', 'nom_arr': 'nom_arr', 'sup_arr': 'sup_arr', 'pop_arr': 'pop_arr', 'id_dep': 'id_dep', });
lyr_departement_4.set('fieldAliases', {'id_dep': 'id_dep', 'mon_dep': 'mon_dep', 'pop_dep': 'pop_dep', 'sup_dep': 'sup_dep', });
lyr_poste_agricole_0.set('fieldImages', {'id_p_a': 'TextEdit', 'nom_p_a': 'TextEdit', 'nom_cpa': 'TextEdit', 'tel': 'TextEdit', 'nom_zone': 'TextEdit', 'id_arr': 'TextEdit', });
lyr_route_1.set('fieldImages', {'id_route': 'TextEdit', 'code': 'TextEdit', 'Type_route': 'TextEdit', });
lyr_local_2.set('fieldImages', {'id': 'TextEdit', 'nom_local': 'TextEdit', });
lyr_arrondissement_3.set('fieldImages', {'id_arr': 'TextEdit', 'nom_arr': 'TextEdit', 'sup_arr': 'TextEdit', 'pop_arr': 'TextEdit', 'id_dep': 'TextEdit', });
lyr_departement_4.set('fieldImages', {'id_dep': 'TextEdit', 'mon_dep': 'TextEdit', 'pop_dep': 'TextEdit', 'sup_dep': 'TextEdit', });
lyr_poste_agricole_0.set('fieldLabels', {'id_p_a': 'inline label', 'nom_p_a': 'inline label', 'nom_cpa': 'inline label', 'tel': 'inline label', 'nom_zone': 'inline label', 'id_arr': 'inline label', });
lyr_route_1.set('fieldLabels', {'id_route': 'inline label', 'code': 'inline label', 'Type_route': 'inline label', });
lyr_local_2.set('fieldLabels', {'id': 'inline label', 'nom_local': 'inline label', });
lyr_arrondissement_3.set('fieldLabels', {'id_arr': 'no label', 'nom_arr': 'no label', 'sup_arr': 'no label', 'pop_arr': 'no label', 'id_dep': 'no label', });
lyr_departement_4.set('fieldLabels', {'id_dep': 'no label', 'mon_dep': 'no label', 'pop_dep': 'no label', 'sup_dep': 'no label', });
lyr_departement_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});