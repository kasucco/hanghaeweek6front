import axios from "axios";
import React from "react";
import { useSelector } from "react-redux";

const token = sessionStorage.getItem("token");

export const instance = axios.create({
  baseURL: `http://52.79.218.57:3000/`,
});
// const user = useSelector((state) => state.members.members.id);
// console.log("user", user);

export const membersApi = {
  loginMember: (paylaod) => instance.post(`/members/login`, paylaod), //각각의 get,post,delete,patch입니다!
  creatMember: (members) => instance.post(`/members/signup`, members),
  deleteMember: () =>
    instance.delete(`/members/login`, {
      headers: { Authorization: `Bearer ${token}` },
    }),
  updateMember: (edit) =>
    instance.patch(`/members/login`, edit, {
      headers: { Authorization: `Bearer ${token}` },
    }),
  getMember: () =>
    instance.get(`/members/login/:id`, {
      headers: { Authorization: `Bearer ${token}` },
    }),
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
  getPosts: () => {
    return instance.get(`/posts`);
  },

  creatPost: (inputs) => {
    console.log(inputs);
    return instance.post(`/posts/${inputs.name}`, inputs, {
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
