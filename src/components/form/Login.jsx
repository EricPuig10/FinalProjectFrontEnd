import React, { useState } from 'react'
import { BtLogin, CtButton, CtForm, CtInput, Form } from './Login.styled'

function Login() {

    const [userData, setUserData] = useState({
        username: "",
        password: "",
    });


    const onInputChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        setUserData({ ...userData, [name]:value });
    };


  return (
    <CtForm>
        <Form>
            <CtInput
                type="text"
                name="username"
                placeholder="user name"
                value={userData.username}
                onChange={onInputChange}
            />
            <CtInput
                type="password"
                name="password"
                placeholder="user password"
                value={userData.password}
                onChange={onInputChange}
            />
            <CtButton>
                <BtLogin type="button" id="login">
                    LOG IN
                </BtLogin>
            </CtButton>
        </Form>
    </CtForm>
  )
}

export default Login