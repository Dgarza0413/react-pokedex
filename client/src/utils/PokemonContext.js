import React, { useContext } from "react";

// Set the theme of the page to default to "light"
const PokemonContext = React.createContext();

const useStoreContext = () => {
    return useContext(PokemonContext);
};

export { useStoreContext };
