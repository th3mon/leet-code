import { useState, type UIEvent } from "react";

type Device = {
  id: string;
  name: string;
};

const ROW_HEIGHT = 40;
const VIEWPORT_HEIGHT = 400;
const OVERSCAN = 5;

export function VirtualDeviceList({
  devices,
}: {
  devices: Device[];
}) {
  const [scrollTop, setScrollTop] = useState(0);

  const startIndex = Math.max(
    0,
    Math.floor(scrollTop / ROW_HEIGHT) - OVERSCAN
  );

  const visibleCount = Math.ceil(
    VIEWPORT_HEIGHT / ROW_HEIGHT
  );

  const endIndex = Math.min(
    devices.length,
    startIndex + visibleCount + OVERSCAN * 2
  );

  const visibleDevices = devices.slice(
    startIndex,
    endIndex
  );

  function handleScroll(
    event: UIEvent<HTMLDivElement>
  ) {
    setScrollTop(event.currentTarget.scrollTop);
  }

  return (
    <div
      onScroll={handleScroll}
      style={{
        height: VIEWPORT_HEIGHT,
        overflowY: "auto",
      }}
    >
      <div
        style={{
          height: devices.length * ROW_HEIGHT,
          position: "relative",
        }}
      >
        {visibleDevices.map((device, index) => {
          const realIndex = startIndex + index;

          return (
            <div
              key={device.id}
              style={{
                position: "absolute",
                top: realIndex * ROW_HEIGHT,
                left: 0,
                right: 0,
                height: ROW_HEIGHT,
              }}
            >
              {device.name}
            </div>
          );
        })}
      </div>
    </div>
  );
}
