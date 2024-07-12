import React, { createContext, useState } from "react";

const ContextoTema = createContext();

const TemaFornecedor = ({ children }) => {
    const [tema, setTema] = useState('light');

    const alternarTema = () => {
        setTema(tema === 'light' ? 'dark' : 'light');
    };

    return (
        <ContextoTema.Provider value={{ tema, alternarTema }}>
            {children}
        </ContextoTema.Provider>
    );
};

export { TemaFornecedor, ContextoTema };