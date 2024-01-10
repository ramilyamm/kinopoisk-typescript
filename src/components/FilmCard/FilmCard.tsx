import React, { FC } from 'react';
import { IFilms } from '../../store/modules';
import { Link } from 'react-router-dom';
import './FilmCard.scss'

const FilmCard: FC<IFilms> = ({ kinopoiskId, nameEn, nameOriginal, nameRu, posterUrl, filmId }) => {
    return (
        <Link className='card animate__animated animate__fadeInDown' to={`/film-detail/${nameRu || nameOriginal}?film=${kinopoiskId || filmId}`}>
            <img src={posterUrl} alt={nameRu ? nameRu : nameOriginal || nameEn} />
            <h2>{nameRu ? nameRu : nameOriginal}</h2>
        </Link>
    );
};

export default FilmCard;