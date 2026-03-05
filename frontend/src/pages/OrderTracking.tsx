import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const OrderTracking = () => {
  const [trackingNumber, setTrackingNumber] = useState('');
  const [tracked, setTracked] = useState(false);
  const progress = 65; // mock

  return (
    <main className="pt-24 pb-16 min-h-screen">
      <div className="max-w-2xl mx-auto px-4">
        <h1 className="text-4xl font-bold tracking-wide text-center mb-12">Track Your Order</h1>

        <div className="flex gap-2 mb-16">
          <Input
            value={trackingNumber}
            onChange={e => setTrackingNumber(e.target.value)}
            placeholder="Enter Tracking Number"
            className="rounded-none font-sans flex-1"
          />
          <Button onClick={() => setTracked(true)} className="rounded-none font-sans text-sm tracking-widest uppercase px-8">
            Track
          </Button>
        </div>

        {tracked && (
          <div className="space-y-8">
            <div>
              <p className="text-xs font-sans tracking-widest uppercase text-muted-foreground mb-3">Shipping Progress</p>
              <div className="w-full h-2 bg-muted overflow-hidden">
                <div className="h-full bg-foreground transition-all duration-700" style={{ width: `${progress}%` }} />
              </div>
              <div className="flex justify-between mt-2 text-xs font-sans text-muted-foreground">
                <span>Dispatched</span>
                <span>In Transit</span>
                <span>Delivered</span>
              </div>
            </div>

            <div className="border border-border p-6 space-y-4">
              <div className="flex justify-between text-sm font-sans">
                <span className="text-muted-foreground">Tracking Number</span>
                <span className="font-medium">RUT-2026-{trackingNumber || '847291'}</span>
              </div>
              <div className="flex justify-between text-sm font-sans">
                <span className="text-muted-foreground">Status</span>
                <span className="font-medium">In Transit</span>
              </div>
              <div className="flex justify-between text-sm font-sans">
                <span className="text-muted-foreground">Estimated Delivery</span>
                <span className="font-medium">Feb 15, 2026</span>
              </div>
              <div className="flex justify-between text-sm font-sans">
                <span className="text-muted-foreground">Carrier</span>
                <span className="font-medium">RUTNUG Express</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  );
};

export default OrderTracking;
