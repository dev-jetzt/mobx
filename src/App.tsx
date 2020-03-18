import React from 'react';
import { style } from 'typestyle';
import { Container, Col, Row } from 'reactstrap';
import Menu from './Menu';
import { HashRouter } from 'react-router-dom';
import Content from './Content';

/*
  Overview on react strap: https://reactstrap.github.io/
  Components: https://reactstrap.github.io/components/
*/

/* We don't need externally provided Props, so we set the props part to {} */
/* But, we want to type our local state with the IState definition */
class App extends React.Component {

  public render() {

    return (
      <HashRouter>
        {/* fluid makes bootstrap use all screen with */}
        {/* h-100 is a bootstrap default to use all height */}
        <Container fluid className="h-100">
          {/* h-100 is a bootstrap default to use all height */}
          <Row className="h-100">
            <Col xl={2} className={col1}>
              {/* embed Menu.tsx */}
              <Menu />
            </Col>
            {/* auto instructs bootstrap to take the remaining column space */}
            <Col xl="auto">
              <Content />
            </Col>
          </Row>
        </Container >
      </HashRouter>
    )
  }
}

const col1 = style({
  backgroundColor: '#eeeeee',
  height: '100%'
});

export default App;
