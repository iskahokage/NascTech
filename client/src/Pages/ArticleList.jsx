import axios from "axios";
import React, { useEffect, useState } from "react";
import { createSearchParams, Link, useNavigate } from "react-router-dom";
import "./ArticleList.scss";
const ArticleList = () => {
    const [articleData, setArticleData] = useState(null);
    const navigate = useNavigate();
    useEffect(() => {
        axios.get("http://localhost:8000/api/v1/articles").then((res) => {
            const data = res.data
            setArticleData(data.sort((a, b) => b.id - a.id));
        });
    }, []);
    let params = new URLSearchParams(window.location.search);

    const onCreate = () => {
        navigate({
            search: `?${createSearchParams({
                edit: "true",
            })}`,
        });
    };
    const onSave = async (data) => {
        await axios
            .post(`http://localhost:8000/api/v1/article`, data)
            .then((res) => {
                setArticleData(res.data[0]);
                navigate(`/article/${res.data[0].id}?edit=true`);
            });
    };
    const onGoBack = () => {
        navigate("/articles");
    };

    const handleInput = (e) => {
        let newArticle = {
            ...articleData,
            [e.target.name]: e.target.value,
        };
        setArticleData(newArticle);
    };

    if (!articleData) return null;
    return (
        <>
            {params.has("edit") ? <h1>Article creation</h1> : <h1>Articles</h1>}

            {params.has("edit") ? (
                <button className="create" onClick={() => onGoBack()}>Go back</button>
            ) : (
                <button  className="create" onClick={() => onCreate()}>New Article</button>
            )}

            {params.has("edit") ? (
                <div className="container details">
                    <input
                    className="input"
                        type="text"
                        name="heading"
                        placeholder="Article name"
                        onChange={handleInput}
                    />
                    <textarea
                    className="input"
                        name="content"
                        id=""
                        cols="30"
                        rows="10"
                        placeholder="Article content"
                        onChange={handleInput}
                    ></textarea>
                    <button onClick={() => onSave(articleData)}>Save</button>
                </div>
            ) : (
                <div className="container">
                    {articleData.map((article) => (
                        <div className="article" key={article.id}>
                            <Link
                                className="article__link"
                                to={`/article/${article.id}`}
                            >
                                <p className="article__title">
                                    {article.heading}
                                </p>
                            </Link>
                            <p className="article__timestamp">
                                {article.created_at}
                            </p>
                        </div>
                    ))}
                </div>
            )}
        </>
    );
};

export default ArticleList;
