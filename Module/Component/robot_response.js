export default function robotResponse(mess) {
    return `
        <div class="chat-body__robot">
                <div class="chat-body__robot-avatar icon--format"><i class="fa-solid fa-cloud"></i></div>
                <div class="chat-body__message">${mess}</div>
            </div>
    `
}