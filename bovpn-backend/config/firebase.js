const admin = require('firebase-admin');
const dotenv = require('dotenv');

// Load environment variables from .env file
dotenv.config();

// Firebase Admin SDK configuration using environment variables
const serviceAccount = {
    type: process.env.FIREBASE_TYPE,
    projectId: process.env.FIREBASE_PROJECT_ID,
    privateKeyId: process.env.FIREBASE_PRIVATE_KEY_ID,
    private_key: "-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQCsJ5TwoaRKb7VG\nFgK+SS3kSTQSD3UXiimcmcRS/n6L+LKa78r8MFMy5jJL5/wNoFTRFiOe1RMezS0u\nDUBLowWRI2oRGfOE6McVqtnGOo6aHfQ9RAnjZMOKdpiCdprhyxg+OHguB9R/8J7w\nnJq06NqrP+Bbyt5dOE+SaxRfovydZAcQAtGmN35nCy7pwSU8xJpKdOOC+Evsq76N\nfIEBz1ZrNIXXgjf8YSrSi3FpadfF9M88IJ6A70oDzEZxNKsR67hFvS8nQnlukuwj\n2zmkAKB3GFuWJdmsBf79ty4hboCuBB7WGPkYNxSfQS/pJW0xI5h1YolMatzRznIl\nIWpzmSNbAgMBAAECggEAAXvx38U0+mNOJ8WGzoco+x/acBFsDADn7O6yb5i8FI7X\nU1if4l60SOsNIfRlCuUH9il/sx3ZJVnVeuEoXb6RDLhGcNFNdSbgmII5kGju08tQ\nULrmbuxudyIgnHdTTIEIu3iXKKZuoY+8fwyKlOaxA+rwDzqHgjw7C2Ma8Nwh22V+\ntcNQlFfu+YWpDUprjkoRebjo72n5aYQWnZ7e/3M0zgeN4kKhAlLi9evdnYNwFvRT\nDolZJY5nZ/QduG/uQnaEnG3pnOi9r584MZ+AyPMMUQZ0WboZdyRPHZ3lPaRLilmP\nB+Yr8BZrwtgjlpeQ/N5CCe6py6FHaaiCPkAmKEDWOQKBgQDyihE4oQoBxoSaG7S9\nV3GbkjrF3DOAv3BEMJBt70ueEeW1w81WpVgyOXyRPGTItQjwN5JWDzl+gHo6uNKH\n+FTcrZzCKxZTqZXf82993tEHYaFWUB+IjEwOHgqEd3j/FyFkgYwI6OPw1V+ZhqD3\nXBSzYDx9pJU15eIZZCXgKglQjwKBgQC1tYH7C0njRhJUCLy68bpoYt6+zq6rsNtc\nlyayasapvi+Wnh88bxizXGv4eKm2iM32MFKeH3M07DPWAQl3pppy895BHYqTQS4Q\nypx7rbNULgkzaEGV4qkPQ83NqxNT/Mmij9CGCuoW+1BmenYmy+KIkIatu0i4KvB4\nIGiNRtiOdQKBgFmMWoFjC/PN3QWdNyU1VO/QlLya6bUeeY/jsl+0m2G4T+zFZ1oX\nYDHjAbgJ6VglZzByBCicJGktfHOT679iE8sKmrch+3NWSMzP75k0nE6yYEQi/xGG\nY0pPEykHh3f/jUezgQWFHyu7TDm9+E58A/Sakpr9Gk41Gz6uuEFEo/3HAoGAd3J2\nnFliW9VvLPCFZ/qJSB9eP13MMq7StH3kATrxlxmfXMpazDZXrWgezbo8DfLGOYSw\neqM/71UqCg6qc44AT3qB6poJwx0AtCcMULzxem+8up9ZJbdW3OL8gatozDgLMCKL\nt+Gq2iqgQo1T59L0+kLPVZschXwskTr0n5InvxUCgYAl8vBR26zkhAXaAsleU/Mj\n64ssEVS+VHXJ8SjbBfl5Lt7g4/s6vKfP5b3AYxuMdXtKk1EoYQaChEDZac7qbX7R\nhe0sw+WNRC+pCngwSqnVyQc7QwARzgpFb63s2CqtUpY2tuGN0Z3Lh2d7OYqkeacr\n/8mMhIdOMQ0JbF37c9k7Vw==\n-----END PRIVATE KEY-----\n",
    clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
    clientId: process.env.FIREBASE_CLIENT_ID,
    authUri: process.env.FIREBASE_AUTH_URI,
    tokenUri: process.env.FIREBASE_TOKEN_URI,
    authProviderX509CertUrl: process.env.FIREBASE_AUTH_PROVIDER_X509_CERT_URL,
    clientX509CertUrl: process.env.FIREBASE_CLIENT_X509_CERT_URL,
    universeDomain: process.env.FIREBASE_UNIVERSE_DOMAIN,
};

// Initialize Firebase Admin SDK
if (!admin.apps.length) { // Check if the app is already initialized
    admin.initializeApp({
        credential: admin.credential.cert(serviceAccount),
    });
}

module.exports = admin
