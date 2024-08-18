import { TypeAnimation } from 'react-type-animation';
export default function TypingText() {
    return (
        <TypeAnimation
            sequence={[
                'Aku Sudah Bisa CRUD React',
                1000,
                'Sudah CRUD Belum?',
                1000,
                'Kalau Belum Crud',
                1000,
                'Ayo CRUD',
                1000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            className='text-5xl font-bold text-blue-500'
        />
    );
};