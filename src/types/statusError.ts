interface HTTPErrorProps {
   statusCode: number;
   code: string;
   message: string[];
   errorResponse?: Response;
}

class HTTPError extends Error {
   statusCode?: number;
   code?: string;

   constructor(props: HTTPErrorProps) {
      super(props.message[0]);
      this.name = 'HTTPError';
      this.statusCode = props.statusCode;
      this.code = props.code;
   }
}

export default HTTPError;
