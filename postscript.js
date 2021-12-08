
function storeitem(){
    // const container = document.getElementById("main");  
    var title=document.getElementById("title").value;
    var description=document.getElementById("description").value;
    var author=document.getElementById("author").value;
    let blogs = JSON.parse(localStorage.getItem("blogs"))
    blogs.push({title,description,author})
    // blogs.push(a1.title);
    // blogs.push(a2.description);
    // blogs.push(a3.author); 
    localStorage.setItem("blogs",JSON.stringify(blogs))
    // localStorage.setItem("description",a2);
    // localStorage.setItem("author",a3);
    // let new_blog;
    // blogs.forEach(i => {
    //     new_blog = `<div class='text-center bg-info'><h1>${i.title}</h1><p> ${i.description}</p><p> ${i.author}</p></div>`
    //     // container.innerHTML += new_blog;
    //     console.log(new_blog);
    // }); 
    window.location.href="mainproj.html";


}


