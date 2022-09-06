import { GeoJSON, LayersControl} from "react-leaflet";
import { useRef} from "react";

export const CongressLayer = ({data}) => {

    const geoJsonRef = useRef();

    const onEachClick = (feature, layer) => {
        console.log("test");

        const District = feature.properties.DISTRICT;
        const Population = feature.properties.POPULATION;

        const Populationstr = Population.toLocaleString("en-US");

        const CVA = feature.properties.CVAP_19;
        const CVAstr = CVA.toLocaleString("en-US");

        const HSP = feature.properties.HSP_CVAP_1;
        const HSPstr = HSP.toLocaleString("en-US");

        const  AA = feature.properties.DOJ_NH_BLK;
        const AAstr = AA.toLocaleString("en-US");

        const  WHT = feature.properties.NH_WHT_CVA;
        const WHTstr = WHT.toLocaleString("en-US");

        const  ASN = feature.properties.DOJ_NH_ASN;
        const ASNstr = ASN.toLocaleString("en-US");

        layer.bindPopup(
            "Congressional District: <b>" + District + "</b><hr>Population: " + Populationstr +
            "<br>Citizens of Voting Age (CVA): " + CVAstr +
            "<br>Hispanic CVA: " + HSPstr + 
            "<br>African American CVA: " + AAstr +
            "<br>Asian CVA: " + ASNstr+ 
            "<br>White CVA: " + WHTstr
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