import React from 'react'
import { ViewProvider } from './Store/ViewContext'

import Layout from './components/Layout/Layout'
import ViewController from './components/View/ViewController'

export default function App() {

    return (
        <ViewProvider>
            <Layout style={{height : '100vh', width : '110vw'}}>
                <ViewController />
            </Layout>
        </ViewProvider>
    )
}
