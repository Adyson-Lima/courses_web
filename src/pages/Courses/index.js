import { Link } from "react-router-dom";

export default function Courses(){
  return(
    <div className="card border-primary" style={{marginTop: '20px'}}>
      <div className="card-header bg-primary" style={{color: '#fff'}}>
        Courses Crud
      </div>
      <div className="card-body">

        {/* botão para criar novo */}
        <Link className="btn btn-success" style={{marginBottom: '10px'}}
      to="/">Novo</Link>

      {/* tabela */}
      <table className="table table-hover">
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Name</th>
              <th scope="col">Value</th>
              <th scope="col">Ações</th>
            </tr>
          </thead>
          <tbody>
              <tr>
                <th scope="row"></th>
                  <td></td>
                  <td></td>
                  <td></td>
              </tr>
            </tbody>
        </table>

      </div>
    </div>
  );
}

