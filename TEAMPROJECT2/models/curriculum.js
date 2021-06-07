const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('curriculum', {
    id: { 
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    subject: { //제목
      type: DataTypes.STRING(100),
      allowNull: false
    },
    start_date: { //강의 시작일
      type: DataTypes.DATE,
      allowNull: false
    },
    end_date: { //강의 종료일
      type: DataTypes.DATE,
      allowNull: false
    },
    content: { //강의 내용
      type: DataTypes.TEXT,
      allowNull: false
    },
    show: { //사용자단에서 보일지 안보일지. 1: 보임 0:안보임
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 1
    }
  }, {
    sequelize,
    tableName: 'curriculum',
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
