import { useEffect, useState } from "react";

// from main equipment page onClick 
// - call a function which sets the value of search to whichever equipment type
// - call the API component and hand down a prop of search
// run the API fetch function, create the html elements and hand back App


function Api({search}){
    const [equipmentSearch, setEquipmentSearch] = useState({});
    useEffect(()=>{
        async function getEquipment(){
            const response = await fetch(`https://amazon23.p.rapidapi.com/product-search?query=${search}&country=US`, {
                "method": "GET",
                "headers": {
                    "x-rapidapi-key": "c6b7faf605msha0634e3b1f07049p1d0dbdjsn61e10d597152",
                    "x-rapidapi-host": "amazon23.p.rapidapi.com"
                        }
            })
           let data = await response.json();
           console.log("this is the fetch data ", data)
           setEquipmentSearch(equipmentSearch)} getEquipment(search)}, []); 
    }

export default Api;


// function PokemonViewer({ id }) {
//     // TODO: send http request to `https://pokeapi.co/api/v2/pokemon/${id}` and display the data!
//   const [pokemon, setPokemon] = useState({});
  
//   useEffect(() => {
//     async function getPokemon (id) {
//       let response = await fetch (`https://pokeapi.co/api/v2/pokemon/${id}`);
//       let data = await response.json(); 
//       setPokemon (data)} getPokemon(id)}, [id]);
//     // HINT: you will need useState and useEffect!
//     return (
//       <div className="pokemon-viewer">
//         <p>display pokemon with id {id} here!</p>
//         <p>{pokemon.name}</p>
//       </div>
//     );
//   }
  
//   export default PokemonViewer;