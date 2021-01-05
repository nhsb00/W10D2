import React from 'react';
import ReactDOM from 'react-dom'; 

import Clock from './clock';
// import Tabs from './tabs'

function Root() {
    return (
        <div>
            <Clock />
            
        </div>
    );
}

document.addEventListener('DOMContentLoaded', () => {
    const main = document.getElementById('main'); 
    ReactDOM.render(<Root />, main);
});
