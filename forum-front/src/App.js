import { useState } from "react";
import Rotas from "./Rotas/Rotas";
import { GlobalStyle } from "./Globalstyle";




function App(){
  const [news, setNews] = useState([])
  const [postFeed, setPostFeed] = useState([])
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [tags, setTags] = useState('');
  const [posts, setPosts] = useState([]);

  return(
    <>
    <GlobalStyle/>
      <Rotas 
      postFeed={postFeed}
      setPostFeed={setPostFeed}
      posts={posts}
      setPosts={setPosts}
      news={news} 
      setNews={setNews}
      title={title}
      setTitle={setTitle}
      content={content}
      setContent={setContent}
      tags={tags}
      setTags={setTags}
      />
    </>
  )
}

export default App