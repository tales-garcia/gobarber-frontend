import React, { useCallback } from 'react';
import { Background, Container, Content } from './styles';
import logoSvg from '../../assets/logo-gobarber.svg';
import { FiLogIn, FiLock, FiMail } from 'react-icons/fi';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import { useAuth } from '../../contexts/auth';

const validationSchema = Yup.object().shape({
    email: Yup.string().email('Email inválido').required('Email obrigatório'),
    password: Yup.string().min(5, 'Mínimo de 5 caracteres').required('Senha obrigatória')
});

interface SignInFormData {
    email: string;
    password: string;
}

const SignIn : React.FC = () => {

    const { signIn } = useAuth();

    const handleSubmit = useCallback(({ email, password } : SignInFormData) => {
        signIn({
            email,
            password
        });
    }, [signIn]);

    return (
        <Container>
            <Content>
                <img src={logoSvg} alt="Gobarber logo"/>
                <Formik
                    onSubmit={handleSubmit}
                    initialValues={{ email: '', password: '' }}
                    validationSchema={validationSchema}
                >
                    {({ errors, touched }) => (
                        <Form>
                            <h1>Faça seu logon</h1>

                            <Input
                                Icon={FiMail}
                                iconSize={16}
                                name="email"
                                placeholder="E-mail"
                                errors={errors}
                                touched={touched}
                            />
                            
                            <Input
                                Icon={FiLock}
                                iconSize={16}
                                name="password"
                                type="password"
                                placeholder="Senha"
                                errors={errors}
                                touched={touched}
                            />

                            <Button type="submit">Entrar</Button>

                            <a href="forgot">Esqueci minha senha</a>
                        </Form>
                    )}
                </Formik>

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