const redirectToClient = (searchParams: URLSearchParams) => {
   window.location.href = searchParams.get('redirectUri') || '';
};

const isOAuthFlow = (searchParams: URLSearchParams) => {
   return searchParams.has('redirectUri');
};

export { redirectToClient, isOAuthFlow };
