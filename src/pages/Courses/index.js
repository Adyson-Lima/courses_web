import { Link } from "react-router-dom";
import React, {useState, useEffect} from "react";
import api from "../../services/api";


export default function Courses(){

  const [my_courses, setCourses] = useState([]);

  // READ, carrega dados da API
  useEffect(() => {
    api.get("api/v1/courses",{})
    .then(response => {setCourses(response.data)})
  },[]);

  // DELETE, apaga dados na API
  async function deleteCourse(id){
    try{
      await api.delete(`api/v1/courses/${id}`,{});
      setCourses(my_courses.filter(course => course.id !== id));
    }catch{
      alert("Erro ao excluir!");
    }
  }

  return(
    <div className="card border-primary" style={{marginTop: '20px'}}>
      <div className="card-header bg-primary" style={{color: '#fff'}}>
        Courses Crud
      </div>
      <div className="card-body">

        {/* botão para criar novo */}
        <Link className="btn btn-success" style={{marginBottom: '10px'}}
      to="/">Novo</Link>

      {/* inicio tabela */}
      <table className="table table-hover">
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Name</th>
              <th scope="col">Value</th>
              <th scope="col">Ações</th>
            </tr>
          </thead>
          <tbody> {/* inicio map de elementos tabela */}
            {my_courses.map(course => (
              <tr key={course.id}>
                <th scope="row">{course.id}</th>
                  <td>{course.name}</td>
                  <td>{course.value}</td>
                  <td>
                    <button
                    type="button"
                    className="btn btn-outline-info"
                    style={{margin: '2px'}}
                    >Editar</button>

                    <button type="button"
                    className="btn btn-outline-danger"
                    style={{margin: '2px'}}
                    onClick={() => deleteCourse(course.id)}
                    >Excluir</button>
                  </td>
              </tr>
            ))}{/* final map de elementos tabela */}

            </tbody>
        </table> {/* final tabela */}

      </div>
    </div>
  );
}

