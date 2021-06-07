//신청 db


const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('application', {
    id: { 
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name: { //지원자 성명
      type: DataTypes.STRING(50),
      allowNull: false
    },
    gender: { //성별
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 1
    },
    age: { //나이
      type: DataTypes.INTEGER,
      allowNull: false
    },
    email: { //이메일
      type: DataTypes.STRING(50),
      allowNull: false
    },
    date: { //신청일
      type: DataTypes.DATE,
      allowNull: false
    },
    phone_number: { //폰번
      type: DataTypes.STRING(50),
      allowNull: false
    },
    content: { //내용
      type: DataTypes.TEXT,
      allowNull: false
    },
    curr_id: { //프로그램 id(curriculum table에서 가져올 foreign key)
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  }, {
    sequelize,
    tableName: 'application',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
