import React from 'react'
import { MapContainer, TileLayer, Marker, Popup, LayersControl } from 'react-leaflet';
import { assembly } from '../data/assembly';
import { senate } from '../data/senate'
import { congress } from '../data/congress';
import { AssemblyLayer } from '../layers/assembly';
import { SenateLayer } from '../layers/senate';
import { CongressLayer } from '../layers/congress';
import  Navbar from '../components/navbar';


const Map = () => {

  const position = [34.0483, -117.2612]

  return (
    <div className="App">
     <Navbar/>
      <MapContainer center={[34.0483, -117.2612]} zoom={9} scrollWheelZoom={false}>
      
       <LayersControl position="topright">
         <LayersControl.BaseLayer checked name="Legislative Map">
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        </LayersControl.BaseLayer>
       
        <SenateLayer data={senate}></SenateLayer>
         <AssemblyLayer data={assembly}></AssemblyLayer>
         <CongressLayer data={congress}></CongressLayer>
        </LayersControl>
      </MapContainer>
    </div>
  )
}

export default Map