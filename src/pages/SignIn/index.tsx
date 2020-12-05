import React from 'react';
import { Background, Container, Content } from './styles';
import logoSvg from '../../assets/logo-gobarber.svg';
import { FiLogIn, FiLock, FiMail } from 'react-icons/fi';
import Input from '../../components/Input';
import Button from '../../components/Button';

const SignIn : React.FC = () => {
    return (
        <Container>
            <Content>
                <img src={logoSvg} alt="Gobarber logo"/>

                <form>
                    <h1>Faça seu logon</h1>

                    <Input
                        icon={FiMail}
                        iconProps={{ size: 16, color: '#666360' }}
                        name="email"
                        placeholder="E-mail"
                    />
                    
                    <Input
                        icon={FiLock}
                        iconProps={{ size: 16, color: '#666360' }}
                        name="password"
                        type="password"
                        placeholder="Senha"
                    />

                    <Button type="submit">Entrar</Button>

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