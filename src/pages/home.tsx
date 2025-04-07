import './home.css';
import elemaru from "../assets/elemaru.png";
import ticket from "../assets/ticket.png";
import left_ppl from "../assets/left_ppl.png";
import mid_ppl from "../assets/mid_ppl.png";
import right_ppl from "../assets/right_ppl.png";
import session from "../assets/session.png";
import booth from "../assets/booth.png";
import networking_event from "../assets/networking_event.png";
import sponsor from "../assets/sponsor.png";
import icon from "../assets/icon.png";
import tag_note from "../assets/tag_note.png";
import tag_x from "../assets/tag_x.png";
import footer_bg from "../assets/footer_bg.png";
import { Speaker } from '../components/baseSpeaker';
import { EventSection } from '../components/baseEventSection';
import { Sponsor } from '../components/baseSponsor';



export function Home() {


    const KansaiConference2025 = `
    <?php

    class KansaiConference2025 {
        private $seed;
    
        public function __construct($seed = null) {
            $this->seed = $seed ?? time();
        }
    
        public function getConferenceNumber($min = 1, $max = 100) {
            return mt_rand($min, $max);
        `;

    const getConference = `    
        public function getConferenceString($length = 10) {
            $characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
            $conferenceString = '';
            for ($i = 0; $i < $length; $i++) {
                $conferenceString .= $characters[
                    mt_rand(0, strlen($characters) - 1)
                ];
            }
            return $conferenceString;
        }
        
        public function getFormattedMessage() {
            return "Welcome to PHP Conference Kansai 2025!";
        }
        
        public function generateSessionID() {
            return hash('sha256', $this->seed . uniqid());
        }
    }

    $conference = new KansaiConference2025();

    echo "PHP Conference Kansai 2025 Number: " .
        $conference->getConferenceNumber() . "\n";
    echo "PHP Conference Kansai 2025 String: " .
        $conference->getConferenceString() . "\n";
    echo "Message: " .
        $conference->getFormattedMessage() . "\n";
    echo "Session ID: " .
        $conference->generateSessionID() . "\n";

    ?>
    `;

    return (
        <>
            <header>
                <h1 className='letsDoPhp'>PHPでやってみよう<span className='exclamationMark'>!</span></h1>
                <div className='conferenceName'>PHP CONFERNCE KANSAI 2025</div>
                <div className='datePlace'>2025年7月19日(土)神戸駅前研修センター</div>
                <div className='jumpToTicket'>
                    <a href="" className='joinButton'>参加チケットはこちら<img src={ticket} className='ticketIcon' alt="チケットアイコン" /></a>
                </div>
                <img src={elemaru} className='elemaru' alt="エレ丸" />
            </header>
            <main>
                <div className='pnpConferenceKansai2025'>
                    <h1 className='title right'>
                        PHP CONFERENCE<br />
                        KANSAI 2025</h1>
                    <p className='aboutConference'>PHPカンファレンス関西は、<br />
                        関西最大規模のPHPエンジニアによる技術者イベントです。<br />
                        イベント当日は一般公募で集まったエンジニアによる講演をはじめ、<br />
                        その他情報共有を行うための催しが行われます。</p>
                    <div className='imagePast'>
                        <img src={left_ppl} alt="" />
                        <img src={mid_ppl} alt="" />
                        <img src={right_ppl} alt="" />
                    </div>
                    <div className='qualification'>
                        <h3>参加資格</h3>
                        <p className='qualificationExplanation'>PHPを使っている人、PHPを使っていた人、PHPに興味がある人など、<br />
                            PHPに関係する人全てに参加資格があります。<br />
                            自身の情報アップデートのためにもぜひお越しください！</p>
                    </div>

                    <div className="eventSection">
                        <div className='oneSection leftEdge'>
                            <EventSection
                                eventTitle="セッション"
                                eventExplanation="初心者から上級者まで楽しめるセッションが目白押し！気になっていた技術についての情報が得られるかも！？"
                                eventImg={session}
                            />
                        </div>
                        <div className='oneSection'>
                            <EventSection
                                eventTitle="ブース"
                                eventExplanation="カンファレンススポンサー各社の魅力溢れるブースが多数出店！Let's 情報収集！"
                                eventImg={booth}
                            />
                        </div>
                        <div className='oneSection rightEdge'>
                            <EventSection
                                eventTitle="懇親会"
                                eventExplanation="イベント終了後は、近くの会場で懇親会を開催！軽食や飲み物を片手にセッションで気になったことを登壇者に質問してみよう！"
                                eventImg={networking_event}
                            />
                        </div>
                    </div>
                </div>
                <div className='timetable'>
                    <h1 className="title left">TIMETABLE</h1>
                    <p className='aboutTimetable'>初心者から上級者まで楽しめるセッションが目白押し！<br />
                        気になっていたフレームワークや技術についての情報が得られるかも！？</p>
                    <a href="" className='checkTimetableButton'>タイムテーブルを確認</a>
                    <pre className='codePhpClass'>{KansaiConference2025}</pre>
                </div>
                <div className='access'>
                    <iframe
                        src="https://maps.google.co.jp/maps?output=embed&q=神戸駅前研修センター"
                        width="1770"
                        height="700"
                        className='googlemap'
                    ></iframe>
                    <div className='accessInformation'>
                        <div className='placeAddress'>
                            <div className='place'>グランフロント大阪 北館 タワーC 8階</div>
                            <div className='address'>〒530-0011大阪市北区大深町3-1 グランフロント大阪 北館 タワーC 8階</div>
                        </div>
                        <h1 className="title right titleAccess">ACCESS</h1>
                    </div>
                    <a href="https://maps.app.goo.gl/ertFdatxV6QnXhUq7" className='jumpToGooglemap'>Google Mapはこちら</a>
                </div>
                <div className='sponsor'>
                    <h1 className='title left'>SPONSOR</h1>
                    <pre className='codePhpFunction'>{getConference}</pre>
                    <Sponsor
                        className="platinum"
                        sponsorLevel="プラチナスポンサー"
                        sponsors={[sponsor]}
                        imageMaxWidth="300px"
                    />
                    <Sponsor
                        className="gold"
                        sponsorLevel="ゴールドスポンサー"
                        sponsors={[sponsor, sponsor, sponsor, sponsor]}
                        imageMaxWidth="250px"
                    />
                    <Sponsor
                        className="silver"
                        sponsorLevel="シルバースポンサー"
                        sponsors={[sponsor, sponsor, sponsor, sponsor, sponsor, sponsor, sponsor]}
                        imageMaxWidth="180px"
                    />
                    <Sponsor
                        className="bronze"
                        sponsorLevel="ブロンズスポンサー"
                        sponsors={[sponsor, sponsor, sponsor, sponsor, sponsor, sponsor, sponsor, sponsor]}
                        imageMaxWidth="180px"
                    />
                    <div className='drinkSnack'>
                        <Sponsor
                            className="drink"
                            sponsorLevel="ドリンク"
                            sponsors={[sponsor]}
                            imageMaxWidth="250px"
                        />
                        <Sponsor
                            className="snack"
                            sponsorLevel="おやつ"
                            sponsors={[sponsor]}
                            imageMaxWidth="250px"
                        />
                    </div>
                </div>

                <div className='speaker'>
                    <h1 className="title right">SPEAKER</h1>

                    <div className='speakersList'>

                        <Speaker
                            speakerImg={icon}
                            speakerName="hoge"
                        />
                        <Speaker
                            speakerImg={icon}
                            speakerName="hoge"
                        />
                        <Speaker
                            speakerImg={icon}
                            speakerName="hoge"
                        />
                        <Speaker
                            speakerImg={icon}
                            speakerName="hoge"
                        />
                        <Speaker
                            speakerImg={icon}
                            speakerName="hoge"
                        />
                        <Speaker
                            speakerImg={icon}
                            speakerName="hoge"
                        />
                        <Speaker
                            speakerImg={icon}
                            speakerName="hoge"
                        />
                        <Speaker
                            speakerImg={icon}
                            speakerName="hoge"
                        />
                        <Speaker
                            speakerImg={icon}
                            speakerName="hoge"
                        />
                        <Speaker
                            speakerImg={icon}
                            speakerName="hoge"
                        />
                    </div>
                </div>
            </main>
            <footer>
                <img src={footer_bg} className='footer_bg' alt="神戸の背景" />
                <div className='pastEventsElemaru'>
                    <div className='pastEvents'>
                        <h2 className='footer_pnpConferenceKansai2025'>PHP CONFERNCE<br />
                            KANSAI 2025</h2>
                        <p className='jumpToPastEvents'>過去のイベントの様子はこちら</p>
                        <div className='pastEventsYears'>
                            <a href="">2014</a>
                            <a href="">2015</a>
                            <a href="">2016</a>
                            <a href="">2017</a>
                            <a href="">2018</a>
                            <a href="">2020</a>
                            <a href="">2024</a>
                        </div>
                    </div>
                    <img src={elemaru} className='footer_elemaru' alt="エレ丸" />
                </div>
                <div className='snsCopylight'>
                    <p><a href="https://x.com/phpcon_kansai"><img src={tag_x} className='sns' alt="x" /></a></p>
                    <p className='note'><a href="https://note.com/phpcon_kansai" ><img src={tag_note} className='sns note' alt="note" /></a></p>


                    <p className='copylight'>PHPカンファレンス関西2024実行委員会　｜　Copyright @ Kansai PHP Users Group</p>
                </div>
            </footer>
        </>
    )
}