import { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ROUTES } from "./constants";

/**
 * @description 라우터
 * @author 이호연
 */
export default function Router() {
   console.log(ROUTES);
   return (
      <BrowserRouter>
         {/* TODO: 로딩 컴포넌트 만들어 넣기 */}
         <Suspense fallback={<div>loading...</div>}>
            <Routes>
               <Route path={ROUTES.MAIN.root} element={<div>main</div>} />
            </Routes>
         </Suspense>
      </BrowserRouter>
   );
}
