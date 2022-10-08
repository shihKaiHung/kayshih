import { memo, useState } from "react";
import ReactTooltip from "react-tooltip";
import { geoCentroid } from "d3-geo";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";

const countries = ["Spain", "Portugal", "CzechRepublic", "Austria"];

type PropsType = {
  "client:only": string;
};
const MapChart = (props: PropsType) => {
  const [content, setContent] = useState("");
  return (
    <div style={{ width: "100%", height: "800px" }} className="map">
      <ComposableMap
        data-tip=""
        projectionConfig={{
          rotate: [-90.0, -40.0, 0],
          scale: 400,
        }}
      >
        {/* <Graticule stroke="#E4E5E6" strokeWidth={0.5} /> */}
        <Geographies geography={"/assets/features.json"}>
          {({ geographies }) => (
            <>
              {geographies.map((geo) => {
                return (
                  <Geography
                    key={geo.rsmKey}
                    onMouseEnter={() => {
                      const NAME = geo.properties.geounit;
                      setContent(`${NAME}`);
                    }}
                    onMouseLeave={() => {
                      setContent("");
                    }}
                    geography={geo}
                    fill={"#ACBFA4"}
                    stroke="#FFF"
                    style={{
                      default: { outline: "none" },
                      hover: { fill: "#EC9A29", outline: "none" },
                      pressed: { outline: "none" },
                    }}
                  />
                );
              })}
              {geographies.map((geo) => {
                const centroid = geoCentroid(geo);
                const isHaveBeen = countries.find(
                  (d) => d === geo.properties.geounit
                );
                if (isHaveBeen)
                  return (
                    <Marker key={geo.rsmKey} coordinates={centroid}>
                      <g
                        fill="none"
                        stroke="#143642"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        transform="translate(-12, -24)"
                      >
                        <circle cx="12" cy="10" r="3" />
                        <path d="M12 21.7C17.3 17 20 13 20 10a8 8 0 1 0-16 0c0 3 2.7 6.9 8 11.7z" />
                      </g>
                    </Marker>
                  );
              })}
            </>
          )}
        </Geographies>
      </ComposableMap>
      <ReactTooltip effect="float">{content}</ReactTooltip>
    </div>
  );
};

export default memo(MapChart);
