import { Layout, AboutDescription, ContactForm } from '@/components';

function About() {
  return (
    <Layout>
      <AboutDescription />
      <div className='container mx-auto px-6'>
        <ContactForm />
      </div>
    </Layout>
  );
}

export default About;
