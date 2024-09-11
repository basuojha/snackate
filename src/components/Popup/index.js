const Popup = ({ message = '', onClose = () => {} }) => {
  return (
    <div className='popup-overlay'>
      <div className='popup-content'>
        <span className='popup-message'>{message}</span>
        <button className='popup-btn' onClick={onClose}>
          OK
        </button>
      </div>
    </div>
  )
}

export default Popup
