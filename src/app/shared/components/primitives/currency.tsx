import React from 'react';

interface CurrencyProps {
    value: number;
}

const Currency: React.FunctionComponent<CurrencyProps> = (
    {
        value
    }) => {
    return (
        <>{value.toFixed(2)} €</>
    )
}


export default Currency;
