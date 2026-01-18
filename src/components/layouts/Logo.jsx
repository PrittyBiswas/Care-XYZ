import link from 'daisyui/components/link';
import Link from 'next/link';

import logoImage from '../../../public/assets/carelogo.png';
import Image from 'next/image';

const Logo = () => {
    return (

        <Link href="/" className="flex items-center text-xl">
            <Image
                src={logoImage}
                alt="Care.IO Logo"
                width={60}
                height={40}
                className=" border rounded-full"
                priority
            />
            
        </Link>
    );
};

export default Logo;