const express = require('express');
const cors = require('cors');
const multer = require('multer');
const analyzeRoute = require('./routes/analyze');

const app = express();
const upload = multer();

app.use(cors());
app.use(express.json());

app.get('/health', (req, res) => res.json({status: 'ok'}));
app.post('/api/v1/analyze', upload.single('image'), analyzeRoute);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server listening on ${port}`));