import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { siteConfig } from "@/config/site";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto">
        <div className="max-w-4xl mx-auto px-4 py-8">
          <h2 className="text-4xl text-center font-bold mb-8">About {siteConfig.name}</h2>

          <div className="space-y-6 text-lg">
            <section>
              <h2 className="text-2xl font-semibold mb-3">Our Mission</h2>
              <p>
                At {siteConfig.name}, our mission is to provide fun, accessible, and engaging browser-based gaming experiences for everyone. We believe in the power of games to bring joy, challenge minds, and connect people. We are passionate about creating innovative and entertaining games that can be played instantly, without downloads or barriers.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">Who We Are</h2>
              <p>
                We are a small, dedicated team of game developers, designers, and enthusiasts who love creating unique and memorable gaming moments. Our journey started with a simple idea: to make games that we ourselves would love to play and share with the world. {siteConfig.name} is the culmination of our passion and hard work.
              </p>
              <p className="mt-4">
                While we started with the chaotic fun of physics-based games like Crazy Cattle 3D, we are always exploring new genres and ideas to expand our collection and offer a diverse range of entertainment.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">Our Games</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Italian Brainrot Clicker：</strong> A wild meme clicker game—tap to unlock crazy Italian meme characters and upgrades, chase high scores, and laugh nonstop!
                </li>
                <li>
                  <strong>Crazy Cow 3D：</strong> Control a bouncy cow, smash obstacles, and race through wacky 3D levels packed with surprises.
                </li>
                <li>
                  <strong>Crazy Chicken 3D：</strong> Guide a speedy chicken through fun 3D challenges—dodge, jump, and collect as many points as you can.
                </li>
                <li>
                  <strong>Cheese Chompers 3D：</strong> Become a hungry mouse, chomp cheese, avoid traps, and outsmart rivals in a fast-paced 3D maze.
                </li>
                <li>
                  <strong>Basketball Bros Unblocked：</strong> Play quick, action-packed basketball matches with friends—easy to start, hard to master!
                </li>
                <li>
                  <strong>Pokemon Gamma Emerald：</strong> Explore a fan-made Pokémon world, catch creatures, battle trainers, and discover new adventures.
                </li>
                <li>
                  <strong>Sprunki Incredibox：</strong> Mix beats and sounds with unique Sprunki characters—create your own music in this playful remix game.
                </li>
                <li>
                  <strong>Crazy Cattle 3D：</strong> Take charge of a wild herd, crash through obstacles, and enjoy chaotic physics fun in 3D.
                </li>
              </ul>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold mb-3">Our Commitment</h2>
              <p>
                We are committed to providing a safe and enjoyable environment for our players. All our games are free to play directly in your browser, with no hidden costs or intrusive requirements. We value your feedback and encourage you to reach out to us with any suggestions or comments.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">Contact Us</h2>
              <p>
                Have questions, feedback, or just want to say hello? We'd love to hear from you!
              </p>
              <p className="mt-2">
                You can reach us by email at: <a href={`mailto:${siteConfig.email}`} className="text-primary hover:underline">{siteConfig.email}</a>
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default AboutPage;
