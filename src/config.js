import {config} from 'dotenv'
config();

export const MONGODB_URL = process.env.MONGODB_URL || ''
