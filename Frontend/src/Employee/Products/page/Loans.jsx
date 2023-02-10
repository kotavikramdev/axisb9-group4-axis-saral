import { Component } from "react";
import Loan from "../component/LoansUI";
import image from "../image/Logo.jpg";
import Header from "../../GeneralComponents/component/Header";
import Footer from "../../GeneralComponents/component/Footer";

class Loans extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="top-container">
          <h1 className="main-heading">Loans</h1>
          <p className="description text-secondary">
            At Axis Bank, we believe your journey should continue without any
            speed bumps. This is why we bring you customized Bank Loans at
            competitive interest rates. To get started, check your loan
            eligibility using our simple loan calculators. You can submit your
            Bank Loan application online in three easy steps and avail the most
            attractive interest rates and comfortable repayment tenures.
          </p>
          <div className="container-fluid d-flex justify-content-center">
            <div className="row">
              <div className="col-md-3">
                <Loan
                  imgsrc={image}
                  title="Home Loan"
                  content="Choose from a wide range of home loans depending on your needs"
                />
              </div>
              <div className="col-md-3">
                <Loan
                  imgsrc={image}
                  title="Personal Loan"
                  content="Avail personal loan for holiday, home renovation & marriage at attractive interest rates"
                />
              </div>
              <div className="col-md-3">
                <Loan
                  imgsrc={image}
                  title="Education Loan"
                  content="Loans available for a variety of courses with easy loan disbursal"
                />
              </div>
              <div className="col-md-3">
                <Loan
                  imgsrc={image}
                  title="Bussiness Loan"
                  content="Grow your business with minimum documentation & quick approvals"
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
export default Loans;
