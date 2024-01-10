import React, { FC, FormEventHandler, useState } from 'react';
import { useAppDispatch } from '../../store/hooks/hooks';
import { fetchByName, fetchFilter } from '../../store/slice/filmSlice';
import './Header.scss'

const Header: FC = () => {
    const dispatch = useAppDispatch()
    const [value, setValue] = useState('')
    const [year, setYear] = useState('')
    const [month, setMonth] = useState('')

    const handleSearch: FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault()
        if (value.trim().length) {
            dispatch(fetchByName(value))
        }
        setValue('')
    }

    const handleFilter: FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault()
        dispatch(fetchFilter({ month, year }))
        setValue('')
    }

    return (
        <header>
            <form className='form_search' onSubmit={handleSearch}>
                <input
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    type="search" placeholder='Название фильма' />
                <button>Search</button>
            </form>
            <form className='form_filter' onSubmit={handleFilter}>
                <input
                    value={year}
                    onChange={(e) => setYear(e.target.value)}
                    type="number" placeholder='year' />
                <select onChange={e => setMonth(e.target.value)}>
                    <option value=" ">Month</option>
                    <option value="January ">January </option>
                    <option value="February ">February </option>
                    <option value="March ">March </option>
                    <option value="April ">April </option>
                    <option value="May ">May </option>
                    <option value="June ">June </option>
                    <option value="July ">July </option>
                    <option value="August ">August </option>
                    <option value="September ">September </option>
                    <option value="October ">October </option>
                    <option value="November ">November </option>
                    <option value="December ">December </option>
                </select>
                <button>Поиск</button>
            </form>
        </header>
    );
};

export default Header;