import { Credential } from "firebase-admin/app";
export const configuration = () => {
  console.log(process.env.FIRE_BASE_TYPE);
  return {
    firebaseConfig: {
      type: process.env.FIRE_BASE_TYPE,
      project_id: process.env.FIRE_BASE_PROJECT_ID,
      private_key_id: process.env.FIRE_BASE_PRIVATE_KEY_ID,
      private_key: process.env.FIRE_BASE_PRIVATE_KEY.replace(/\\n/g, '\n'),
      client_email: process.env.FIRE_BASE_CLIENT_EMAIL,
      client_id: process.env.FIRE_BASE_CLIENT_ID,
      auth_uri: process.env.FIRE_BASE_AUTH_URI,
      token_uri: process.env.FIRE_BASE_TOKEN_URI,
      auth_provider_x509_cert_url: process.env.FIRE_BASE_AUTH_PROVIDER_X509_CERT_URL,
      client_x509_cert_url: process.env.FIRE_BASE_CLIENT_X509_CERT_URL,
      universe_domain: process.env.FIRE_BASE_UNIVERSE_DOMAIN
    }
  }
}