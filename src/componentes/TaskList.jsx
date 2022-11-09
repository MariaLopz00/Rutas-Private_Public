import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

export const TaskList=()=> {
  return (
    <>
    <center>
        <hr></hr>
    <h1>TUS TAREAS</h1>
    </center>
    <hr></hr>
    <CardGroup>
      <Card id="card1" >
        
        <Card.Body>
          <Card.Title>Tarea 1</Card.Title>
          <Card.Text>
            Estudiar Base de Datos PostgreSQL
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <strong className="text-muted">Pendiente</strong>
        </Card.Footer>
      </Card>
      <Card id="card2">
        <Card.Body>
          <Card.Title>Tarea 2</Card.Title>
          <Card.Text>
            Practicar para el torneo de Voley
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <strong className="text-muted">En Proceso</strong>
        </Card.Footer>
      </Card>
      <Card id="card3" >
        
        <Card.Body>
        <Card.Title>Tarea 3</Card.Title>
          <Card.Text>
            Lavar mi Bicicleta
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <strong className="text-muted">Terminado</strong>
        </Card.Footer>
      </Card>
    </CardGroup>
    </>
  );
}

