import React from 'react';
import { Container, Content, Schedule, Calendar, NextAppointment, Section } from './styles';
import { FiClock } from 'react-icons/fi';
import Header from '../../components/Header';
import Appointment from '../../components/Appointment';
import 'react-day-picker/lib/style.css';
import DayPicker, { DayModifiers } from 'react-day-picker';

const Dashboard = () => {
    const [date, setDate] = React.useState(new Date());

    const handleDateChange = React.useCallback((date: Date, modifiers: DayModifiers) => {
        if (modifiers.available) {
            setDate(date);
        }

    }, []);

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
                <Calendar>
                    <DayPicker
                        weekdaysShort={['D', 'S', 'T', 'Q', 'Q', 'S', 'S']}
                        fromMonth={new Date()}
                        disabledDays={[{ daysOfWeek: [0, 6] }]}
                        modifiers={{
                            available: { daysOfWeek: [1, 2, 3, 4, 5] }
                        }}
                        selectedDays={date}
                        onDayClick={handleDateChange}
                        months={[
                            'Janeiro',
                            'Fevereiro',
                            'Março',
                            'Abril',
                            'Maio',
                            'Junho',
                            'Julho',
                            'Agosto',
                            'Setembro',
                            'Outubro',
                            'Novembro',
                            'Dezembro'
                        ]}
                    />
                </Calendar>
            </Content>
        </Container>
    );
};

export default Dashboard;