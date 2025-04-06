import {inputArea, submitButton, emojiButton, attachButton, chatBody, uploadInput} from './component.js'
import { makeElement, attach, getAnswerFromAPI } from './main.js';
import image from "./Component/image.js";
import { APIkey, APIurl, userData } from './POLICY.js';
async function responseImgData(urlData) {
    window.userURLData = urlData; 
    const options = {
        headers: { "Content-Type": "application/json" }, 
        method: 'POST',
        body: JSON.stringify({
            contents: [{ parts: [{ text: "Tell me about this image",},{inline_data: {mime_type: "image/jpeg",  data: urlData.split(',')[1] }}]}]})
        };
    try {
        const res = await fetch(APIurl, options); 
        const data = await res.json(); 
        attach(chatBody, makeElement(getAnswerFromAPI(data)))

    } catch (error) {
        console.error('Error:', error);
    }
}
//Sub-Src: Chat GPT
export default function upLoadFile(makeElement, attach)   //truyen vao 1 callback de xu li bat dong bo 
{
    attachButton.addEventListener('click', () => uploadInput.click());
    const reader = new FileReader(); 
    uploadInput.addEventListener('change', function(e) {
        //Src: Chat GPT 
        const file = e.target.files[0] //Lay file ma nguoi dung chon 
        
        reader.onload = function(e) {
            const urlData = e.target.result; //Lay ket qua tu viec doc file, o day la 1 URL du lieu o dang base64 
            attach(chatBody, makeElement('', 2, urlData)) 
            uploadInput.value = ''; 
            responseImgData(urlData)
        }
        reader.readAsDataURL(file); //Su kien onload duoc kich hoat, sau khi doc xung tra ve 1 URL du lieu ve e.taget.result. 
    })
    
}
export {responseImgData}