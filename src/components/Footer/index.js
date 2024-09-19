import CopyrightImage from '../../assets/images/copyright.png'

const Footer = () => {
  return (
    <div className='h-32 bg-[#F8EDE3] p-4 items-center flex'>
      <img src={CopyrightImage} className='h-6 w-6'></img>
      <span className='text-[#7E4338] pl-2'>2024 Snackate By Basu</span>
    </div>
  )
}

export default Footer
