export type CacheHeader = Partial<{
  /**
   * `Age` 헤더는 객체가 프록시 캐시 내에 머무는 초단위의 시간을 가집니다.
   * @see https://developer.mozilla.org/ko/docs/Web/HTTP/Reference/Headers/Age
   */
  Age: string;
  /**
   * `Cache-Control` 일반 헤더 필드는 요청과 응답 내의 캐싱 메커니즘을 위한 디렉티브를 정하기 위해 사용됩니다.
   * @see https://developer.mozilla.org/ko/docs/Web/HTTP/Reference/Headers/Cache-Control
   */
  "Cache-Control": string;
  /**
   * HTTP `Clear-Site-Data` 응답 헤더는 요청하는 웹사이트와 관련된 특정 타입(쿠키, 스토리지, 캐시)의 브라우징 데이터를 제거하라는 신호를 클라이언트에게 보냅니다.
   * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Clear-Site-Data
   */
  "Clear-Site-Data": string;
  /**
   * 응답이 stale하다고 고려되는 날짜/시간, `max-age` 또는 `s-max-age` 디렉티브를 가진 `Cache-Control` 헤더가 더 우선 순위가 높습니다.
   * @see https://developer.mozilla.org/ko/docs/Web/HTTP/Reference/Headers/Expires
   */
  Expires: string;
  /**
   * HTTP/1.0 버전에서 HTTP/1.1 버전의 Cache-Control 헤더가 생기기 전 그것과 동일한 역할을 하는 대용 헤더로 사용됩니다.
   * @warning 일반적인 HTTP/1.1 의 Cache-Control 헤더의 신뢰할만한 대체재로 사용될 수 없습니다.
   * @see https://developer.mozilla.org/ko/docs/Web/HTTP/Reference/Headers/Pragma
   */
  Pragma: string;
}>
