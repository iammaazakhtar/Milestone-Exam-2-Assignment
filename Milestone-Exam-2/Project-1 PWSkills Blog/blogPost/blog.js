const index=localStorage.getItem('postIndex')
const blogPost=JSON.parse(localStorage.getItem('blogPost'))[index]
const blogPage=document.getElementById('blog-page')

const showBlogPost=()=>{
    let blogCont=document.createElement('div')
    blogCont.innerHTML=`
        <div class="header">
            <div class="content">
                <h3>${blogPost.title}</h3>
                <p>
                    ${blogPost.description}
                </p>
            </div>
            <div class="img-container">
                <img src=${blogPost.url} alt=${blogPost.title}>
            </div>
        </div>
        <article>
            <p>
            ${blogPost.content}
            </p>
        </article>
    `
    blogPage.appendChild(blogCont)
}
showBlogPost()