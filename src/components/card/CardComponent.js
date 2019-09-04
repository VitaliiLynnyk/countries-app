import React from 'react';
import Flippy, { FrontSide, BackSide } from 'react-flippy';

export default function (props) {
  return (
    <Flippy
      flipOnHover={true}
      flipDirection="horizontal"
      style={{
        width: '100%',
        height: '100%',
        justifySelf: 'center'
      }}
    >
      <FrontSide className="flippyComponent_front"
        style={{
          display: 'flex',
          boxShadow: "-1px 1px 13px 5px rgba(67, 127, 91, .5)",
          backgroundImage: 'linear-gradient(to right, #242424, #437f5b, #437f5b,#437f5b, #242424)'
        }}
      >
        {
          Object.keys(props.currentCountry).length ?
            <ul style={{ fontSize: '30px', listStyle: "none", margin: 'auto' }}>
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
            : <h2 style={{ margin: 'auto' }}>Choose a country &#8593;</h2>
        }
      </FrontSide>
      <BackSide
        style={{
          padding: 0,
          backgroundImage: 'linear-gradient(to bottom, #242424,#437f5b, #437f5b,#242424)',
          display: 'flex',
          boxShadow: "-1px 1px 13px 5px rgba(67, 127, 91, .5)"
        }}>
        {
          Object.keys(props.currentCountry).length
            ?
            <img
              src={props.currentCountry.flag}
              style={{
                height: '100%',
                width: '100%',
                objectFit: 'fill'
              }}
              alt="img"
            />
            :
            <h2 style={{ margin: 'auto' }}>and look what appears here ...</h2>
        }
      </BackSide>
    </Flippy>
  )
};