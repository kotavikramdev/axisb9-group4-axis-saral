import { Component } from "react";
import Account from "../component/AccountsUI";
import image from "../image/Logo.jpg";
import Header from "../../GeneralComponents/component/Header";
import Footer from "../../GeneralComponents/component/Footer";

class Accounts extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="top-container">
          <h1 className="main-heading">Accounts</h1>
          <p className="description text-secondary">
            With the world going cashless, bank accounts have become a necessity
            rather than an option. Having a bank account is essentially having a
            24x7 security for your hard-earned money. But safety isn’t the only
            feature we offer. You can earn interest on your savings, make
            hassle-free payments, and manage all your expenses online.At Axis
            Bank, you can open a bank account suitable to your needs.
          </p>
          <div className="container-fluid d-flex justify-content-center">
            <div className="row">
              <div className="col-md-4">
                <Account
                  imgsrc={image}
                  title="Savings Account"
                  content="Axis Bank provides its customers with the option of choosing from a wide range of Savings Accounts with different features and benefits. The Savings Accounts are designed to meet the banking needs of people from all walks of life."
                />
              </div>
              <div className="col-md-4">
                <Account
                  imgsrc={image}
                  title="Current Account"
                  content="Boost your business and give it the bandwidth to transact anytime at the click of a button with Axis Bank Current Accounts!"
                />
              </div>
              <div className="col-md-4">
                <Account
                  imgsrc={image}
                  title="Salary Account"
                  content="Axis Bank ULTIMA Salary Accounts are designed to meet your employees every need, through unlimited cashback, ultimate lifestyle privileges and ultimate wealth management solutions. We also offer a seamless and convenient access to their salaries."
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
export default Accounts;
