import PropTypes from 'prop-types';
import { FriendCard, Chip, FriendName } from './FriendListItem.styled';

export const FriendListItem = ({avatar, name, isOnline }) => {
    return (
        <FriendCard>
            <Chip isOnline={isOnline} className="status"></Chip>
            <img className="avatar" src={avatar} alt={name} width="48" />
            <FriendName className="name">{name}</FriendName>
        </FriendCard>
    )
} 

FriendListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired
}
