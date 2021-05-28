import React from 'react';
import Order from '../components/orgnisms/Order';

import { mockProducts } from '../utils/mockData'

export function PosPage() {
    const data = mockProducts(1000)
    return (
        <div>
            <Order data={data}/>
        </div>
    )
}