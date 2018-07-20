const HTMLeditor = ace.edit('html', {
    mode: 'ace/mode/html',
    selectionStyle: 'text',
    theme: 'ace/theme/monokai'
});

const CSSeditor = ace.edit('css', {
    mode: 'ace/mode/css',
    selectionStyle: 'text',
    theme: 'ace/theme/monokai'
});

const JSeditor = ace.edit('js', {
    mode: 'ace/mode/javascript',
    selectionStyle: 'text',
    theme: 'ace/theme/monokai'
});

HTMLeditor.setValue('<!DOCTYPE html><!-- HTML -->');
CSSeditor.setValue('/* CSS */');
JSeditor.setValue('// JS');

const compile = () => {
    const code = document.getElementById('code').contentWindow.document;
    document.body.onkeyup = () => {
        code.open();
        code.writeln(
            `${HTMLeditor.getValue()}
                <style>${CSSeditor.getValue()}</style>
                <script>${JSeditor.getValue()}</script>`
        );
        code.close();
    };
}

compile();