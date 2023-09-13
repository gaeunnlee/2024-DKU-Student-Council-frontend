import { rest } from 'msw';
import { API_PATH, CONSTANTS } from '../../constants';

const { SERVER_URL } = CONSTANTS;

export const studentAuthHandler = [
   rest.post<{ studentId: string; password: string }>(
      SERVER_URL + API_PATH.SIGNUP_VERIFY,
      async (req, res, ctx) => {
         const { studentId, password } = await req.json<{ studentId: string; password: string }>();

         if (studentId === '32001234' && password === 'gkdl1234') {
            return res(
               ctx.status(200),
               ctx.json({
                  [CONSTANTS.atk_key]: 'mocked_user_atk',
                  [CONSTANTS.rtk_key]: 'mocked_user_rtk',
                  msg: '인증에 성공하였습니다.',
               }),
            );
         } else {
            return res(
               ctx.status(400),
               ctx.json({
                  msg: '인증에 실패하였습니다.',
               }),
            );
         }
      },
   ),
];
