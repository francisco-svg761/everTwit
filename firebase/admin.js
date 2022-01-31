var admin = require('firebase-admin');

try {
  admin.initializeApp({
    credential: admin.credential.cert({
      type: process.env.TYPE,
      project_id: process.env.PROJECT_ID,
      private_key_id: process.env.PRIVATE_KEY_ID,
      private_key: process.env.PRIVATE_KEY,
      client_email: process.env.CLIENT_EMAIL,
      client_id: process.env.CLIENT_ID,
      auth_uri: process.env.AUTH_URI,
      token_uri: process.env.TOKEN_URI,
      auth_provider_x509_cert_url: process.env.AUTH_PROVIDER,
      client_x509_cert_url: process.env.CLIENT_CERT_URL,
      databaseURL: 'https://evertwit-3ed1d.firebaseio.com',
    }),
  });
} catch (e) {}

export const firestore = admin.firestore();
