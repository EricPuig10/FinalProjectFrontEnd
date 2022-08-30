import React, { useState } from 'react'
import { authService} from '../../services/authService';
import { localAuthService } from '../../services/localAuthService';
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

    const signin = () => {
        authService.signin(userData).then((res) =>{
            console.log(userData)

            const authUser = {
                token: res.accessToken,
                username: res.username,
                id: res.id,
            };
            localAuthService.saveAuthUser(authUser);
        })
    }

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
                <BtLogin type="button" id="login" onClick={signin}>
                    LOG IN
                </BtLogin>
            </CtButton>
        </Form>
    </CtForm>
  )
}

export default Login