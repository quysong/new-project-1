import React, { useEffect, useState, useDebugValue } from 'react';
import PropTypes from 'prop-types';

const Blog = props => {
    const [count, setCount] = useState(false)

    const funcA = () => {
        throw new Error('my error')
    }

    return (
        <div>
            Count: {count}<br></br>
            <br></br>
            <button onClick={() => {throw new Error('Error thrown')}}>+</button>
        </div>
    );
};

Blog.propTypes = {

};

export default Blog;