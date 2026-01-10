import { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
function Pokedex(){
    return(
    <>
    <h1>
        welcome to pokedex
    </h1>
    <button onClick={() => Navigate("/components/interface")}>
        enter
    </button>
    </>
)
}
export default Pokedex;