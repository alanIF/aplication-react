type PostProps={
    titulo?:string
    text?:string;

}
export  function Post(props:PostProps){
    return (
        <div className="card">
            <div className="card-header">
                <h2>{props.titulo}</h2>
            </div>
            <div className="card-body">
                <p>{props.text}</p>

            </div>
           
        </div>
    );

}