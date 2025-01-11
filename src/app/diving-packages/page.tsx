'use client';

import { Suspense } from 'react';
import DivingPackagesContent from './content';

export default function DivingPackages() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <DivingPackagesContent />
    </Suspense>
  );
}