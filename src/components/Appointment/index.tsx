import React from 'react';
import { FiClock } from 'react-icons/fi';
import { Container } from './styles';

const Appointment = () => {
    return (
        <Container>
            <span>
                <FiClock />
                08:00
            </span>

            <div>
                <img
                    src="https://avatars.githubusercontent.com/u/58866268?s=460&u=fdafb8d175565604591f4fc4b1478ad0b2658b38&v=4"
                    alt="Tales Garcia"
                />

                <strong>Tales Garcia</strong>
            </div>
        </Container>
    );
};

export default Appointment;