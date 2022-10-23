import styled from "styled-components";

export default function Select(props) {
  return (
    <SelectStyle>
      {props.content.map((one) => (
        <option key={one.val} val={one.val}>
          {one.content}
        </option>
      ))}
    </SelectStyle>
  );
}

// 추가 컬러 : #154a23, #aade28
const SelectStyle = styled.select`
  padding: 3px;
  border-color: #247d3c;
  border-radius: 5px;
  background-color: #247d3c;
  color: #ffffff;
  font-weight: 800;
`;
