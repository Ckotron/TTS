const express = require('express');
const index = express();

index.use(express.static('Ejemplo_pagina'));
index.use('/src', express.static('src'));
index.use('/Header', express.static('Header'));
index.use('/Ejemplo_pagina', express.static('Ejemplo_pagina'));

index.listen(3000, () =>{
	console.log('Servidor iniciado...');
});