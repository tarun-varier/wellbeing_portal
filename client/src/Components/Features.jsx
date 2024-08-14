import React from 'react';
import dbfeatures1 from '../assets/dbfeatures1.png';
import dbfeatures2 from '../assets/dbfeatures2.svg'
import dbfeatures3 from '../assets/dbfeatures3.svg'
import dbfeatures4 from '../assets/dbfeatures4.svg'

const Features = () => {
  const articles = [
    { id: 1, img_url: dbfeatures1, content: 'Empower yourself to develop fresh insights about your life' },
    { id: 2, img_url: dbfeatures2, content: 'Learn how to make healthier choices' },
    { id: 3, img_url: dbfeatures3, content: 'Develop coping strategies to manage distress' },
    { id: 4, img_url: dbfeatures4, content: 'Resolve conflicts' },
  ];

  return (
    <div className="w-full max-w-4xl ">
      <div className="grid grid-flow-col grid-cols-1 md:grid-cols-4">
        {articles.map((article) => (
          <div key={article.id} className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center">
            <img src={article.img_url} width="100px"/>
            <p className='text-center'>{article.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
