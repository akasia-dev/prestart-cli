"use strict";
var _a, _b;
exports.__esModule = true;
var fs_1 = require("fs");
var child_process_1 = require("child_process");
var path_1 = require("path");
if (!(0, fs_1.existsSync)((0, path_1.resolve)(process.cwd(), 'node_modules'))) {
    var isPackageLockExist = (0, fs_1.existsSync)((0, path_1.resolve)(process.cwd(), 'package-lock.json'));
    var child = (0, child_process_1.spawn)('npm', [isPackageLockExist ? 'ci' : 'install', '--color=always'], {
        stdio: 'pipe',
        cwd: process.cwd()
    });
    (_a = child.stdout) === null || _a === void 0 ? void 0 : _a.pipe(process.stdout);
    (_b = child.stderr) === null || _b === void 0 ? void 0 : _b.pipe(process.stderr);
}
