export interface CountryLabelProps {
    name: string
    code: string
}

export interface Country {
    name: string
    capital: string
    currency: {
        name: string
        code: string
    }
    gdp: number
    gdp_growth: number
    gdp_per_capita: number
    iso2: string
}

export interface CountryInfoProps {
    country: Country | null
}

export interface DropdownProps {
    countries: Country[]
    selectedCountry: Country | null
    setSelectCountry: (country: Country) => void,
}

export interface AppProps {
    countries: Country[]
}
