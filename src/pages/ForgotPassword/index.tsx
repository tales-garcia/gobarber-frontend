import React, { useCallback } from 'react';
import { AnimatedContent, Background, Container, Content } from './styles';
import logoSvg from '../../assets/logo-gobarber.svg';
import { FiMail, FiChevronLeft } from 'react-icons/fi';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import { useToast } from '../../hooks/toast';
import { Link } from 'react-router-dom';
import api from '../../services/api';

const validationSchema = Yup.object().shape({
    email: Yup.string().email('Email inválido').required('Email obrigatório'),
});

interface ForgotPasswordFormData {
    email: string;
}

const ForgotPassword: React.FC = () => {

    const { createToast } = useToast();

    const handleSubmit = useCallback(async ({ email }: ForgotPasswordFormData) => {
        try {
            await api.post('/password/forgot', { email });

            createToast({
                title: 'E-mail enviado com sucesso!',
                type: 'success'
            });
        } catch (e) {
            createToast({
                title: 'Ocorreu um erro',
                description: 'Não foi possível realizar a recuperação de senha, tente novamente',
                type: 'error'
            });
        }
    }, [createToast]);

    return (
        <Container>
            <Content>
                <AnimatedContent>

                    <img src={logoSvg} alt="Gobarber logo" />
                    <Formik
                        onSubmit={handleSubmit}
                        initialValues={{ email: '' }}
                        validationSchema={validationSchema}
                    >
                        <Form>
                            <h1>Recuperação de senha</h1>

                            <Input
                                Icon={FiMail}
                                iconSize={16}
                                name="email"
                                placeholder="E-mail"
                            />

                            <Button type="submit">Enviar</Button>
                        </Form>
                    </Formik>

                    <Link to="/">
                        <FiChevronLeft />
                        Voltar
                    </Link>
                </AnimatedContent>
            </Content>
            <Background />
        </Container>
    );
}

export default ForgotPassword;