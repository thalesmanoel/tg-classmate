import styled from "styled-components";
import profile from '../../assets/profile.svg'
import settings from '../../assets/settings.svg'
import { Link } from 'react-router-dom'

const textoOpcoes = ['HOME', 'SOBRE', 'CADASTRO', 'LOGIN']
const icones = [profile, settings]

const HeaderContainer = styled.header`
    justify-content: center;
    background-color:rgb(2, 2, 2);
    display: flex;
`
const Opcoes = styled.ul`
    display: flex;
`

const Opcao = styled.li`
    font-size: 16px;
    display: flex;
    align-items: center;
    text-align: center;
    height: 100%;
    padding: 0 5px;
    cursor: pointer;
    min-width: 120px;
    color: rgb(255, 255, 255);
`

const Icones = styled.ul`
    display: flex;
    align-items: center;
`

const Icone = styled.li`
    margin-right: 40px;
    width: 25px;
    list-style: none;
`

const IconesHeader = styled.img`
    width: 35px;
    display: flex;
`

function Header() {
    return(
        <HeaderContainer>
            <Opcoes>
                {textoOpcoes.map((texto) => (
                   <Link to={`/${texto.toLowerCase()}`}><Opcao><p>{texto}</p></Opcao></Link>
                ))}
            </Opcoes>
            <Icones>
                {icones.map((icone) => (
                    <Icone><IconesHeader src={icone}></IconesHeader></Icone>
                ))}
            </Icones>
        </HeaderContainer>
    )
}

export default Header;