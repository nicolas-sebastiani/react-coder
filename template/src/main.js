// const root = document.getElementById('root');

// const agregaBoton = () =>{
//     const boton = document.createElement('button');
//     boton.innerText = 'Coso';
//     root.appendChild(boton);
// }

// agregaBoton();

import { createRoot } from 'react-dom/client';

document.body.innerHTML = "<div id='root'></div>";

const root = createRoot(document.getElementById('root'));
root.render(<h1>Botonsito</h1>);