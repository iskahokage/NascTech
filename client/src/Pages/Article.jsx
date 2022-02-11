import axios from "axios";
import React, { useEffect, useState } from "react";
import { createSearchParams, useNavigate, useParams } from "react-router-dom";
import "./ArticleList.scss";

const Article = () => {
    const navigate = useNavigate();
    const { id } = useParams();

    const [articleData, setArticleData] = useState(null);
    const getArticleData = async (id) => {
        await axios
            .get(`http://localhost:8000/api/v1/article/${id}`)
            .then((res) => {
                setArticleData(res.data[0]);
            });
    };

    let params = new URLSearchParams(window.location.search);
    useEffect(() => {
        getArticleData(id);
    }, [id, params.has("edit")]);

    const onEdit = () => {
        navigate({
            search: `?${createSearchParams({
                edit: "true",
            })}`,
        });
    };

    const onDelete = async (id) => {
        await axios.delete(`http://localhost:8000/api/v1/article/${id}`);
        navigate("/articles");
    };

    const onGoBack = () => {
        navigate("/articles");
    };

    const onSave = async (data) => {
        await axios.patch(`http://localhost:8000/api/v1/article/${id}`, data);
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
        <div key={articleData.id} className="container details">
            {params.has("edit") ? (
                <>
                <p className="article__title">Article editing</p>
                <input
                    className="input"
                    type="text"
                    name="heading"
                    value={articleData.heading}
                    onChange={handleInput}
                />
                </>
            ) : (
                <p className="article__title">{articleData.heading}</p>
            )}
            {params.has("edit") ? (
                <textarea
                className="input"
                    name="content"
                    cols="30"
                    rows="10"
                    value={articleData.content}
                    onChange={handleInput}
                ></textarea>
            ) : (
                <p className="article__content">{articleData.content}</p>
            )}
            <div className="article__timestamp-container">
                <p className="article__timestamp-details">
                    Article was created at: {articleData.created_at}
                </p>
                <p className="article__timestamp-details">
                    Article was edited at:{" "}
                    {articleData.created_at === articleData.updated_at
                        ? null
                        : articleData.updated_at}
                </p>
            </div>
            {params.has("edit") ? (
                <button
                    onClick={() => (
                        onSave(articleData), navigate(`/article/${id}`)
                    )}
                >
                    Save
                </button>
            ) : (
                <div className="article__button-container">
                    <button onClick={() => onDelete(id)}>Delete</button>
                    <button onClick={() => onEdit()}>Edit</button>
                    <button onClick={() => onGoBack()}>Go back</button>
                </div>
            )}
        </div>
    );
};

export default Article;
