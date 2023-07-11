import React from 'react';

import ellipses from '../public/assets/js/ellipses';

const CoverArtInteractive = () => {
    const handleStrokeClick = (e) => {
        e.target.classList.add('stroke');
        console.log('called')
    }

    const handleChakra = (e) => {
        console.log(e.target.classList)
    }

    return (
        <div className='circles-container'>
            <div className='circles-wrapper'>
                {
                    ellipses.map((el, index) => {
                        return (
                            <div
                                key={index}
                                className={`ellipse-row ellipses-row-${index + 1}`}
                                style={{ color: 'red', transform: `translateY(${el.offset * 2}px)` }}>
                                {
                                    el.ellipses.map((el, index) => {
                                        if (el.stroke) {
                                            el.addEventListener
                                        } else if (el.stroke) {
                                            el.addEventListener
                                        }

                                        if (el.chakra) {
                                            return (
                                                <div
                                                    key={index}
                                                    dataBehavior={'chakra'}
                                                    onClick={el.stroke ? (e) => handleChakra(e) : null}
                                                    className={"circle" + ' ' + el.chakra} // + (el.stroke ? "stroke" : "")
                                                    style={{ color: 'red', transform: `translateX(${el.positionX}px)` }}>
                                                </div>
                                            )
                                        }

                                        return (
                                            <div
                                                key={index}
                                                onClick={el.stroke ? (e) => handleStrokeClick(e) : null}
                                                className={"circle" + ' ' + el.chakra} // + (el.stroke ? "stroke" : "")
                                                style={{ color: 'red', transform: `translateX(${el.positionX}px)` }}>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default CoverArtInteractive;