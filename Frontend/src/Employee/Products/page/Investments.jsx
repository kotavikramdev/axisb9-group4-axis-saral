import { Component } from "react";
import Investment from "../component/InvestmentsUI";
import image from "../image/Logo.jpg";
import Header from "../../GeneralComponents/component/Header";
import Footer from "../../GeneralComponents/component/Footer";

class Investments extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="top-container">
          <h1 className="main-heading">Investments</h1>
          <p className="description text-secondary">
            Get more from your money and fuel your financial aspirations with
            our range of investment products suited to cater varied investor
            profiles.
          </p>
          <div className="container-fluid d-flex justify-content-center">
            <div className="row">
              <div className="col-md-4">
                <Investment
                  imgsrc={image}
                  title="Equity Funds"
                  content="For Wealth Creation"
                />
              </div>
              <div className="col-md-4">
                <Investment
                  imgsrc={image}
                  title="Debt Funds"
                  content="For Wealth preservation"
                />
              </div>
              <div className="col-md-4">
                <Investment
                  imgsrc={image}
                  title="Digital Gold"
                  content="A new-age way of Investment"
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
export default Investments;
