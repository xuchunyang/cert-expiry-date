const checkCertExpiration = require("check-cert-expiration");

module.exports = (req, res) => {
  const { url } = req.query();
  if (!url) {
    res.statusCode = 400;
    res.end("Error: empty url");
    return;
  }

  checkCertExpiration(url)
    .then(data => {
      res.statusCode = 200;
      res.end(JSON.stringify(data));
    })
    .catch(error => {
      res.statusCode = 400;
      res.end(JSON.stringify(error));
    });
};
