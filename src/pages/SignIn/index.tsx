import React from 'react';
import { Background, Container, Content } from './styles';
import logoSvg from '../../assets/logo-gobarber.svg';
import { FiLogIn } from 'react-icons/fi';

const SignIn : React.FC = () => {
    return (
        <Container>
            <Content>
                <img src={logoSvg} alt="Gobarber logo"/>

                <form>
                    <h1>Faça seu logon</h1>

                    <input placeholder="E-mail" />
                    <input type="password" placeholder="Senha" />

                    <button type="submit">Entrar</button>

                    <a href="forgot">Esqueci minha senha</a>
                </form>

                <a href="/">
                    <FiLogIn />
                    Criar conta
                </a>
            </Content>
            <Background />
        </Container>
    );
}

export default SignIn;