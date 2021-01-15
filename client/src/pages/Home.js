import React, { useState, useEffect } from "react";
import { PostList, PostListItem } from "../components/PostList";
import "./style.css";
import NewPostButton from "../components/NewPostButton";
import API from "../utils/API";

function Home() {
  // Setting our component's initial state
  const [posts, setPosts] = useState([]);

  // Load all posts and store them with setPosts
  useEffect(() => {
    loadPosts();
  }, []);

  // Loads all posts and sets them to pots
  function loadPosts() {
    API.getAllPosts()
      .then((res) => {
        console.log("posts", res.data);
        setPosts(res.data);
      })
      .catch((err) => console.log(err));
  }
  return (
    <div>
      <NewPostButton />

      {!posts.length ? (
        <h1 className="text-center">No Recipes to Display</h1>
      ) : (
        <PostList>
          {posts.map((post) => {
            return (
              <PostListItem
                key={post.username}
                image={post.image}
                restaurant_name={post.restaurant_name}
                rating={post.rating}
                caption={post.caption}
                number_of_likes={post.number_of_likes}
                username={post.username}
              />
            );
          })}
        </PostList>
      )}

      {/* {posts.length ? (
        <div className="postCard">
          <PostCard data={posts} />
        </div>
      ) : (
        <h3>No Results to Display</h3>
      )} */}
    </div>
  );
}

export default Home;
