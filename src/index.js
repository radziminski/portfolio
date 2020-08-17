import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import initLoader from './fouc-loader';

initLoader(false);

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);
