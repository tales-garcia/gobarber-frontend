import React, { useCallback } from 'react';
import { AnimatedContent, Background, Container, Content } from './styles';
import logoSvg from '../../assets/logo-gobarber.svg';
import { FiLock, FiMail, FiUser, FiArrowLeft } from 'react-icons/fi';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import { Link, useHistory } from 'react-router-dom';
import api from '../../services/api';
import { useToast } from '../../hooks/toast';

const validateSchema = Yup.object().shape({
    name: Yup.string().required('Nome obrigatório'),
    email: Yup.string().email('Email inválido').required('Email obrigatório'),
    password: Yup.string().min(5, 'Mínimo de 5 caracteres').required('Senha obrigatória')
});

interface FormInputs {
    name: string;
    email: string;
    password: string;
}

const SignUp : React.FC = () => {
    const { createToast } = useToast();
    const history = useHistory();

    const handleSubmit = useCallback(async (values: FormInputs) => {
        try {
            await api.post('/users', values);

            createToast({
                title: 'Conta criada com sucesso!',
                type: 'success'
            });

            history.push('/');
        } catch(e) {
            createToast({
                title: 'Ocorreu um erro',
                description: 'Não foi possível criar uma nove conta na aplicação',
                type: 'error'
            });
        }
    }, [createToast, history]);

    return (
        <Container>
            <Background />
            <Content>
                <AnimatedContent>

                    <img src={logoSvg} alt="Gobarber logo"/>

                    <Formik
                        onSubmit={handleSubmit}
                        initialValues={{ name: '', email: '', password: '' }}
                        validationSchema={validateSchema}
                    >
                        {({ errors, touched }) => (
                            <Form>
                                <h1>Faça seu logon</h1>

                                <Input
                                    Icon={FiUser}
                                    iconSize={16}
                                    name="name"
                                    placeholder="Nome"
                                    errors={errors}
                                    touched={touched}
                                />

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
                            </Form>
                        )}
                    </Formik>

                    <Link to="/">
                        <FiArrowLeft />
                        Voltar para o login
                    </Link>
                </AnimatedContent>
            </Content>
        </Container>
    );
}

export default SignUp;