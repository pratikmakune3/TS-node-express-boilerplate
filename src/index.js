"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var app = express_1.default();
app.get("/", function (req, res) {
    console.log("Get /");
    res.send("GET /");
});
app.post("/", function (req, res) {
    console.log("POST /");
    res.send("POST /");
});
app.listen(5001, function () { return console.log("Listening on 5001"); });
