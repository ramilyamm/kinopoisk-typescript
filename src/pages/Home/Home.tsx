import React, { FC, useEffect } from 'react';
import { useAppDispatch } from '../../store/hooks/hooks';
import Header from '../../components/Header/Header';
import Output from '../../components/Output/Output';
import { fetchByAllFilms } from '../../store/slice/filmSlice';

const Home: FC = () => {
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(fetchByAllFilms())
    }, [dispatch])


    return (
        <div>
            <Header />
            <Output />
        </div>
    );
};

export default Home;