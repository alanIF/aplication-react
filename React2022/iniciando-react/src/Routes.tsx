import{
    BrowserRouter as Router,
    Routes,
    Route
   
} from "react-router-dom";
import { Catalog } from "./pages/Catalog";
import { Social } from "./pages/Social";
import { Teste } from "./pages/Teste";

export function AppRoutes(){
    return(
        <Router>
            <Routes>
                <Route path="/catalog" element={ <Catalog />
}>
                </Route>
                <Route path="/teste" element={<Teste />}>
                </Route>
                <Route path="/social" element={<Social />}>
                    
                </Route>
            </Routes>
            
        </Router>
    )
}

