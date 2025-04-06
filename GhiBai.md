Mot chut kien thuc 
1. Call API: Phai co API url va API key (lay tu trang web) 
- Dinh dang cach su dung API se duoc huong dan cu yhe trong docs, cop ve, quang vo cai object cua minh la duoc 

2. De Su dung nodeJS, npm phai xay dung server ao rieng. Chay bang live server thi no han che package hon tai vi chay 
trong moi truong Dev Tools 

3. Doan text scroll: overflow-y: scroll -> tu dong scroll khi vuot qua kich thuoc 

4. De component thanh public cua nhieu file 
const inputArea = document.querySelector('.chat-footer__input') 
const submitButton = document.querySelector('.submit'); 
const emojiButton = document.querySelector('.emoji'); 
const attachButton = document.querySelector('.attach'); 
const chatBody = document.querySelector('.chat-body'); 
export {inputArea, submitButton, emojiButton, attachButton, chatBody}

5. Khi su dung async thi ta se return ve lai 1 promise. Sau do di vo ham ma ta muon su dung du lieu, xu li cai 
promise do bang .then 

6. window.open(url): Mo 1 trang web, ta xem tirnh duyet do co url nhu the nao thi truyen query tuong ung vo 

7. Hay can than va chu y ham async, await. Du lieu can phai duoc tra ve thi moi co the chay ham tiep theo. Ta phai xu li bang cacpp bat dong bo de lay du lieu (fetch - aync await, promise then, callback) 

8. Doc file du lieu bang input:  
- Dat type cua the input thanh type 
- Truy cap du lieu cua file: reader.readAsDataURL(file) 
(Ham tra ve urlData la 1 bat dong bo)
attachButton.addEventListener('click', () => uploadInput.click());
    const reader = new FileReader(); 
    uploadInput.addEventListener('change', function(e) {
        //Src: Chat GPT 
        **const file = e.target.files[0]** //Lay file ma nguoi dung chon 
        
        reader.onload = function(e) {
            const urlData = e.target.result; //Lay ket qua tu viec doc file, o day la 1 URL du lieu o dang base64 
            attach(chatBody, makeElement('', 2, urlData)) 
            uploadInput.value = ''; 
            responseImgData(urlData)
        }
        reader.readAsDataURL(file);
urlData: link du lieu, chua toan bo thong tin hinh anh 

9. Hay can than hieu ung cha truyen con noi (nen su dung e.target de quan li hieu ung cha truyen con noi neu co)