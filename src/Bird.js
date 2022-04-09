import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { Card } from 'react-bootstrap';

function Bird() {

  const [data, setData] = useState([])

  useEffect(() => {
    axios
      .get(process.env.BIRD_API_URL ?? "http://demo.jmunixusers.org:7777")
      .then((res) => {
        setData(res.data);
        console.log(res.data);
      })
  }, [])

  if (!data.name) {
      return <p>Error</p>;
  }

  return (
        <Card style={{ width: '18rem'}}>
        <Card.Img variant="top" src={data.image} className="rounded mx-auto d-block" alt="a bird"/>
            <Card.Body>
                <Card.Title>
                    {data.name}
                </Card.Title>
            </Card.Body>
          
      </Card>
  )
}

export default Bird;
