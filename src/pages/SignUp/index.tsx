import React from 'react';
import { Background, Container, Content } from './styles';
import logoSvg from '../../assets/logo-gobarber.svg';
import { FiLock, FiMail, FiUser, FiArrowLeft } from 'react-icons/fi';
import Input from '../../components/Input';
import Button from '../../components/Button';

const SignUp : React.FC = () => {
    return (
        <Container>
            <Background />
            <Content>
                <img src={logoSvg} alt="Gobarber logo"/>

                <form>
                    <h1>Faça seu logon</h1>

                    <Input
                        icon={FiUser}
                        iconProps={{ size: 16, color: '#666360' }}
                        name="name"
                        placeholder="Nome"
                    />

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
                </form>

                <a href="/">
                    <FiArrowLeft />
                    Voltar para o login
                </a>
            </Content>
        </Container>
    );
}

export default SignUp;