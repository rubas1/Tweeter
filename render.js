const Renderer = function(){
    const renderPosts = function(posts){
        $("#posts").empty()
        for(let post of posts){
            let newPost = $( "<div class='post' data-id="+post.id+">"+ post.text +"</div>")
            for(let comment of post.comments){
                let newComment = $("<div class='comments' data-id="+comment.id+">"+ comment.text +"</div>")
                newComment.append("<button class='delete-comment'>X</div>")
                newPost.append(newComment)
            }
            newPost.append("<div><input><button class='add-comment'>add comment</button></div>")
            newPost.append("<div><button class='delete-post'>delete post</button></div>")
            $("#posts").append(newPost)
        }
    }
    return{
        renderPosts
    }
}
