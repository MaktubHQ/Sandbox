import Navbars from "../../components/accessories/navbar";
import Footer from "../../components/accessories/footer";

export default function Post() {
  return (
      <div>
      <Navbars/>
      <Footer/>
      </div>
  );
}

export async function getStaticPaths() {
    // Return a list of possible value for id
  }

  export async function getStaticProps({ params }) {
    // Fetch necessary data for the blog post using params.id
  }