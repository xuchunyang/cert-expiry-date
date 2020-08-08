# Check cert expiry date

https://cert-expiry-date.vercel.app/

![Screen shot of the website](Screen-Shot-2020-08-08-at-18.56.36.png)

## CLI

The API endpoint is
`https://cert-expiry-date.vercel.app/api/cert-expiry-date`. Use the `url` query
parameter to check a domain or URL. For example,

```
$ curl 'https://cert-expiry-date.vercel.app/api/cert-expiry-date?url=example.com'
{
    "host": "example.com",
    "port": 443,
    "valid_to": "2020-12-02T12:00:00.000Z",
    "daysLeft": 116
}
```
