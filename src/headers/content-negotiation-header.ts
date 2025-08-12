export type ContentNegotiationHeader = Partial<{
  /**
   * 돌려줄 데이터 MIME 타입에 대해 서버에 알립니다.
   * @see https://developer.mozilla.org/ko/docs/Web/HTTP/Headers/Accept
   */
  Accept: string;
  /**
   * 클라이언트가 이해할 수 있는 문자 집합에 대해 서버에 알립니다.
   */
  "Accept-Charset": string;
  /**
   * 클라이언트가 이해 가능한 컨텐츠 인코딩이 무엇인지를 알려줍니다
   * 보통은 돌려줄 리소스에 사용되는 압축 알고리즘입니다.
   * @see https://developer.mozilla.org/ko/docs/Web/HTTP/Headers/Accept-Charset
   */
  "Accept-Encoding": string;
  /**
   * 서버가 돌려주기로 예상된 언어(*자연 언어)에 대해 서버에 알립니다. 이는 힌트이며 사용자의 모든 제어 아래에서는 필수가 아닙니다.
   * 서버는 해당 헤더의 제안을 하나 선택한 뒤, `Content-Language` 응답 헤더를 통해 클라이언트에게 알려줍니다.
   * @see https://developer.mozilla.org/ko/docs/Web/HTTP/Headers/Accept-Language
   */
  "Accept-Language": string;
}>;
