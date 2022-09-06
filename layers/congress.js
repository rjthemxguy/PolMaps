import { GeoJSON, LayersControl} from "react-leaflet";
import { useRef} from "react";

export const CongressLayer = ({data}) => {

    const geoJsonRef = useRef();

    const onEachClick = (feature, layer) => {
        console.log("test");

        const District = feature.properties.DISTRICT;
        const Population = feature.properties.POPULATION;
        const CVA = feature.properties.CVAP_19;
        const HSP = feature.properties.HSP_CVAP_1;
        const  AA = feature.properties.DOJ_NH_BLK;
        const  WHT = feature.properties.NH_WHT_CVA;
        const  ASN = feature.properties.DOJ_NH_ASN;

        layer.bindPopup(
            "Congressional District: <b>" + District + "</b><hr>Population: " + Population +
            "<br>Citizens of Voting Age (CVA): " + CVA +
            "<br>Hispanic CVA: " + HSP + 
            "<br>African American CVA: " + AA +
            "<br>Asian CVA: " + ASN+ 
            "<br>White CVA: " + WHT
          );

          layer.on({ click: handleFeatureClick });

    }

    const handleFeatureClick = (e) => {
        if (!geoJsonRef.current) return;
        geoJsonRef.current.resetStyle();
    
        const layer = e.target;
    
        layer.setStyle({ color: "green" });
      };

    const layer = (<GeoJSON  data = {data}
        onEachFeature = {onEachClick}
        ref={geoJsonRef}
        color="black"
    ></GeoJSON>)

    return (
    <LayersControl.Overlay name="Congress">{layer}</LayersControl.Overlay>
    )
}