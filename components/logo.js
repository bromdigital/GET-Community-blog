import React from 'react'

const logoImage = './static/images/logo.svg'

class Logo extends React.Component {
  render() {
    return (
      <img
        className='logo'
        src={ logoImage }
        alt='GET Protocol Community'
        width="100px"
      />
    );
  }
}

export default Logo
