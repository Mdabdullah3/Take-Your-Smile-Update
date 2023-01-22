import React, { useEffect, useState } from 'react';

const useComments = () => {

    const url = `https://take-your-smile-server-side.vercel.app/postComments`

    const [comments, setComments] = useState([])

    // interface UserData {

    //     comments: string
    // }

    // const [value, setValue] = useState<UserData | Number>(0);

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setComments(data));
    }, [])

    return [comments, setComments];
};

export default useComments;