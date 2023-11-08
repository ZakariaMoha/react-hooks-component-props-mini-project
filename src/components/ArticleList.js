import React from 'react'

function ArticleList({posts})  {
    return (
      <main>
          {posts.map((post) => (
              <ArticleList key={post.id} title={post.title} date={post.date} preview={post.preview} minutes={post.minutes} />
          ))}
      </main>
  
    )
  }
  
  export default ArticleList