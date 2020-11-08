const tweeter = Tweeter()
const renderer = Renderer()
const post = function(){
    const newTwit = $("#input").val()
    tweeter.addPost(newTwit)
    renderer.renderPosts(tweeter.getPosts())
}
$("body").on("click", ".add-comment", function(){
    const newComment = $(this).closest("div").find("input").val()
    const post_ID = $(this).closest(".post").data().id
    tweeter.addComment(newComment,post_ID)
    renderer.renderPosts(tweeter.getPosts())
})

$("body").on("click", ".delete-comment", function(){
    const post_ID = $(this).closest(".post").data().id
    const comm_ID = $(this).closest(".comments").data().id
    tweeter.removeComment(post_ID,comm_ID)
    renderer.renderPosts(tweeter.getPosts())
})

$("body").on("click", ".delete-post", function(){
    const post_ID = $(this).closest(".post").data().id
    tweeter.removePost(post_ID)
    renderer.renderPosts(tweeter.getPosts())
})