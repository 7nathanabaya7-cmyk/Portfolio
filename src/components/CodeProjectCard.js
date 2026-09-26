import { Row, Col, Container } from "react-bootstrap"

export const CodeProjectCard = ({title, description, imgUrl, link}) => {
  return (
    <Col>
      <div>
        <Container>
          <Row>
            <Col>
              <img src={imgUrl} />
            </Col>
            <Col>
              <h4>{title}</h4>
              <span>{description}</span>
              <br/>
              <button className="outlineBtn projBtn" onClick={() => window.open(link)}>
                <span>Check the repo</span>
              </button>
            </Col>
          </Row>
        </Container>
      </div>
    </Col>
  )
}
