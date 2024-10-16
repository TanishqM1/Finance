import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { GStyle } from './styles/GlobalStyles';
import { GlobalProvider } from './context/globalcontext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<React.StrictMode>
<GStyle />

<GlobalProvider><App /></GlobalProvider>


</React.StrictMode>
);
