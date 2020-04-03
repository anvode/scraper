
const app = require('./server/app');

const PORT = process.env.PORT || 5050;

app.listen(PORT, () => {
    // eslint-disable-next-line no-console
    console.log(`Server started on port ${PORT}`);
});