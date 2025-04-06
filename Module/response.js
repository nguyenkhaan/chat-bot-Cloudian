import robotResponse from "./Component/robot_response.js";
import userResponse from "./Component/user_response.js";
import {inputArea, submitButton, emojiButton, attachButton, chatBody, uploadInput} from './component.js'
import {APIkey, APIurl, userData} from './POLICY.js'

const responseData = async (mess) => {
    var content = {}; 
if (window.userURLData == '') content = {contents: [{parts: [{text: mess}]}]}
else content = {contents: [{ parts: [{ text: mess,},{inline_data: {mime_type: "image/jpeg",  data: window.userURLData.split(',')[1] }}]}]}
    const options = {
        header: {"Content-Type": "application/json"}, 
        method: 'POST', 
        body: JSON.stringify(content) 
    }
        //JSON.stringify({contents: [{parts: [{text: mess}]}]})}
    const res = await fetch(APIurl, options); 
    return await res.json(); 
} 
export default responseData