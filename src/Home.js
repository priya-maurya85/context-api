import React from 'react';
import { useContext } from 'react';
import { welcomeContext } from './index';

export const Home = () => {
    const msg = useContext(welcomeContext);
  return (
    <div><h3>{msg}</h3></div>
  )
}
