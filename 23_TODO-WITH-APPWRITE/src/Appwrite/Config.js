import { Account, Client } from "appwrite";
const apiUrl = String(import.meta.env.VITE_API_ENDPOINT);
const projectId = String(import.meta.env.VITE_PROJECT_ID);

console.log(apiUrl);

const client = new Client();
client.setEndpoint(apiUrl).setProject(projectId);

export const account = new Account(client);
