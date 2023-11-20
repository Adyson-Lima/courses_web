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

      </div>
    </div>
  );
}

