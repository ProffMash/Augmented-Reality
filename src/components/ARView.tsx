import React from 'react';
import { Entity, Scene } from 'aframe-react';

const ARView: React.FC = () => {
  return (
    <Scene
      embedded
      arjs="sourceType: webcam; debugUIEnabled: false;"
      renderer="antialias: true; alpha: true"
      className="w-full h-full"
    >
      <Entity
        geometry="primitive: box"
        material="color: red"
        position={{ x: 0, y: 0.5, z: -3 }}
        gps-entity-place="latitude: YOUR_LAT; longitude: YOUR_LON"
      />
      <Entity camera look-controls-enabled={false} arjs-look-controls="smoothingFactor: 0.1" />
    </Scene>
  );
};

export default ARView;