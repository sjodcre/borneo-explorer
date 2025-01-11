'use client';

import { Suspense } from 'react';
import BookingContent from './content';

export default function BookNow() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center">
      <div className="text-xl">Loading booking form...</div>
    </div>}>
      <BookingContent />
    </Suspense>
  );
}