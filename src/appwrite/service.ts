import { Account, Client, ID } from "appwrite";
import Config from "react-native-config";
import Snackbar from "react-native-snackbar";

const appwriteClient = new Client();

// const APPWRITE_ENDPOINT: string = Config.APPWRITE_ENDPOINT!;
// const APPWRITE_PROJECT_ID: string = Config.APPWRITE_PROJECT_ID!;
const APPWRITE_ENDPOINT: string = 'https://cloud.appwrite.io/v1';
const APPWRITE_PROJECT_ID: string = '677f49610018cc65362b';

type CreateUserAccount = {
    email: string;
    password: string;
    name: string;
};

type LoginUserAccount = {
    email: string;
    password: string;
};

class AppwriteService {
    account;

    constructor() {
        appwriteClient
            .setEndpoint(APPWRITE_ENDPOINT)
            .setProject(APPWRITE_PROJECT_ID);

        this.account = new Account(appwriteClient);
    }

    /**
     * Creates a new user account in Appwrite and logs them in.
     */
    async createAccount({ email, password, name }: CreateUserAccount) {
        try {
            const userAccount = await this.account.create(
                ID.unique(),
                email,
                password
            );
            if (userAccount) {
                return this.login({ email, password });
            } else {
                return userAccount;
            }
        } catch (error) {
            Snackbar.show({
                text: String(error),
                duration: Snackbar.LENGTH_LONG,
            });
            console.error("Appwrite service :: createAccount() ::", error);
            throw error;
        }
    }

    /**
     * Logs in a user using their email and password.
     */
    async login({ email, password }: LoginUserAccount) {
        try {
            return await this.account.createEmailPasswordSession(email, password);
        } catch (error) {
            Snackbar.show({
                text: String(error),
                duration: Snackbar.LENGTH_LONG,
            });
            console.error("Appwrite service :: login() ::", error);
            throw error;
        }
    }

    /**
     * Gets the currently logged-in user's account details.
     */
    async getCurrentUser() {
        try {
            return await this.account.get();
        } catch (error) {
            console.error("Appwrite service :: getCurrentUser() ::", error);
            throw error;
        }
    }

    /**
     * Logs out the current user by deleting all sessions.
     */
    async logout() {
        try {
            return await this.account.deleteSessions();
        } catch (error) {
            console.error("Appwrite service :: logout() ::", error);
            throw error;
        }
    }
}

export default AppwriteService
