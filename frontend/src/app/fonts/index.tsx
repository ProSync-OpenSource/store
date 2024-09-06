import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({
    weight: ['300', '400', '500', '600', '700', '800'],
    subsets: ['latin'],
    display: 'swap',
    fallback: ['Arial', 'Sans-serif'],
});

export default montserrat;