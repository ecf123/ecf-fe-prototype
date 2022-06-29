import React from 'react'
import InputField from "../InputField/InputField"
import "./LoginPage.scss"

const LoginPage = (props) => {

  const { welcomeMessage } = props;

  return (
    <div className='login-page'>
      {/* <Button /> */}
      <h2 className='login-page__welcome'>{welcomeMessage}</h2>
      <InputField label="Email Address" placeholder="you@example.com" />
      <InputField label="Password" placeholder="Your password" />
      {/* <Button /> */}
      <p className='login-page__divider'><span className='st'></span>Sign in with</p>
      {/* <Button buttonText={<svg width="28" height="29" viewBox="0 0 28 29" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_376_902)">
          <path d="M27.4546 14.4043C27.4546 6.81042 21.3494 0.654343 13.8182 0.654343C6.28709 0.654343 0.181885 6.81042 0.181885 14.4043C0.181885 21.2674 5.16851 26.9558 11.6876 27.9873V18.379H8.22521V14.4043H11.6876V11.375C11.6876 7.92895 13.7234 6.02544 16.8382 6.02544C18.3302 6.02544 19.8907 6.29399 19.8907 6.29399V9.67778H18.1712C16.4772 9.67778 15.9489 10.7377 15.9489 11.8251V14.4043H19.7309L19.1263 18.379H15.9489V27.9873C22.468 26.9558 27.4546 21.2674 27.4546 14.4043Z" fill="#1877F2" />
          <path d="M19.1262 18.3789L19.7308 14.4043H15.9488V11.825C15.9488 10.7376 16.4771 9.67774 18.1711 9.67774H19.8906V6.29395C19.8906 6.29395 18.33 6.02539 16.8381 6.02539C13.7233 6.02539 11.6875 7.92891 11.6875 11.375V14.4043H8.2251V18.3789H11.6875V27.9873C12.3817 28.0971 13.0933 28.1543 13.8181 28.1543C14.543 28.1543 15.2546 28.0971 15.9488 27.9873V18.3789H19.1262Z" fill="white" />
        </g>
        <defs>
          <clipPath id="clip0_376_902">
            <rect width="27.2727" height="27.5" fill="white" transform="translate(0.181885 0.654541)" />
          </clipPath>
        </defs>
      </svg>
      } />
      <Button />
      <Button buttonText={<svg width="24" height="29" viewBox="0 0 24 29" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_376_909)">
          <path d="M19.3543 15.2645C19.3233 11.7871 22.1709 10.1176 22.2997 10.0362C20.6973 7.67237 18.2036 7.34853 17.3139 7.31043C15.1928 7.09396 13.1731 8.56943 12.098 8.56943C11.0229 8.56943 9.36035 7.34161 7.60167 7.37624C5.28653 7.41088 3.15516 8.73222 1.96324 10.8207C-0.439488 15.0238 1.35011 21.253 3.68929 24.6645C4.83484 26.3322 6.1985 28.2112 7.99153 28.1419C9.71929 28.0727 10.3719 27.0163 12.4569 27.0163C14.5419 27.0163 15.1293 28.1419 16.955 28.109C18.8115 28.0727 19.9897 26.405 21.1267 24.7321C22.4388 22.796 22.9815 20.9222 23.0125 20.8235C22.9712 20.8061 19.392 19.4225 19.3543 15.2645Z" fill="#B8B8B8" />
          <path d="M15.9243 5.05356C16.8758 3.89154 17.5181 2.27577 17.3412 0.665283C15.9706 0.72076 14.3116 1.58661 13.3275 2.74863C12.4464 3.77562 11.6736 5.42075 11.883 6.99845C13.4116 7.11795 14.9727 6.21387 15.9243 5.05356Z" fill="#B8B8B8" />
        </g>
        <defs>
          <clipPath id="clip0_376_909">
            <rect width="22.2002" height="27.5" fill="white" transform="translate(0.818115 0.654541)" />
          </clipPath>
        </defs>
      </svg>
      } /> */}
    </div>
  )
}

export default LoginPage