export const setPostsAction = 'SET_POSTS';

export const setPosts = (posts) => ({
    type: setPostsAction,
    payload: posts,
});