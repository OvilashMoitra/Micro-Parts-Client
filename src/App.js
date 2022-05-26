import './App.css';
import Home from './PageContiner/Home/Home'
import Purchase from './PageContiner/Purchase/Purchase'
import { Route, Routes } from 'react-router-dom';
import Login from './PageContiner/Login/Login';
import Blogs from './PageContiner/Blogs/Blogs';
import MyPortfolio from './PageContiner/MyPortfolio/MyPortfolio';
import NotFound from './PageContiner/NotFound/NotFound';
import Registration from './PageContiner/Registration/Registration';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from './PageContiner/DashBoard/Dashboard';
import MyOrder from './PageContiner/DashBoard/MyOrder';
import AddReview from './PageContiner/DashBoard/AddReview';
import MyProfile from './PageContiner/DashBoard/MyProfile';
import Payment from './PageContiner/DashBoard/Payment';
import MakeAdmin from './PageContiner/DashBoard/MakeAdmin.js'
import RequireAuth from './RequireAuth';
import RequireAdmin from './RequireAdmin';
const queryClient = new QueryClient()
function App() {
  return (
    <div>
      <QueryClientProvider client={queryClient}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="purchase/:id" element={
            <RequireAuth><Purchase /></RequireAuth>
          } />
          <Route path="login" element={<Login />} />
          <Route path="registration" element={<Registration />} />
          <Route path="dashboard" element={<RequireAuth><Dashboard /></RequireAuth>}>
            <Route path="myorder" element={<MyOrder />} />
            <Route path="myprofile" element={<MyProfile />} />
            <Route path="addreview" element={<AddReview />} />
            <Route path="makeadmin" element={<RequireAdmin><MakeAdmin /></RequireAdmin>} />
          </Route>
          <Route path="payment/:id" element={<RequireAuth><Payment /></RequireAuth>} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="myportfolio" element={<MyPortfolio />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </QueryClientProvider>
      <ToastContainer />
    </div>
  );
}

export default App;
