import { useEffect, useState } from 'react'
import ContactForm from '../ContactForm'
import Popup from '../Popup'

const Contact = () => {
  const [showModal, setShowModal] = useState(false)
  const [feedbackMessage, setFeedbackMessage] = useState('')

  useEffect(() => {
    if (feedbackMessage.length) {
      setShowModal(true)
    }
  }, [feedbackMessage])

  const onPopupClose = () => {
    setShowModal(false)
    setFeedbackMessage('')
  }

  return (
    <div id='contact-container' className='px-[15%] py-16'>
      <div className='text-justify p-2'>
        <h1
          id='heading-title'
          className='font-bold text-3xl pb-4 text-[#7E4338]'
        >
          Contact Us
        </h1>
        <p className='pb-6'>
          We’d love to hear from you! Whether you have a question, feedback, or
          need assistance, feel free to reach out to us. Here’s how you can get
          in touch:
        </p>
        <h3 id='para-title' className='font-bold text-xl pb-2 text-[#C5705D]'>
          Customer Support
        </h3>
        <p>
          If you need help with your orders, have questions about our services,
          or need technical support, our customer support team is here for you.
        </p>
        <ul className='pb-4'>
          <li>
            <b>Email: </b>contact.snackate@gmail.com
          </li>
          <li>
            <b>Operating Hours: </b>Monday to Friday, 9 AM - 6 PM (IST)
          </li>
        </ul>

        <h3 id='para-title' className='font-bold text-xl pb-2 text-[#C5705D]'>
          Business Inquiries
        </h3>
        <p>
          For partnerships, media inquiries, or any other business-related
          questions, please contact our business development team.
        </p>
        <ul className='pb-4'>
          <li>
            <b>Email: </b>contact.snackate@gmail.com
          </li>
        </ul>
        <h3 id='para-title' className='font-bold text-xl pb-2 text-[#C5705D]'>
          Feedback
        </h3>
        <p>
          We value your feedback and are always looking to improve. Share your
          thoughts or suggestions with us!
        </p>
        <ul className='pb-4'>
          <li>
            <b>Email: </b>contact.snackate@gmail.com
          </li>
        </ul>
        <h3 id='para-title' className='font-bold text-xl pb-2 text-[#C5705D]'>
          Follow Us
        </h3>
        <p>
          Stay updated with our latest news, promotions, and more by following
          us on social media:
        </p>
        <ul className='pb-4'>
          <li>
            <b>Facebook: </b>facebook.com/basuojhamusic
          </li>
          <li>
            <b>Twitter: </b>twitter.com/basuojhamusic
          </li>
          <li>
            <b>Instagram: </b>instagram.com/basuojhamusic
          </li>
        </ul>
        <p id='contact-form-para' className='pb-4'>
          Alternatively, you can use the form below to send us a message
          directly:
        </p>
        <ContactForm
          setFeedbackMessage={setFeedbackMessage}
          setShowModal={setShowModal}
        />
      </div>
      {showModal && <Popup message={feedbackMessage} onClose={onPopupClose} />}
    </div>
  )
}

export default Contact
