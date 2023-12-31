# 복잡한 컴포넌트 유연하게 설계하기

[원글] https://velog.io/@moreso/designing-complex-components-flexibly



# 의존성 최소화

> 의존성을 최소화하는 것이 복잡한 컴포넌트를 설계할 때 가장 중요함!

- 컴포넌트와 컴포넌트
- 데이터와 컴포넌트
- 유저 액션과 컴포넌트...

=> 뭐가 됐든 의존하지 않을수록 잘 설계된 컴포넌트임

### 1. 컴포넌트를 쉽게 이해할 수 있다.

- 주어진 하나의 역할만을 잘 수행해야 한다.
- 자신의 역할만 잘 하는 컴포넌트는 코드의 구현부를 빠르게 파악할 수 있다.
- 컴포넌트의 이름만으로 그 목적을 직관적으로 이해할 수 있음

### 2. 컴포넌트를 쉽게 수정할 수 있다.

- 서비스는 언제나 변화하는 것
- 모든 컴포넌트는 변경 가능성을 염두에 두고 설계해야 함
- 의존성이 낮으면 수정하거나 유지보수하는 데 적은 비용이 든다.
- 다른 컴포넌트에 영향을 미치지 않음 (사이드 이펙트)

### 3. 컴포넌트의 재사용성이 높아진다.

- 한 가지 역할만 하고, 다른 것에 의존하지 않으면 재사용될 가능성이 높아진다.
- 이는 코드의 중복이 줄어들면서 생산성이 증가함

### 4. 테스트가 용이하다.

- 다른 컴포넌트의 영향을 받지 않으므로 해당 컴포넌트만 테스트할 수 있음

# 요구사항

- 컴포넌트에서 요구사항을 뽑아내야 함

```
- 모든 아이템 데이터는 id, name, count(기업 수) 정보를 가진다.
- 모든 아이템 데이터는 isChecked 또는 isIndeterminate(미정) boolean 상태를 가진다.
- 아이템 데이터는 하위 분류가 있으면 children(아이템 데이터 리스트)을 가진다.
- 중첩 콤보박스(NestedCombobox)는 각 depth에 해당하는 아이템 리스트가 보여진다.
- 아이템(Item)은 펼쳐질 수 있는 'DropdownItem', 더 이상 펼쳐지지 않고 클릭만 가능한 'OptionItem' 두 종류가 있다.
- Item 의 체크 상태는 '체크 X', '체크 O', '미정' 중 하나의 상태를 가진다.
- DropdownItem 은 체크박스, 이름, ArrowIcon이 표시된다.
- OptionItem 은 체크박스, 이름, count가 표시된다.
- DropdownItem 에 hover 하면 하위 depth의 Item 리스트가 펼쳐진다.
- hover 중인 Item은 active-background-color가 적용된다.
- NestedCombobox가 펼쳐져 있을 때, 펼쳐진 리스트의 모든 상위 분류 Item도 active-background-color가 적용된다.
- 모든 Item은 클릭가능하고 체크박스를 on/off 할 수 있다.
- 상위 Item이 클릭되면 모든 하위 Item도 따라 on/off 된다.
- 하위 콤보박스의 일부 Item이 클릭되면 상위 아이템의 체크박스는 'indeterminate(미정)' 상태가 된다.
.....
```

- 이렇게 복잡한 컴포넌트 속에서 요구사항을 뽑아내고,
- 뽑아낸 요구사항을 바탕으로 비즈니스 로직과 컴포넌트를 분류하자
- 서로 의존성이 없어야 각자 개발하고 합치기 편함

### 비즈니스 로직

- 서버에서 가져온 데이터를 중첩 콤보박스 컴포넌트에 삽입할 수 있는 데이터 형태로 파싱하고, 유저 액션에 따라 데이터를 수정함
```
- 모든 아이템 데이터는 id, name, count(기업 수) 정보를 가진다.
- 모든 아이템 데이터는 isChecked 또는 isIndeterminate(미정) boolean 상태를 가진다.
- 아이템 데이터는 하위 분류가 있으면 children(아이템 데이터 리스트)을 가진다.
- 모든 Item은 클릭가능하고 체크박스를 on/off 할 수 있다.
- 상위 Item이 클릭되면 모든 하위 Item도 따라 on/off 된다.
- 하위 콤보박스의 일부 Item이 클릭되면 상위 아이템의 체크박스는 'indeterminate(미정)' 상태가 된다.
```

### 체크박스 아이템 `<CheckboxItem />`

- 리스트로 보여지는 아이템 컴포넌트

```
- <CheckboxItem> 의 체크 상태는 '체크 X', '체크 O', '미정' 중 하나의 상태를 가진다.
- 체크박스 아이템은 펼쳐질 수 있는 DropdownItem, 더 이상 펼쳐지지 않고 클릭만 가능한 OptionItem 두 종류가 있다.
- DropdownItem 은 체크박스, name, ArrowIcon이 표시된다.
- OptionItem 은 체크박스, name, count가 표시된다.
- hover 중인 Item은 active-background-color가 적용된다.
```

### 중첩 콤보박스 `<NestedCombobox />`

- 트리 형태의 데이터를 재귀적으로 펼쳐 보여주는 컴포넌트

```
- <NestedCombobox>는 각 depth에 해당하는 아이템 리스트가 보여진다.
- DropdownItem 에 hover 하면 하위 depth의 아이템 리스트가 펼쳐진다.
- <NestedCombobox>가 펼쳐져 있을 때, 펼쳐진 리스트의 모든 상위 분류 아이템도 active-background-color가 적용된다.
```

# 비즈니스 로직 제작

비즈니스 로직을 설계할 때 최소한으로 필요한 구성 요소

1. 데이터 형태
2. 특정 데이터를 가져오는 기능
3. 특정 데이터를 변경하는 기능

### 데이터

- UI를 구성하는 데 필요한 기본적인 상태들

  - `id`, `name`, `count`, `체크상태`, `미정상태`

- 하위 분류가 존재하면 `children`에 같은 형태의 데이터가 재귀 형태로 반복되게 설계하자

# 컴포넌트 제작

- 복잡한 컴포넌트를 설계할 때는 작은 컴포넌트를 시작으로 상위 컴포넌트로 올라가며 제작하는 **상향식**으로 제작하는 것이 좋다

  - 상향식은 상위 컴포넌트의 형태에 얽매이지 않고 그 자체로 필요한 UI 요구사항만을 고려해 만들 수 있음

  - UI 자체를 나타내는 컴포넌트 이름을 지을 수 있다. => 이름을 더 잘 지을 수 있음

## 내부 아이템 컴포넌트 의존성 없애기

- **BAD**
  
  ```typescript
  import CheckboxItem from './CheckboxItem.tsx';

  const NextedCombobox = () => (
    <Combobox>
      {items.map((item) => <CheckboxItem item={item} >)}
    </Combobox>
  )
  ```
  
  - 얼핏 보면 문제 없는 코드 (사실 대부분은 이렇게 컴포넌트를 설계할 것이다)
  - 하지만 이 방식은, `<NestedCombobox />`가 `<CheckboxItem />`에 의존하게 된다
  - 콤보박스에 다른 컴포넌트를 사용할 수 없음
  - **유연함이 사라진다**

- **SOSO** 

  ```typescript
  const NextedCombobox = (renderItem) => (
    <Combobox>
      {items.map((item) => renderItem(item))}
    </Combobox>
  )
  ```
  
  - `<CheckboxItem />`을 그려주는 역할을 `<NestedCombobox />` 외부로 빼줌
  - 어떤 아이템이 와도 `<NestedCombobox />` 외부에 만든 뒤, `renderItem` 함수를 통해 그리자
  - 하지만... `items`가 아직 의존성임
  - type때문에!

- **GOOD**

  - 위의 `items`는, 자연스럽게 `CheckboxItemData` 타입이 된다.
  - 이렇게 하면 다양한 Item들이 오지 못함
  - 따라서 중첩 콤보박스 내부에서 사용할 제너럴한 아이템 타입을 새로 정의해야 함

  ```typescript
  type ComboboxItem = {
    id: string;
    children?: ComboboxItem[];
  }
  
  const NextedCombobox = (renderItem) => (
    <Combobox>
      {items.map((item) => renderItem(item.id))} <- item의 id를 넘김
    </Combobox>
  )
  ```
  
  - `<NestedCombobox />` 컴포넌트 내부에서 정의한 제너럴한 콤보박스 아이템 타입!
  - `id`와 `children` 데이터만 있으면 어떤 종류의 아이템 컴포넌트도 그릴 수 있는 유연한 중첩 콤보박스 컴포넌트가 된다. 

