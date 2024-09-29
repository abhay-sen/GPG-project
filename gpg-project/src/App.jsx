import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useCallback } from 'react'
import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import SuperTokens, { SuperTokensWrapper } from "supertokens-auth-react";

import { getSuperTokensRoutesForReactRouterDom } from "supertokens-auth-react/ui";
import { ThirdPartyPreBuiltUI } from "supertokens-auth-react/recipe/thirdparty/prebuiltui";
import { EmailPasswordPreBuiltUI } from "supertokens-auth-react/recipe/emailpassword/prebuiltui";
import * as reactRouterDom from "react-router-dom";

import ThirdParty, {
  Github,
  Google,
  Facebook,
  Apple,
} from "supertokens-auth-react/recipe/thirdparty";
import EmailPassword from "supertokens-auth-react/recipe/emailpassword";
import Session from "supertokens-auth-react/recipe/session";

SuperTokens.init({
  appInfo: {
    // learn more about this on https://supertokens.com/docs/thirdpartyemailpassword/appinfo
    appName: "AlumniDekho",
    apiDomain: "http://localhost:4050",
    websiteDomain: "http://localhost:5173",
    apiBasePath: "/auth",
    websiteBasePath: "/auth",
  },
  recipeList: [
    ThirdParty.init({
      signInAndUpFeature: {
        providers: [
          Github.init(),
          Google.init(),
          Facebook.init(),
          Apple.init(),
        ],
      },
    }),
    EmailPassword.init(),
    Session.init(),
  ],
});

function App() {
  

  return (
    <SuperTokensWrapper>
      <BrowserRouter>
        <Routes>
          {/*This renders the login UI on the /auth route*/}
          
            {getSuperTokensRoutesForReactRouterDom(reactRouterDom, [
              ThirdPartyPreBuiltUI,
              EmailPasswordPreBuiltUI,
            ])}
         

          {/*Your app routes*/}
        </Routes>
      </BrowserRouter>
    </SuperTokensWrapper>
  );
}

export default App
