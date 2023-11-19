const API_KEY = 'pdg+wopdowqOD2dAqUzd5Q==mFLSA54siZWJUQzm'

export const fetchCountries = async () => {
    const res = await fetch('https://api.api-ninjas.com/v1/country?limit=5', {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            'X-Api-Key': API_KEY
        }
    })
    return await res.json()
}
