import { Account, Client } from "appwrite";

export const appwriteURL = String(import.meta.env.VITE_APPWRITEURL);
export const projectID = String(import.meta.env.VITE_PROJECTID);

const client = new Client();

client.setEndpoint(appwriteURL).setProject(projectID);

export const account = new Account(client);

export default client;
