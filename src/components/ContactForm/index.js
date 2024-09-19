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
    <div
      id='contact-form'
      className='bg-[#F8EDE3] p-8 w-full sm:w-full md:w-full lg:w-1/2 rounded-lg min-w-[50%]'
    >
      <h2 className='font-bold text-xl pb-8 text-[#C5705D]'>Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <div className='pb-4 flex gap-2'>
          <label htmlFor='name' className='text-[#7E4338] font-medium w-28'>
            Name:
          </label>
          <input
            className='w-full text-[#7E4338] border-2 placeholder-[rgb(126,67,56)] rounded-lg border-[#7E4338] px-2 focus:outline-none focus:ring-1 focus:ring-[#C5705D] focus:border-[#C5705D] focus:shadow-sm focus:shadow-[#C5705D]'
            type='text'
            id='name'
            name='name'
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className='pb-4 flex gap-2'>
          <label htmlFor='email' className='text-[#7E4338] font-medium w-28'>
            Email:
          </label>
          <input
            className='w-full text-[#7E4338] border-2 placeholder-[rgb(126,67,56)] rounded-lg border-[#7E4338] px-2 focus:outline-none focus:ring-1 focus:ring-[#C5705D] focus:border-[#C5705D] focus:shadow-sm focus:shadow-[#C5705D]'
            type='email'
            id='email'
            name='email'
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className='pb-4 flex gap-2'>
          <label htmlFor='phone' className='text-[#7E4338] font-medium w-28'>
            Phone:
          </label>
          <input
            className='w-full text-[#7E4338] border-2 placeholder-[rgb(126,67,56)] rounded-lg border-[#7E4338] px-2 focus:outline-none focus:ring-1 focus:ring-[#C5705D] focus:border-[#C5705D] focus:shadow-sm focus:shadow-[#C5705D]'
            type='tel'
            id='phone'
            name='phone'
            value={formData.phone}
            onChange={handleChange}
          />
        </div>
        <div className='pb-4 flex gap-2'>
          <label htmlFor='subject' className='text-[#7E4338] font-medium w-28'>
            Subject:
          </label>
          <input
            className='w-full text-[#7E4338] border-2 placeholder-[rgb(126,67,56)] rounded-lg border-[#7E4338] px-2 focus:outline-none focus:ring-1 focus:ring-[#C5705D] focus:border-[#C5705D] focus:shadow-sm focus:shadow-[#C5705D]'
            type='text'
            id='subject'
            name='subject'
            value={formData.subject}
            onChange={handleChange}
          />
        </div>
        <div className='pb-4 flex gap-2'>
          <label htmlFor='message' className='text-[#7E4338] font-medium w-28'>
            Message:
          </label>
          <textarea
            className='w-full text-[#7E4338] border-2 placeholder-[rgb(126,67,56)] rounded-lg border-[#7E4338] px-2 focus:outline-none focus:ring-1 focus:ring-[#C5705D] focus:border-[#C5705D] focus:shadow-sm focus:shadow-[#C5705D] min-h-7 max-h-16'
            id='message'
            name='message'
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <div className='flex justify-end'>
          <button
            type='submit'
            className='bg-[#C5705D] rounded-lg text-white px-2.5 py-1.5'
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  )
}

export default ContactForm
