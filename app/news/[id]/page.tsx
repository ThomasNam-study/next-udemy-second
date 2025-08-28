import React from 'react';

type Prop = { params: { id: string } }

const NewsDetailPage = ({params}: Prop) => (
    <div>
        <h1>News Detail - {params.id} Page</h1>
        <ul>
            <li>First News Item</li>
            <li>Second News Item</li>
            <li>Third News Item</li>
        </ul>
    </div>
);

export default NewsDetailPage;