"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a, _b;
exports.__esModule = true;
var fs_1 = __importDefault(require("fs"));
var child_process_1 = require("child_process");
if (!fs_1["default"].existsSync('./node_modules')) {
    var child = (0, child_process_1.spawn)('npm', ['install', '--color=always'], { stdio: 'pipe' });
    (_a = child.stdout) === null || _a === void 0 ? void 0 : _a.pipe(process.stdout);
    (_b = child.stderr) === null || _b === void 0 ? void 0 : _b.pipe(process.stderr);
}
