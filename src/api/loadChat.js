export const loadChat = () =>
fetch("/data/chat.json").then((response) => response.json());

export default loadChat;