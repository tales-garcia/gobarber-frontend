import React, { useCallback } from 'react';
import { AnimatedContent, Background, Container, Content } from './styles';
import logoSvg from '../../assets/logo-gobarber.svg';
import { FiLock } from 'react-icons/fi';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import { useToast } from '../../hooks/toast';
import { useHistory, useRouteMatch } from 'react-router-dom';
import api from '../../services/api';

const validationSchema = Yup.object().shape({
    passwordConfirmation: Yup.string().oneOf([Yup.ref('password')], 'As senhas não correspondem').min(5, 'Mínimo de 5 caracteres').required('Confirmação de senha obrigatória'),
    password: Yup.string().min(5, 'Mínimo de 5 caracteres').required('Senha obrigatória')
});

interface ResetPasswordFormData {
    password: string;
    passwordConfirmation: string;
}

const ResetPassword : React.FC = () => {

    const { createToast } = useToast();
    const history = useHistory();
    const { token } = useRouteMatch().params as { token: string };

    const handleSubmit = useCallback(async ({ passwordConfirmation, password } : ResetPasswordFormData) => {
        try {
            await api.post('/password/reset', { passwordConfirmation, password, token });

            createToast({
                title: 'Senha alterada com sucesso!',
                type: 'success'
            });

            history.push('/');
        } catch(e) {
            createToast({
                title: 'Ocorreu um erro',
                description: 'Não foi possível alterar sua senha na aplicação',
                type: 'error'
            });
        }
    }, [createToast, history, token]);

    return (
        <Container>
            <Content>
                <AnimatedContent>

                    <img src={logoSvg} alt="Gobarber logo"/>
                    <Formik
                        onSubmit={handleSubmit}
                        initialValues={{ passwordConfirmation: '', password: '' }}
                        validationSchema={validationSchema}
                    >
                        <Form>
                            <h1>Faça seu logon</h1>

                            <Input
                                Icon={FiLock}
                                iconSize={16}
                                name="password"
                                type="password"
                                autoComplete="new-password"
                                placeholder="Nova senha"
                            />

                            <Input
                                Icon={FiLock}
                                iconSize={16}
                                name="passwordConfirmation"
                                type="password"
                                autoComplete="new-password"
                                placeholder="Confirmar senha"
                            />

                            <Button type="submit">Enviar</Button>
                        </Form>
                    </Formik>
                </AnimatedContent>
            </Content>
            <Background />
        </Container>
    );
}

export default ResetPassword;