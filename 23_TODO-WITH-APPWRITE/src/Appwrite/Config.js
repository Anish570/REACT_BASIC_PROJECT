import { Account, Client, Databases } from "appwrite";

const apiUrl = String(import.meta.env.VITE_API_ENDPOINT);
const projectId = String(import.meta.env.VITE_PROJECT_ID);

export const client = new Client();
client.setEndpoint(apiUrl).setProject(projectId);

export const account = new Account(client);
export const database = new Databases(client);
