import React from 'react'
import { Helmet } from 'react-helmet';

interface SEOProps {
    title?: string
}

function SEO({ title }: SEOProps) {
    return (
        <Helmet>
            <meta charSet="utf-8" />
            <title>
                {title ? `${title} - 선린페이` : "선린페이"}
            </title>
        </Helmet>
    )
}

export default SEO;