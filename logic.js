const Tweeter = function(){
    const _posts = []
    let postIdCounter = 0
    let commentIdCounter = 0
    const getPosts = () => _posts
    const addPost = function(text){
        let i = _posts.length + 1
        const new_twit ={
            text: text,
            id: "p"+i,
            comments: []
        }
        _posts.push(new_twit)
        postIdCounter++
    }

    const removePost = function(twit_ID){
        let i = 0
        for(let twit of _posts){
            if(twit.id == twit_ID){
             _posts.splice(i,1) 
            }
            else{
                i++
            }
        }
    }

    const addComment = function(comment, twit_ID){
        for(let twit of _posts){
            if(twit.id == twit_ID){
                let i = 0
                let t = 0
                if(twit.comments.length != 0 ){
                    i = twit.comments.length-1 
                    t = (twit.comments[i].id).substring(1)
                    t++
                }else{
                    t = 1
                }
                const new_comment = {
                    id: "c"+ t,
                    text: comment
                }
                twit.comments.push(new_comment)
                commentIdCounter++
            }
        }
    }

    const removeComment = function(twit_ID, comment_ID){
        let i = 0
        for(let twit of _posts){
            if(twit.id == twit_ID){
                for(let com of twit.comments){
                    if(com.id == comment_ID){
                        twit.comments.splice(i,1)
                    } else{
                         i++
                }
            }
        }
    }
}
    return{
        addPost: addPost,
        getPosts: getPosts,
        addComment: addComment,
        removePost: removePost,
        removeComment: removeComment
    }
}
