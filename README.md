# 지능시스템 Homwork 2
지능시스템 과제 2: chapter 4 ~ chapter 5의 모든 예제 github에 push하기

## Chapter 4

### EX 4-1
 - setInterval 함수의 사용법
 - setInterval 함수를 호출, 익명 함수를 300밀리초(0.3초) 간격으로 반복 실행
 - setInterval의 고유 ID는 timer 변수에 저장
 - count가 5가 되면, clearInterval(timer) 함수를 호출, 주기적인 함수 실행을 중단

### EX 4-2
 - 예제 4-1과 같은 작업을 수행하지만, 콜백 함수를 별도로 선언
 - 콜백 함수와 이를 호출하는 함수 간의 제어권 관계를 이해
 - 결과적으로 cbFunc는 0.3초 간격으로 5회 호출

### EX 4-3
 - 배열의 각 요소에 대해 주어진 콜백 함수를 실행하고, 그 함수의 반환 값들로 이루어진 새로운 배열을 만드는 map 메서드
 - map()에 전달되는 콜백 함수는 배열의 각 currentValue와 index를 인자로 받아 실행되어 새 값을 반환
 - 연산을 통해 각 요소에 5가 더해진 새로운 배열이 newArr 변수에 할당되고 콘솔에 출력

### EX 4-4
 - map 메서드가 콜백 함수를 호출할 때 전달하는 인자들의 순서는 정해져 있음
 - 콜백 함수를 정의할 때 사용하는 매개변수 이름은 이 순서에 영향을 주지 않음
 - 이로 인해 map이 첫 번째로 전달하는 '요소 값'이 index 변수에, 두 번째로 전달하는 '인덱스'가 currentValue 변수에 담김

### EX 4-5
 - Array.prototype.map 메서드 직접 구현
 - 구현된 map 함수는 사용자 정의 콜백 함수를 호출할 때, 표준 map 메서드와 동일하게 현재 요소 값(this[i]), 현재 인덱스(i), 그리고 원본 배열(this)을 순서대로 전달

### EX 4-6
 - 다양한 상황에서 콜백 함수 내부의 this 결정
 - setTimeout에 전달된 콜백 함수 내에서 this는 전역 객체
 - forEach 메서드에 두 번째 인자로 this 컨텍스트를 지정하지 않았으므로, 콜백 함수 내의 this는 전역 객체
 - addEventListener를 통해 등록된 콜백 함수 내에서 this는 이벤트를 발생시킨 HTML 요소