#TypeScript (Interface/Type)

*Interface*
interface trong TypeScript được sử dụng để định nghĩa kiểu dữ liệu cho một đối tượngcho phép chỉ định tên, kiểu và các thành phần của đối tượng.

```interface Person {
  name: string;
  age: number;
  greet(): void;
}

const person: Person = {
  name: "John",
  age: 30,
  greet() {
    console.log("Hello!");
  }
};
```

*Type*
type cho phép bạn tạo ra các kiểu dữ liệu tùy chỉnh và sử dụng chúng lại trong mã nguồn kết hợp các kiểu dữ liệu có sẵn hoặc tạo ra các kiểu dữ liệu phức tạp hơn.

```type Person = {
  name: string;
  age: number;
  greet(): void;
};

const person: Person = {
  name: "John",
  age: 30,
  greet() {
    console.log("Hello!");
  }
};
```

#JSDoc
JSDoc là một phong cách viết chú thích (commenting style) được sử dụng trong mã nguồn JavaScript để mô tả các khía cạnh khác nhau của mã, bao gồm kiểu dữ liệu, tham số, giá trị trả về và mô tả chức năng của các hàm, lớp, phương thức, biến và các thành phần khác. JSDoc sử dụng cú pháp đặc biệt để tạo ra các chú thích có cấu trúc, và các công cụ hỗ trợ như trình biên dịch hoặc trình phân tích mã nguồn có thể đọc và sử dụng chú thích này để cung cấp thông tin và phân tích mã tự động.

```/**
 * Tính tổng của hai số.
 *
 * @param {number} a - Số thứ nhất.
 * @param {number} b - Số thứ hai.
 * @returns {number} - Tổng của hai số.
 */
function sum(a, b) {
  return a + b;
}
````


#PropTypes

```import React from 'react';
import PropTypes from 'prop-types';

function MyComponent(props) {
  return <div>Number: {props.number}!</div>;
}

MyComponent.propTypes = {
  number: PropTypes.number.isRequired,
};

export default MyComponent;
```

PropTypes.number.isRequired chỉ định rằng numebr phải là một số và là bắt buộc (không được trống). Nếu number không tuân theo kiểu dữ liệu mong đợi, một cảnh báo sẽ được hiển thị trong quá trình phát triển hoặc môi trường kiểm thử.


#Componets
Component là một khối xây dựng độc lập và tái sử dụng trong việc xây dựng giao diện người dùng. Nó giúp chia nhỏ giao diện thành các phần nhỏ hơn và quản lý trạng thái và hành vi của mỗi phần đó
 function Component
```const MyComponent = (props) => {
  return <div>Hello, {props.name}!</div>;
};
```

- Nhận một object chứa các props  
- Trả về phần tử JSX để xây dựng giao diện
