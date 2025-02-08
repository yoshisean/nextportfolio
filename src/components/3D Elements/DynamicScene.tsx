'use client'
import dynamic from "next/dynamic";
import {Suspense} from "react";

const DynamicScene = dynamic(() => import("./Scene"), {
    ssr: false,
    loading: () => <div>Loading...</div>,
})

const LazyScene = () => {
    return (
        <Suspense fallback={<div>Loading Scene...</div>}>
            <DynamicScene/>
        </Suspense>
    );
};

export default LazyScene;