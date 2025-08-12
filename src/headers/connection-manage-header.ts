export type ConnectionManageHeader = Partial<{
  /**
   * Connection 일반 헤더는 현재의 전송이 완료된 후 네트워크 접속을 유지할지 말지를 제어합니다.
   * @warning Connection 와 Keep-Alive 같은 연결-지정(Connection-specific) 헤더 필드들은 HTTP/2.에서 금지되었습니다.
   * @warning 크롬과 Firefox는 HTTP/2 응답에서 그들을 무시하지만, Safari는 HTTP/2 규격 요건에 따라 해당 필드가 포함된 응답은 처리하지 않습니다.
   * @see https://developer.mozilla.org/ko/docs/Web/HTTP/Headers/Connection
   */
  Connection: string;
  /**
   * 연결이 계속 열려있어야 하는 시간(timeout)과 연결이 닫히기 이전에 전송 가능한 최대 요청수(max)를 정할 수 있습니다.
   * Connection 헤더는 이 헤더를 위해 어떤 의미든 갖도록 "keep-alive"로 설정되어야 합니다.
   * @warning Connection 와 Keep-Alive 같은 연결-지정(Connection-specific) 헤더 필드들은 HTTP/2.에서 금지되었습니다.
   * @warning 크롬과 Firefox는 HTTP/2 응답에서 그들을 무시하지만, Safari는 HTTP/2 규격 요건에 따라 해당 필드가 포함된 응답은 처리하지 않습니다.
   * @warning  이 기능은 표준화되어 있지 않습니다.
   * @related `Connection`
   * @see https://developer.mozilla.org/ko/docs/Web/HTTP/Headers/Keep-Alive
   */
  "Keep-Alive": string;
}>;
