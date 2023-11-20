import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Courses from "./pages/Courses";

export default function CoursesRouter(){
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Courses />}/>
      </Routes>
    </BrowserRouter>
  );
}
