import styled from '@emotion/styled';

export const TransactionTable = styled.table`
    width: 600px;
    border-collapse: collapse;
    font-size: 16px;

th {
    padding: 8px;
    border: 1px solid #212121;
    background-color: #5da7a7;
    color: white;
}

td {
  padding: 8px;
  border: 1px solid #212121;
  text-align: center;
}

tr:nth-of-type(2n) {
    background-color: #dbe9e9;
}
`