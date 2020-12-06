import React from 'react';
import { Background, Container, Content } from './styles';
import logoSvg from '../../assets/logo-gobarber.svg';
import { FiLock, FiMail, FiUser, FiArrowLeft } from 'react-icons/fi';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { Form, Formik, FormikValues } from 'formik';

const SignUp : React.FC = () => {


    function handleSubmit(values: FormikValues) {
        alert(JSON.stringify(values));
    }

    return (
        <Container>
            <Background />
            <Content>
                <img src={logoSvg} alt="Gobarber logo"/>

                <Formik
                    onSubmit={handleSubmit}
                    initialValues={{ name: '', email: '', password: '' }}
                >
                    <Form>
                        <h1>Faça seu logon</h1>

                        <Input
                            icon={FiUser}
                            iconSize={16}
                            name="name"
                            placeholder="Nome"
                        />

                        <Input
                            icon={FiMail}
                            iconSize={16}
                            name="email"
                            type="email"
                            placeholder="E-mail"
                        />
                        
                        <Input
                            icon={FiLock}
                            iconSize={16}
                            name="password"
                            type="password"
                            placeholder="Senha"
                        />

                        <Button type="submit">Entrar</Button>
                    </Form>
                </Formik>

                <a href="/">
                    <FiArrowLeft />
                    Voltar para o login
                </a>
            </Content>
        </Container>
    );
}

export default SignUp;