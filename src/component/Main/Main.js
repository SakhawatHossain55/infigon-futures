import React from "react";
import { Container, Row } from "react-bootstrap";
import "./Main.css";

const Main = () => {
  return (
    <div className="text-white main d-flex align-items-center">
      <Container className="vl">
        <Row>
          <div className="col-md-6 px-5 text text-justify">
            <h2 className="pb-4">How we can Help</h2>
            <p>
              Codimentum vei vestibulum, facili euismod id ornare fermentum ac.
              bibendum turpis faucibus lectus cursus lectus cursus elementum.
              Suscipit mauris viverra pellentesqun nisi, dilam rhoncus vitae
              purus. Sed purus sed lectus.
            </p>

            <p>
              STEP 1 <span>SELF ANALYSIS</span>
            </p>
            <p>
              STEP 2 <span>SELF ANALYSIS</span>
            </p>
            <p>
              STEP 3 <span>SELF ANALYSIS</span>
            </p>
            <p>
              STEP 4 <span>SELF ANALYSIS</span>
            </p>
          </div>
          <div className="col-md-6 d-flex justify-content-center ">
            <div class="parent">
              <img
                class="image1"
                src="https://cdn.pixabay.com/photo/2016/03/25/01/43/abstract-1278044_960_720.jpg"
                alt=""
              />
              <img
                class="image1"
                src="https://cdn.pixabay.com/photo/2016/03/25/01/46/abstract-1278055_960_720.jpg"
                alt=""
              />
              <img
                class="image2"
                src="https://cdn.pixabay.com/photo/2016/03/25/01/20/abstract-1278016_960_720.jpg"
                alt=""
              />
            </div>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default Main;
