const express = require('express');
const routes = require('./controllers');
const sequelize = require('./config/connection');
const path = require('path')

const helpers = require('./utils/helpers');

const expresshb = require('express-handlebars');
const helpershb = expresshb.create({helpers});

// connecting session to sequelize
const session = require('express-session');

const app = express();
const PORT = process.env.PORT || 3001;

const SequelizeStore = require('connect-session-sequelize')(session.Store);

// create session
const sess = {
    secret: "super super secret",
    cookie: {originalMaxAge: 600000},
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
        db: sequelize
    })
};

app.use(session(sess));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Handlebars become the default template engine
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(routes);

sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log('Now listening'));
});