import React from 'react';
import { useRouteError } from 'react-router-dom';

const Errorpage = () => {
    const err=useRouteError();
  return (
    <div>
        <h1>OOOPS !!!!!!!!!</h1>
         <p>Something Went Wrong</p>
         {err.status}:{err.statusText}
    </div>
  )
}

export default Errorpage