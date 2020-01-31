import React from 'react';
import {
    useParams,
    useLocation,
  } from "react-router-dom";
  const useQuery=()=> {
    return new URLSearchParams(useLocation().search);
  }
const BlogDetail = props => {
    let id = useParams().id
    
      let query = useQuery();
      console.log('useQuery.get() :', query.get('age'));
    console.log('useLocation() :', useLocation());
    console.log('useParams 1:', useParams());
    console.log('useParams 2:', useParams().id);
    console.log('useParams 3:', useParams().abc);
    return (
        <div>
            Blog Detail:
        </div>
    );
};

export default BlogDetail;