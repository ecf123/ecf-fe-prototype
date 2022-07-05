import React, { useState } from 'react';
import "./CreateAccount.scss";
import InputField from "../../components/InputField/InputField";
import Button from "../../components/Button/Button";
import BackButton from "../../components/BackButton/BackButton";
import SocialLogin from "../../components/SocialLogin/SocialLogin";



const CreateAccount = () => {
    // const { accountMessage } = props;
    const [page, setPage] = useState(1);

    const previousPage = () => {
        setPage(1);
    }

    const nextPage = () => {
        setPage(2);
    }

    return (
      <div className="register-user">
        {page === 1 ? (
        <>
            <BackButton linkTo="/splash" />
            <h2 className="register-user__title">Create An Account</h2>
            <form className="register-user__inputs--pageOne">
              <InputField
                inputType="text"
                label="First Name"
                placeholder="First Name"
              />
              <InputField
                inputType="text"
                label="Last Name"
                placeholder="Last Name"
              />
            </form>
            <Button buttonText="NEXT" onClickButton={nextPage} />
        </>
        ) : (
        <>
            <BackButton onClick={previousPage} />
            <h2 className="register-user__title">Create An Account</h2>
            <form className="register-user__inputs--pageTwo">
            <InputField
                inputType="email"
                label="Email Address"
                placeholder="you@example.com"
            />
            <InputField
                inputType="password"
                label="Password"
                placeholder="Your password"
            />
            <InputField
                inputType="password"
                label="Confirm Password"
            />
            </form>
            <Button buttonText="CREATE ACCOUNT" />
        </>
        )}
        <p className="register-user__divider">
          <span className="register-user__divider--text">Sign in with</span>
        </p>
        <div className="register-user__login-buttons">
          <SocialLogin
            icon={
              <svg
                width="28"
                height="29"
                viewBox="0 0 28 29"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_376_902)">
                  <path
                    d="M27.4546 14.4043C27.4546 6.81042 21.3494 0.654343 13.8182 0.654343C6.28709 0.654343 0.181885 6.81042 0.181885 14.4043C0.181885 21.2674 5.16851 26.9558 11.6876 27.9873V18.379H8.22521V14.4043H11.6876V11.375C11.6876 7.92895 13.7234 6.02544 16.8382 6.02544C18.3302 6.02544 19.8907 6.29399 19.8907 6.29399V9.67778H18.1712C16.4772 9.67778 15.9489 10.7377 15.9489 11.8251V14.4043H19.7309L19.1263 18.379H15.9489V27.9873C22.468 26.9558 27.4546 21.2674 27.4546 14.4043Z"
                    fill="#1877F2"
                  />
                  <path
                    d="M19.1262 18.3789L19.7308 14.4043H15.9488V11.825C15.9488 10.7376 16.4771 9.67774 18.1711 9.67774H19.8906V6.29395C19.8906 6.29395 18.33 6.02539 16.8381 6.02539C13.7233 6.02539 11.6875 7.92891 11.6875 11.375V14.4043H8.2251V18.3789H11.6875V27.9873C12.3817 28.0971 13.0933 28.1543 13.8181 28.1543C14.543 28.1543 15.2546 28.0971 15.9488 27.9873V18.3789H19.1262Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_376_902">
                    <rect
                      width="27.2727"
                      height="27.5"
                      fill="white"
                      transform="translate(0.181885 0.654541)"
                    />
                  </clipPath>
                </defs>
              </svg>
            }
          />
          <SocialLogin
            icon={
              <svg
                width="31"
                height="23"
                viewBox="0 0 31 23"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_376_894)">
                  <path
                    d="M7.42153 22.7461V11.4714L3.89216 8.27248L0.727295 6.49731V20.7564C0.727295 21.8573 1.62761 22.7461 2.73561 22.7461H7.42153Z"
                    fill="#4285F4"
                  />
                  <path
                    d="M23.4875 22.746H28.1735C29.2848 22.746 30.1818 21.8539 30.1818 20.7563V6.49731L26.5971 8.53055L23.4875 11.4713V22.746Z"
                    fill="#34A853"
                  />
                  <path
                    d="M7.42141 11.4716L6.94116 7.06622L7.42141 2.84985L15.4544 8.81881L23.4875 2.84985L24.0247 6.83858L23.4875 11.4716L15.4544 17.4405L7.42141 11.4716Z"
                    fill="#EA4335"
                  />
                  <path
                    d="M23.4875 2.84973V11.4715L30.1818 6.4974V3.84452C30.1818 1.38405 27.3468 -0.0185897 25.3621 1.45701L23.4875 2.84973Z"
                    fill="#FBBC04"
                  />
                  <path
                    d="M0.727295 6.49721L3.8061 8.78498L7.42153 11.4713V2.84954L5.54702 1.45681C3.55884 -0.0188955 0.727295 1.38386 0.727295 3.84421V6.49709V6.49721Z"
                    fill="#C5221F"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_376_894">
                    <rect
                      width="29.4545"
                      height="22"
                      fill="white"
                      transform="translate(0.727295 0.854248)"
                    />
                  </clipPath>
                </defs>
              </svg>
            }
          />
          <SocialLogin
            icon={
              <svg
                width="24"
                height="29"
                viewBox="0 0 24 29"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_376_909)">
                  <path
                    d="M19.3543 15.2645C19.3233 11.7871 22.1709 10.1176 22.2997 10.0362C20.6973 7.67237 18.2036 7.34853 17.3139 7.31043C15.1928 7.09396 13.1731 8.56943 12.098 8.56943C11.0229 8.56943 9.36035 7.34161 7.60167 7.37624C5.28653 7.41088 3.15516 8.73222 1.96324 10.8207C-0.439488 15.0238 1.35011 21.253 3.68929 24.6645C4.83484 26.3322 6.1985 28.2112 7.99153 28.1419C9.71929 28.0727 10.3719 27.0163 12.4569 27.0163C14.5419 27.0163 15.1293 28.1419 16.955 28.109C18.8115 28.0727 19.9897 26.405 21.1267 24.7321C22.4388 22.796 22.9815 20.9222 23.0125 20.8235C22.9712 20.8061 19.392 19.4225 19.3543 15.2645Z"
                    fill="#B8B8B8"
                  />
                  <path
                    d="M15.9243 5.05356C16.8758 3.89154 17.5181 2.27577 17.3412 0.665283C15.9706 0.72076 14.3116 1.58661 13.3275 2.74863C12.4464 3.77562 11.6736 5.42075 11.883 6.99845C13.4116 7.11795 14.9727 6.21387 15.9243 5.05356Z"
                    fill="#B8B8B8"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_376_909">
                    <rect
                      width="22.2002"
                      height="27.5"
                      fill="white"
                      transform="translate(0.818115 0.654541)"
                    />
                  </clipPath>
                </defs>
              </svg>
            }
          />
        </div>
      </div>
    );
};


export default CreateAccount