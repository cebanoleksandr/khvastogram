import React from "react";
import './Profile.css';

const Profile = () => {
    const thumbs = (event) => {
        let thumbnail = event.target.closest('a');

        if (!thumbnail) return;
        showThumbnail(thumbnail.href, thumbnail.title);
        event.preventDefault();
    }

    function showThumbnail(href, title) {
        let largeImg = document.getElementById('largeImg')
        largeImg.src = href;
        largeImg.alt = title;
    }

    return (
        <div className="profile">
            <h1>Welcome!</h1>
            <p><img id="largeImg" src="https://en.js.cx/gallery/img1-lg.jpg" alt="Large imag" /></p>

            <ul id="thumbs" className="thumbs" onClick={thumbs}>
                <li className="thumbs__li">
                    <div className="divLink">
                        <a className="imigeLink" href="https://en.js.cx/gallery/img2-lg.jpg" title="Image 2"><img src="https://en.js.cx/gallery/img2-thumb.jpg" alt="imag" /></a>
                    </div>
                </li>
                <li className="thumbs__li">
                    <div className="divLink">
                        <a className="imigeLink" href="https://en.js.cx/gallery/img3-lg.jpg" title="Image 3"><img src="https://en.js.cx/gallery/img3-thumb.jpg" alt="imag" /></a>
                    </div>
                </li>
                <li className="thumbs__li">
                    <div className="divLink">
                        <a className="imigeLink" href="https://en.js.cx/gallery/img4-lg.jpg" title="Image 4"><img src="https://en.js.cx/gallery/img4-thumb.jpg" alt="imag" /></a>
                    </div>
                </li>
                <li className="thumbs__li">
                    <div className="divLink">
                        <a className="imigeLink" href="https://en.js.cx/gallery/img5-lg.jpg" title="Image 5"><img src="https://en.js.cx/gallery/img5-thumb.jpg" alt="imag" /></a>
                    </div>
                </li>
                <li className="thumbs__li">
                    <div className="divLink">
                        <a className="imigeLink" href="https://en.js.cx/gallery/img6-lg.jpg" title="Image 6"><img src="https://en.js.cx/gallery/img6-thumb.jpg" alt="imag" /></a>
                    </div>
                </li>
            </ul>
        </div>
    );
}

export default Profile;
