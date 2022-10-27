import axios from "axios";
import React from "react";
import { useSelector } from "react-redux";

const token = localStorage.getItem("token");

export const instance = axios.create({
  baseURL:
    // `http://13.125.143.92:3000`,
    `http://13.209.80.213:3000`,
  // `https://www.spartaseosu.shop`,
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
  getOnePost: (payload) => instance.get(`/posts/${payload}`),
  addComment: (payload) =>
    instance.post(`/comments/${payload.postId}`, payload, {
      headers: { Authorization: `Bearer ${token}` },
    }), //각각의 get,post,delete,patch입니다!
  deleteComment: (params) => instance.delete(`/comments/${params}`),
  updateComment: (params, payload) =>
    instance.put(
      `/comments/${params}`,
      { memo: payload },
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    ),
};

export const postsApi = {
  //각각의 get,post,delete,patch입니다!
  getPosts: () => {
    return instance.get(`/posts`);
  },

  creatPost: (inputs) => {
    console.log(inputs);
    return instance.post(`/posts`, inputs, {
      headers: { Authorization: `Bearer ${token}` },
    });
  },

  deletePost: (params) =>
    instance.delete(`/posts/${params}`, {
      headers: { Authorization: `Bearer ${token}` },
    }),
  updatePost: (params, paylaod) =>
    instance.put(
      `/posts/${params}`,
      { memo: paylaod },
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    ),
};
