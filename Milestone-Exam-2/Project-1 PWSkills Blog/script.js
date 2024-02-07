const modalContainer=document.querySelector('.modal-container')
const createBlog=document.getElementById('create-blog')
const blogs=document.querySelector('.blogs')
const addBlog=document.getElementById('add-blog')
const cancel=document.querySelector('.modal span')

const demoBlogPosts = [
    {
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgkw8vrt9T5G4PJmm6J0tZuV8p0UZQZP0uQw&usqp=CAU",
        title: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil amet veritatis consequuntur similique aliquam, praesentium blanditiis iure, quod fugiat tempore eos a ab esse",
        content: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil amet veritatis consequuntur similique aliquam, praesentium blanditiis iure, quod fugiat tempore eos a ab esse, cupiditate pariatur adipisci maiores fugit optio autem modi? Molestias, ex at velit recusandae officiis reiciendis nostrum voluptatem distinctio libero suscipit, quae provident illo sit. Cupiditate odio autem corporis assumenda id blanditiis. Quaerat non dolor voluptatem corporis? Exercitationem enim eum ducimus, minus doloremque consectetur perspiciatis incidunt eaque laborum accusantium modi praesentium nulla cupiditate iste sint totam harum voluptates eveniet autem ut, atque inventore odit. Excepturi, voluptatum dicta laboriosam et natus voluptate saepe tempore, nobis, earum sit aliquam ex quod mollitia velit sed dolore reiciendis. Quibusdam laudantium eveniet voluptas nesciunt adipisci ipsum! Odio distinctio suscipit pariatur iste laborum, saepe aspernatur reiciendis! At illum deserunt consequatur fugit neque quae, provident perspiciatis, excepturi non sunt earum porro nostrum? Similique voluptates quisquam quos neque nobis aliquid omnis esse, tempore maiores ducimus eaque quo molestiae iste dolorum minus obcaecati deserunt, inventore repudiandae quia, dolore aperiam? Quas neque cumque accusamus? Quo rerum, odio placeat aperiam corrupti magni aliquid libero illo vero similique molestias, mollitia animi consequatur ea, hic quod explicabo quidem! Quae reprehenderit maiores amet iste dolorem? Consectetur quis aliquam error expedita veniam iste quos sit molestias consequuntur impedit dicta sapiente perspiciatis dolorem exercitationem necessitatibus commodi quia aspernatur illum a harum libero, qui labore, mollitia quas. Veritatis nesciunt suscipit laudantium harum ex repellendus molestiae accusamus, ad debitis repellat vero ea asperiores odio dolorem illo culpa quas dignissimos autem iusto adipisci, neque nemo commodi nisi? Est ad, culpa cupiditate assumenda veritatis et aliquam nihil facilis dolore, provident, doloribus dolorem voluptatem magni ut magnam harum quae sequi! Mollitia asperiores, sit ipsa iste temporibus alias fuga numquam. Quis, aliquid! Ipsam incidunt id officiis dolore neque totam nobis mollitia? Unde dolorum quo minus pariatur ut a accusantium?"
    },
    {
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7Qc26dWHF3v3iVvV3naTQaGY1duvjoevFVw&usqp=CAU",
        title: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil amet veritatis consequuntur similique aliquam, praesentium blanditiis iure, quod fugiat tempore eos a ab esse.",
        content: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil amet veritatis consequuntur similique aliquam, praesentium blanditiis iure, quod fugiat tempore eos a ab esse, cupiditate pariatur adipisci maiores fugit optio autem modi? Molestias, ex at velit recusandae officiis reiciendis nostrum voluptatem distinctio libero suscipit, quae provident illo sit. Cupiditate odio autem corporis assumenda id blanditiis. Quaerat non dolor voluptatem corporis? Exercitationem enim eum ducimus, minus doloremque consectetur perspiciatis incidunt eaque laborum accusantium modi praesentium nulla cupiditate iste sint totam harum voluptates eveniet autem ut, atque inventore odit. Excepturi, voluptatum dicta laboriosam et natus voluptate saepe tempore, nobis, earum sit aliquam ex quod mollitia velit sed dolore reiciendis. Quibusdam laudantium eveniet voluptas nesciunt adipisci ipsum! Odio distinctio suscipit pariatur iste laborum, saepe aspernatur reiciendis! At illum deserunt consequatur fugit neque quae, provident perspiciatis, excepturi non sunt earum porro nostrum? Similique voluptates quisquam quos neque nobis aliquid omnis esse, tempore maiores ducimus eaque quo molestiae iste dolorum minus obcaecati deserunt, inventore repudiandae quia, dolore aperiam? Quas neque cumque accusamus? Quo rerum, odio placeat aperiam corrupti magni aliquid libero illo vero similique molestias, mollitia animi consequatur ea, hic quod explicabo quidem! Quae reprehenderit maiores amet iste dolorem? Consectetur quis aliquam error expedita veniam iste quos sit molestias consequuntur impedit dicta sapiente perspiciatis dolorem exercitationem necessitatibus commodi quia aspernatur illum a harum libero, qui labore, mollitia quas. Veritatis nesciunt suscipit laudantium harum ex repellendus molestiae accusamus, ad debitis repellat vero ea asperiores odio dolorem illo culpa quas dignissimos autem iusto adipisci, neque nemo commodi nisi? Est ad, culpa cupiditate assumenda veritatis et aliquam nihil facilis dolore, provident, doloribus dolorem voluptatem magni ut magnam harum quae sequi! Mollitia asperiores, sit ipsa iste temporibus alias fuga numquam. Quis, aliquid! Ipsam incidunt id officiis dolore neque totam nobis mollitia? Unde dolorum quo minus pariatur ut a accusantium?"
    },
    {
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRe5d23NxDuibSd66laALX1Bs1CqBa-sL7eBQ&usqp=CAU",
        title: "CSS3: Cascading Style Sheets 3",
        description: "CSS3, short for Cascading Style Sheets 3, is the latest version of the CSS language used to describe the presentation and layout of web pages.",
        content: `CSS3 introduced several new features and improvements over its predecessor, CSS2. Some of the key features and modules introduced in CSS3 include:

        Selectors: CSS3 introduced new types of selectors, allowing developers to target elements more precisely. Examples include attribute selectors, :nth-child(), :nth-of-type(), and more.
        
        Box Model: The box model was expanded to include properties like box-shadow, border-radius, and box-sizing. These properties enable more sophisticated layout and design possibilities.
        
        Transitions and Animations: CSS3 allows smooth transitions and animations using the transition and @keyframes rules. This allows developers to create dynamic and interactive web elements without relying on JavaScript.
        
        Media Queries: CSS3 introduced media queries, enabling web developers to create responsive designs that adapt to different screen sizes and devices. This has become crucial for modern web development as mobile and tablet usage continues to grow.
        
        Flexbox and Grid Layout: CSS3 introduced flexible box (flexbox) and grid layout systems, providing powerful tools for creating complex, responsive, and flexible page layouts.
        
        Multi-column Layout: CSS3 allows developers to create multi-column layouts for text content, making it easier to create newspaper-style designs.
        
        Custom Fonts: With CSS3, web developers can use the @font-face rule to include custom fonts on their websites, giving designers more creative freedom over typography.
        
        CSS Variables (Custom Properties): CSS3 introduced custom properties (variables) that allow developers to define reusable values throughout the stylesheet.
        
        Backgrounds and Gradients: CSS3 offers more options for background styles, including gradients, images, and blending modes.
        
        Transformations: CSS3 allows for 2D and 3D transformations, enabling developers to rotate, scale, skew, and translate elements in both 2D and 3D space.
        
        CSS3 has greatly expanded the possibilities of web design and has become widely supported by modern web browsers. However, it's important for developers to be aware of browser compatibility for certain CSS3 features, especially when targeting older browsers that might not fully support the latest CSS specifications. To ensure consistent user experiences, developers often use feature detection and fallback strategies when working with CSS3 features.`
    }
]

const pos=JSON.parse(localStorage.getItem('blogPost'))
if(pos==null){
    localStorage.setItem('blogPost',JSON.stringify(demoBlogPosts))
}

const getAllPosts=()=>{
    let blogPosts=JSON.parse(localStorage.getItem('blogPost')||"[]")
    document.querySelectorAll('.blog').forEach(blog=>blog.remove())
    blogPosts.forEach((blogpost,index)=>{
        let blog=document.createElement('div')
        blog.classList.add('blog')
        blog.innerHTML=`
        <div class="img-cont">
            <img src=${blogpost.url} alt=${blogpost.title}>
        </div>
        <h4>${blogpost.title}</h4>
        <p>${blogpost.description}</p>
        <a href="./blogPost/blog.html" onclick="localStorage.setItem('postIndex', JSON.parse(${index}))">Read</a>
    `
        blogs.appendChild(blog)
    })
}

getAllPosts()

createBlog.onclick=()=>{
    modalContainer.classList.add('active')
}

cancel.onclick=()=>{
    modalContainer.classList.remove('active')
}

addBlog.onclick=()=>{
    const title=document.querySelector('#title')
    const description=document.querySelector('#description')
    const content=document.querySelector('#post')
    const url=document.querySelector('#url')

    if(!title||!description||!content||!url){
        alert('All field required')
        return
    }

    let obj={
        title:title.value,
        description:description.value,
        content:content.value,
        url:url.value
    }
    let blogpost=JSON.parse(localStorage.getItem('blogPost'))
    console.log(blogpost)
    let array
    if(blogpost){
        array=[...blogpost,obj]
    }
    else{
        array=[obj]
    }
    modalContainer.classList.remove('active')
    localStorage.setItem('blogPost',JSON.stringify(array))
    getAllPosts()
}