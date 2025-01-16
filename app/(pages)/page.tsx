import { permanentRedirect, RedirectType } from 'next/navigation'

const MainPage = () => {
    permanentRedirect('/users', RedirectType.replace)
}

export default MainPage
