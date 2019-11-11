import React from 'react'
import SEO from '../../components/SEO'
import Container from '../../components/Layout/Container'
import DashboardWelcome from '../../components/Page/DashBoard/Welcome'
import RedirectIfNotLogined from '../../components/special/RedirectIfNotLogined'

export default function () {
    return (
        <Container>
            <SEO title="대시보드" />
            <RedirectIfNotLogined />
            <h1>대시보드</h1>
            <div>
                <DashboardWelcome />
            </div>
        </Container>
    )
}