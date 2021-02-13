import React, { useCallback } from 'react';
import { AvatarInput, Container, Content } from './styles';
import { FiArrowLeft, FiCamera, FiLock, FiMail, FiUser } from 'react-icons/fi';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import { useToast } from '../../hooks/toast';
import { useAuth } from '../../hooks/auth';
import { Link } from 'react-router-dom';

const validationSchema = Yup.object().shape({
    name: Yup.string(),
    email: Yup.string().email('Email inválido'),
    password: Yup.string().test({
        message: 'Nova senha obrigatória para resetar senha',
        test: function () {
            return !((!!this.parent.oldPassword || !!this.parent.passwordConfirmation) && !this.parent[this.path]);
        }
    }).min(5, 'Mínimo de 5 caracteres'),
    passwordConfirmation: Yup.string().test({
        message: 'Confirmação de senha obrigatória para resetar senha',
        test: function () {
            return !((!!this.parent.oldPassword || !!this.parent.password) && !this.parent[this.path]);
        }
    }).min(5, 'Mínimo de 5 caracteres').when("password", {
        is: (value: string) => !!value,
        then: Yup.string().oneOf([Yup.ref('password')], 'As senhas não correspondem')
    }),
    oldPassword: Yup.string().test({
        message: 'Senha atual obrigatória para resetar senha',
        test: function () {
            return !((!!this.parent.password || !!this.parent.passwordConfirmation) && !this.parent[this.path]);
        }
    }).min(5, 'Mínimo de 5 caracteres')
});

interface ProfileFormData {
    email: string;
    password: string;
}

const Profile: React.FC = () => {

    const { createToast } = useToast();
    const { user } = useAuth();

    const handleSubmit = useCallback(async ({ email, password }: ProfileFormData) => {
        try {

            createToast({
                title: 'Logon realizado com sucesso!',
                type: 'success'
            });
        } catch (e) {
            createToast({
                title: 'Ocorreu um erro',
                description: 'Não foi possível realizar login na aplicação',
                type: 'error'
            });
        }
    }, [createToast]);

    return (
        <Container>
            <header>
                <div>
                    <Link to="/dashboard">
                        <FiArrowLeft />
                    </Link>
                </div>
            </header>
            <Content>
                <Formik
                    onSubmit={handleSubmit}
                    initialValues={{
                        name: '',
                        email: '',
                        password: '',
                        oldPassword: '',
                        passwordConfirmation: ''
                    }}
                    validationSchema={validationSchema}
                >
                    <Form>
                        <AvatarInput>
                            <img
                                src={user.avatarUrl}
                                alt={user.name}
                            />
                            <button type="button">
                                <FiCamera />
                            </button>
                        </AvatarInput>

                        <h1>Meu perfil</h1>

                        <Input
                            Icon={FiUser}
                            iconSize={16}
                            name="name"
                            placeholder="Nome"
                        />

                        <Input
                            Icon={FiMail}
                            iconSize={16}
                            name="email"
                            placeholder="E-mail"
                        />

                        <Input
                            Icon={FiLock}
                            iconSize={16}
                            name="oldPassword"
                            style={{ marginTop: '24px' }}
                            type="password"
                            placeholder="Senha atual"
                        />

                        <Input
                            Icon={FiLock}
                            iconSize={16}
                            name="password"
                            type="password"
                            placeholder="Nova senha"
                        />

                        <Input
                            Icon={FiLock}
                            iconSize={16}
                            name="passwordConfirmation"
                            type="password"
                            placeholder="Confirmar senha"
                        />

                        <Button type="submit">Confirmar mudanças</Button>
                    </Form>
                </Formik>
            </Content>
        </Container>
    );
}

export default Profile;