import { Metadata } from 'next';
import Blogs from '../components/blogs/Blogs';

export const metadata: Metadata = {
  title: "Blog "
};

const page = () => {
  return (
    <div>
      <Blogs/>
    </div>
  )
}

export default page