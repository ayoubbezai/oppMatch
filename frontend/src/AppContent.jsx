import Navbar from "./layout/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import UsersList from "./pages/UsersList";
import RoleRoutes from "./routes/RoleRoutes";
import FileUploader from "./pages/FileUploader";
import History from "./pages/History";
import Overview from "./pages/Overview"
const AppContent = () => {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
          <Route path="/users_list" element={<UsersList />} />
        <Route element={<RoleRoutes allowedRoles={['user']} />}>
        </Route>

          <Route path="/overview" element={<Overview />} />
          <Route path="/dashboard" element={<FileUploader />} />
          <Route path="/history" element={<History />} />

      </Routes>
    </>
  );
};


export default AppContent;