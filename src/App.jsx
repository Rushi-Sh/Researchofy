import React from 'react'
import NavBar from './components/NavBar'
import { Analytics } from "@vercel/analytics/react"
import Home from './sections/Home'
import FAQ from './sections/FAQ'

const App = () => {
    return (
        <main>

            <Analytics/>

            <NavBar/>

            <section>
                <Home/>
            </section>

            <section>
                About Us
            </section>

            <section>
                Services
            </section>

            <section>
                Online Guidance
            </section>

            <section>
                Our Project
            </section>

            <section>
                Blog
            </section>

            <section>
                Contact Us
            </section>

            <section>
                <FAQ/>
            </section>
        </main>
    )
}
export default App
