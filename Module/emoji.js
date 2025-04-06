import {inputArea, submitButton, emojiButton, attachButton, chatBody, uploadInput} from './component.js'
const picker = document.querySelector('emoji-picker') 
export default function emojiPicker() 
{
    emojiButton.addEventListener('click' , function(e) {
        if (e.target !== picker) picker.classList.toggle('active'); //Hieu ung cha truyen con noi 
    }) 
    picker.addEventListener('emoji-click', function(e) {
        const emojiObj = e.detail 
        inputArea.value += emojiObj.emoji.unicode 
    })
}