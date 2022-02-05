import{
    BrowserRouter as Router,
    Routes,
    Route
   
} from "react-router-dom";

import { ProdutosList} from "./pages/Produtos/ProdutosList";

export function AppRoutes(){
    return(
        <Router>
            <Routes>
                
                
                <Route path="/produtos" element={<ProdutosList />}>
                </Route>
            </Routes>
            
        </Router>
    )
}

