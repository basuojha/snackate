import React, { useState } from 'react'

const ContactForm = ({ setFeedbackMessage = () => {} }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })

  const handleChange = e => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value
    })
  }

  const handleSubmit = async e => {
    e.preventDefault()
    const response = await fetch('http://localhost:5003/api/feedback', {
      method: 'POST',
      body: JSON.stringify(formData),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const { status, ok: responseSuccess } = response
    const responseData = await response.json()
    if (responseSuccess && status === 201) {
      console.log('Feedback was saved successfully')
      setFeedbackMessage(
        'Thank you for sharing your feedback, we will revert to you soon.'
      )
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      })
    } else {
      if (status === 400) {
        console.error(`${responseData.message} `)
        setFeedbackMessage(
          `An error occurred while saving your data. Please try again later.`
        )
      }
    }
  }

  return (
    <div className='contact-form'>
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor='name'>Name:</label>
          <input
            type='text'
            id='name'
            name='name'
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor='email'>Email:</label>
          <input
            type='email'
            id='email'
            name='email'
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor='phone'>Phone:</label>
          <input
            type='tel'
            id='phone'
            name='phone'
            value={formData.phone}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor='subject'>Subject:</label>
          <input
            type='text'
            id='subject'
            name='subject'
            value={formData.subject}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor='message'>Message:</label>
          <textarea
            id='message'
            name='message'
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default ContactForm
