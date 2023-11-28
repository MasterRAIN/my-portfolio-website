import Title from '../Components/Title'
import HeaderButtons from '../Components/HeaderButtons'
import Settings from '../Components/Settings'

function Header() {

  return (
    <>
      <div className="fixed top-0 z-50 h-16 w-full flex align-center justify-center shadow bg-white dark:bg-g backdrop-blur bg-opacity-50 dark:bg-opacity-50 transition-colors duration-300">
        <Title />
        <HeaderButtons />
        <Settings />
      </div>
    </>
  )
}

export default Header;