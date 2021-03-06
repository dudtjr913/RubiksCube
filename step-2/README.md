## 루빅스 큐브 2단계

## 기능

- 사용자의 입력을 받아 아래의 동작을 하는 프로그램 구현

```
> U  가장 윗줄을 왼쪽으로 한 칸 밀기 RRW -> RWR
> U' 가장 윗줄을 오른쪽으로 한 칸 밀기 RRW -> WRR
> R  가장 오른쪽 줄을 위로 한 칸 밀기 WWB -> WBW
> R' 가장 오른쪽 줄을 아래로 한 칸 밀기 WWB -> BWW
> L  가장 왼쪽 줄을 아래로 한 칸 밀기 RGG -> GRG (L의 경우 R과 방향이 반대임을 주의한다.)
> L' 가장 왼쪽 줄을 위로 한 칸 밀기 RGG -> GGR
> B  가장 아랫줄을 오른쪽으로 한 칸 밀기 GBB -> BGB (B의 경우도 U와 방향이 반대임을 주의한다.)
> B' 가장 아랫줄을 왼쪽으로 한 칸 밀기 GBB -> BBG
> Q  Bye~를 출력하고 프로그램을 종료한다.
```

- 처음 시작하면 초기 상태를 출력할 것
- 간단한 프롬프트를 표시해 준다.
- 한 번에 여러 문자를 입력받은 경우 순서대로 처리해서 매 과정을 화면에 출력할 것

## 기능 구현 목록

- ✔ 첫 화면에 초기 상태와 간단한 프롬프트를 추가하기 위해 html에 element 추가
- ✔ 큐브 class를 구현
  - ✔ 프로퍼티로 큐브 자체를 이중 배열로 가진다.
  - ✔ L,R,U,B를 움직이는 메소드를 가진다.
- ✔ 사용자의 입력을 받을 수 있는 form에 addEventListener 추가
- ✔ 입력이 올바른 입력인지 검사하는 함수 구현
  - 예외처리)
    - ✔ U/U'/R/R'/L/L'/B/B'/Q를 제외한 모든 입력 에러 처리
    - ✔ 한 번에 20개 이상 입력한 경우(너무 많은 것 같아 예외 처리)
- ✔ 입력이 올바르다면 큐브 class의 메소드 호출
- ✔ 입력 받은 배열을 한 칸씩 미는 함수 구현(왼쪽, 오른쪽으로 미는 함수만 구현)
- ✔ 한 칸씩 밀기가 완료되면 화면에 띄워주는 함수 구현
- ✔ Q를 입력 시 프로그램을 종료하는 함수 구현

## 요구사항

- 너무 크지 않은 함수 단위로 구현할 것
- 전역변수의 사용을 자제할 것
- 객체와 배열을 적절히 활용할 것
