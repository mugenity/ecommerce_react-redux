import React from "react";
import SignUp from "../../components/sign-up/sign-up.components";
import SignIn from "../../components/signin/signin.component";

import "./sign-in-and-sign-up.styles.scss";

const SignInAndSignUpPage = () => (
  <div className="sign-in-and-sign-up">
    <SignIn />
    <SignUp />
  </div>
);

export default SignInAndSignUpPage;
