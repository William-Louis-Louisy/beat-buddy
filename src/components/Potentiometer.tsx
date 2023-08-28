import { useState, useRef } from "react";

function Potentiometer({
  min,
  max,
  initialValue = min,
  step = 1,
  onChange,
}: any) {
  const [currentValue, setCurrentValue] = useState(initialValue);
  const [dragging, setDragging] = useState(false);
  const potRef = useRef<HTMLDivElement | null>(null);
  const [angle, setAngle] = useState(0); // Ajouter pour le débogage

  function getAngleFromEvent(event: any) {
    if (potRef.current) {
      const rect = potRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const atan = Math.atan2(centerY - event.clientY, event.clientX - centerX);
      let calculatedAngle = atan * (180 / Math.PI);
      if (calculatedAngle < 0) calculatedAngle += 360;
      return calculatedAngle;
    }
    return 0;
  }

  function handleMouseDown(event: any) {
    setDragging(true);
  }

  function handleMouseMove(event: any) {
    if (dragging) {
      const calculatedAngle = getAngleFromEvent(event);
      setAngle(calculatedAngle); // Pour le débogage
      const value = Math.round(min + (calculatedAngle / 360) * (max - min));
      setCurrentValue(value);
      if (onChange) {
        onChange(value);
      }
    }
  }

  function handleMouseUp() {
    setDragging(false);
  }

  return (
    <div
      className="potentiometer flex flex-col items-center space-y-2"
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    >
      <div
        ref={potRef}
        className="w-16 h-16 bg-gray-600 rounded-full relative cursor-pointer"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
      >
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-gray-800 rounded-full"></div>
        <div
          style={{
            transform: `rotate(${
              (currentValue - min) * (360 / (max - min))
            }deg)`,
          }}
          className="absolute w-2 h-8 bg-gray-500 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-full rounded"
        ></div>
      </div>
      <span className="text-gray-600">{currentValue}</span>
      <div className="text-red-500">Angle: {angle}</div>{" "}
      {/* Pour le débogage */}
    </div>
  );
}

export default Potentiometer;
