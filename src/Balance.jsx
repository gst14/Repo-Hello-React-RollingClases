import React from 'react';

const formatCurrency = (num, currencyCode) => {
    return num.toLocaleString('en-US', { style: 'currency', currency: currencyCode });
}

export const Balance = ({money=10500}) => {
  return (
    <>
       <h1>Balance {formatCurrency(money, 'USD')}</h1>
    </>
  )
}
