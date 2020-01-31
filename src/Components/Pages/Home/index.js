import React from 'react';
import PropTypes from 'prop-types';

const Home = ({
    title,
    content,
}) => {
    return (
        <div>
            Home {title}<hr></hr>
            {content}
        </div>
    );
};

Home.propTypes = {
    
};

export default Home;