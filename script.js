function sendToDiscord() {
  var request = new XMLHttpRequest();
  request.open("POST", "https://discord.com/api/webhooks/1237584893756575845/AP_2URcUznCp86IZ2GlJeJxNfyr6TXKxhA1wjU7YZvh-SKXSK6OuEaBvWvoqC6zDcfBO");

  request.setRequestHeader('Content-type', 'application/json');

  var params = {
    username: "GitHub Pages Bot",
    avatar_url: "",
    content: document.getElementById("textInput").value
  }

  request.send(JSON.stringify(params));
}
