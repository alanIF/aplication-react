import {useState,useEffect} from 'react';

import Axios from "axios";


const  ProdutosList= () =>{
    const [listProdutos, setListProdutos] = useState([]);
    
   // listar dados
    useEffect(() => {
        Axios.get("https://localhost:7252/api/Produto/index").then((response) => {
            setListProdutos(response.data);
        });
    }, []);
    return(
        
       <div>
           <table className="table table-responsive table-hover">
                <thead>
                    <tr>
                        <th>#</th>

                        <th>Nome</th>
                        <th>Estoque Mínimo</th>

                    </tr>
                </thead>
                <tbody>
                {listProdutos.map((val) => (
        <td> {val.Id}   </td>
        <td> {val.Nome}   </td>
        <td> {val.EstoqueMinimo}   </td>

        ))
        }
                </tbody>
           </table>
              
               
           
       </div>
    );    
}
export default ProdutosList;