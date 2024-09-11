import React from 'react'

class UserClass extends React.Component {
  constructor (props) {
    console.log('Child constructor')
    super(props)
    this.check = 'yo'
  }
  componentDidMount () {
    console.log('Child componentDidMount')
  }

  render () {
    console.log('Child render')
    return (
      <div>
        Hiiiii {this.props.name} {this.check}
      </div>
    )
  }
}

export default UserClass
