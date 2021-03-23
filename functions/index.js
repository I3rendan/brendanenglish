let initialized = false;
if (!initialized) {
  const admin = require('firebase-admin');
  const functions = require('firebase-functions');
  admin.initializeApp(functions.config().firebase);
  initialized = true;
}
const function_name = process.env.FUNCTION_NAME || process.env.K_SERVICE;

if (!function_name || function_name === 'sendContactEmail') {
  exports.sendContactEmail = require('./email/sendContactEmail');
}
