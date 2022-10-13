import React from "react"
import { Container, Row, Col } from "reactstrap"

const Footer = () => {
  return (
    <React.Fragment>
      <footer className="footer">
        <Container fluid={true}>
          <Row>
            <div className="col-12">
              © {new Date().getFullYear()} HMS 🏥<span className="d-none d-sm-inline-block"> - All Copywrites
              {" "}<i className="mdi mdi-heart text-danger"></i> Reserved.</span>
            </div>
          </Row>
        </Container>
      </footer>
    </React.Fragment>
  )
}

export default Footer
