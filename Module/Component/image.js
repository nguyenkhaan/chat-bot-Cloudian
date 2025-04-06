export default function image(urlData) {
    return `
    <div class="chat-body__img-wrapper">
        <div class="chat-body__img" style="background-image: url('${urlData}');"></div>
    </div> 
    `
}
