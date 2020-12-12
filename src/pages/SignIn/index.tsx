import React, { useCallback } from 'react';
import { AnimatedContent, Background, Container, Content } from './styles';
import logoSvg from '../../assets/logo-gobarber.svg';
import { FiLogIn, FiLock, FiMail } from 'react-icons/fi';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import { useAuth } from '../../hooks/auth';
import { useToast } from '../../hooks/toast';
import { Link } from 'react-router-dom';

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
    const { createToast } = useToast();

    const handleSubmit = useCallback(async ({ email, password } : SignInFormData) => {
        try {
            await signIn({
                email,
                password
            });
        } catch(e) {
            createToast({
                title: 'Ocorreu um erro',
                description: 'Não foi possível realizar login na aplicação',
                type: 'error'
            });
        }
    }, [createToast, signIn]);

    return (
        <Container>
            <Content>
                <AnimatedContent>
                    
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

                                <Link to="/forgot">Esqueci minha senha</Link>
                            </Form>
                        )}
                    </Formik>

                    <Link to="/signup">
                        <FiLogIn />
                        Criar conta
                    </Link>
                </AnimatedContent>
            </Content>
            <Background />
        </Container>
    );
}

export default SignIn;