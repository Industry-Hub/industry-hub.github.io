import IHLogoWhite from "@/assets/logoWhite.png";
import "./app.component.scss";
import { BackgroundBeams } from "@/components/ui/background-beams";
function App() {
  return (
    <>
      <div className="h-screen flex items-center justify-center">
        <BackgroundBeams />
        <div className="logo">
          <img
            src={IHLogoWhite}
            alt="Coming Soon Logo"
            className="logo-image mb-4"
          />
          <p className="text-white text-2xl font-bold text-center">
            Coming soon to Universities in Andhra Pradesh.
          </p>
        </div>
      </div>
    </>
  );
}

export default App;
