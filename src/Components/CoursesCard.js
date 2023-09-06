import React from 'react';
import PropTypes from 'prop-types';

const CoursesCard = ({ imageSrc, title, description, name }) => {

    if (description.length > 500) {
        description = description.substring(0, 500) + "...";
    };

    return (
        <div className="card">
            <img className="card-image" src={imageSrc} alt={title} />
            <div className="card-content">
                <h4 className="card-name">{name}</h4>
                <p className="card-title">{title}</p>
                <p className="card-description">{description}</p>
            </div>
        </div>
    );
};


CoursesCard.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default CoursesCard;
