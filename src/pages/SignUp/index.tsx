import React, { useCallback } from 'react';
import { Background, Container, Content } from './styles';
import logoSvg from '../../assets/logo-gobarber.svg';
import { FiLock, FiMail, FiUser, FiArrowLeft } from 'react-icons/fi';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';

const validateSchema = Yup.object().shape({
    name: Yup.string().required('Nome obrigatório'),
    email: Yup.string().email('Email inválido').required('Email obrigatório'),
    password: Yup.string().min(5, 'Mínimo de 5 caractéres').required('Senha obrigatória')
});

interface FormInputs {
    name: string;
    email: string;
    password: string;
}

const SignUp : React.FC = () => {

    const handleSubmit = useCallback((values: FormInputs) => {
        alert(JSON.stringify(values));
    }, []);

    return (
        <Container>
            <Background />
            <Content>
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

                <a href="/">
                    <FiArrowLeft />
                    Voltar para o login
                </a>
            </Content>
        </Container>
    );
}

export default SignUp;