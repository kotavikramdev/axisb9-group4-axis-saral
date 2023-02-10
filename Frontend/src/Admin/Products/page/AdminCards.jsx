import { Component } from "react";
import Card from "../component/CardsUI";
import image from "../image/Logo.jpg";
import AdminHeader from "../../GeneralComponents/component/AdminHeader";
import AdminFooter from "../../GeneralComponents/component/AdminFooter";

class AdminCards extends Component {
  render() {
    return (
      <div>
        <AdminHeader />
        <div className="top-container">
          <h1 className="main-heading">Cards</h1>
          <p className="description text-secondary">
            Choose from a series of credit cards, tailor made to meet your needs
            and desires. Enjoy the unmatched privileges, gift vouchers, eDGE
            reward points and much more.
          </p>
          <div className="container-fluid d-flex justify-content-center">
            <div className="row">
              <div className="col-md-4">
                <Card
                  imgsrc={image}
                  title="Debit Card"
                  content="Get access to your funds securely anytime, anywhere!"
                />
              </div>
              <div className="col-md-4">
                <Card
                  imgsrc={image}
                  title="Credit Card"
                  content="Avail amazing discounts and cashback schemes with Axis Bank Credit Cards"
                />
              </div>
              <div className="col-md-4">
                <Card
                  imgsrc={image}
                  title="Digital Payments"
                  content="Make payments easily with Samsung Pay on Axis Bank Cards!"
                />
              </div>
            </div>
          </div>
        </div>
        <AdminFooter />
      </div>
    );
  }
}
export default AdminCards;
