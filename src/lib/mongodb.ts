
import { MongoClient, Db } from 'mongodb';
import dotenv from 'dotenv';

dotenv.config();


const uri = process.env.MONGO_URI;
if (!uri) {
  throw new Error('Please define the MONGO_URI environment variable in the .env file');
}

const client = new MongoClient(uri);

let cachedDb: Db | null = null;

export async function connectToDatabase(): Promise<Db> {
  if (cachedDb) {
    return cachedDb;
  }
  

  await client.connect();

  const dbName = 'alpstech';
  cachedDb = client.db(dbName);
  return cachedDb;
}
