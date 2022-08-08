import React from 'react';

interface Props {
    coinId: number;
}

export const Coincard = ( props: Props ) => {
  return (
    <div className='desktop-mainpage-infobar-coincard'> Coin card {props.coinId} </div>
  );
};
