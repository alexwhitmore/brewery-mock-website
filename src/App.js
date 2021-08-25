import Layout from './layout/Layout';
import Hero from './sections/Hero';
import FeaturedList from './sections/FeaturedList';
import '../src/styles/global-styles.css';

function App() {
  return (
    <>
      <Layout>
        <Hero />
        <FeaturedList />
      </Layout>
    </>
  );
}

export default App;
