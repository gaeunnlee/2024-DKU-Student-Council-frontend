import { rest } from 'msw';
import { API_PATH, CONSTANTS } from '../../constant';

const { SERVER_URL } = CONSTANTS;

export const authHandler = [
   rest.post<{ studentId: string; password: string }>(SERVER_URL + API_PATH.LOGIN, async (req, res, ctx) => {
      const { studentId, password } = await req.json<{ studentId: string; password: string }>();

      if (studentId === '12345678' && password === 'qwer1234') {
         return res(
            // Respond with a 200 status code
            ctx.status(200),
            ctx.json({
               [CONSTANTS.atk_key]: 'mocked_user_atk',
               [CONSTANTS.rtk_key]: 'mocked_user_rtk',
               msg: '로그인 성공',
            }),
         );
      } else {
         return res(
            ctx.status(400),
            ctx.json({
               msg: '아이디 또는 비밀번호가 일치하지 않습니다.',
            }),
         );
      }
   }),
];
