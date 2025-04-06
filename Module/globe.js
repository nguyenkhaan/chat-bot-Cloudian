import {inputArea, globeButton} from './component.js'
function queryMaker(s) 
{
    s = s.trim() 
    s += ' '; 
    let S = [], tk = ''; 
    for (let i = 0; i < s.length; ++i) 
    {
        if (s[i] != ' ') tk += s[i] 
        else if (tk.length) {
            S.push(tk); 
            tk = ''; 
        }
    }
    return S.join('+'); 
}
export default function globeSearch() 
{
    globeButton.addEventListener('click', function() {
        if (inputArea.value == '') return; 
        const url = `https://www.google.com/search?client=firefox-b-d&q=${queryMaker(inputArea.value)}`
        window.open(url) 
    })
} 
