import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Detail from "../pages/detail/Detail";
import MembersLogin from "../pages/members/MembersLogin";
import MembersSignup from "../pages/members/MembersSignup";
import MembersModify from "../pages/members/MembersModify";
import Mypage from "../pages/mypage/Mypage";
import Main from "../pages/post/Main";
import Modify from "../pages/post/Modify";
import Form from "../pages/post/Form";
import MainCopy from "../pages/post/MainCopy";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/maincopy" element={<MainCopy />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/form" element={<Form />} />
        <Route path="/modify" element={<Modify />} />
        <Route path="/members/signup" element={<MembersSignup />} />
        <Route path="/members/login" element={<MembersLogin />} />
        <Route path="/membersmodify" element={<MembersModify />} />
        <Route path="/mypage" element={<Mypage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
