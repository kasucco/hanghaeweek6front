import axios from "axios";

export const instance = axios.create({
  baseURL: process.env.REACT_APP_URL,
});

export const membersApi = {
  getMember: () => instance.get(`/members`), //각각의 get,post,delete,patch입니다!
  creatMember: (members) => instance.post("/members", members),
  deleteMember: (membersId) => instance.delete(`/members/${membersId}`),
  updateMember: (membersId, edit) =>
    instance.patch(`/members/${membersId}`, { memo: edit }),
};
