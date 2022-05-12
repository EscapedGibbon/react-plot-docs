import React from 'react';
import { Plot, Axis, ParallelAxis } from 'react-plot';

export default function Series() {
  return (
    <div
      style={{
        display: 'flex',
        gap: '80px',
        justifyContent: 'center',
      }}
    >
      <Plot width={300} height={100}>
        <Axis id="x" max={20} min={0} position="bottom" label="Base Axis" />
        <ParallelAxis
          id="x"
          label="personalized secondary ticks"
          secondaryTickLength={7}
          secondaryTickStyle={{ stroke: 'red' }}
        />
        {/** hidden axis */}
        <Axis min={0} max={1} position="left" hidden />
      </Plot>
      <Plot width={300} height={100}>
        <Axis id="x" max={20} min={0} position="bottom" label="Base Axis" />
        <ParallelAxis
          id="x"
          label="hidden secondary ticks"
          secondaryTickLength={0}
        />
        {/** hidden axis */}
        <Axis min={0} max={1} position="left" hidden />
      </Plot>
    </div>
  );
}
