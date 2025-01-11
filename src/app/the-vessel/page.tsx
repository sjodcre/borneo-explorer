'use client';

import { Suspense } from 'react';
import VesselContent from './content';

export default function TheVessel() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <VesselContent />
    </Suspense>
  );
}