import React, { useState, createContext } from 'react'

const UIContext = createContext([{}, () => { }]);

const UIProvider = props => {
    const [state, setState] = useState({
        isError: false,
        msg: ''
    });

    return (
        <UIProvider.Provider value={[state, setState]}>
            {props.children}
        </UIProvider.Provider>
    );
}

export { UIContext, UIProvider };