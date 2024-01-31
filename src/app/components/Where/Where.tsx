"use client";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
import { env } from "process";

function WhereContainer() {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyDsFkvSj47zFyJUYG43NL1XNYxM4h7PbCI",
  });

  return (
    <>
      <div
        className="w3-container"
        id="where"
        style={{ paddingBottom: "32px" }}
      >
        <div className="w3-content" style={{ maxWidth: "700px" }}>
          <h5 className="w3-center w3-padding-48">
            <span className="w3-tag w3-wide">WHERE TO FIND US</span>
          </h5>
          <p>Find us at some address at some place.</p>
          <div style={{width:'100%', height:'500px', marginTop:'20px', marginBottom:'20px'}}>
            {isLoaded && (
              <GoogleMap
                mapContainerStyle={{ width: "100%", height: "100%" }}
                center={{
                  lat: -24.100603,
                  lng: -52.121809,
                }}
                zoom={17}
              ></GoogleMap>
            )}
          </div>
          <p>
            <span className="w3-tag">FYI!</span> We offer full-service catering
            for any event, large or small. We understand your needs and we will
            cater the food to satisfy the biggerst criteria of them all, both
            look and taste.
          </p>
          <p>
            <strong>Reserve</strong> a table, ask for today's special or just
            send us a message: <a href="https://web.whatsapp.com/send?phone=5541996301244" target="_blank">WhatsApp</a>
          </p>

        </div>
      </div>
    </>
  );
}

export default WhereContainer;
