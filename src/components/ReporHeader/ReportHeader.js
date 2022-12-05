import React, { useState, useEffect } from 'react'

// Styles
import './ReportHeader.css';

export const ReportHeader = ({ data }) => {

    const [facturationMonth, setFacturationMonth] = useState('');

    const getActualMonth = () => {
        const months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
        const month = new Date().getMonth();
        setFacturationMonth(months[month]);
    }

    useEffect(() => {
        getActualMonth();
    }, []);

    return (
        <>
            <div className='info--container'>
                <div className='client--logo center--items'>
                    <img className='img--logo' src='https://cdn-teams-slug.flaticon.com/google.jpg' alt='Client Logo'></img>
                </div>
                <div className='client--info center--items'>
                    <h2>Facturado a:</h2>
                    <p>{data.name}</p>
                    <p>RFC: {data.rfc}</p>
                    <p>RPU: {data.rpu}</p>
                    <h4>Mes de facturación: {facturationMonth}</h4>
                </div>
                <div className='enterprise--logo center--items'>
                    <img className='img--logo' src='https://upload.wikimedia.org/wikipedia/commons/d/de/Amazon_icon.png' alt="Enterprise Logo"></img>
                </div>
            </div>
            <h5 className='content-title'>Componentes de la Facturación de Energía Eléctrica</h5>
        </>
    )
}
