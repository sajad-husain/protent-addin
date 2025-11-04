import { PublicClientApplication } from "@azure/msal-browser";

const msalConfig = {
    auth: {
        clientId: "YOUR_CLIENT_ID",
        authority: "https://login.microsoftonline.com/common",
        redirectUri: "https://localhost:3000",
    },
};

const msalInstance = new PublicClientApplication(msalConfig);

export const login = async () => {
    try {
        const response = await msalInstance.loginPopup({
            scopes: ["user.read"],
        });
        return response.account;
    } catch (err) {
        console.error("Login failed:", err);
    }
};
