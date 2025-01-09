// Simulate a process where the number of tasks is determined dynamically (e.g., fetching comments for N posts).
// Hint: Dynamically build the chain of .then() calls based on input.
//1. Depending on the number of posts, create a series of .then() calls dynamically.
//2.Use setTimeout to simulate the delay in fetching the comments for each post.
//3.Build a dynamic chain of .then() calls to fetching comments

// fetch comments for single post
function fetchCommentForSinglePost(postId){
    return new Promise((resolve)=>{
        setTimeout(()=>{
           return resolve(`Comments for post: ${postId}`)
        },1000)
    })
}

function fetchCommentsForNumOFPost(n){
    let tasks = [];

    for(let i =1 ;i <=n ;i++){
       tasks.push(fetchCommentForSinglePost(i))

    }
    return Promise.all(tasks);

}


fetchCommentsForNumOFPost(5).then((res)=>{
    console.log("all comments==== ",res)
}).catch(err=> console.log(err));



