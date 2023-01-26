import {
  Clients,
  ContactForm,
  Title,
  LatestWork,
  Logos,
  Skills,
  Layout,
} from '@/components/index';

export default function Home() {
  return (
    <Layout>
      <div className='container mx-auto px-6'>
        <Title />
        <Logos />
        <Skills />
        <LatestWork />
        <Clients />
        <ContactForm />
      </div>
    </Layout>
  );
}
