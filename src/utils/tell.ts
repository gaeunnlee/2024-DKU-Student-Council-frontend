export const formatphoneNumber = (phoneNumber: string) => {
   const number = phoneNumber.replace(/\D/g, '');
   const formattedphoneNumber = number.replace(/(\d{3})(\d{4})(\d{4})/, '$1-$2-$3');
   return formattedphoneNumber;
};
