// src/components/PostList.js

import React, { useEffect, useState } from 'react';
import axios from 'axios';

const PostList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        setPosts(response.data);
        console.log(posts)
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div>
      <h1>Posts</h1>
      <ul>
        <table border="1">
          <thead>
            <td>Title</td>
            <td>Description</td>
          </thead>
       
        {posts.map(post => (


          <tbody>
              <tr>
                <td> 
                  {post.title}
                </td>
                   <td> 
                  {post.body}
                </td>         
         
              </tr>
           
          </tbody>
       

        ))}
     
      </table>
      </ul>

    </div>
  );
};

export default PostList;
