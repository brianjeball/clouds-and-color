import React, { useState } from 'react';
import Image from 'next/image';

import songs from '../public/assets/js/songs';
import jbLogo from '../public/jb-logo-white-cropped.png';
import Link from 'next/link';

const TracklistImage = ({ slug }) => {
    const [showHigh, setHigh] = useState(false);

    return (
        <>
            <Link href={`/song/${slug}`} replace>
                <a>
                    <Image src={`/assets/images/tracklist-cover-art/${slug}-dark.png`}
                        className="tracklist-img box-shadowç"
                        alt={``}
                        width={1000}
                        height={50}
                        style={{ position: 'initial', maxWidth: 'auto', width: '100%', height: '100%' }} />
                </a>
            </Link>
        </>
    )
}

const Header = () => {
    const [displayTracklist, toggleTracklistDisplay] = useState(false);
    // const [displayChakras, toggleChakraCircles] = useState(false);

    function toggleTracklist() {
        displayTracklist ? toggleTracklistDisplay(false) : toggleTracklistDisplay(true);
    }

    function toggleChakraActivation(e) {
        // displayChakras ? toggleChakraCircles(false) : toggleChakraCircles(true);

        const chakras = e.target.ownerDocument.querySelectorAll('.chakra')
        
        for (let i = 0; i < chakras.length; i++) {
            const el = chakras[i];
            el.classList.toggle('stroke')
        }

        // if (!el.target.classList.contains('activated')) {
        //     e.target.classList.add('activated');
        // } else {
        //     e.target.classList.remove('activated');
        // }

        console.log('chakra activated')
    }

    return (
        <div className='header'>
            {/* logo */}
            <div className='logo-wrapper'>
                <Link href={'/'}>
                    <a>
                        <Image className="logo" src={jbLogo} alt="Jarrell Brian Logo" />
                    </a>
                </Link>
            </div>

            <ul id="" style={{
                width: '50%',
                zIndex: 10,
                listStyle: 'none',
                position: 'fixed',
                right: 0
            }}>
                {/* main track selection input, type: dropdown*/}
                <li style={{ height: 'max-content' }} className={'tracklist-select-button box-shadow '} onClick={() => toggleTracklist()}>
                    TRACKS
                </li>
                {displayTracklist &&
                    <>
                        {songs.map((song, index) => {
                            // no wise_king mp3 file
                            if (song.slug === 'wise_king') {
                                return;
                            }

                            return (
                                <li key={index}>
                                    <TracklistImage slug={song.slug} />
                                </li>
                            )
                        })}
                    </>
                }
            </ul>

            <ul id="" style={{
                width: '50%',
                zIndex: 10,
                listStyle: 'none',
                // position: 'fixed',
                // right: 0
            }}>
                {/* main track selection input, type: dropdown*/}
                <button style={{
                    height: 'max-content',
                    background: 'yellow',
                    padding: '20px',
                    fontWeight: 800,
                    position: 'absolute',
                    left: 20,
                    bottom: 40
                }} className={'chakras-button'} onClick={(e) => toggleChakraActivation(e)}>
                    CHAKRAS
                </button>
            </ul>

            {/* menu ? */}
        </div>
    )
}

export default Header;