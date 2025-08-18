import { Metadata } from 'next';
import Videos from '../components/videos/page';

export const metadata: Metadata = {
    title: "Videos"
};

const page = () => {
    return (
        <div>
            <Videos />
        </div>
    )
}

export default page
