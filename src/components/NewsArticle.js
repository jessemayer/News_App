import React from "react";

import Card from 'react-bootstrap/Card';
import Carousel from 'react-bootstrap/Carousel';

function NewsArticle({ data }) {
  return (
    <div className="news">
   <Carousel>
        <Carousel.Item>
        <Card style={{ width: '100%' }}>
      <Card.Img variant="top" src={data.urlToImage} />
      <Card.Body>
        <Card.Title>{data.title}</Card.Title>
        <Card.Subtitle>{data.author}, {data.source.name}, {data.publishedAt}</Card.Subtitle>
       
        <Card.Text>{data.description}</Card.Text>
        <blockquote>
          {data.content}
        </blockquote>
      </Card.Body>
    </Card>
        </Carousel.Item>
   </Carousel>
     
      
    </div>
    
  );
}
export default NewsArticle;
