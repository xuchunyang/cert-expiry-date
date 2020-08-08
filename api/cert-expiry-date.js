const checkCertExpiration = require("check-cert-expiration");

module.exports = (req, res) => {
  res.setHeader("Content-Type", "application/json");
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Cache-Control", "max-age=0, s-maxage=86400");

  const { url } = req.query;
  if (!url) {
    res.statusCode = 400;
    res.end("Error: empty url");
    return;
  }

  checkCertExpiration(url)
    .then(data => {
      res.statusCode = 200;
      res.end(JSON.stringify(data, null, 4));
    })
    .catch(error => {
      res.statusCode = 400;
      const { name, message } = error;
      res.end(JSON.stringify({ name, message }, null, 4));
    });
};
