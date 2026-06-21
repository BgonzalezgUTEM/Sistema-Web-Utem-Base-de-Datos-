const express = require('express');
const app = express();

app.use(express.json());

app.use(require('./routes/service.routes'));
app.use(require('./routes/equipment.routes'));
app.use(require('./routes/offer.routes'));
app.use(require('./routes/customer.routes'));

app.listen(3000, () => {
    console.log('Servidor iniciado');
});