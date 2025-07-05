const exppress = require('express');
const cors = require('cors');
const productRoutes = require('./routes/productRoutes');

const app = exppress();

// Middleware
app.use(exppress.json());
app.use(cors());
app.use(exppress.urlencoded({ extended: true }));

// Routes
app.use('/api/products', productRoutes);

// Root route
app.get('/', (req, res) => {
    res.send('Welcome to the Product API');
});

module.exports = app;