"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vscode = require("vscode");
const fs = require("fs");
const path = require("path");
const cats = {
    'CodingCat': 'https://media.giphy.com/media/JIX9t2j0ZTN9S/giphy.gif',
};
function activate(context) {
    const webviewhtml = vscode.Uri.file(path.join(context.extensionPath, 'src', 'index.html'));
    const pathUri = webviewhtml.with({ scheme: 'vscode-resource' });
    context.subscriptions.push(vscode.commands.registerCommand('catCoding.openExt', () => {
        const panel = vscode.window.createWebviewPanel('catCoding', 'Cat Coding', vscode.ViewColumn.One, {});
        panel.webview.html = fs.readFileSync(pathUri.fsPath, 'utf8');
    }));
}
exports.activate = activate;
function getWebviewContent() {
    return `<!DOCTYPE html>
			<html lang="en">
			<head>
				<meta charset="UTF-8">
				<meta name="viewport" content="width=device-width, initial-scale=1.0">
				<title>Cat Coding</title>
			</head>
			<body>
				<img src="https://media.giphy.com/media/JIX9t2j0ZTN9S/giphy.gif" width="300" />
			</body>
			</html>`;
}
function deactivate() { }
exports.deactivate = deactivate;
//# sourceMappingURL=extension.js.map