import { createSlice } from '@reduxjs/toolkit'
// Slice
const slice = createSlice({
  name: 'members',
  initialState: [
      {id: 0,'first_name':'Srihitha', 'last_name':'Kilari', 'phone_no':'123-344-2342','email':'kilari.s@northeastern.edu', "profile_pic":'default-img.jpeg'},
      {id: 1,'first_name':'Srihitha', 'last_name':'Kilari', 'phone_no':'123-344-2342','email':'kilari.s@northeastern.edu', "profile_pic":'default-img.jpeg'},
      {id: 2,'first_name':'Srihitha', 'last_name':'Kilari', 'phone_no':'123-344-2342','email':'kilari.s@northeastern.edu', "profile_pic":'default-img.jpeg'},
    ],
  reducers: {
    addMemberFn: (state, action) => {
      console.log(action.payload);
      console.log(state.user);
      action.payload.profile_pic = action.payload.profile_pic? action.payload.profile_pic : 'default-img.jpeg';
      state.push( action.payload );
    },
    removeMemberFn: (state, action) =>  {
      console.log(action.payload);
      console.log(state.user);
      // state.members.remove(action.payload.id);
    },
  },
});
export default slice.reducer

// Actions
const { addMemberFn, removeMemberFn } = slice.actions
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