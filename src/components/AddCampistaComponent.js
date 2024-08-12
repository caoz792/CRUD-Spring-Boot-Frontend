import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import CampistaService from '../services/CampistaService';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';


export const AddCampistaComponent = () => {

    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [email, setEmail] = useState('');
    const navigate = useNavigate();
    const {id} = useParams();

    const saveOrUpdateCampista = (e) => {
        e.preventDefault();
        const campista = { nombre, apellido, email };

        if(id){
            CampistaService.updateCampista(id,campista).then((response) => {
                console.log(response.data);
                navigate('/campistas');
            }).catch(error => {
                console.log(error)
            })
        }
        else{
            CampistaService.createCampista(campista).then((response) => {
                console.log(response.data);
                navigate('/campistas');
            }).catch(error => {
                console.log(error)
            })
        }
        
    }

    useEffect(() => {
        CampistaService.getCampistaById(id).then((response) => {
            setNombre(response.data.nombre);
            setApellido(response.data.apellido);
            setEmail(response.data.email);
        }).catch(error => {
            console.log(error);
        })
    },[])

    const title = () => {
        if(id){
            return <h2 className='text-center'>Actualizar campista</h2>;
        }
        else{
            return <h2 className='text-center'>Agregar campista</h2>;
        }
    }

  return (
    <div>
        <div className='container'>
            <div className='row'>
            <div className='card col-md-6 offset-md-3 offset-md-3'>
                <h2 className='text-center'>
                    {
                        title()
                    }
                </h2>
                <div className='card-body'>
                    <form>
                        <div className='form-group mb-2'>
                            <label className='form-label'>Nombre</label>
                            <input
                                type='text'
                                placeholder='Digite su nombre'
                                name='nombre'
                                className='form-control'
                                value={ nombre }
                                onChange={ (e) => setNombre(e.target.value) }
                            />
                        </div>
                        <div className='form-group mb-2'>
                            <label className='form-label'>Apellido</label>
                            <input
                                type='text'
                                placeholder='Digite su apellido'
                                name='apellido'
                                className='form-control'
                                value={ apellido }
                                onChange={ (e) => setApellido(e.target.value) }
                            />
                        </div>
                        <div className='form-group mb-2'>
                            <label className='form-label'>Email</label>
                            <input
                                type='email'
                                placeholder='Digite su email'
                                name='email'
                                className='form-control'
                                value={ email }
                                onChange={ (e) => setEmail(e.target.value) }
                            />
                        </div>
                        <button className='btn btn-success' onClick = {(e) => saveOrUpdateCampista(e)}>Guardar</button>
                        &nbsp;&nbsp;
                        <Link to='/campistas' className='btn btn-danger'>Cancelar</Link>
                    </form>
                </div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default AddCampistaComponent;