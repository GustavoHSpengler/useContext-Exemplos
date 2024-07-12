import React, { useContext } from 'react';
import { ContextoTema } from './ContextoTema';

const ComponenteTema = () => {
    const { tema, alternarTema } = useContext(ContextoTema);

    return (
        <div className={tema === 'light' ? 'light-theme' : 'dark-theme'}>
            <h1> Aqui acontece a alternação dos temas </h1>
            <button onClick={alternarTema}>
                Alternar Tema
            </button>
        </div>
    );
};

export default ComponenteTema;