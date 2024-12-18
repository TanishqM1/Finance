import React, { useState } from "react";
import styled from "styled-components";
import avi from '../../img/avi.png'
import { menuitems } from "../../utils/menuitems";
import { signout } from "../../utils/icons";


function Navigation({active, setActive}) {

    
    return(
        //styling for the user pfp as well as text beside it.
        <NavStyle>
            
        <div class="user-con">
            <img src={avi} alt=""/>
            <div class="text">
                <h2>Tanishq
                    <p></p>
                </h2>
            </div>
        </div>
        {/* Dashboard items from "menuitems" with an onclick listener. Each item has a different id, which is kept in "setactive"*/}
        <ul className ="menu-items">
            {menuitems.map((item)=> {
                return <li 
                key ={item.id}
                onClick={()=> setActive(item.id)}
                className={active === item.id ? 'active': ''}

                >
                    
                    {item.icon}
                    <span>{item.title}</span>
                </li>
            })}
        </ul>
            {/* styling for bottom of the dashboard bar*/}
        <div class="bottom-nav">
          <li>
            {signout}  Sign Out
          </li>
        </div>

        </NavStyle>

    )
}

const NavStyle = styled.div`
    padding: 2rem 1.5rem;
    width: 374px;
    height: 100%;
    background: #28282A;
    border: 3px solid black;
    backdrop-filter: blur(4.5px);
    border-radius: 32px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 2rem;

    .user-con {
        height: 100px;
        display: flex;
        align-items: center;
        gap: 1rem;

        img {
            width: 80px;
            height: 80px;
            border-radius: 50%;
            object-fit: cover;
            background: grey;
            border: 2px solid black;
            padding: 0.2rem;
            box-shadow: 0px 1px 17px rgba(0, 0, 0, 0.06);
        }

        h2 {
            color: #0ddeb8;
        }

        p {
            color: #0ddeb8;
        }
    }

    .menu-items {
        list-style: none;
        padding: 0;
        margin: 0;
        color: #0ddeb8;
        flex: 1;
        display: flex;
        flex-direction: column;

        li {
            display: flex; 
            align-items: center; 
            margin: 12px;
            font-weight: 500;
            cursor: pointer;
            transition: all 0.4s ease-in-out;
            color: #0ddeb8;
            padding-left: 1rem;
            position: relative;

            img { 
                margin-right: 15px; 
                width: 24px; 
                height: 24px; 
            }

            span {
                white-space: nowrap; 
                overflow: hidden; 
                text-overflow: ellipsis; 
            }
            i{
                margin-right: 20px;
                transition: all .4s ease-in-out;
            }
        }
    }

    .active{
        color: #0ddeb8;
        i{
            color: white !important;
        }
        &::before{
            content: "";
                position: absolute;
                left: 0;
                top: 0;
                width: 4px;
                height: 100%;
                background: #d3d3d3;
                border-radius: 0 10px 10px 0;
        }
        
    }

    .bottom-nav {
        color: #0ddeb8;
    }
`;



export default Navigation