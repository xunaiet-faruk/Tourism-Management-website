import React, { useContext } from 'react';
import { AuthContext } from '../Component/Provider/Authprovider';
import Useaxios from './Useaxios';
import { useQuery } from '@tanstack/react-query';

const Uselist = () => {
    const { user } = useContext(AuthContext);
    const axiosPublice = Useaxios();

    const { data: spots = [], refetch } = useQuery({
        queryKey: ['spots', user?.email], // Use the email as a unique key
        queryFn: async () => {
            if (!user?.email) {
                throw new Error('User email is not available');
            }
            const res = await axiosPublice.get(`/AddSpots?email=${user?.email}`);
            return res.data;
        },
        enabled: !!user?.email, // Only run the query if the user email exists
    });

    return [spots, refetch];
};

export default Uselist;
