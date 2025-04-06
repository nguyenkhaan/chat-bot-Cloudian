import robotResponse from "./Component/robot_response.js";
import userResponse from "./Component/user_response.js";
import image from "./Component/image.js";
import upLoadFile from "./upload.js";
import {inputArea, submitButton, emojiButton, attachButton, chatBody, uploadInput} from './component.js'
import responseData from "./response.js";  //text input 
import {responseImgData} from './upload.js'
import globeSearch from "./globe.js";
import emojiPicker from "./emoji.js";
import { APIkey, APIurl, userData } from "./POLICY.js";

//Text 
function makeElement(mess, type = 0, ...args) 
{
    let newElement = document.createElement('div'); 
    switch (type) 
    {
        case 0: newElement.innerHTML = robotResponse(mess); break; 
        case 1: newElement.innerHTML = userResponse(mess); break; 
        case 2: newElement.innerHTML = image(args[0]); break;   //Truyen vao mot cai link hinh anh 
    }
    return newElement
} 
function attach(root, child) {
    root.append(child); 
}
const getAnswerFromAPI = (obj) => marked.parse(obj.candidates[0].content.parts[0].text) 
function dataSolve(callback)   //Xu li du lieu dua vao 
{
    console.log(userData)
    submitButton.addEventListener('click' , function() {
        if (inputArea.value == '' && window.userURLData == '') return; 
        let mess = inputArea.value; 
        inputArea.value = ''; 
        attach(chatBody, makeElement(mess, 1)) 
        const answer = callback(mess); 
        answer.then(data => {
            attach(chatBody, makeElement(getAnswerFromAPI(data)))
            console.log(getAnswerFromAPI(data)); 
        }) 
    })
}
//get user image input 
function getTextData() 
{
    dataSolve(responseData)
}
getTextData()   
function getImgData() 
{   
    upLoadFile(makeElement, attach);
    
}
getImgData() 
globeSearch()
emojiPicker()
export {makeElement, attach, getAnswerFromAPI}

