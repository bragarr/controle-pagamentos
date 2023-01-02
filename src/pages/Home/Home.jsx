import { auth } from "../../contexts/Firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import axios from "axios";

import { ApresentacaoPlataforma } from "../../components/ApresentacaoPlataforma/ApresentacaoPlataforma";
import { InformacoesGeraisUsuario } from "../../components/InformacoesGeraisUsuario/InformacoesGeraisUsuario";

import "./Home.css";

export function Home() {

    const apiPagamentos= import.meta.env.VITE_API_PAGAMENTOS;

    const [user] = useAuthState(auth);
    
    const [pagamentos, setPagamentos] = useState([]);

    const getPagamentos = async () => {
        try {
            const res = await axios.get(apiPagamentos);
            setPagamentos(res.data.sort((a,b) => (a.valor_pagamento < b.valor_pagamento ? 1 : -1)));
        } catch (error) {
            toast.error(error);
        }
    };

    useEffect(() => {
        getPagamentos();
    }, []);

    const NomeUsuario = () => {
        return user.displayName===null
        ?
        "New User. Go to your profile and set up your personal informations!"
        :
        user.displayName
    }

    const TituloDeApresentacaoDaPagina = () => {
        return !user
        ?
        ""
        :
        <article className="secao_homepage">
            <h2><b>Hello <NomeUsuario />!</b></h2>
            <p>Check it out a brief about your data in and outs!</p>
        </article>
    }

    const ApresentacaoPrincipalHomePage = () => {
        return !user
        ?
        <ApresentacaoPlataforma />
        :
        <InformacoesGeraisUsuario pagamentos={pagamentos} user={user} />

    }

    return(
        <section className="dashboard__principal">
            <TituloDeApresentacaoDaPagina />
            <ApresentacaoPrincipalHomePage />
        </section>
    )
}