import { Component } from "react";
import Deposit from "../component/DepositsUI";
import image from "../image/Logo.jpg";
import AdminHeader from "../../GeneralComponents/component/AdminHeader";
import AdminFooter from "../../GeneralComponents/component/AdminFooter";

class AdminDeposits extends Component {
  render() {
    return (
      <div>
        <AdminHeader />
        <div className="top-container">
          <h1 className="main-heading">Deposits</h1>
          <p className="description text-secondary">
            Whether it's a large or small amount of money, keep it secure and
            earn high interest, through our array of fixed and recurring
            deposits that you can invest in.
          </p>
          <div className="container-fluid d-flex justify-content-center">
            <div className="row">
              <div className="col-md-4">
                <Deposit
                  imgsrc={image}
                  title="Fixed Deposit"
                  content="Save & grow your wealth with Fixed Deposits"
                />
              </div>
              <div className="col-md-4">
                <Deposit
                  imgsrc={image}
                  title="Recurring Deposit"
                  content="Utilise funds saved every month for important events"
                />
              </div>
              <div className="col-md-4">
                <Deposit
                  imgsrc={image}
                  title="Tax Saver Deposit"
                  content="Invest & save tax on your investments, for greater tax savings"
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
export default AdminDeposits;
