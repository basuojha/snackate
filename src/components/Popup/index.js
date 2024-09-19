const Popup = ({
  message = '',
  onClose = () => {},
  onCloseFail = () => {},
  failCaseButton = false,
  btnText,
  failBtnText
}) => {
  return (
    <div
      id='popup-overlay'
      className='h-full w-full fixed top-0 left-0 justify-center items-center bg-black bg-opacity-50 flex'
    >
      <div
        id='popup-content'
        className='items-end bg-[#F8EDE3] p-4 rounded-xl flex flex-col min-w-64 w-1/4 '
      >
        <span id='popup-message' className='text-[#7E4338] pb-4'>
          {message}
        </span>
        <div className="flex justify-between gap-4 w-full">
          <button
            id='popup-btn'
            className='px-2 py-2 w-full rounded-lg bg-[#7E4338] text-white'
            onClick={onClose}
          >
            {btnText || 'Okay'}
          </button>
          {failCaseButton && (
            <button
              id='popup-btn'
              className='px-2 py-2 w-full rounded-lg bg-[#C5705D] text-white'
              onClick={onCloseFail}
            >
              {failBtnText || 'Okay'}
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

export default Popup
