import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Login from '../pages/login';
import { BrowserRouter } from 'react-router-dom';
import { CONSTANTS } from '../constant';

describe('로그인', () => {
   it('로그인 버튼이 있어야 한다.', () => {
      render(<Login />, { wrapper: BrowserRouter });

      const loginButton = screen.getByTestId('login-button');

      expect(loginButton).toBeInTheDocument();
   });

   it('학번 입력창이 있어야 한다.', () => {
      render(<Login />, { wrapper: BrowserRouter });

      const idInput = screen.getByTestId('id-input');

      expect(idInput).toBeInTheDocument();
   });

   it('학번 입력창에는 숫자만 입력할 수 있어야 한다.', () => {
      render(<Login />, { wrapper: BrowserRouter });

      const idInput = screen.getByTestId('id-input');

      userEvent.type(idInput, 'abc');

      expect(idInput).toHaveValue('');

      userEvent.type(idInput, '123');

      expect(idInput).toHaveValue('123');
   });

   it('비밀번호 입력창이 있어야 한다.', () => {
      render(<Login />, { wrapper: BrowserRouter });

      const passwordInput = screen.getByTestId('password-input');

      expect(passwordInput).toBeInTheDocument();
   });

   it('비밀번호 입력창은 값이 보여서는 안된다.', () => {
      render(<Login />, { wrapper: BrowserRouter });

      const passwordInput = screen.getByTestId('password-input');

      expect(passwordInput).toHaveAttribute('type', 'password');
   });

   it('학번 8자리와 비밀번호를 입력하면 로그인 버튼이 활성화 되어야 한다.', () => {
      render(<Login />, { wrapper: BrowserRouter });

      const idInput = screen.getByTestId('id-input');
      const passwordInput = screen.getByTestId('password-input');
      const loginButton = screen.getByTestId('login-button');

      expect(loginButton).toBeDisabled();

      userEvent.type(idInput, '12345678');
      userEvent.type(passwordInput, 'qwer1234');

      expect(idInput).toHaveValue('12345678');
      expect(passwordInput).toHaveValue('qwer1234');

      expect(loginButton).toBeEnabled();
   });

   it('버튼이 비활성화 된 상태에서 로그인 submit이 되지 않아야한다.', () => {
      render(<Login />, { wrapper: BrowserRouter });
      const submitCallback = jest.fn();

      const loginButton = screen.getByTestId('login-button');
      const loginForm = screen.getByTestId('login-form');

      loginForm.addEventListener('submit', submitCallback);

      userEvent.click(loginButton);
      expect(submitCallback).toBeCalledTimes(0);
   });

   it('버튼이 활성화 된 상태에서 로그인 submit이 되어야한다.', () => {
      render(<Login />, { wrapper: BrowserRouter });
      const submitCallback = jest.fn();

      const idInput = screen.getByTestId('id-input');
      const passwordInput = screen.getByTestId('password-input');
      const loginButton = screen.getByTestId('login-button');
      const loginForm = screen.getByTestId('login-form');

      loginForm.addEventListener('submit', submitCallback);

      userEvent.type(idInput, '12345678');
      userEvent.type(passwordInput, 'qwer1234');

      userEvent.click(loginButton);
      expect(submitCallback).toBeCalledTimes(1);
   });

   it(`로그인이 완료되면 localStorage에 ${CONSTANTS.atk_key}과 ${CONSTANTS.rtk_key}가 저장되어야 한다.`, () => {
      render(<Login />, { wrapper: BrowserRouter });

      const idInput = screen.getByTestId('id-input');
      const passwordInput = screen.getByTestId('password-input');
      const loginButton = screen.getByTestId('login-button');

      userEvent.type(idInput, '12345678');
      userEvent.type(passwordInput, 'qwer1234');

      userEvent.click(loginButton);

      expect(localStorage.getItem(CONSTANTS.atk_key)).not.toBeNull();
      expect(localStorage.getItem(CONSTANTS.rtk_key)).not.toBeNull();
   });
});
