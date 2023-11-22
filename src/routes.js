import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Courses from "./pages/Courses";
import NewUpdate from "./pages/NewUpdate"

export default function CoursesRouter(){
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Courses />}/>
        <Route path="/newupdate/:course_id" element={<NewUpdate />}/>
      </Routes>
    </BrowserRouter>
  );
}
