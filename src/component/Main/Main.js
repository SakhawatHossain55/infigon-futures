import React from "react";
import { Container, Row } from "react-bootstrap";
import image01 from "../../images/abstract-1277995__340.jpg"
import image02 from "../../images/abstract-1278055__340.jpg"
import image03 from "../../images/abstract-1278058__340.jpg"
import "./Main.css";

const Main = () => {
  return (
    <div className="text-white main d-flex align-items-center">
      <Container>
        <Row>
          <div className="col-md-6 px-5 text text-justify">
            <h2 className="pb-4">How we can Help</h2>
            <p>
              Codimentum vei vestibulum, facili euismod id ornare fermentum ac.
              bibendum turpis faucibus lectus cursus lectus cursus elementum.
              Suscipit mauris viverra pellentesqun nisi, dilam rhoncus vitae
              purus. Sed purus sed lectus.
            </p>
            
            <p>STEP 1 <span>SELF ANALYSIS</span></p>
            <p>STEP 2 <span>SELF ANALYSIS</span></p>
            <p>STEP 3 <span>SELF ANALYSIS</span></p>
            <p>STEP 4 <span>SELF ANALYSIS</span></p>
          </div>
          <div className="col-md-6 image">
              <img className="back-side" src={image01} alt="" /> 
            <img className="back-side" src={image02} alt="" />
             
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default Main;
