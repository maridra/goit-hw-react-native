import { ImageBackground } from "react-native";

const mapPlug = require("../../../assets/images/map-plug.png");

export default function MapScreen() {
  return (
    <ImageBackground
      style={{ flex: 1, resizeMode: "cover" }}
      source={mapPlug}
    />
  );
}
