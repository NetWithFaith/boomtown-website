<script>
  import Navbar from '../components/navbar.svelte';
  import Hero from '../components/hero.svelte';
  import About from '../components/about.svelte';
  import MenuHighlights from '../components/menuhighlights.svelte';
  import StorySection from '../components/storysection.svelte';
  import Experience from '../components/experience.svelte';
  import Gallery from '../components/gallery.svelte';
  import HoursLocation from '../components/hourslocation.svelte';
  import Footer from '../components/footer.svelte';
  import ContactCTA from '../components/contactcta.svelte';
    </script>

    <div id="top"></div>

    <Navbar />

    <main id="main">
        <Hero />
        <About />
        <MenuHighlights />
        <StorySection />
        <Experience />
        <Gallery />
        <HoursLocation />
        <ContactCTA />
    </main>

<Footer />
