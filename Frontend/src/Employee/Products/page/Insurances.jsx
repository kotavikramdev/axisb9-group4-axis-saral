import { Component } from "react";
import Insurance from "../component/InsurancesUI";
import image from "../image/Logo.jpg";
import Header from "../../GeneralComponents/component/Header";
import Footer from "../../GeneralComponents/component/Footer";

class Insurances extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="top-container">
          <h1 className="main-heading">Insurances</h1>
          <p className="description text-secondary">
            Get assured compensation of financial losses during medical and
            non-medical emergencies, with our comprehensive health, travel and
            life insurance products.
          </p>
          <div className="container-fluid d-flex justify-content-center">
            <div className="row">
              <div className="col-md-4">
                <Insurance
                  imgsrc={image}
                  title="Life Insurance"
                  content="Protect your family against the unknown and take care of their financial needs by buying life insurance as per your requirements and life-stage."
                />
              </div>
              <div className="col-md-4">
                <Insurance
                  imgsrc={image}
                  title="General Insurance"
                  content="Safeguard your prized possessions - car, two-wheeler, home, and business - and enjoy hassle-free travel with our range of general insurance products."
                />
              </div>
              <div className="col-md-4">
                <Insurance
                  imgsrc={image}
                  title="Health Insurance"
                  content="Stay financially prepared for medical or accident emergencies and be rest assured on us with our Health Insurance plans that helps like a family."
                />
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
export default Insurances;
