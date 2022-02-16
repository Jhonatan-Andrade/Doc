

import { useContext } from "react";
import { IoAlertOutline ,IoHome } from "react-icons/io5";
import { Link } from 'react-router-dom';
import { ThemeContext } from "styled-components";

import {NotFoundBox,NotFoundButton,NotFoundErro,NotFoundTitle,NotFoundIcon } from'./styleNotFound';

export default function  NotFound() {

    const {title,colors} = useContext(ThemeContext)

    
    return(
        <NotFoundBox>
            <NotFoundErro>
                <NotFoundIcon>
                    <IoAlertOutline size={50} color={colors.text1}/>
                </NotFoundIcon>
                <NotFoundTitle>Site não Encontrado</NotFoundTitle>
            </NotFoundErro>
            <div>
                <Link 
                    style={{
                      textDecoration:'none',
                      fontSize:50,
                    }} 
                    to={'/'}
                >
                    <NotFoundButton>
                        <IoHome size={28}  color="#fff"  />
                    </NotFoundButton>
                </Link>
            </div>
        </NotFoundBox>
    )
}