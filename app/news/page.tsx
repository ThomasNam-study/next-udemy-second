import React from 'react';
import Link from "next/link";

const NewsPage = () => (
    <div>
        <h1>News Page</h1>
        <ul>
            <li><Link href="/news/1">First News Item</Link></li>
            <li><Link href="/news/2">Second News Item</Link></li>
            <li><Link href="/news/3">Third News Item</Link></li>
        </ul>
    </div>
);

export default NewsPage;