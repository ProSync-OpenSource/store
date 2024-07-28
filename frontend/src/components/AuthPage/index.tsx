'use client';

import LoginWrapper from './formWrapper';
import LoginForm from './loginform';
import RegisterForm from './registerform';
import AnotherChoice from './anotherChoice';

/*
  This component is responsible for rendering the login form or the register form
  based on the value of the isLogin prop. It also renders the AnotherChoice component
  that allows the user to navigate between the login and register forms.
*/

interface Props {
  isLogin: boolean;
}

export default function AuthPage({ isLogin }: Props) {
  return (
    <section className='w-full pb-5 bg-gray-100 lg:flex lg:p-0'>
      <AnotherChoice isLogin={isLogin}/>
      <LoginWrapper isLogin={isLogin}>
        {isLogin ? <LoginForm /> : <RegisterForm />}
      </LoginWrapper>
    </section>
  );
}