import React, { useEffect } from 'react';

/**
 * 마운트 될 때만 실행되는 useEffect
 * @param callback useEffect 콜백
 * @returns void
 * @example
 * const Component = () => {
 *   useEffectOnce(() => {
 *    console.log('마운트 될 때만 실행됩니다.');
 *  });
 * return <div>...</div>
 * }
 * @auther 이호연
 */
export const useEffectOnce = (callback: React.EffectCallback) => {
   // eslint-disable-next-line react-hooks/exhaustive-deps
   useEffect(callback, []);
};
