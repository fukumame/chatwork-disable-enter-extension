const content = `
function disableSendAction() {
  $('#_chatText').unbind('keyup');
}
disableSendAction();
`;

var script = document.createElement("script");
script.textContent = content;
document.body.appendChild(script);
