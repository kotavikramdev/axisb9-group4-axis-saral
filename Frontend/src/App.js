import { BrowserRouter, Route, Routes } from "react-router-dom";
import Docs from "./Employee/Docs/Docs";
import Scd from "./Employee/Docs/Scd";
import Sop from "./Employee/Docs/Sop";
import Policy from "./Employee/Docs/Policy";
import Profile from "./Employee/Profile/Profile";
import Accounts from "./Employee/Products/page/Accounts";
import Cards from "./Employee/Products/page/Cards";
import Deposits from "./Employee/Products/page/Deposits";
import Insurances from "./Employee/Products/page/Insurances";
import Investments from "./Employee/Products/page/Investments";
import Loans from "./Employee/Products/page/Loans";
import Home from "./General/Home/Home";
import Dashboard from "./Employee/Dashboard/Dashboard";
import Projects from "./Employee/Projects/Projects";
import ProjectDetailPage from "./Employee/Projects/ProjectDetailPage";
import Login from "./General/Login/Login";
import ForgotPassword from "./General/Login/component/ForgotPassword";
// import MyFeeds from "./Employee/MyFeeds/MyFeeds";
import AdminDashboard from "./Admin/Dashboard/AdminDashboard";
import ProjectAdmin from "./Admin/Projects/ProjectAdmin";
import ProjectDetailsAdminPage from './Admin/Projects/ProjectDetailsAdminPage';
import AdminDocs from "./Admin/Docs/AdminDocs";
import AdminScd from "./Admin/Docs/AdminScd";
import AdminSop from "./Admin/Docs/AdminSop";
import AdminPolicy from "./Admin/Docs/AdminPolicy";
import AdminFeeds from "./Admin/AdminFeeds/AdminFeeds";
import AdminAccounts from "./Admin/Products/page/AdminAccounts";
import AdminCards from "./Admin/Products/page/AdminCards";
import AdminDeposits from "./Admin/Products/page/AdminDeposits";
import AdminInsurances from "./Admin/Products/page/AdminInsurances";
import AdminInvestments from "./Admin/Products/page/AdminInvestments";
import AdminLoans from "./Admin/Products/page/AdminLoans";
import UpdateProfile from "./Employee/UpdateProfile/UpdateProfile";
import UpdatePasswordPage from "./Employee/UpdateProfile/UpdatePasswordPage";
import PeersPage from "./Employee/Peers/PeersPage";
import AdminPeers from "./Admin/Peers/AdminPeers";
import UpdateEmployee from "./Admin/Peers/UpdateEmployee";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          {/* General */}
          <Route path='/' element={<Home />}></Route>
          <Route path='/home' element={<Home />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/forgot-password' element={<ForgotPassword />}></Route>
          {/* Explore Products for Employee */}
          <Route path='/products/accounts' element={<Accounts />}></Route>
          <Route path='/products/cards' element={<Cards />}></Route>
          <Route path='/products/deposits' element={<Deposits />}></Route>
          <Route path='/products/insurances' element={<Insurances />}></Route>
          <Route path='/products/investments' element={<Investments />}></Route>
          <Route path='/products/loans' element={<Loans />}></Route>
          {/* Explore Products for Admin */}
          <Route path='/admin-products/accounts' element={<AdminAccounts />}></Route>
          <Route path='/admin-products/cards' element={<AdminCards />}></Route>
          <Route path='/admin-products/deposits' element={<AdminDeposits />}></Route>
          <Route path='/admin-products/insurances' element={<AdminInsurances />}></Route>
          <Route path='/admin-products/investments' element={<AdminInvestments />}></Route>
          <Route path='/admin-products/loans' element={<AdminLoans />}></Route>
          {/* Employee */}
          <Route path='/dashboard' element={<Dashboard />}></Route>
          <Route path='/projects' element={<Projects />}></Route>
          <Route path='/project-details' element={<ProjectDetailPage />}></Route>
          <Route path='/docs' element={<Docs />}></Route>
          <Route path='/docs/sop' element={<Sop />}></Route>
          <Route path='/docs/scd' element={<Scd />}></Route>
          <Route path='/docs/policy' element={<Policy />}></Route>
          <Route path='/peers' element={<PeersPage/>}></Route>
          <Route path='/profile' element={<Profile />}></Route>
          {/* <Route path='/my-feeds' element={<MyFeeds />}></Route> */}
          <Route path='/update-profile' element={<UpdateProfile/>}></Route>
          <Route path='/update-password' element={<UpdatePasswordPage/>}></Route>
          {/* Admin */}
          <Route path='/admin-dashboard' element={<AdminDashboard />}></Route>
          <Route path='/admin-projects' element={<ProjectAdmin/>}></Route>
          <Route path='/admin-project-details' element={<ProjectDetailsAdminPage />}></Route>
          <Route path='/admin-docs' element={<AdminDocs />}></Route>
          <Route path='/admin-docs/sop' element={<AdminSop />}></Route>
          <Route path='/admin-docs/scd' element={<AdminScd />}></Route>
          <Route path='/admin-docs/policy' element={<AdminPolicy />}></Route>
          <Route path='/admin-peers' element={<AdminPeers/>}></Route>
          <Route path='/admin-feeds' element={<AdminFeeds />}></Route>
          <Route path='/update-employee' element={<UpdateEmployee />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
