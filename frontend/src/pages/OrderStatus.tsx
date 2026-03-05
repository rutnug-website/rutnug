import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Check } from 'lucide-react';

const steps = ['Order Confirmed', 'Processing', 'Shipped', 'Out for Delivery', 'Delivered'];

const OrderStatus = () => {
  const [orderId, setOrderId] = useState('');
  const [tracked, setTracked] = useState(false);
  const currentStep = 2; // mock: "Shipped"

  return (
    <main className="pt-24 pb-16 min-h-screen">
      <div className="max-w-2xl mx-auto px-4">
        <h1 className="text-4xl font-bold tracking-wide text-center mb-12">Order Status</h1>

        <div className="flex gap-2 mb-16">
          <Input
            value={orderId}
            onChange={e => setOrderId(e.target.value)}
            placeholder="Enter Order ID"
            className="rounded-none font-sans flex-1"
          />
          <Button onClick={() => setTracked(true)} className="rounded-none font-sans text-sm tracking-widest uppercase px-8">
            Track
          </Button>
        </div>

        {tracked && (
          <div className="space-y-0">
            {steps.map((step, i) => (
              <div key={step} className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className={`w-8 h-8 rounded-full border-2 flex items-center justify-center transition-colors ${
                    i <= currentStep ? 'bg-foreground border-foreground text-background' : 'border-border'
                  }`}>
                    {i <= currentStep && <Check size={14} />}
                  </div>
                  {i < steps.length - 1 && (
                    <div className={`w-[2px] h-16 transition-colors ${i < currentStep ? 'bg-foreground' : 'bg-border'}`} />
                  )}
                </div>
                <div className="pt-1">
                  <p className={`text-sm font-sans font-medium ${i <= currentStep ? '' : 'text-muted-foreground'}`}>{step}</p>
                  {i <= currentStep && (
                    <p className="text-xs font-sans text-muted-foreground mt-1">
                      {i === 0 && 'Feb 10, 2026'}
                      {i === 1 && 'Feb 11, 2026'}
                      {i === 2 && 'Feb 12, 2026'}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
};

export default OrderStatus;
