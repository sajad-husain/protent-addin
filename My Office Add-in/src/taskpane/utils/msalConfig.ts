export const msalConfig = {
  auth: {
    clientId: "b4bb08ce-51aa-43fd-976b-1726dc7ff53f", // from Azure app
    authority: "https://login.microsoftonline.com/common",
    redirectUri: "https://localhost:3000",
  },
  cache: {
    cacheLocation: "localStorage", // or "sessionStorage"
    storeAuthStateInCookie: false,
  },
};

export const loginRequest = {
  scopes: ["User.Read", "Files.ReadWrite.All", "Mail.Send", "offline_access"],
};
