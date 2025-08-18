import { Metadata } from 'next';
import OurJourney from '../components/ourJourney/OurJourney';

export const metadata: Metadata = {
    title: "Our Journey",
};

const page = () => {
    return (
        <div>
            <OurJourney />
        </div>
    )
}

export default page