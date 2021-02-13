import React from 'react';
import { Container, HeaderContent, Profile } from './styles';
import logo from '../../assets/logo-gobarber.svg';
import { useAuth } from '../../hooks/auth';
import { FiPower } from 'react-icons/fi';
import { Link } from 'react-router-dom';

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
                        <Link to="/profile"><strong>{user.name}</strong></Link>
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