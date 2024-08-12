import React, { useEffect, useState } from 'react'
import CampistaService from '../services/CampistaService';
import { Link } from 'react-router-dom';

export const ListCampistasComponenet = () => {

  const [campistas, setCampistas] = useState([]);

  useEffect(() => {
    listarCampistas()
  },[])

  const listarCampistas = () => {
    CampistaService.getAllCampistas().then(response => {
        setCampistas(response.data);
        console.log(response.data);
    }).catch(error => {
        console.log(error);
    })
  }

  const deleteCampista = (campistaId) => {
    CampistaService.deleteCampista(campistaId).then((response) => {
        listarCampistas();
    }).catch(error => {
        console.log(error)
    })
  }

  return (
    <div className='container'>
        <h2 className='text-center'>Lista de campistas</h2>
        <Link to='/add-campista' className='btn btn-primary mb-2'>Agregar campista</Link>
        <table className='table table-bordered table-striped'>
            <thead>
                <th>ID</th>
                <th>Nombre</th>
                <th>Apellido</th>
                <th>Email</th>
                <th>Acciones</th>
            </thead>
            <tbody>
                {
                    campistas.map(
                        campista =>
                            <tr key={ campista.id }>
                                <td>{ campista.id }</td>
                                <td>{ campista.nombre }</td>
                                <td>{ campista.apellido }</td>
                                <td>{ campista.email }</td>
                                <td>
                                    <Link className='btn btn-info' to={ `/edit-campista/${campista.id}` }>Actualizar</Link>
                                    <button style={{marginLeft:"10px"}} className='btn btn-danger' onClick={() => deleteCampista(campista.id)}>Eliminar</button>
                                </td>
                            </tr>
                    )
                }
            </tbody>
        </table>
    </div>
  )
}

export default ListCampistasComponenet;