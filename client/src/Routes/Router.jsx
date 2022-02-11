import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Article from "../Pages/Article";
import ArticleList from "../Pages/ArticleList";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="" element={<Navigate to="/articles" />} />
                <Route exact path="/articles" element={<ArticleList />} />
                <Route exact path="/article/:id" element={<Article />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;
