'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function AvisoAdm() {
    const router = useRouter();

    useEffect(() => {
        const timeout = setTimeout(() => {
            if (window.history.length > 1) {
                router.back();
            } else {
                router.replace('/home');
            }
        }, 3000);

        return () => clearTimeout(timeout);
    }, [router]);

    return (
        <div style={{ padding: 40, textAlign: 'center' }}>
            <h1>Acesso restrito</h1>
            <p>Esta área é exclusiva para administradores.</p>
            <p>Você será redirecionado em instantes...</p>
        </div>
    );
}
