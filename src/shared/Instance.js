import axios from "axios";

export const instance = axios.create({
  baseURL: `http://52.79.218.57:3000/`,
});

export const membersApi = {
  loginMember: (payload) => instance.post(`/members/login`, payload), //각각의 get,post,delete,patch입니다!
  creatMember: (members) => instance.post(`/members/signup`, members),
  deleteMember: (membersId) => instance.delete(`/members/${membersId}`),
  updateMember: (membersId, edit) =>
    instance.patch(`/members/${membersId}`, { memo: edit }),
};

export const postsApi = {
  postPost: (payload) => instance.post(`/posts/login`, payload), //각각의 get,post,delete,patch입니다!
  creatPost: (posts) => instance.post(`/posts`, posts),
  deletePost: (membersId) => instance.delete(`/posts/${membersId}`),
  updatePost: (membersId, edit) =>
    instance.patch(`/posts/${membersId}`, { memo: edit }),
};
