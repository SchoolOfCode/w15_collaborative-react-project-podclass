import { useEffect, useState } from "react";

// from main equipment page onClick
// - call a function which sets the value of search to whichever equipment type
// - call the API component and hand down a prop of search
// run the API fetch function, create the html elements and hand back App

function Api() {
  const [equipmentSearch, setEquipmentSearch] = useState("");
  const [equipmentURL, setEquipmentURL] = useState("");
  const [equipmentImage, setEquipmentImage] = useState("");
  useEffect(() => {
    async function getEquipment() {
      const response = await fetch(
        `https://amazon23.p.rapidapi.com/product-search?query=podcast%20mic&country=US`,
        {
          method: "GET",
          headers: {
            "x-rapidapi-key":
              "855aee439dmshaa3857cc3a43bdap1d39e3jsn5f8f4aa03352",
            "x-rapidapi-host": "amazon23.p.rapidapi.com",
          },
        }
      );
      let data = await response.json();
      setEquipmentSearch(data.result[0].title);
      console.log("Nancy", equipmentSearch);
      setEquipmentURL(data.result[0].url);
      setEquipmentImage(data.result[0].thumbnail);
    }
    getEquipment();
  }, []);

  return (
    <div>
      {console.log("Nancy", equipmentSearch)}
      <p>{equipmentSearch}</p>
      <a href={equipmentURL}>
        <img src={`${equipmentImage}`} alt="" />
      </a>
      <img></img>
      {/* <p>{equipmentSearch[0].url} </p>
      <p>{equipmentSearch[0].price.current_price}</p>
      <img>{equipmentSearch[0].thumbnail}</img> */}
      <div> loading </div>
    </div>
  );
}

export default Api;
