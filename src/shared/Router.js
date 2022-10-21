import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Detail from "../pages/detail/Detail";
import Members from "../pages/members/Members";
import MembersModify from "../pages/members/memgersModity";
import Mypage from "../pages/mypage/Mypage";
import Main from "../pages/post/Main";
import Modify from "../pages/post/Modify";
import Form from "../pages/post/Form";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/form" element={<Form />} />
        <Route path="/modify" element={<Modify />} />
        <Route path="/members" element={<Members />} />
        <Route path="/membersmodify" element={<MembersModify />} />
        <Route path="/mypage" element={<Mypage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
