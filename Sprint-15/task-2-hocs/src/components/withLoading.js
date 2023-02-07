import {useState, useEffect} from 'react';

const withLoading = (Component, arg) => {
    return (props) => {
        const {fetchMethod, params} = props;
        const [data, setData] = useState(null);
        useEffect(() => {
            fetchMethod(params)
                .then(response => {
                    setData(response);
                    console.log(arg, response);
                });
        }, [params])

        return data ? <Component {...props} data={data}/> : <p className='center'>Loading...</p>
    }
};

export default withLoading;