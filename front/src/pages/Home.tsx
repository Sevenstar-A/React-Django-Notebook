import NoteList from '../components/NoteList'
import Base from './Base'
import Hero from '../components/homepage/Hero'
import '../styles/home.css'
import WhyUs from '../components/homepage/WhyUs'

export default function HomePage() {
    console.log("Rendering home page! ")

    return (
        <Base>
            <Hero />
            <WhyUs />
        </Base>
    )

}
