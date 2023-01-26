import {
  Clients,
  ContactForm,
  Header,
  LatestWork,
  Logos,
  Skills,
} from '@/components/index';

export default function Home() {
  return (
    <div className='container mx-auto px-6'>
      <Header />
      <Logos />
      <Skills />
      <LatestWork />
      <Clients />
      <ContactForm />
    </div>
  );
}
