const express = require('express');
const app = express();
const indexRouter = require('./routes/index');

app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: false }));

app.use('/', indexRouter);
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

module.exports = app;
