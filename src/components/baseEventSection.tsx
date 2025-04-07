import './baseEventSection.css';

type Props = {
    eventTitle: string,
    eventExplanation: string,
    eventImg: string,
}

export const EventSection = (props: Props) => {
    return (
        <>
            <p className='eventTitle'>{props.eventTitle}</p>
            <p className='eventExplanation'>{props.eventExplanation}</p>
            <img src={props.eventImg} className='eventImg' alt="" />
        </>
    )
}