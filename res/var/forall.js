openedType = localStorage.openedType;
function ShowImage(url) {
    console.log('worked');
    return `<img class="main-img" src="../res/var/${openedType}/img/${url}">`;
}

function FullCode(code, hint='') {
    Prism.highlightAll();
    if (hint) {
        add_ = `<div class='code-hint'>${hint}</div`
    }
    return `
<div class='code-con'>
${hint}
<div class="code-bg">
<pre><code class="language-python">${code}</code></pre>
</div>
</div>
    `;
}

function OutputCode(code, red=false) {
    Prism.highlightAll();
    tmp="";
    if (red) {
        tmp='red-code';
    }
    return `
<h3>Output:</h3>
<div class="code-bg green-code output-code ${tmp}">
<pre><code>${code}</code></pre>
</div>
    `;
}

function WordCode(code) {
    return `<span class='wordCode'>${code}</span>`;
}

function Note(code) {
    return `<p class='note-txt'><strong>Note:</strong>${code}</p>`
}

totalInput=0;
function SetWidth(id,code) {
    setTimeout(() => {
        console.log("#in"+id);
        $(".forTest").text(code);
        wid = $(".forTest").width();
        console.log(wid);
        console.log($("#in"+id));
        $("#in"+id).css({width:wid});
    }, 100);
}

function Typing(code) {
    if (window['inputAns'+k] == null) {
        window['inputAns'+k] = [];
    }
    console.log('k',k)
    totalInput++;
    window['inputAns'+k].push(code);
    SetWidth(totalInput,code);
    return `<input type='text' id='in${totalInput}' autocapitalize="none">`;
}