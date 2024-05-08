function sendToDiscord() {
  var request = new XMLHttpRequest();
  request.open("POST", "YOUR_WEBHOOK_URL");

  request.setRequestHeader('Content-type', 'application/json');

  var params = {
    username: "GitHub Pages Bot",
    avatar_url: "",
    content: document.getElementById("textInput").value
  }

  request.send(JSON.stringify(params));
}
