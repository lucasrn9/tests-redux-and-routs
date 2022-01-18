import { BrowserRouter,Routes,Route } from 'react-router-dom';
import { Home,News } from '../pages';


const Router = () =>{
    return (
        <BrowserRouter>
        <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/news" element={<News />} />
        </Routes>
        </BrowserRouter>
    )
}

export default Router;