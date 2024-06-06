import React from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';

const EventCard = ({ events, index }) => {
  return (
    <ul className="md:h- container">
      <li className="card event-card" style={{ '--card-index': index }} key={events.event_name}>
        <div className="img--container">
          <Image src={events.event_image} alt={events.event_name} width={100} height={100}/>
        </div>
        <div className="card--text">
          <div className="text--container">
            <div className="text--header">
              <h2 className="text--title">{events.event_name}</h2>
              <p className="text--subtitle">{events.event_subtitle}</p>
            </div>
            <div className="text--details">
              <p className="text--description">{events.event_desc}</p>
              <a href="#" className="text--link">Event Details</a>
            </div>
          </div>
        </div>
      </li>
    </ul>
  );
};

EventCard.propTypes = {
  events: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
};

export default EventCard;
