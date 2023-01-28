import logo from '../../assets/logo.svg'

export const Header = () => {
  return (
      <header className='flex justify-center bg-[#0D0D0D] h-[200px] w-full'>
        <img src={logo} width={126} height={48} alt="Logo" />
      </header>
    )
}