const checkCertExpiration = require("check-cert-expiration");

module.exports = (req, res) => {
  res.setHeader("Content-Type", "application/json");
  res.setHeader("Access-Control-Allow-Origin", "*");

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
      res.end(JSON.stringify(error, null, 4));
    });
};
