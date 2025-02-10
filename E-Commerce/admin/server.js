const express = require('express');
const app = express();

app.post('/upload', (req, res) => {
    // Handle file upload logic here
    res.send({ success: true, image_url: 'http://example.com/image.jpg' });
});

app.listen(4000, () => {
    console.log('Server is running on http://localhost:4000');
});
