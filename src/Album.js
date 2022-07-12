import { useEffect, useState } from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './css/album.css';

function Album() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users/1/albums").then(
      (result) => {
        result.json().then((resp) => {
          setData(resp);
        });
      }
    );
  }, []);

  return (
    <div className="Album">
      {console.log(data)}
      {data.map((item) => (
        <Card style={{ width: '18rem',marginLeft:'10px',marginTop:'10px' }}>
        <Card.Body>
          <Card.Title>{`User Id:- ${item.userId}`}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">{`Id:- ${item.id}`}</Card.Subtitle>
          <Card.Text>
            {`Title :- ${item.title}`}
          </Card.Text>
          <Card.Link ><Button variant="danger">DELETE</Button>{' '}</Card.Link>
          <Card.Link ><Button variant="secondary">UPDATE</Button>{' '}</Card.Link>
        </Card.Body>
      </Card>
      ))}
    </div>
  );
}

export default Album;
