import React, { useEffect, useRef } from 'react';
import blockies from 'ethereum-blockies';

const Avatar = ({ address, size = 30 }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (!address) return;

    const icon = blockies.create({
      seed: address.toLowerCase(),
      size: 8,
      scale: Math.floor(size / 8),
    });

    if (canvasRef.current) {
      const ctx = canvasRef.current.getContext('2d');
      ctx.clearRect(0, 0, size, size);
      ctx.drawImage(icon, 0, 0, size, size);
    }
  }, [address, size]);

  return (
    <canvas
      ref={canvasRef}
      width={size}
      height={size}
      className="rounded-full overflow-hidden"
    />
  );
};

export default Avatar;
