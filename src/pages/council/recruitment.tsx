import SinglePageLayout from '@components/layouts/SinglePageLayout';
import Box from '@components/ui/box';
import { FileBox } from '@components/ui/box/PostBox';
import { HEADING_TEXT, HEADING_STYLE } from '@constants/heading';
import { useEffectOnce } from '@hooks/useEffectOnce';
import { useLayout } from '@hooks/useLayout';
import React from 'react';

export default function Recruitment() {
   const { setLayout } = useLayout();

   useEffectOnce(() => {
      setLayout({
         title: HEADING_TEXT.COUNCIL.HEAD,
         backButton: true,
         isMain: false,
         fullscreen: false,
         headingText: HEADING_TEXT.RECRUIT.HEAD,
         subHeadingText: HEADING_TEXT.RECRUIT.SUBHEAD,
         headingStyle: HEADING_STYLE.COUNCIL.HEAD,
         subHeadingStyle: HEADING_STYLE.COUNCIL.SUBHEAD,
         rounded: true,
         dropDown: HEADING_STYLE.COUNCIL.DROPDOWN,
      });
   });

   return (
      <SinglePageLayout>
         <Box type='shadow' className='text-sm'>
            <h3>[55대 담다 총학생회 재학생 집행부 모집 ]</h3>
            <br></br>
            <p>
               그대의 청춘에 단국을 담다 🫴안녕하십니까 단국대학교 학우 여러분, 55대 담다 총학생회입니다. 담다
               총학생회와 함께 2023년 2학기를 만들어 나갈 단국대학교 재학생 집행부를 모집합니다!
            </p>
            <br></br>
            <ul>
               <li>✅️ 지원기간: 2023년 7월 13일 ~ 2023년 7월 18일</li>
               <li>✅️ 면접기간: 2023년 7월 19일 ~ 2023년 7월 22일</li>
               <li>✅️ 지원방법: 지원서 다운로드 후 작성하여dkudamda@gmail.com 으로 제출</li>
            </ul>
            <br></br>
            <span>
               ❗️반드시 <strong>지원 기간 내에</strong> 지원서를 제출해 주시기 바랍니다.
            </span>
            <span>
               ❗️* 문의는 총학생회장 박성헌 (010-6453-7733) 부총학생회장 박범성 (010-5246-3764)로
               부탁드립니다.
            </span>
         </Box>
         <FileBox files={[{ id: 0, url: '', originalName: '지원서.pdf', mimeType: 'pdf' }]} />
      </SinglePageLayout>
   );
}
