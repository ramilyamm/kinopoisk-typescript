import React, { FC } from 'react';
import { useAppSelector } from '../../store/hooks/hooks';
import FilmCard from '../FilmCard/FilmCard';
import Spinner from '../../pages/Spinner/Spinner';
import './Output.scss'

const Output: FC = () => {
    const { error, film, loading } = useAppSelector(state => state.films)


    if (loading) {
        return <Spinner />
    }
    return (
        <div className='output'>
            {
                error ?
                    <span>{error}</span>
                    : film.length > 0 &&
                    film.map(el => <FilmCard key={el.kinopoiskId || el.filmId} {...el} />)
            }
        </div>
    );
};

export default Output;