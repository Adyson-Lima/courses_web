import {Link, useNavigate} from "react-router-dom";
import React, {useState} from "react";
import api from "../../services/api";

export default function NewUpdate(){

  const [name, setName] = useState('');
  const [value, setValue] = useState('');

  const navigate = useNavigate();

  // CREATE, cria course na api
  async function createCourse(e){
    e.preventDefault();

    const data = {name, value};

    try{
      await api.post('/api/v1/courses', data, {});
      navigate("/");
    }catch(err){
      alert("Erro ao salvar curso!");
    }

  }

  return(
    <div className="card border-primary" style={{marginTop: '20px'}} >
      <div className="card-header bg-primary" style={{color: '#fff'}}>
        Courses Crud
      </div>
      <div className="card-body">

      <Link className="btn btn-dark" style={{marginBottom: '5px'}}
      to="/">Home</Link>

      <form onSubmit={createCourse}>
            <div className="form-group">
              <label htmlFor="name">Name</label>

              <input
              id="name"
              type="text"
              style={{marginBottom: '20px'}}
              className="form-control"
              placeholder="Name"
              value={name}
              onChange={e => setName(e.target.value)}></input>

            </div>

            <div className="form-group">
              <label htmlFor="description">Value</label>

              <input
              id="value"
              type="text"
              style={{marginBottom: '20px'}}
              className="form-control"
              placeholder="Value"
              value={value}
              onChange={e => setValue(e.target.value)}></input>
            </div>
            <button type="submit" className="btn btn-primary">Enviar</button>

          </form>

          </div>
        </div>

  );

}
