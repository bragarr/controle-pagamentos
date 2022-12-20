import { BrowserRouter, Outlet } from 'react-router-dom';
import { SideLogin } from '../components/SideLogin/SideLogin';
import { SideSignUp } from '../components/SideSignUp/SideSignUp';
import { Header } from '../components/Header/Header';
import { SideMenu } from "../components/SideMenu/SideMenu";
import { AuthProvider } from '../contexts/Auth';
import { MainRoutes } from "../routes";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import './App.css'
import { Footer } from '../components/Footer/Footer';

export function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Header />
        <main>
          <SideLogin />
          <SideSignUp />
          <SideMenu />
          <MainRoutes />
        </main>
        <Outlet />
        <Footer />
      </BrowserRouter>
      <ToastContainer autoClose={3000} position={toast.POSITION.TOP_CENTER}/>
    </AuthProvider>
  )
}
