import { GeoJSON, LayersControl} from "react-leaflet";
import { useRef} from "react";

export const SenateLayer = ({data}) => {

    const geoJsonRef = useRef();

    const onEachClick = (feature, layer) => {
        console.log("test");

        const name = feature.properties.DISTRICT;
        const inc = feature.properties.INC;
        const votingAge = feature.properties.CVAP_19

        layer.bindPopup(
            "Disrict: <b>" + name + "</b><br>Incumbent: <b>" + inc + "</b><br>" +
            "Citizens Voting Age:" + votingAge
        );


          layer.on({ click: handleFeatureClick });

    }

    const handleFeatureClick = (e) => {
        if (!geoJsonRef.current) return;
        geoJsonRef.current.resetStyle();
    
        const layer = e.target;
    
        layer.setStyle({ color: "yellow" });
      };

    const layer = (<GeoJSON  data = {data}
        onEachFeature = {onEachClick}
        ref={geoJsonRef}
        color="green"
    ></GeoJSON>)

    return (
    <LayersControl.Overlay name="Senate">{layer}</LayersControl.Overlay>
    )
}