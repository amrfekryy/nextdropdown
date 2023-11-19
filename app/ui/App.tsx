"use client"

import React, { useState } from 'react'
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { AppProps, Country, CountryInfoProps, CountryLabelProps, DropdownProps } from '../lib/definitions';

function CountryLabel({ name, code }: CountryLabelProps) {
    return <div className='flex items-center'>
        <div className='w-[20px] h-[20px]'>
            <img src={`https://flagsapi.com/${code}/flat/64.png`} style={{ width: '100%', height: '100%' }} />
        </div>
        <h5 className='font-bold ml-2'>{name}</h5>
    </div>
}

function CountryInfo({ country }: CountryInfoProps) {
    if (!country) return <div className='hidden'></div>
    return <div className='text-white text-left w-[340px] mb-2'>
        <div><b>Country:</b> {country.name}</div>
        <div><b>Capital:</b> {country.capital}</div>
        <div><b>Currency:</b> {country.currency.name}</div>
        <div><b>Currency Code:</b> {country.currency.code}</div>
        <div><b>GDP:</b> {country.gdp}</div>
        <div><b>GDP Growth:</b> {country.gdp_growth}</div>
        <div><b>GDP Per Capita:</b> {country.gdp_per_capita}</div>
    </div>
}

function Dropdown({ countries, selectedCountry, setSelectCountry }: DropdownProps) {
    const [isOpen, setIsOpen] = useState(false)

    return <div className='relative flex flex-col items-center w-[340px] h-[340px] rounded-lg'>
        <button
            onClick={() => setIsOpen(s => !s)}
            className='bg-blue-400 w-full p-2 flex items-center justify-between font-bold text-lg rounded-lg border-4 border-transparent hover:border-white duratoin-300 hover:text-white'
        >
            {!selectedCountry ? 'Select a country' : <CountryLabel name={selectedCountry.name} code={selectedCountry.iso2} />}
            {isOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
        </button>
        {isOpen && <div className='bg-blue-400 absolute top-16 flex flex-col items-start rounded-lg p-2 w-full'>
            {countries.map(country => {
                return <div
                    className='w-full p-2 cursor-pointer rounded-lg hover:bg-blue-300'
                    key={country.name}
                    onClick={() => {
                        setSelectCountry(country)
                        setIsOpen(false)
                    }}
                >
                    <CountryLabel name={country.name} code={country.iso2} />
                </div>
            })}
        </div>}
    </div>
}

export default function App({ countries }: AppProps) {
    const [selectedCountry, setSelectCountry] = useState<Country | null>(null)

    return (
        <div className='flex md:flex-row sm:flex-col-reverse gap-10 font-sans'>
            <Dropdown countries={countries} selectedCountry={selectedCountry} setSelectCountry={setSelectCountry} />
            <CountryInfo country={selectedCountry} />
        </div>
    )
}
