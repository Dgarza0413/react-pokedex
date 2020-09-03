import React, { useContext } from "react";

const PokemonContext = React.createContext();

const useStoreContext = () => {
    return useContext(PokemonContext);
};

export { useStoreContext };
