import { instance } from "./conexion";

export const getAllProductos = async () => await instance.get('/verTiendasProductos');