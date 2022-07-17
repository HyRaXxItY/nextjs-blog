import Document, { Html, Head, Main, NextScript, DocumentContext } from "next/document";

class MyDocument extends Document {
    static async getInitialProps(ctx: DocumentContext) {
        const initialProps = await Document.getInitialProps(ctx)

        return initialProps
    }
    render() {
        return (
            <Html>
                <Head>
                </Head>
                <body className='x-scrollbar class-1 class-2 class-3 class-4'>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument;
