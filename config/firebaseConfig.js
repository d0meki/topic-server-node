const firebase = require("firebase-admin");
const firebaseConfig = {
    "type": "service_account",
    "project_id": "prueba-438c5",
    "private_key_id": "c82d8d315efe53736e2e2aeca036ad381d2d4697",
    "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDQ1XeboNDTJGVH\n/n/4qD3mGcWnzIWAmjcl0/PTQwZ/+/q6a1V/zsnCkcnqFL6ZQg4REExx46HXtFs9\nfav0AGae1ffYSqCD00VfXAaA1roh77exqTDYolWNxS+JeX8Oe0LSDTFrGPkUJ8xA\noRywXk6TM5XTQhakoruhZgqJdTyLvInO4IEOBuvZ7sHe87ZrQ4+J6WUozpXz5DOs\njWk6lSsHGpwcqPT1uGlH5jo1IlkWmhz46w0GV1XsUMenN+YRIKFcLn30azgNr6le\njOrm853dvNcRMEu+3ImabDGPDhLmMaVorkZa8TpYF+MvUgTRgaRwu2HazcfUCz7g\nQxACS8yhAgMBAAECggEAEEHuE9GLMETPFbG8aLFAUF+FQbDsW7ylum4rtzCqmuAU\n/tpIR7DjiCAtZenDhM7dpXptWRhtiwthZwIXluFJG+hwaQg2Qsz5w5i4cONGjknJ\nNS2Evfi1TFojf0JUH958rzmTtVC2Y1lNz2I7h4dv+omzikTE2oBItyHohBb6Za5d\nxE0B1XIBZt6U4mnMlEY4C7wsrlR985qEgDNeRMYQbMNLSkWjOsp9kDcuPnPwuUPH\nGFWbeb6DZnccDqcrduMvRfgnc9Yj4+YVszI2PEUurhkPW5CB2GYv3TnCp/mr+GnZ\nVIqutk8VpNq2yncYQ8K2WEfHEQyo1LRxksiLEKCCuQKBgQD1FFbMfC5zNXxeqsZE\nnZNn7asNsbdB1JSSH6A+Sl3373pveckKy3zcM1FSdt6STwmMd9RV80vzl7Wwgdo4\npxEAxhHYVuu1MSb87BDM87SYeHEouJra9fesc3r5bQRgJ49sgwNDGvbU+0TCQivh\nw1ciKP2bV0Xx9+f5R997Y1CEdwKBgQDaI6s3aDUN7GaO6GB5bTWB7h7PXIoEialX\nWo5Pj1vEqacyRxsMKb6xxis177q8YfuFwsjZ1DljfFHoMVjBFKDUaS69TIioMNTc\njWJBJlrfGNb/gAd4kRih+TNB4WTr8QUVJuWOSgYKC2uuxBxEB0sElrZ7gj1hLnam\nrNroW111pwKBgEZELJa4TAEQJrZltC7cFvVHOTHV8DrZnjc/BgyV+dcqPCpV+oQz\nz3q64+gG2M2OB6jUenaiKPaQWrFeqZhwnflg0KD8Wtw6WXlOnYqFnRPSBG+ubge1\nWeuBuJJm5UhET2THM1o8EuUBnbcsjbRO816B7iRpo046y7G3H6Ya1W0FAoGBAJnG\nu1R76aq/FC16M0hmbGoD60RTABji0rX56Ii9jvu8fVk8Nx0D8KJyCNQlA4b5q85H\n2j91FF/FrBf7cY3rdNVIsOJRqaSnh+dS5Aj5eOX9JNNI9ftQjgThH/k5Y2PQrLyU\nhw8fr9I06txw81whqAi8FjhLP+naT1qAUHGstt3RAoGBALoCUFfKhuVaBXEQvoPH\n+8ecFA5LEn4OrYGi0s9+7PBC63edQ74N3vVfZLpJ8jrM25wK7NW52LiGp0SaaQO7\nV3n6JieABCbvNLkdzWajXBdDi6bcCDLDuYNy64K6Xm8OTXWE/rpubu5VCM8LQ65G\nDlSPkZ0FEdEwebJww2S4sm/B\n-----END PRIVATE KEY-----\n",
    "client_email": "firebase-adminsdk-ud5v5@prueba-438c5.iam.gserviceaccount.com",
    "client_id": "114428592647771361402",
    "auth_uri": "https://accounts.google.com/o/oauth2/auth",
    "token_uri": "https://oauth2.googleapis.com/token",
    "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
    "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-ud5v5%40prueba-438c5.iam.gserviceaccount.com"
};
firebase.initializeApp({
    credential: firebase.credential.cert(firebaseConfig),
});

module.exports = firebase;