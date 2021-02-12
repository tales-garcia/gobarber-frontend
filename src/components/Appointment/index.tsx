import React from 'react';
import { FiClock } from 'react-icons/fi';
import { format } from 'date-fns';
import { Container } from './styles';

interface IAppointmentProps {
    data: IAppointment;
}

interface IAppointment {
    date: Date;
    client: IClient;
}

interface IClient {
    avatarUrl: string;
    name: string;
}

const Appointment: React.FC<IAppointmentProps> = ({ data: { date, client } }) => {
    const hour = React.useMemo(() => format(new Date(date), "HH':'mm"), [date]);

    return (
        <Container>
            <span>
                <FiClock />
                {hour}
            </span>

            <div>
                <img
                    src={client.avatarUrl}
                    alt={client.name}
                />

                <strong>{client.name}</strong>
            </div>
        </Container>
    );
};

export default Appointment;