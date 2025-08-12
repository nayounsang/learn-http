export type AuthHeader = Partial<{
  /**
   * `HTTP Authorization` 요청 헤더는 서버의 사용자 에이전트임을 증명하는 자격을 포함하여, 보통 서버에서 `401 Unauthorized` 상태를 `WWW-Authenticate` 헤더로 알려준 이후에 나옵니다.
   * @see https://developer.mozilla.org/ko/docs/Web/HTTP/Reference/Headers/Authorization
   */
  Authorization: string;
  /**
   * `HTTP WWW-Authenticate` 응답 헤더는 특정 리소스에 접근하기 위해 사용될 수 있는 HTTP [인증](https://developer.mozilla.org/ko/docs/Web/HTTP/Guides/Authentication) 방식(또는 [챌린지](https://developer.mozilla.org/ko/docs/Glossary/Challenge))을 알려주는 헤더입니다.
   * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/WWW-Authenticate
   */
  "WWW-Authenticate": string;
  //   /**
  //    * `HTTP Proxy-Authenticate` 응답 헤더는 프록시 서버 뒤에 있는 특정 리소스에 접근하기 위해 사용될 수 있는 HTTP [인증](https://developer.mozilla.org/ko/docs/Web/HTTP/Guides/Authentication) 방식(또는 [챌린지](https://developer.mozilla.org/ko/docs/Glossary/Challenge))을 정의하는 헤더입니다.
  //    */
  //   "Proxy-Authenticate": string;
  //   /**
  //    * The HTTP Proxy-Authorization request header contains the credentials to authenticate a client with a proxy server, typically after the server has responded with a 407 Proxy Authentication Required status with the Proxy-Authenticate header.
  //    */
  //   "Proxy-Authorization": string;
}>;
