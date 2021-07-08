import { useEffect } from "react";

function App(){
    useEffect(()=>{
        async function getEquipment(){
            const res= await fetch ("https://amazon23.p.rapidapi.com/product-details?asin=B07XQXZXJC&country=US", {
                "method": "GET",
                "headers": {
                    "x-rapidapi-key": "855aee439dmshaa3857cc3a43bdap1d39e3jsn5f8f4aa03352",
                    "x-rapidapi-host": "amazon23.p.rapidapi.com"
            )}
            })`
        }

    }
}