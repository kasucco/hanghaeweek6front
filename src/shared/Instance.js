import axios from "axios";

const token = sessionStorage.getItem("token");

export const instance = axios.create({
  baseURL: `http://52.79.218.57:3000/`,
});

export const membersApi = {
  loginMember: (paylaod) => instance.post(`/members/login`, paylaod), //각각의 get,post,delete,patch입니다!
  creatMember: (members) => instance.post(`/members/signup`, members),
  deleteMember: (membersId) => instance.delete(`/members/${membersId}`),
  updateMember: (membersId, edit) =>
    instance.patch(`/members/${membersId}`, { memo: edit }),
  getMember: () => instance.get(`/members/login/:id`),
};

export const commentsApi = {
  addComment: (payload) =>
    instance.post(`/comments/${payload.postId}`, payload, {
      headers: { Authorization: `Bearer ${token}` },
    }), //각각의 get,post,delete,patch입니다!
  deleteComment: (payload) => instance.delete(`/comments/${payload.postId}`),
  updateComment: (payload, edit) =>
    instance.patch(`/comments/${payload.postId}`, { memo: edit }),
};

export const postsApi = {
  //각각의 get,post,delete,patch입니다!
  creatPost: (posts) => {
    console.log(posts);
    return instance.post(`/posts`, posts, {
      headers: { Authorization: `Bearer ${token}` },
    });
  },

  deletePost: (membersId) =>
    instance.delete(`/posts/${membersId}`, {
      headers: { Authorization: `Bearer ${token}` },
    }),
  updatePost: (membersId, edit) =>
    instance.patch(
      `/posts/${membersId}`,
      { memo: edit },
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    ),
};
