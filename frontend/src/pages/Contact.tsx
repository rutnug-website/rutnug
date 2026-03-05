import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const Contact = () => {
  return (
    <main className="pt-24 pb-16 min-h-screen">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="max-w-5xl mx-auto px-4"
      >
        <h1 className="text-4xl md:text-5xl font-bold tracking-wide text-center mb-16">Contact Us</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Info */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <Phone size={20} className="mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-xs font-sans tracking-widest uppercase text-muted-foreground mb-1">Phone</p>
                  <p className="text-sm font-sans">9010444438</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Mail size={20} className="mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-xs font-sans tracking-widest uppercase text-muted-foreground mb-1">Email</p>
                  <p className="text-sm font-sans">Rutnug208@gmail.com</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <MapPin size={20} className="mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-xs font-sans tracking-widest uppercase text-muted-foreground mb-1">Address</p>
                  <p className="text-sm font-sans leading-relaxed">
                    8-2-269/19/440, Indira Nagar,<br />
                    Street No: 10, Banjara Hills,<br />
                    Road No: 2, Hyderabad – 500034
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Clock size={20} className="mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-xs font-sans tracking-widest uppercase text-muted-foreground mb-1">Business Hours</p>
                  <p className="text-sm font-sans">Monday – Sunday: 24/7 Open</p>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="aspect-video border border-border overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.9727!2d78.4404!3d17.4123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDI0JzQ0LjMiTiA3OMKwMjYnMjUuNCJF!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'grayscale(100%)' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="RUTNUG Location"
              />
            </div>
          </div>

          {/* Form */}
          <div className="space-y-6">
            <h2 className="text-lg font-bold tracking-wide">Send a Message</h2>
            <div className="space-y-4">
              <div>
                <Label className="text-xs font-sans tracking-widest uppercase">Name</Label>
                <Input className="rounded-none mt-2 font-sans" placeholder="Your name" />
              </div>
              <div>
                <Label className="text-xs font-sans tracking-widest uppercase">Email</Label>
                <Input className="rounded-none mt-2 font-sans" type="email" placeholder="Your email" />
              </div>
              <div>
                <Label className="text-xs font-sans tracking-widest uppercase">Message</Label>
                <Textarea className="rounded-none mt-2 font-sans min-h-[150px] resize-none" placeholder="Your message" />
              </div>
              <Button className="w-full rounded-none font-sans text-sm tracking-widest uppercase py-5">
                Send Message
              </Button>
            </div>
          </div>
        </div>
      </motion.div>
    </main>
  );
};

export default Contact;
