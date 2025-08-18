import { Metadata } from 'next';
import AdatpAi from '../components/adaptAi/AdatpAi';

export const metadata: Metadata = {
    title: "Adapt AI",
};

const page = () => {
    return (
        <div>
            <AdatpAi />
        </div>
    )
}

export default page
