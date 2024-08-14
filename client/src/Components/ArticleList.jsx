import React from 'react';

const Articles = () => {
    const articles = [
        { id: 1, title: 'Mental Health Awareness', content: 'Mental health is important...' },
        { id: 2, title: 'Dealing with Stress', content: 'Stress can be managed by...' },
        { id: 3, title: 'Benefits of Counseling', content: 'Counseling can help you...' },
    ];

    return (
        <>
            <h2 className="text-3xl font-bold mb-4">Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-3">
                {articles.map((article) => (
                    // no hyperlink styling
                    <a class="no-underline text-black" href="/article">
                    <div key={article.id} className="bg-white p-4 rounded-lg shadow-md">
                        <h3 className="text-2xl font-bold mb-2">{article.title}</h3>
                        <p>{article.content}</p>
                    </div>
                    </a>
                ))}
            </div>
        </>
    );
};

export default Articles;
