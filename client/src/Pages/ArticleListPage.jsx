import React from "react";
import ArticleList from "../Components/ArticleList";
import Header from "../Components/Header";

const ArticleListPage = () => {
    return (
        <div className="min-h-screen bg-white-400 flex flex-col w-full">
            <Header />
            <div className="flex-1 flex flex-col p-12 items-center">
                <ArticleList />
            </div>
        </div>
    );
};

export default ArticleListPage;
