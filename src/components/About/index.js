import React from 'react'
import UserClass from '../userClass'

class About extends React.Component {
  constructor (props) {
    super(props)
  }
  render () {
    return (
      <div className='text-page-container'>
        <div className='text-page-details'>
          <h1 className='heading-title'>About Us</h1>
          <p>
            Welcome to Snackate, your go-to destination for a seamless and
            delightful food delivery experience. At Snackate, we believe that
            great food should be accessible to everyone, anytime, anywhere.
            Whether you're craving a quick bite, a hearty meal, or a gourmet
            treat, we've got you covered
          </p>
          <h3 className='para-title'>Our Story</h3>
          <p>
            Founded by Basu Ojha, a seasoned tech enthusiast and gold medalist
            in Computer Science Engineering from VIT, Vellore, Snackate is
            driven by a passion for innovation and excellence. With 4.5 years of
            experience as a senior front-end developer, Basu brings a wealth of
            expertise in crafting user-friendly and high-performance web
            applications. His leadership in managing teams and mentoring interns
            has been instrumental in shaping a dynamic and forward-thinking
            development culture at Snackate.
          </p>
          <h3 className='para-title'>Our Mission</h3>
          <p>
            Our mission is to revolutionize the way you order food, combining
            cutting-edge technology with a commitment to quality, convenience,
            and customer satisfaction. At Snackate, we're dedicated to making
            your dining experience as enjoyable as possible, from the moment you
            browse our menu to the time your meal arrives at your doorstep.
          </p>
          <h3 className='para-title'>Why Choose Snackate?</h3>
          <ul>
            <li>
              <b>User-Centric Design: </b>Our platform is designed with you in
              mind, providing an intuitive and easy-to-navigate interface.
            </li>
            <li>
              <b>Quality and Variety: </b>We partner with the best local
              eateries to offer a wide range of cuisines, ensuring there's
              something for every palate.
            </li>
            <li>
              <b>Fast and Reliable Delivery: </b>We prioritize speed and
              reliability, so you can enjoy your food at its freshest.
            </li>
          </ul>
          <p>
            Join us at Snackate and experience a new era of food delivery that's
            not just about eating but about enjoying every bite!
          </p>
        </div>
      </div>
    )
  }
}

export default About
