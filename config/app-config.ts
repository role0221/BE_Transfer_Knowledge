
import * as dotenv from 'dotenv';
dotenv.config({ path: '.env.development' });

const APP = {
  port: process.env.APP_PORT || 3800,
  title: process.env.APP_TITLE || ``,
  description: process.env.APP_DESCRIPTION || ``,
  version: process.env.APP_VERSION || `1.0.0`,
}
export { APP }
