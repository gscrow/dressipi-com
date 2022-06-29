function handler(event) {
  var request = event.request;

  if (
    request.uri.match(
      /^\/\w+.(jpe?g|png|gif|svg|pdf|jfif|webp|ico|icns|mp4|js)$/i
    )
  ) {
    return request;
  }

  var lowerCasePath = request.uri.toLowerCase();
  request.uri = lowerCasePath;

  return request;
}
