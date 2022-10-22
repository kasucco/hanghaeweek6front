import axios from "axios";

export const instance = axios.create({
  baseURL: `http://43.201.72.85:3000/`,
});

export const membersApi = {
  postMember: (payload) => instance.post(`/members/login`, payload), //각각의 get,post,delete,patch입니다!
  creatMember: (members) => instance.post(`/members/signup`, members),
  deleteMember: (membersId) => instance.delete(`/members/${membersId}`),
  updateMember: (membersId, edit) =>
    instance.patch(`/members/${membersId}`, { memo: edit }),
};
