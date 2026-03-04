import { galleryImages, galleryVideos } from '../data/gallery.js'
import SpiderWeb from './SpiderWeb'
import McQueenCar from './McQueenCar'
import FloatingHearts from './FloatingHearts'
import Scene3D from './three/Scene3D'
import Heart3D from './three/Heart3D'
import SpiderWeb3D from './three/SpiderWeb3D'

function Placeholder({ label = 'Your photo here' }) {
  return (
    <div className="gallery-placeholder">
      <span>📷</span>
      <span>{label}</span>
    </div>
  )
}

export default function GalleryPage({ onBack }) {
  const hasImages = galleryImages.length > 0
  const hasVideos = galleryVideos.length > 0
  const hasAny = hasImages || hasVideos

  return (
    <div className="page gallery-page">
      <FloatingHearts count={6} />
      <SpiderWeb position="top-left" size={120} />
      <SpiderWeb position="top-right" size={100} />

      <Scene3D>
        <Heart3D position={[-3, 2, -1]} scale={0.12} color="#ffc2cf" rotationSpeed={0.3} />
        <Heart3D position={[3, -1, -1]} scale={0.1} color="#ff7a93" rotationSpeed={-0.4} />
        <SpiderWeb3D position={[-3, 2.5, 0]} scale={0.5} corner="top-left" />
        <SpiderWeb3D position={[3, 2.5, 0]} scale={0.45} corner="top-right" />
      </Scene3D>

      <div className="gallery-content">
        <button className="back-btn" onClick={onBack} type="button">
          ← Back
        </button>

        <h1 className="gallery-title">Our memories</h1>
        <p className="gallery-sub">March 6, 2023 — the day my life changed forever</p>

        {hasImages && (
          <div className="gallery-grid">
            {galleryImages.map((src, i) => (
              <div key={i} className="gallery-item">
                <img src={src} alt={`Memory ${i + 1}`} loading="lazy" />
              </div>
            ))}
          </div>
        )}

        {hasVideos && (
          <div className="gallery-videos">
            {galleryVideos.map((item, i) => (
              <div key={i} className="gallery-video-wrap">
                <video src={item.src} controls playsInline />
                {item.title && <p className="gallery-video-title">{item.title}</p>}
              </div>
            ))}
          </div>
        )}

        {!hasAny && (
          <>
            <div className="gallery-grid">
              <Placeholder label="Drop photos in public/invitation/" />
              <Placeholder label="Your photo here" />
              <Placeholder label="Your photo here" />
              <Placeholder label="Add them to gallery.js" />
              <Placeholder label="Your photo here" />
              <Placeholder label="Your photo here" />
            </div>
            <p className="gallery-hint">
              Add your photos to <code>public/invitation/</code> and list them in <code>src/data/gallery.js</code>
            </p>
          </>
        )}

        <div className="gallery-footer">
          <McQueenCar style={{ width: 160, opacity: 0.2 }} />
          <p>Made with all my love ❤️</p>
        </div>
      </div>
    </div>
  )
}
