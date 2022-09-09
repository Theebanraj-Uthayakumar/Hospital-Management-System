import React from 'react'
import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

function Pharmacy2() {
    return (
        <div>
            {/* <CardGroup>
  <Card>
    <Card.Img variant="top" src="holder.js/100px160" />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This content is a little bit longer.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src="holder.js/100px160" />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This card has supporting text below as a natural lead-in to additional
        content.{' '}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src="holder.js/100px160" />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This card has even longer content than the first to
        show that equal height action.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
</CardGroup> */}
<div className="card-group">
<div className="card">
<img className="card-img-top" src="images/1.png" alt="Card image cap" />
<div className="card-body">
<Button variant="success"  >View Details</Button>
</div>
</div>
<div className="card">
<img className="card-img-top" src="images/3.png" alt="Card image cap" />
<div className="card-body">
<Button variant="success"  >View Details</Button>
</div>
</div>
<div className="card">
<img className="card-img-top" src="images/4.png" alt="Card image cap" />
<div className="card-body">
<Button variant="success"  >View Details</Button>
</div>
</div>
<div className="card">
<img className="card-img-top" src="images/6.png" alt="Card image cap" />
<div className="card-body">
<Button variant="success"  >View Details</Button>
</div>
</div>


</div>

<br></br>

<div className="card-group">
<div className="card">
<img className="card-img-top" src="images/7.jpg" alt="Card image cap" />
<div className="card-body">
<Button variant="success"  >View Details</Button>
</div>
</div>
<div className="card">
<img className="card-img-top" src="images/18.png" alt="Card image cap" />
<div className="card-body">
<Button variant="success"  >View Details</Button>
</div>
</div>
<div className="card">
<img className="card-img-top" src="images/2.png" alt="Card image cap" />
<div className="card-body">
<Button variant="success"  >View Details</Button>
</div>
</div>
<div className="card">
<img className="card-img-top" src="images/11.jpg" alt="Card image cap" />
<div className="card-body">
<Button variant="success"  >View Details</Button>
</div>
</div>


</div>
        </div>
    )
}

export default Pharmacy2
