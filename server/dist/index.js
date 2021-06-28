"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const index_1 = __importDefault(require("./endpoints/index"));
const options_1 = require("./options");
const http = require('http');
const app = express_1.default();
const port = process.env.PORT || 8080;
//Socket IO
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);
io.on('connection', (socket) => {
    socket.on('todo:update', ({ payload }) => {
        var _a, _b;
        let userIds = (_b = (_a = payload.project) === null || _a === void 0 ? void 0 : _a.assignedUsers) === null || _b === void 0 ? void 0 : _b.map(a => a.userId);
        io.emit("emit-todo:update", payload);
    });
});
app.use(body_parser_1.default.json({ limit: '50mb' }));
app.use(body_parser_1.default.urlencoded({ extended: true, limit: '50mb' }));
app.use(cors_1.default());
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type,Accept");
    res.setHeader("Access-Control-Allow-Methods", "GET,POST,PATCH,DELETE,OPTIONS");
    next();
});
app.get("/", (req, res) => {
    res.send("nodejs done!");
});
index_1.default(app);
server.listen(port, () => {
    options_1.sequelize.authenticate().then(() => __awaiter(void 0, void 0, void 0, function* () {
        yield options_1.sequelize.sync();
        console.log("Nodejs Connected on port", port);
    }));
});
//# sourceMappingURL=index.js.map