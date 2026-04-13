import { Booking } from '../sections';
import { PageTransition } from '../components/PageTransition';

export default function Contact() {
  return (
    <PageTransition>
      <div className="pt-24 min-h-screen bg-white">
        <Booking />
      </div>
    </PageTransition>
  );
}
