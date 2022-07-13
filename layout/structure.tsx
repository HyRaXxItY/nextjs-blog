import Header from '../components/header'
import Footer from '../components/footer'
import { ReactComponentElement } from 'react'
import Head from 'next/head'

type Props = {
    children: React.ReactNode
}
const Structure = ({ children }: Props) => {
    return (
        <>
            <Head>
                <title>Blog website</title>
            </Head>
            <Header />
            <main>{children}</main>
            <Footer />
        </>
    )
}

export default Structure