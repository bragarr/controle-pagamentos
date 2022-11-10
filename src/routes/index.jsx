import { Route, Routes } from "react-router-dom";

import { useAuth } from "../Hooks/useAuth";
import { auth } from "../contexts/Firebase";
import { useAuthState } from "react-firebase-hooks/auth";

import { Home } from "../pages/Home/Home";
import { Cadastros } from "../pages/Cadastros/Cadastros"
import { Pagamentos } from "../pages/Pagamentos/Pagamentos"

export function MainRoutes() {

    const AreaReservadaCadastros = (parametro) => {
        const { logado } = useAuth();

        return logado > 0 ? <Cadastros /> : <Home /> 
    }

    const AreaReservadaPagamentos = (parametro) => {
        const { logado } = useAuth();

        return logado > 0 ? <Pagamentos /> : <Home /> 
    }

    return(
        <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="cadastros" element={<AreaReservadaCadastros Item={Cadastros} />}></Route>
            <Route path="pagamentos" element={<AreaReservadaPagamentos Item={Pagamentos} />}></Route>
        </Routes>
    )
}