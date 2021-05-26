"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sequelize = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
exports.sequelize = new sequelize_typescript_1.Sequelize({
    username: 'root',
    password: '',
    database: 'todo',
    host: 'localhost',
    dialect: 'mysql',
    models: [__dirname + '/model']
});
//# sourceMappingURL=options.js.map