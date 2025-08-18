import { Metadata } from 'next';
import ContactUs from '../components/ui/ContactUs';

export const metadata: Metadata = {
    title: "Contact"
}

const page = () => {
  return (
    <div>
      <ContactUs/>
    </div>
  )
}

export default page
