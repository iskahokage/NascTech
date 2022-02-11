import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './ArticleList.scss';

const Article = () => {
    
    useEffect(() => {
        const [articleData, setArticleData] = useState(null);
    
        axios.get("http://localhost:8000/api/v1/article/:id").then((res) => {
            const data = res.data;
            console.log(res.data);
            setArticleData(data);
        });
    }, []);
    return (
        <div>
            
        </div>
    );
};

export default Article;