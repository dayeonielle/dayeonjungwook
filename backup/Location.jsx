import React from 'react';

function Location() {
    return (
        <section className="location">
            <h2>📌 오시는 길</h2>
            <a
                href="https://maps.google.com/?q=서울특별시 청첩장 홀"
                target="_blank"
                rel="noopener noreferrer"
                className="map-button"
            >
                지도 보기
            </a>
        </section>
    );
}

export default Location;
