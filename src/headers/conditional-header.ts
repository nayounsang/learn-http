export type ConditionalHeader = Partial<{
  /**
   * `Last-Modified` 응답 HTTP 헤더에는 원본 서버가 리소스가 마지막으로 수정되었다고 생각하는 날짜와 시간이 포함되어 있습니다.
   * @related `If-Modified-Since`, `If-Unmodified-Since`
   * @see https://developer.mozilla.org/ko/docs/Web/HTTP/Reference/Headers/Last-Modified
   */
  "Last-Modified": string;
  /**
   * 리소스의 버전을 식별하는 고유한 문자열 검사기입니다.
   * @related `If-Match`, `If-None-Match`
   * @see https://developer.mozilla.org/ko/docs/Web/HTTP/Reference/Headers/ETag
   */
  ETag: string;
  /**
   * 서버는 `If-Match` 요청 헤더가 `ETag` 값들 중 하나와 일치하는 경우에만 `GET` 와 `HEAD` 메서드에 대한 자원을 반환하거나 `PUT` (혹은 안전하지 않은) 메서드를 통해 자원을 업로드합니다.
   * @related `ETag`
   * @see https://developer.mozilla.org/ko/docs/Web/HTTP/Reference/Headers/If-Match
   */
  "If-Match": string;
  /**
   * GET 및 HEAD 메서드의 경우, 서버는 요청된 리소스에 주어진 값과 일치하는 ETag가 없는 경우에만 200 상태와 함께 요청된 리소스를 반환합니다.
   * 다른 메서드의 경우, 최종적으로 존재하는 리소스의 ETag가 나열된 값 중 어느 것과도 일치하지 않는 경우에만 요청이 처리됩니다.
   * @related `ETag`
   * @see https://developer.mozilla.org/ko/docs/Web/HTTP/Reference/Headers/If-None-Match
   */
  "If-None-Match": string;
  /**
   * If-Modified-Since HTTP 요청 헤더는 조건부 요청으로 서버는 지정된 날짜 이후 수정 된 경우에 200 과 함께 요청된 리소스를 돌려 줍니다.
   * 만약 수정되지 않는 리소스에 대한 요청시, 리소스 없이 304 응답을 하게 됩니다.
   * @related `Last-Modified`
   * @see https://developer.mozilla.org/ko/docs/Web/HTTP/Reference/Headers/If-Modified-Since
   */
  "If-Modified-Since": string;
  /**
   * 서버는 이 HTTP 헤더에 지정된 날짜 이후에 리소스가 수정되지 않은 경우에만 요청된 리소스를 보내거나 POST 또는 기타 non-safe 메서드에 대한 요청을 승인합니다.
   * 리소스가 지정된 날짜 이후에 수정된 경우 서버의 응답은 '412 Precondition Failed 오류가 됩니다.
   * @related `Last-Modified`
   * @see https://developer.mozilla.org/ko/docs/Web/HTTP/Reference/Headers/If-Unmodified-Since
   */
  "If-Unmodified-Since": string;
  /**
   * Vary HTTP 응답 헤더는 요청 메시지의 메서드 및 URL을 제외하고 응답 내용에 영향을 준 부분을 설명합니다.
   * @see https://developer.mozilla.org/ko/docs/Web/HTTP/Reference/Headers/Vary
   */
  Vary: string;
}>;
