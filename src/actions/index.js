import jsonplaceholder from '../apis/JsonPlaceholder';
import  _  from 'lodash'

export const fetchPostsAndUsers = ()=> async (dispatch, getState) =>{
    await dispatch(fetchPosts());
    const userIds= _.uniq(_.map(getState().posts, 'userId'));
    userIds.forEach(id=> dispatch(fetchUser(id)))
}

export const fetchPosts = ()=> async dispatch=>{
        const response = await jsonplaceholder.get('/posts')
        dispatch({type:'FETCH_POSTS', payload: response.data})
    }

export const fetchUser=(id)=> async dispatch =>{
    _fetchUser(id,dispatch)
}

const _fetchUser= _.memoize(async (id,dispatch)=>{
    const response = await jsonplaceholder.get(`/users/${id}`);
    dispatch({type:'FETCH_USER', payload:response.data})
})