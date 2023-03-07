import * as dotenv from 'dotenv';
dotenv.config();

export default {
  serverPort: process.env.PORT || 8080,
  appName: 'Stereo',
  authName: 'splekdn',
  appKey: process.env.APP_KEY,
  development: process.env.DEVELOPMENT,
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
};
