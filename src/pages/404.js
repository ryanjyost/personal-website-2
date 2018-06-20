import React from 'react';

const NotFoundPage = () => (
   <div
      style={{
         display: 'flex',
         flexDirection: 'column',
         justifyContent: 'center',
         height: '100vh',
         paddingLeft: 50,
      }}
   >
      <div style={{ display: 'flex', alignItems: 'baseline' }}>
         <h1>Uh oh...</h1>
         <i
            className={'far fa-frown'}
            style={{ fontSize: 50, marginLeft: 10 }}
         />
      </div>
      <h5>You hit a route that doesn&#39;t exist.</h5>
   </div>
);

export default NotFoundPage;
