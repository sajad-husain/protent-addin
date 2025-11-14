import React, { useEffect, useState } from "react";
import { PublicClientApplication } from "@azure/msal-browser";
import { loginRequest, msalConfig } from "../utils/msalConfig";

const msalInstance = new PublicClientApplication(msalConfig);

function Oauth() {
  const [account, setAccount] = useState(null);
  const [accessToken, setAccessToken] = useState(null);
  const [msalReady, setMsalReady] = useState(false);

  useEffect(() => {
    const initMsal = async () => {
      await msalInstance.initialize();
      const accounts = msalInstance.getAllAccounts();
      if (accounts.length > 0) {
        setAccount(accounts[0]);
      }
      setMsalReady(true);
    };
    initMsal();
  }, []);

  const MSLdialogLogin = async () => {
    if (!msalReady) {
      console.error("MSAL not ready yet");
      return;
    }

    try {
      const loginResponse = await msalInstance.loginPopup(loginRequest);
      setAccount(loginResponse.account);

      const tokenResponse = await msalInstance.acquireTokenSilent({
        ...loginRequest,
        account: loginResponse.account,
      });

      setAccessToken(tokenResponse.accessToken);
      console.log(tokenResponse.accessToken)
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  const handleLogout = async () => {
    // await msalInstance.logoutPopup();
    setAccount(null);
    setAccessToken(null);
  };

  let Logindialog;
  const officedialogopen = () => {
    var a = "https://login.microsoftonline.com/common/oauth2/v2.0/authorize?client_id=ee73ee0e-3911-46a5-973a-22e9bfe26cac&response_type=token&redirect_uri=https://localhost:3000/assets/Redirect.html&scope=user.read%20mail.readwrite%20mail.send";
    Office.context.ui.displayDialogAsync(a, { height: 60, width: 40 }, function (asyncResult) {
      Logindialog = asyncResult.value;
      Logindialog.addEventHandler(Office.EventType.DialogMessageReceived, LogprocessMessage);
    });
  };

  function LogprocessMessage(arg) {
    const token = arg.message;
    console.log(token)
    Logindialog.close();
  }

  return (
    <div style={{ textAlign: "center", marginTop: 80 }}>
      <h1>Microsoft Login (Frontend Only)</h1>

      <button onClick={officedialogopen}>office dialog login</button>
      {!account ? (
        <button onClick={MSLdialogLogin} disabled={!msalReady}>
          Login with Microsoft with MSL dialog
        </button>
      ) : (
        <>
          <p>Welcome, {account.username}</p>
          <button onClick={handleLogout}>Logout</button>
          <br />
        </>
      )}
    </div>
  );
}

export default Oauth;
