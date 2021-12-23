import express from 'express';
const app = express();
const port = 7000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/ship', (req, res) => {
    const data = req.body;
    console.log(data);
    res.send('Bingo!!! product is shipped :)');
});

app.listen(port, () => {
    console.log(`selMan server is spinning at http://localhost:${port}`);
});
