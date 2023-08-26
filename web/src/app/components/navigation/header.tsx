import { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { IoIosSearch } from 'react-icons/io'

import Container from '../ui/container'
import { mergeClassName } from 'utils/format'
import SearchResults from '../ui/search-results'

const MENU_CLASS = `py-1 px-1.5 hover:bg-primary rounded-md`
const MENU_CLASS_ACTIVE = `bg-primary`

export default function Header() {
  const location = useLocation()
  const navigate = useNavigate()
  const [keyword, setKeyword] = useState('')
  const [searchFocus, setSearchFocus] = useState(false)
  const getClassName = (path: string) => {
    if (path === location.pathname) return mergeClassName(MENU_CLASS, MENU_CLASS_ACTIVE)
    return mergeClassName(MENU_CLASS, '')
  }
  const goToSearchPage = () => {
    if (keyword) {
      navigate(`/search/${keyword}`)
      setSearchFocus(false)
    }
  }
  const initKeyword = () => location.pathname !== '/search' && setKeyword('')
  useEffect(() => {
    setSearchFocus(false)
    initKeyword()
  }, [location.pathname]) // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <header className="bg-header text-white">
      <Container className="flex items-center justify-between flex-wrap gap-3">
        {/* BRAND AND NAV */}
        <div className="flex items-center gap-6">
          <Link to="/" className="text-2xl font-semibold">Movielia</Link>

          <div className="flex items-center gap-1.5 mobile:justify-center mobile:py-3 mobile:gap-6 mobile:fixed mobile:bottom-0 mobile:left-0 mobile:right-0 mobile:bg-header">
            <Link to="/movies" className={getClassName('/movies')}>Movies</Link>
            <Link to="/tv" className={getClassName('/tv')}>TV</Link>
          </div>
        </div>

        {/* SEARCH */}
        <div className="relative flex flex-[0.5] items-center p-1 border-b-[1.5px] border-white focus-within:border-primary">
          <input
            type="text" value={keyword} placeholder="Search..." className="bg-transparent outline-none flex-1"
            onInput={e => setKeyword(e.currentTarget.value)}
            onClick={e => {e.stopPropagation(), setSearchFocus(true)}}
            onKeyDown={e => e.key === 'Enter' ? goToSearchPage() : ''}
          />
          <IoIosSearch size={18} />

          {searchFocus && keyword && <SearchResults />}
        </div>
      </Container>
    </header>
  )
}
