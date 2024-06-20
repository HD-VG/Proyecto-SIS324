import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export const Ticket = sequelize.define("tickets", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  code: {
    type: DataTypes.STRING,
  },
  queueId: {
    type: DataTypes.INTEGER,
  },
  medicId: {
    type: DataTypes.INTEGER,
  },
  emissionDate: {
    type: DataTypes.DATE,
  },
  statusId: {
    type: DataTypes.INTEGER,
  },
  consultingRoomId: {
    type: DataTypes.INTEGER,
  },
}, {
  timestamps: false,
});
