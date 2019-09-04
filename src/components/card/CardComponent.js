import React from 'react';
import Flippy, { FrontSide, BackSide } from 'react-flippy';

export default function CardComponent(props) {
  const FlippStyle = {
    width: '100%',
    height: '100%',
  }

  const FrontSideStyle = {
    display: 'flex',
    boxShadow: '-1px 1px 13px 5px rgba(67, 127, 91, .5)',
    backgroundImage: 'linear-gradient(to right, #242424, #437f5b, #437f5b,#437f5b, #242424)'
  }

  const UlStyle = {
    fontSize: '30px',
    listStyle: 'none',
    margin: 'auto'
  }

  const titleStyle = {
    margin: 'auto',
  }

  const imgStyle = {
    height: '100%',
    width: '100%',
    objectFit: 'fill'
  }

  const BackSideStyle = {
    padding: 0,
    backgroundImage: 'linear-gradient(to bottom, #242424,#437f5b, #437f5b,#242424)',
    display: 'flex',
    boxShadow: "-1px 1px 13px 5px rgba(67, 127, 91, .5)"
  }

  return (
    <Flippy
      flipOnHover={true}
      flipDirection='horizontal'
      style={FlippStyle}
    >
      <FrontSide style={FrontSideStyle}>
        {
          Object.keys(props.currentCountry).length ?
            <ul style={UlStyle}>
              <li>
                Name: {props.currentCountry.nativeName}
              </li>
              <li>
                Capital: {props.currentCountry.capital}
              </li>
              <li>
                Population: {props.currentCountry.population}
              </li>
              <li>
                Domain: {props.currentCountry.topLevelDomain}
              </li>
              <li>
                Timezones: {props.currentCountry.timezones}
              </li>
            </ul>
            : <h2 style={titleStyle}>Choose a country &#8593;</h2>
        }
      </FrontSide>
      <BackSide
        style={BackSideStyle}>
        {
          Object.keys(props.currentCountry).length
            ?
            <img
              src={props.currentCountry.flag}
              style={imgStyle}
              alt="img"
            />
            :
            <h2 style={titleStyle}>and look what appears here ...</h2>
        }
      </BackSide>
    </Flippy>
  )
};