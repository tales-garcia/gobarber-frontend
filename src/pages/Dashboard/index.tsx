import React from 'react';
import { Container, Content, Schedule, Calendar, NextAppointment, Section } from './styles';
import { FiClock } from 'react-icons/fi';
import Header from '../../components/Header';
import Appointment from '../../components/Appointment';
import 'react-day-picker/lib/style.css';
import DayPicker, { DayModifiers } from 'react-day-picker';
import api from '../../services/api';
import { useAuth } from '../../hooks/auth';
import { format, isToday } from 'date-fns';

interface IAvailability {
    available: boolean;
    day: number;
}

type Client = {
    name: string;
    avatarUrl: string;
}

interface IAppointment {
    _id: string;
    date: Date;
    client: Client;
}

const Dashboard = () => {
    const [date, setDate] = React.useState(new Date());
    const [monthAvailability, setMonthAvailability] = React.useState<IAvailability[]>([]);
    const [currentMonth, setCurrentMonth] = React.useState(new Date());
    const [appointments, setAppointments] = React.useState<IAppointment[]>([]);
    const [nextAppointment, setNextAppointment] = React.useState<IAppointment>({} as IAppointment);
    const { user } = useAuth();

    const handleDateChange = React.useCallback((date: Date, modifiers: DayModifiers) => {
        if (modifiers.available) {
            setDate(date);
        }
    }, []);

    React.useEffect(() => {
        api.get(`/providers/${user._id}/availability/month`, {
            params: {
                year: currentMonth.getFullYear(),
                month: currentMonth.getMonth() + 1
            }
        }).then(res => res.data).then(setMonthAvailability);
    }, [currentMonth, user._id]);

    React.useEffect(() => {
        api.get<IAppointment[]>(`/appointments/me`, {
            params: {
                year: new Date().getFullYear(),
                month: new Date().getMonth(),
                day: new Date().getDate()
            }
        })
        .then(res => res.data)
        .then(res => res.reduce((total, appointment) => {
            if (!total._id) return appointment;

            if (total.date.getHours() > appointment.date.getHours()) return appointment;

            return total;
        }, {} as IAppointment))
        .then(setNextAppointment);
    }, []);

    React.useEffect(() => {
        api.get(`/appointments/me`, {
            params: {
                year: date.getFullYear(),
                month: date.getMonth(),
                day: date.getDate()
            }
        }).then(res => res.data).then(setAppointments);
    }, [date]);

    const handleMonthChange = React.useCallback(async (date: Date) => {
        setCurrentMonth(date);
    }, []);

    const disabledDays = React.useMemo(() => {
        return monthAvailability.filter(availability => !availability.available).map(availability => new Date(currentMonth.getFullYear(), currentMonth.getMonth(), availability.day));
    }, [monthAvailability, currentMonth]);

    const availableDays = React.useMemo(() => {
        return monthAvailability
            .filter(availability => ![0, 6].includes(new Date(currentMonth.getFullYear(), currentMonth.getMonth(), availability.day).getDay()))
            .filter(availability => availability.available)
            .map(availability => new Date(currentMonth.getFullYear(), currentMonth.getMonth(), availability.day));
    }, [monthAvailability, currentMonth]);

    const weekDay = React.useMemo(() => ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'][date.getDay()], [date]);
    const month = React.useMemo(() => [
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
    ][date.getMonth()], [date]);
    const isSelectedToday = React.useMemo(() => isToday(date), [date]);

    const nextAppointmentHour = React.useMemo(() => nextAppointment.date ? format(new Date(nextAppointment.date), "HH':'mm") : undefined, [nextAppointment]);
    const morningAppointments = React.useMemo(() => appointments.filter(appointment => new Date(appointment.date).getHours() < 12), [appointments]);
    const afternoonAppointments = React.useMemo(() => appointments.filter(appointment => new Date(appointment.date).getHours() >= 12), [appointments]);

    return (
        <Container>
            <Header />
            <Content>
                <Schedule>
                    <h1>Horários agendados</h1>
                    <p>
                        {isSelectedToday && <span>Hoje</span>}
                        <span>Dia {date.getDate()} de {month}</span>
                        <span>{weekDay}</span>
                    </p>
                    {nextAppointment.date && (
                        <NextAppointment>
                            <strong>Atendimento a seguir</strong>
                            <div>
                                <img
                                    src={nextAppointment.client.avatarUrl}
                                    alt={nextAppointment.client.name}
                                />

                                <strong>{nextAppointment.client.name}</strong>

                                <span>
                                    <FiClock />
                                    {nextAppointmentHour}
                                </span>
                            </div>
                        </NextAppointment>
                    )}

                    {!!morningAppointments.length && (
                        <Section>
                            <strong>Manhã</strong>
                            {morningAppointments.map(appointment => <Appointment key={appointment._id} data={appointment} />)}
                        </Section>
                    )}
                    {!!afternoonAppointments.length && (
                        <Section>
                            <strong>Tarde</strong>
                            {afternoonAppointments.map(appointment => <Appointment key={appointment._id} data={appointment} />)}
                        </Section>
                    )}
                </Schedule>
                <Calendar>
                    <DayPicker
                        weekdaysShort={['D', 'S', 'T', 'Q', 'Q', 'S', 'S']}
                        fromMonth={new Date()}
                        disabledDays={[{ daysOfWeek: [0, 6] }, ...disabledDays]}
                        modifiers={{
                            available: [...availableDays]
                        }}
                        selectedDays={date}
                        onMonthChange={handleMonthChange}
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