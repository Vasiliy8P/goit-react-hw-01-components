import PropTypes from 'prop-types';
import { Section, Title, StatList, StatListItem, Label, Percentage } from './Statistics.styled';
import getRandomHexColor from 'components/utils/getRandomHexColor';

export const Statistics = ({ title, stats }) => {
    return (
        <Section>
            {title && <Title>{title}</Title>}

            <StatList>
                {stats.map(stat => {
                    return (
                        <StatListItem key={stat.id} style={{backgroundColor: getRandomHexColor()}}>
                            <Label>{stat.label}</Label>
                            <Percentage>{stat.percentage}</Percentage>
                        </StatListItem>)
                    })
                }
            </StatList>
        </Section>
    )
}

Statistics.propTypes = {
    title: PropTypes.string.isRequired,
    stats: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired,
    }),)
}
