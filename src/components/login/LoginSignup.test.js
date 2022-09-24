import { fireEvent, render } from '@testing-library/react'
import * as React from 'react'
import { Router } from 'react-router-dom'
import { LoginSignup } from './LoginSignup'

test('allows the user to login successfully', async () => {
    render(<LoginSignup />, {wrapper: Router})

    const inputUsername = screen.getByLabelText(/username/i);
    const inputPassword = screen.getByLabelText(/password/i);

    fireEvent.change(inputUsername, {target: {value: "nat"}});
    fireEvent.change(inputPassword, {target: {value: 12345678}});
    fireEvent.click(screen.getById(/login/i));

    const fakeUserResponse = {token: 'fake_user_token'}

    expect(window.localStorage.getItem('token')).toEqual(fakeUserResponse.token);
})