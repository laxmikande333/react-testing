import React, { useState, useEffect } from 'react';
import Axios from 'axios';

const AsyncAwait = () => {
    const [value, setValue] = useState([]);

    const loadData = async () => {
        // setTimeout(async () => {
            const response = await Axios.get('https://jsonplaceholder.typicode.com/posts');
            setValue(response.data);
        // }, 3000);
    }

    useEffect(() => {
        loadData();
        // setValue([1, 2]);
    }, []);

    return (
        <div id="length">
            length: {value.length}
        </div>
    );
}


export default AsyncAwait;