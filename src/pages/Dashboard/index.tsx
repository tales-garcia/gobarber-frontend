import React from 'react';
import { Container, Content, Schedule, Calendar, NextAppointment, Section } from './styles';
import { FiClock } from 'react-icons/fi';
import Header from '../../components/Header';
import Appointment from '../../components/Appointment';

const Dashboard = () => {
    return (
        <Container>
            <Header />
            <Content>
                <Schedule>
                    <h1>Horários agendados</h1>
                    <p>
                        <span>Hoje</span>
                        <span>Dia 6</span>
                        <span>Segunda-feira</span>
                    </p>

                    <NextAppointment>
                        <strong>Atendimento a seguir</strong>
                        <div>
                            <img
                                src="https://avatars.githubusercontent.com/u/58866268?s=460&u=fdafb8d175565604591f4fc4b1478ad0b2658b38&v=4"
                                alt="Tales Garcia"
                            />

                            <strong>Tales Garcia</strong>

                            <span>
                                <FiClock />
                                08:00
                            </span>
                        </div>
                    </NextAppointment>

                    <Section>
                        <strong>Manhã</strong>
                        <Appointment />
                        <Appointment />
                        <Appointment />
                    </Section>
                    <Section>
                        <strong>Tarde</strong>
                    </Section>
                </Schedule>
                <Calendar></Calendar>
            </Content>
        </Container>
    );
};

export default Dashboard;