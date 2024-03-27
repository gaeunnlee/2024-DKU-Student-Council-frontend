interface HTTPErrorProps {
   statusCode: number;
   message?: string;
   errorResponse?: Response;
}

class HTTPError extends Error {
   statusCode?: number;
   errorResponse: Response | undefined;

   constructor(props: HTTPErrorProps) {
      super(props.message);
      this.name = 'HTTPError';
      this.statusCode = props.statusCode;
      this.errorResponse = props.errorResponse;
   }
}

export default HTTPError;
