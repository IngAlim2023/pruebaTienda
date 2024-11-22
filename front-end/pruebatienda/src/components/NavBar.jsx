import React from 'react';
import '../assets/css/NavBar.css';
import { Link } from 'react-router-dom';
import { LuHome } from "react-icons/lu";
import { LuStore } from "react-icons/lu";
import { CgProfile } from "react-icons/cg";
import { MdOutlineShoppingCart } from "react-icons/md";
import { RiShoppingBagLine } from "react-icons/ri";
import toast from 'react-hot-toast';

export function NavBar(props) {
    const cerrar = () => {
        props.setSide(false);
        toast.success('Legamos!!');
    }
  return (
    <div className={`sidenav ${props.side ? 'active': ''}`}>
      <ul>
        <li>
            <Link to="/"  onClick={cerrar} > <LuHome className='nav-icon'/> Inicio</Link>
        </li>
        <li>
            <Link to="/productos"  onClick={cerrar} > <RiShoppingBagLine className='nav-icon'/> Productos</Link>
        </li>
        <li>
            <Link to="/tiendas"  onClick={cerrar} > <LuStore className='nav-icon'/> Tiendas</Link>
        </li>
        <li>
            <Link to="/perfil"  onClick={cerrar} > <CgProfile className='nav-icon'/> Perfil</Link>
        </li>
        <li>
            <Link to="/compras"  onClick={cerrar} > <MdOutlineShoppingCart className='nav-icon'/> Compras</Link>
        </li>
      </ul>
    </div>
  )
}