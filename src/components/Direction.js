import React from "react";
import {
  DirectionsService,
  DirectionsRenderer,
  GoogleMap,
  LoadScript,
} from "@react-google-maps/api";
import { useState } from "react";

const Direction = ({ origin, destination }) => {
  const [response, setResponse] = useState(null);
  //hardcodded
  // const origin="mipur 10 circle";
  // const destination="uttara";

  const directionsCallback = (res) => {
    console.log(res);

    if (res !== null) {
      if (res.status === "OK") {
        setResponse(res);
      } else {
        console.log("response: ", res);
      }
    }
  };

  return (
    <div>
      <LoadScript googleMapsApiKey="YOUR_API_KEY">
        <GoogleMap
          // required
          id="direction-example"
          // required
          mapContainerStyle={{
            height: "100vh",
            width: "100%",
          }}
          // required
          zoom={10}
          // required
          center={{
            lat: 0,
            lng: -180,
          }}
        >
          {destination !== "" && origin !== "" && (
            <DirectionsService
              // required
              options={{
                destination: destination,
                origin: origin,
                travelMode: "Driving",
              }}
              // required
              callback={directionsCallback}
              onUnmount={(directionsService) => {
                console.log(
                  "DirectionsService onUnmount directionsService: ",
                  directionsService
                );
              }}
            />
          )}

          {response !== null && (
            <DirectionsRenderer
              options={{
                directions: response,
              }}
            />
          )}
        </GoogleMap>
      </LoadScript>
    </div>
  );
};

export default Direction;
