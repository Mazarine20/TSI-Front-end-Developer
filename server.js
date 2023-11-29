const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const cors = require('cors')
const path = require('path');


dotenv.config();

const app = express();

app.use(bodyParser.json());

// CORS ERROR
var corsOptions = {
  origin: process.env.CORS_ORIGIN,
  optionsSuccessStatus: 200
}
app.use(cors(corsOptions));

const uri = process.env.MONGO_URI

// Connection à MongoDB
mongoose.connect(uri)
  .then(() => console.log('Connected to MongoDB!'))
  .catch(err => console.error('Could not connect to MongoDB...', err));


// Importez vos routes
const authRoutes = require('./src/routes/authRoutes');

// Route middlewares
app.use('/api/user', authRoutes);

// Indique à Express d'utiliser le répertoire 'public' pour les fichiers statiques
app.use(express.static(path.join(__dirname, 'front')));

// Route pour l'index.html (par défaut)
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'front', 'index.html'));
});

const PORT = process.env.PORT || 5005;
app.listen(PORT, () => console.log(`Server up and running on port ${PORT}`));


module.exports = app;