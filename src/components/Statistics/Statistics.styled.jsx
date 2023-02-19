import styled from '@emotion/styled';

export const Section = styled.section`
    width: 400px;
    margin-top: 40px;
    background-color: azure;
    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14), 0px 2px 1px rgba(0, 0, 0, 0.2);
    border-radius: 0px 0px 4px 4px;
`
export const Title = styled.h2`
    margin: 0;
    padding: 30px;
    font-size: 20px;
    font-weight: 600;
    text-align: center;
    text-transform: uppercase;
`
export const StatList = styled.ul`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    list-style: none;
    margin: 0;
    padding: 0;
    background-color: rgb(232, 247, 247);
`
export const StatListItem = styled.li`
    padding: 15px 0px 15px 0px;
    text-align: center;
    width: calc(100% / 5);
`
export const Label = styled.span`
    display: block;
    margin-bottom: 8px;
    font-size: 14px;
`
export const Percentage = styled.span`
    display: block;
    font-size: 16px;
`