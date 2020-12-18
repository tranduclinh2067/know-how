import React from 'react';
import { useRouter } from 'next/router'
import Link from 'next/link';

function Tag() {
    const router = useRouter();
    console.log(router.query.slug);
    
    return (
        <div>
            Tag
            <Link href='/'>
                <a>
                    Home-page
                </a>
            </Link>
        </div>
    )
}

export default Tag
