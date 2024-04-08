export type TokenType = {
   accessToken: string;
   refreshToken: string;
};

export const getAccessToken = () => {
   return localStorage.getItem('damda-atk');
};

export const getRefreshToken = () => {
   return localStorage.getItem('damda-rtk');
};

export const setToken = ({ accessToken, refreshToken }: TokenType) => {
   localStorage.setItem('damda-atk', accessToken);
   localStorage.setItem('damda-rtk', refreshToken);
};

export const removeToken = () => {
   localStorage.removeItem('damda-atk');
   localStorage.removeItem('damda-rtk');
};

export const isLoggedIn = getAccessToken() ? true : false;
