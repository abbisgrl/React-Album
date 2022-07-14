import { useEffect, useState } from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './css/album.css';

function Album() {
  const [data, setData] = useState([]);
  useEffect(() => {
    getList();
  }, []);

  function getList() {
    fetch("https://jsonplaceholder.typicode.com/albums").then(
      (result) => {
        result.json().then((resp) => {
          setData(resp);
        });
      }
    );
  }
  
  function deleteUser(id) {
    fetch(`https://jsonplaceholder.typicode.com/albums/${id}`, {
      method: 'DELETE'
    }).then((result) => {
      result.json().then((resp) => {
        console.warn(resp);
        getList();
      });
    });
  }

  function updateUser(id) {
    fetch(`https://jsonplaceholder.typicode.com/albums/${id}`, {
      method: 'PUT',
      body: JSON.stringify({
        id: 1,
        title: 'foo',
        userId: 1,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
  }
  return (
    <div className="Album">

      {data.map((item) => (
        <Card style={{ width: '18rem', marginLeft: '10px', marginTop: '10px' }}>
          <Card.Body>
            <Card.Title>{`User Id:- ${item.userId}`}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">{`Id:- ${item.id}`}</Card.Subtitle>
            <Card.Text>
              {`Title :- ${item.title}`}
            </Card.Text>
            <Card.Link ><Button variant="danger" onClick={() => deleteUser(item.id)}>DELETE</Button>{' '}</Card.Link>
            <Card.Link ><Button variant="secondary" onClick={(

            ) => updateUser(item.id)}>UPDATE</Button>{' '}</Card.Link>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}

export default Album;
