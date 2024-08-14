import React from 'react';

const ArticleList = () => {
  const articles = [
    { id: 1, title: 'Mental Health Awareness', content: 'Mental health is important...' },
    { id: 2, title: 'Dealing with Stress', content: 'Stress can be managed by...' },
    { id: 3, title: 'Benefits of Counseling', content: 'Counseling can help you...' },
  ];

  return (
    <div className="w-full max-w-4xl">
      <h2 className="text-3xl font-bold mb-4">Articles</h2>
      <div className="space-y-4">
        {articles.map((article) => (
          <div key={article.id} className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold mb-2">{article.title}</h3>
            <p>{article.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ArticleList;
