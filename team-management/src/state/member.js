import { createSlice } from '@reduxjs/toolkit';


let members  = localStorage.getItem("members");
members = members? JSON.parse(members):[];
// Slice
const slice = createSlice({
  name: 'members',
  initialState: members,
  reducers: {
    addMemberFn: (state, action) => {
      console.log(action.payload);
      console.log(state.user);
      action.payload.profile_pic = action.payload.profile_pic? action.payload.profile_pic : 'default-img.jpeg';
      state.push( action.payload );
      localStorage.setItem("members", JSON.stringify(state));
    },
    removeMemberFn: (state, action) =>  {
      console.log(action.payload);
      console.log(state.user);
      state.splice(action.payload,1);
      localStorage.setItem("members", JSON.stringify(state));
    },
    updateMemberFn: (state, action) =>  {
      console.log(action.payload);
      console.log(state.user);
      state[action.payload[0]]=action.payload[1];
      localStorage.setItem("members", JSON.stringify(state));
    },
  },
});
export default slice.reducer

// Actions
const { addMemberFn, removeMemberFn, updateMemberFn } = slice.actions
export const addMember = (member) => async dispatch => {
  try {
    // const res = await api.post('/api/auth/login/', { username, password })
    console.log(member);
    dispatch(addMemberFn(member));
  } catch (e) {
    return console.error(e.message);
  }
}
export const removeMember = (id) => async dispatch => {
  try {
    // const res = await api.post('/api/auth/logout/')
    return dispatch(removeMemberFn(id))
  } catch (e) {
    return console.error(e.message);
  }
}

export const updateMember = (index, member) => async dispatch => {
  try {
    // const res = await api.post('/api/auth/logout/')
    return dispatch(updateMemberFn([index, member]))
  } catch (e) {
    return console.error(e.message);
  }
}