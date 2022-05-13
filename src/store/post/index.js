import * as actions from './actions';

const initialState = {
    posts: []
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actions.setPostsAction:
            return { ...state, posts: [...state.posts, ...action.payload] }
        default:
            return state;
    }
}

export const selectPosts = (store) => store.post.posts;

export default reducer;