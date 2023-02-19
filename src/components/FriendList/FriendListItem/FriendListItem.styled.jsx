import styled from '@emotion/styled'

export const FriendCard = styled.li`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 260px;
    margin-bottom: 15px;
    padding: 8px 15px;
    border: 1px solid #acaaaa;
    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 1px 1px 1px rgba(0, 0, 0, 0.14), 4px 2px 1px rgba(0, 0, 0, 0.2);
    border-radius: 4px;
`
export const Chip = styled.span`
    width: 15px;
    height: 15px;
    border-radius: 50%;
    margin-right: 15px;
    background-color: ${props => {
        return props.isOnline ? 'green' : 'red'
        }
    };
`
export const FriendName = styled.p`
    margin: 0 0 0 15px;
    font-size: 24px;
    font-weight: 500;
`
