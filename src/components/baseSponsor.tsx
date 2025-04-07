import './baseSponsor.css';

type Props = {
    sponsorLevel: string,
    sponsors: string[],
    imageMaxWidth: string,
    className: string,

}

export const Sponsor = ({ sponsorLevel, sponsors, imageMaxWidth, className }: Props) => {
    return (
        <div className='baseSponsor'>
            <h3 className={className}>{sponsorLevel}</h3>
            <div className="imageContainerStyle">
                {sponsors.map((sponsorImg, index) => (
                    <img key={index} src={sponsorImg} alt="sponsor" className="imageStyle" style={{ maxWidth: imageMaxWidth }} />
                ))}
            </div>

        </div>
    )
}