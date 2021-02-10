import React from 'react';
import { Container, HeaderContent, Profile } from './styles';
import logo from '../../assets/logo-gobarber.svg';
import { useAuth } from '../../hooks/auth';
import { FiPower } from 'react-icons/fi';

const Header = () => {
    const { signOut, user } = useAuth();

    return (
        <Container>
            <HeaderContent>
                <img src={logo} alt="Logo GoBarber" />
                <Profile>
                    <img src={user.avatarUrl} alt={user.name} />
                    <div>
                        <span>Bem vindo,</span>
                        <strong>{user.name}</strong>
                    </div>
                </Profile>
                <button onClick={signOut} type="button">
                    <FiPower />
                </button>
            </HeaderContent>
        </Container>
    );
};

export default Header;