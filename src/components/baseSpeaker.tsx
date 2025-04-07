import './baseSpeaker.css';

type Props = {
    speakerImg: string,
    speakerName: string,
}

export const Speaker = (props: Props) => {
    return (
        <div className='baseSpeaker'>
            <img src={props.speakerImg} className='speakerImg' alt="" />
            <p className='speakerName'>{props.speakerName}</p>
        </div>
    )
}