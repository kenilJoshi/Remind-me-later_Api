// Keniljoshi3214
require("dotenv").config()

const app = require('./app')

app.listen(process.env.PORT, () => {
    console.log(`app is listening at Port ${process.env.PORT}`);
})