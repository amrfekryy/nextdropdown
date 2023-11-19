import App from './ui/App'
import { fetchCountries } from './lib/data'

export default async function Home() {
  const countries = await fetchCountries()
  return (
    <div className='h-screen grid place-items-center bg-gradient-to-r from-sky-600 to-indigo-600'>
      <App countries={countries} />
    </div>
  )
}
