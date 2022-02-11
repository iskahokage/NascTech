import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "./ArticleList.scss";
const ArticleList = () => {
    const [articleData, setArticleData] = useState(null);

    useEffect(() => {
        axios.get("http://localhost:8000/api/v1/articles").then((res) => {
            const data = res.data;
            console.log(res.data);
            setArticleData(data);
        });
    }, []);

    if (!articleData) return null;
    return (
        <>
            <h1>Статьи</h1>
            <div className="container">
                {articleData.map((article) => (
                    <div className="article" key={article.id}>
                        <NavLink to='/article/:id'>
                            <p className="article__title">{article.heading}</p>
                        </NavLink>
                        <p className="article__created_at">
                            {article.created_at}
                        </p>
                    </div>
                ))}
            </div>
        </>
    );
};

export default ArticleList;
