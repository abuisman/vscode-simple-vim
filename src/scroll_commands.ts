'use strict';
import * as vscode from 'vscode';

function editorScroll(to: string, by: string) {
    const editor = vscode.window.activeTextEditor;

    if (!editor) return;

    vscode.commands.executeCommand('editorScroll', {
        to: to,
        by: by,
    });
}

export function scrollDownHalfPage(): void {
    editorScroll('down', 'halfPage');
}

export function scrollUpHalfPage(): void {
    editorScroll('up', 'halfPage');
}

export function scrollDownPage(): void {
    editorScroll('down', 'page');
}

export function scrollUpPage(): void {
    editorScroll('up', 'page');
}