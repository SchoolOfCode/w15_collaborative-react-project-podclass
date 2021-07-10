// import { useEffect, useState } from "react";

// // from main equipment page onClick
// // - call a function which sets the value of search to whichever equipment type
// // - call the API component and hand down a prop of search
// // run the API fetch function, create the html elements and hand back App

// function Api({ search }) {
//   const [equipmentSearch, setEquipmentSearch] = useState({});
//   useEffect(() => {
//     async function getEquipment() {
//       const response = await fetch(
//         `https://amazon23.p.rapidapi.com/product-search?query=podcast%20mic&country=US`,
//         {
//           method: "GET",
//           headers: {
//             "x-rapidapi-key":
//               "855aee439dmshaa3857cc3a43bdap1d39e3jsn5f8f4aa03352",
//             "x-rapidapi-host": "amazon23.p.rapidapi.com",
//           },
//         }
//       );
//       let data = await response.json();
//       console.log("this is data", data);
//       console.log(data.result[0].title)
//       setEquipmentSearch(data);
//       console.log("this is equipmentSearch", equipmentSearch);
//     }
//     getEquipment(search);
// }, [search]);

// return (
//     (equipmentSearch.length > 0 ? (
//     <div>
//     <p>{equipmentSearch.result[0].title}</p>
//     <p>{equipmentSearch.result[0].url} </p>
//     <p>{equipmentSearch.result[0].price.current_price}</p>
//     <img>{equipmentSearch.result[0].thumbnail}</img>
//     </div> ) :
//     (
//     <div> loading </div>
//     )
//     )
//     )
//     }

// export default Api;
