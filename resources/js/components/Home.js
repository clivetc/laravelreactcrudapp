import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import Appcontainer from './Appcontainer';
import api from './api';
import { post } from 'jquery';

export default function Home() {
    const [posts, setPosts] = useState(null);

    useEffect(() =>{
        api.getAllPosts().then(res =>{
           const result = res.data;
           setPosts(resul.data)
        })
    },[])

    const renderPosts =() =>{
        if(!posts){
            return(
                <tr>
                    <td colSpan="4">
                        Loading posts....
                    </td>
                </tr>
            );
        }
        if(post.length ===0){
            return(
                <tr>
                    <td colSpan="4">
                        There is no post yet. Please add one
                    </td>
                </tr>
            );
        }
        return posts.map((post)=>(
            <tr>
                <td>{post.id}</td>
                <td>{post.title}</td>
                <td>{post.description}</td>
                <td>
                    <Link to={`/posts/${post.id}`}
                        className="btn btn-warning"
                    >EDIT</Link>
                    <button
                        className="btn btn-danger"
                        type="button"
                    >DELETE</button>
                </td>
            </tr>
        ))
    }

    return (
        <Appcontainer
            title="Crud App"
        >
             <Link to="/add" className="btn btn-primary">ADD POST</Link>
                    <div className="table-responsive">
                        <table className="table table-striped mt-4">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Title</th>
                                    <th>Description</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {renderPosts()}
                            </tbody>
                        </table>
                    </div>
        </Appcontainer>
    )
}
