require('dotenv').config();
const app = require('./src/app');
const connectDB = require('./src/config/database');

const PORT = process.env.PORT || 3001;

connectDB();

app.listen(PORT, () => {
    console.log('Server is running on port', PORT);
});
// This is the entry point of the application.
// It connects to the database and starts the server.   