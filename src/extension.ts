import * as vscode from 'vscode';
import { inflateRawSync } from 'zlib';
import { setTimeout } from 'timers';
import * as fs from 'fs';
import * as path from 'path';

const cats = {
	'CodingCat': 'https://media.giphy.com/media/JIX9t2j0ZTN9S/giphy.gif',
};

export function activate(context: vscode.ExtensionContext) {
	const webviewhtml = vscode.Uri.file(path.join(context.extensionPath, 'src', 'index.html'));
	const pathUri = webviewhtml.with({scheme: 'vscode-resource'});

	context.subscriptions.push(
		vscode.commands.registerCommand('catCoding.openExt', () => {
			const panel = vscode.window.createWebviewPanel(
				'catCoding',
				'Cat Coding',
				vscode.ViewColumn.One,
				{}
			);

			panel.webview.html = fs.readFileSync(pathUri.fsPath, 'utf8');
		})
	);
}

export function deactivate() {}
