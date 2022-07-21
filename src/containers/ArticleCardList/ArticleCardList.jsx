import React from "react";
import ArticleCard from "../../components/ArticleCard/ArticleCard";
import "./ArticleCardList.scss";

const ArticleCardList = ({ articleInfo }) => {
    const articleCardJSX = articleInfo.map((article, index) => {
        return (
            <ArticleCard
                index={index}
                key={index}
                thumbnail={article.thumbnail}
                category={article.category}
                title={article.title}
                isActive={article.isActive}
                id={article.id}
            />
        );
    });

    return (
        <div className="article-card-list" data-testid="article-card-component">
            {articleCardJSX}
        </div>
    );
};

export default ArticleCardList;
