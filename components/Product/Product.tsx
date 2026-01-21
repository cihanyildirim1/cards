"use client";

import { useRef, useState, MouseEvent, TouchEvent } from "react";
import styles from "./Product.module.css";

export default function Product() {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const dragStart = useRef({ x: 0, y: 0 });
  const currentRotation = useRef({ x: 0, y: 0 });

  const handleMouseDown = (e: MouseEvent) => {
    setIsDragging(true);
    dragStart.current = {
      x: e.clientX,
      y: e.clientY,
    };
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging) return;

    const deltaX = e.clientX - dragStart.current.x;
    const deltaY = e.clientY - dragStart.current.y;

    const rotateY = currentRotation.current.y + deltaX * 0.5;
    const rotateX = currentRotation.current.x - deltaY * 0.3;

    // Clamp X rotation to prevent over-rotation
    const clampedRotateX = Math.max(-30, Math.min(30, rotateX));

    setRotation({ x: clampedRotateX, y: rotateY });
  };

  const handleMouseUp = () => {
    if (isDragging) {
      currentRotation.current = rotation;
      setIsDragging(false);
    }
  };

  const handleTouchStart = (e: TouchEvent) => {
    setIsDragging(true);
    dragStart.current = {
      x: e.touches[0].clientX,
      y: e.touches[0].clientY,
    };
  };

  const handleTouchMove = (e: TouchEvent) => {
    if (!isDragging) return;

    const deltaX = e.touches[0].clientX - dragStart.current.x;
    const deltaY = e.touches[0].clientY - dragStart.current.y;

    const rotateY = currentRotation.current.y + deltaX * 0.5;
    const rotateX = currentRotation.current.x - deltaY * 0.3;

    const clampedRotateX = Math.max(-30, Math.min(30, rotateX));

    setRotation({ x: clampedRotateX, y: rotateY });
  };

  const handleTouchEnd = () => {
    if (isDragging) {
      currentRotation.current = rotation;
      setIsDragging(false);
    }
  };

  return (
    <section className={styles.productSection}>
      <h2 className={styles.title}>Leo Cards</h2>

      <div
        className={styles.cardContainer}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div
          ref={cardRef}
          className={styles.card}
          style={{
            transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
          }}
        >
          {/* Front of card */}
          <div className={`${styles.cardFace} ${styles.cardFront}`}>
            <div className={styles.cardLogo}>SMART CARD</div>
            <div className={styles.nfcIcon}>
              <svg
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
              >
                <path d='M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z' />
              </svg>
            </div>
            <div className={styles.cardInfo}>
              <p>Tap to Share</p>
              <p></p>
            </div>
          </div>

          {/* Back of card */}
          <div className={`${styles.cardFace} ${styles.cardBack}`}>
            <div className={styles.cardLogo}>Powered By Leo Cards</div>
            <div className={styles.cardInfo}>
              <p>Instant Sharing</p>
              <p>Contactless & Secure</p>
              <p>Compatible with All Devices</p>
            </div>
          </div>
        </div>
      </div>

      <p className={styles.instruction}>Click and drag to rotate the card</p>
    </section>
  );
}
