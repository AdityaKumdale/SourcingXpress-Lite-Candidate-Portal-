import fs from 'fs/promises';
import path from 'path';
import { Job, User, Application } from '../types/types';

// Path to your JSON file
const DB_PATH = path.join(process.cwd(), 'app/data/models.json');
//const DB_PATH = path.join(process.cwd(), 'data', 'models.json');

export interface DatabaseSchema {
  jobs: Job[];
  users: User[];
  applications: Application[];
  favorites: any[]; 
}

// Read the database
export async function readDb(): Promise<DatabaseSchema> {
  // const data = await fs.readFile(DB_PATH, 'utf-8');
  // return JSON.parse(data);
   try {
    const data = await fs.readFile(DB_PATH, 'utf-8');
    return JSON.parse(data);
  } catch (error) {
    console.error('Error reading database:', error);
    // Return empty database structure if file doesn't exist
    return {
      jobs: [],
      users: [],
      applications: [],
      favorites: []
    };
  }
}

// Write to the database
export async function writeDb(data: DatabaseSchema) {
//  await fs.writeFile(DB_PATH, JSON.stringify(data, null, 2), 'utf-8');
 try {
    await fs.writeFile(DB_PATH, JSON.stringify(data, null, 2), 'utf-8');
  } catch (error) {
    console.error('Error writing database:', error);
    throw error;
  }
}