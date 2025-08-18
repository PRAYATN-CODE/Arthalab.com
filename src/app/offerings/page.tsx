import { Metadata } from 'next';
import Offerings from '../components/offerings/Offerings';

export const metadata: Metadata = {
  title: "Offerings"
};

const page = () => {
  return (
    <div>
      <Offerings/>
    </div>
  )
}

export default page
