var DataTypes = require("sequelize").DataTypes;
var _application = require("./application");
var _curriculum = require("./curriculum");
var _faq = require("./faq");
var _hashtag = require("./hashtag");
var _interview = require("./interview");
var _notice = require("./notice");
var _review = require("./review");
var _user = require("./user");

function initModels(sequelize) {
  var application = _application(sequelize, DataTypes);
  var curriculum = _curriculum(sequelize, DataTypes);
  var faq = _faq(sequelize, DataTypes);
  var hashtag = _hashtag(sequelize, DataTypes);
  var interview = _interview(sequelize, DataTypes);
  var notice = _notice(sequelize, DataTypes);
  var review = _review(sequelize, DataTypes);
  var user = _user(sequelize, DataTypes);


  return {
    application,
    curriculum,
    faq,
    hashtag,
    interview,
    notice,
    review,
    user,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
