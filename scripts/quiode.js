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

HTMLeditor.setValue(`<!DOCTYPE html>
<!-- HTML -->`);
CSSeditor.setValue('/* CSS */');
JSeditor.setValue('/* JS */');

const results = document.getElementById('results');
// clears iframe HTML content on page refresh
results.srcdoc = '';

const compile = () => {
    document.body.onkeydown = (event) => {
        const ctrlEnter = (event.ctrlKey || event.metaKey) && (event.keyCode == 13 || event.keyCode == 10);
        console.log(ctrlEnter);
        if(ctrlEnter) {
            results.srcdoc = `${HTMLeditor.getValue()}
                    <style>${CSSeditor.getValue()}</style>
                    <script>${JSeditor.getValue()}</script>`;
        }
    };
}

compile();