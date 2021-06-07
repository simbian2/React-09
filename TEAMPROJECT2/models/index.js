'use strict';

const Sequelize = require('sequelize');
const initModels = require('./init-models'); 
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];
const Application = require('./application');
const Curriculum = require('./curriculum');
const Faq = require('./faq');
const Hashtag = require('./hashtag');
const Interview = require('./interview');
const Notice = require('./notice');
const Review = require('./review');
const User = require('./user');
const db = {};

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

let models = initModels(sequelize) 

// db.Application = Application;
// Application.init(sequelize);

// db.Curriculum = Curriculum;
// Curriculum.init(sequelize);

// db.Faq = Faq;
// Faq.init(sequelize);

// db.Hashtag = Hashtag;
// Hashtag.init(sequelize);

// db.Interview = Interview;
// Interview.init(sequelize);

// db.Notice = Notice;
// Notice.init(sequelize);

// db.Review = Review;
// Review.init(sequelize);

// db.User = User;
// User.init(sequelize);


db.sequelize = sequelize;
db.Sequelize = Sequelize;
db.application = models.application;
db.curriculum = models.curriculum;
db.faq = models.faq;  
db.hashtag = models.hashtag;
db.interview = models.interview;
db.notice = models.notice;  
db.review = models.review; 
db.user = models.user; 


module.exports = db;
