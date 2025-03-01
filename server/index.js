const port = process.env.PORT || 3006;
const app = require('./app');
const {db} = require('./db')

db.sync().then(() => {
    app.listen(port, () => console.log(`listening on port ${port}`));
})

