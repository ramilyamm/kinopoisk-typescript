import React, { FC, useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/hooks/hooks';
import { useSearchParams } from 'react-router-dom';
import { fetchByDetailFilm } from '../../store/slice/detailSlice';
import Spinner from '../Spinner/Spinner';
import './Film.scss'

const Film: FC = () => {
    const dispatch = useAppDispatch()
    const [searchParams] = useSearchParams()
    const [query] = useState(searchParams.get("film"))
    const { detail, error, loading } = useAppSelector(state => state.detail)


    useEffect(() => {
        if (query) {
            dispatch(fetchByDetailFilm(query))
        }
    }, [query, dispatch])


    if (loading) {
        return <Spinner />
    }

    return (
        <section className='detail  animate__animated animate__fadeInDown'>
            {
                error ?
                    <span style={{ color: 'purple' }}>{error}</span>
                    :
                    <>
                        <h2>{detail?.nameRu ? detail?.nameRu : detail?.nameOriginal}</h2>
                        <img width={200} src={detail?.posterUrl} alt={detail?.nameRu ? detail?.nameRu : detail?.nameOriginal || detail?.nameEn} />
                        <p>{detail?.description}</p>
                        <ol>
                            {
                                detail?.genres?.map((el, i) => (
                                    <li key={i}> {el.genre}</li>
                                ))
                            }
                        </ol>
                        <ul>
                            {
                                detail?.countries?.map((el, i) => (
                                    <li key={i}>{el.country}</li>
                                ))
                            }
                        </ul>
                        <p>Рейтинг: {detail?.ratingKinopoisk}</p>
                        <p>Год выпуска: {detail?.year}</p>
                    </>
            }

        </section>
    );
};

export default Film;