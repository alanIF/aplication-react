import { useState } from 'react'
import { Post } from '../Post'

export function Social(){
    // variavel, e funcao para alterar ela
    const [posts,setPosts] = useState<string[]>([
        'Post 1',
        'Post 2',

    ])
    function createPost(){
        setPosts([...posts, 'Novo Post'])
  }

    return (
        <div >
        <h1 className='text-center'>React Introdução 2022</h1>
        {posts.map(post  =>{
          return <Post text={post} />
        })}
        <button className="btn btn-primary" onClick={createPost}>Adicionar Post</button>
  
      </div>
    )
    
}