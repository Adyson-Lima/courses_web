import {Link, useNavigate, useParams} from "react-router-dom";
import React, {useState, useEffect} from "react";
import api from "../../services/api";

export default function NewUpdate(){

  const [name, setName] = useState('');
  const [value, setValue] = useState('');

  const navigate = useNavigate();

  // O nome course_id, é o mesmo definido na rota
  const {course_id} = useParams();

  // CREATE/UPDATE, cria/atualiza course na api
  async function saveOrUpdateCourse(e){
    e.preventDefault();

    const data = {name, value};

    if(course_id === "0"){

      try {
        await api.post('/api/v1/courses', data, {});
        navigate("/");
      }catch(err){
        alert("Erro ao salvar curso!");
      }

    }else{
      try {
        await api.patch(`/api/v1/courses/${course_id}`, data, {});
        navigate("/");
      }catch(err){
        alert("Erro ao atualizar curso!");
      }
    }

  }

  async function loadCourse(){
    try{
      const response = await api.get(`/api/v1/courses/${course_id}`,{});

      setName(response.data.name);
      setValue(response.data.value);
    }catch(err){
      alert("Erro ao carregar curso!");
      navigate("/");
    }
  }

  useEffect(() => {
    if(course_id === "0"){
      return;
    }else{
      loadCourse();
    }
  },[course_id]);

  return(
    <div className="card border-primary" style={{marginTop: '20px'}} >
      <div className="card-header bg-primary" style={{color: '#fff'}}>
        Courses Crud
      </div>
      <div className="card-body">

      <Link className="btn btn-dark" style={{marginBottom: '5px'}}
      to="/">Home</Link>

      <form onSubmit={saveOrUpdateCourse}>
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
