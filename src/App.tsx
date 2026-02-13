import FloatingSticker from "./components/FloatingSticker";
import LoveLetter from "./components/LoveLetter";
import PhotoCard from "./components/PhotoCard";

// Import sticker assets (Originals)
import BalloonSticker from "./assets/BalloonSticker.png";
import CakeSticker from "./assets/CakeSticker.png";
import CoffeeSticker from "./assets/CoffeeSticker.png";
import FlowerSticker from "./assets/FlowerSticker.png";
import GiftSticker from "./assets/GiftSticker.png";
import HeartSticker from "./assets/HeartSticker.png";
import LetterSticker from "./assets/LetterSticker.png";
import RingSticker from "./assets/RingSticker.png";
import StarSticker from "./assets/StarSticker.png";
import TeddyBearSticker from "./assets/TeddyBearSticker.png";

import Cosmo from "./assets/CosmoOUTLINED.png";
import Daffodil from "./assets/DaffodilOUTLINED.png";
import Daisy from "./assets/DaisyOUTLINED.png";
import Lavender from "./assets/LavenderOUTLINED.png";
import Lily from "./assets/LilyOUTLINED.png";
import LilyOfTheValley from "./assets/LilyOfTheValleyOUTLINED.png";
import Orchid from "./assets/OrchidOUTLINED.png";
import Pansy from "./assets/PansyOUTLINED.png";
import Poppy from "./assets/PoppyOUTLINED.png";
import Rose from "./assets/RoseOUTLINED.png";
import Sunflower from "./assets/SunflowerOUTLINED.png";
import Tulip from "./assets/TulipOUTLINED.png";

// Import sticker assets (Japanese Treats)
import Dango from "./assets/Dango.png";
import Dorayaki from "./assets/Dorayaki.png";
import Melonpan from "./assets/Melonpan.png";
import Purin from "./assets/Purin.png";
import SakuraMochi from "./assets/Sakura Mochi.png";
import StrawberryDaifuku from "./assets/Strawberry Daifuku.png";
import Taiyaki from "./assets/Taiyaki.png";
import UsagiManjuu from "./assets/Usagi Manjuu.png";
import Yatsuhashi from "./assets/Yatsuhashi.png";
import Youkan from "./assets/Youkan.png";

// Import User Photos
import IMG1 from "./assets/AFD4B2CC-2EF1-4D8F-9E81-3E2339192DB1.png";
import IMG2 from "./assets/IMG_1889.png";
import IMG3 from "./assets/IMG_4336.png";
import IMG4 from "./assets/IMG_4614.png";

function App() {
  return (
    <div className="relative min-h-screen bg-valentine-bg overflow-hidden">
      {/* ===== Floating Stickers (32 Unique Assets) ===== */}

      {/* --- Row 1: Top Area (Horizontal) --- */}
      <FloatingSticker
        src={CoffeeSticker}
        alt="Coffee"
        className="top-[2%] left-[5%]"
        size={110}
        delay={0}
      />
      <FloatingSticker
        src={StrawberryDaifuku}
        alt="Strawberry Daifuku"
        className="top-[1%] left-[18%]"
        size={85}
        delay={0.8}
        reverse
      />
      <FloatingSticker
        src={LetterSticker}
        alt="Letter"
        className="top-[3%] left-[32%]"
        size={100}
        delay={1.5}
      />
      <FloatingSticker
        src={SakuraMochi}
        alt="Sakura Mochi"
        className="top-[1%] left-[45%]"
        size={90}
        delay={2.3}
      />
      <FloatingSticker
        src={GiftSticker}
        alt="Gift"
        className="top-[2%] right-[32%]"
        size={115}
        delay={0.3}
        reverse
      />
      <FloatingSticker
        src={Dorayaki}
        alt="Dorayaki"
        className="top-[1%] right-[18%]"
        size={85}
        delay={1.1}
      />
      <FloatingSticker
        src={HeartSticker}
        alt="Heart"
        className="top-[3%] right-[5%]"
        size={105}
        delay={2}
      />

      {/* --- Left Column (Vertical) --- */}
      <FloatingSticker
        src={TeddyBearSticker}
        alt="Teddy Bear"
        className="top-[15%] left-[2%]"
        size={130}
        delay={1}
      />
      <FloatingSticker
        src={Rose}
        alt="Rose"
        className="top-[28%] left-[4%]"
        size={80}
        delay={2.5}
        reverse
      />
      <FloatingSticker
        src={Melonpan}
        alt="Melonpan"
        className="top-[38%] left-[1%]"
        size={90}
        delay={0.5}
      />
      <FloatingSticker
        src={BalloonSticker}
        alt="Balloon"
        className="top-[50%] left-[3%]"
        size={100}
        delay={1.8}
        reverse
      />
      <FloatingSticker
        src={Sunflower}
        alt="Sunflower"
        className="top-[62%] left-[4%]"
        size={95}
        delay={3.1}
      />
      <FloatingSticker
        src={Dango}
        alt="Dango"
        className="top-[75%] left-[2%]"
        size={85}
        delay={1.3}
        reverse
      />
      <FloatingSticker
        src={LilyOfTheValley}
        alt="Lily Valley"
        className="bottom-[8%] left-[5%]"
        size={75}
        delay={2.4}
      />

      {/* --- Right Column (Vertical) --- */}
      <FloatingSticker
        src={StarSticker}
        alt="Star"
        className="top-[15%] right-[3%]"
        size={95}
        delay={1.2}
        reverse
      />
      <FloatingSticker
        src={Tulip}
        alt="Tulip"
        className="top-[25%] right-[5%]"
        size={80}
        delay={0.2}
      />
      <FloatingSticker
        src={RingSticker}
        alt="Ring"
        className="top-[35%] right-[2%]"
        size={105}
        delay={1.9}
        reverse
      />
      <FloatingSticker
        src={Taiyaki}
        alt="Taiyaki"
        className="top-[48%] right-[4%]"
        size={95}
        delay={0.6}
      />
      <FloatingSticker
        src={Orchid}
        alt="Orchid"
        className="top-[60%] right-[3%]"
        size={80}
        delay={2.8}
        reverse
      />
      <FloatingSticker
        src={CakeSticker}
        alt="Cake"
        className="top-[72%] right-[5%]"
        size={115}
        delay={1.4}
      />
      <FloatingSticker
        src={Cosmo}
        alt="Cosmo"
        className="bottom-[8%] right-[4%]"
        size={75}
        delay={0.9}
        reverse
      />

      {/* --- Inner/Floating Items (Scattered) --- */}
      <FloatingSticker
        src={Purin}
        alt="Purin"
        className="top-[12%] left-[25%]"
        size={85}
        delay={2.1}
      />
      <FloatingSticker
        src={Daisy}
        alt="Daisy"
        className="top-[18%] left-[12%]"
        size={75}
        delay={0.7}
        reverse
      />

      <FloatingSticker
        src={UsagiManjuu}
        alt="Usagi Manjuu"
        className="top-[14%] right-[28%]"
        size={80}
        delay={1.6}
      />
      <FloatingSticker
        src={Poppy}
        alt="Poppy"
        className="top-[20%] right-[14%]"
        size={70}
        delay={3}
        reverse
      />

      <FloatingSticker
        src={Yatsuhashi}
        alt="Yatsuhashi"
        className="bottom-[25%] left-[12%]"
        size={85}
        delay={0.4}
      />
      <FloatingSticker
        src={Lavender}
        alt="Lavender"
        className="bottom-[15%] left-[22%]"
        size={75}
        delay={1.7}
        reverse
      />

      <FloatingSticker
        src={Youkan}
        alt="Youkan"
        className="bottom-[22%] right-[15%]"
        size={80}
        delay={2.2}
      />
      <FloatingSticker
        src={Pansy}
        alt="Pansy"
        className="bottom-[12%] right-[25%]"
        size={70}
        delay={0.9}
        reverse
      />

      <FloatingSticker
        src={Lily}
        alt="Lily"
        className="top-[85%] left-[35%]"
        size={80}
        delay={2.6}
      />
      <FloatingSticker
        src={Daffodil}
        alt="Daffodil"
        className="top-[82%] right-[35%]"
        size={75}
        delay={1.5}
        reverse
      />

      <FloatingSticker
        src={FlowerSticker}
        alt="Big Flower"
        className="bottom-[2%] left-[45%]"
        size={110}
        delay={3.5}
      />

      {/* ===== Main Content ===== */}
      <div className="relative z-10 max-w-360 mx-auto px-4 py-8 min-h-screen flex flex-col">
        {/* Letter Section */}
        <section className="flex-1 flex items-center justify-center py-16">
          <LoveLetter />
        </section>

        {/* Photo Cards Section */}
        <section className="pb-16">
          <h2 className="font-dancing text-3xl sm:text-4xl text-valentine-primary text-center mb-10 animate-fade-in-up">
            Happiest when I'm with you
          </h2>
          <div className="flex flex-wrap justify-center gap-8">
            <PhotoCard
              imageSrc={IMG2}
              caption="Anni đầu tiên"
              className="animate-fade-in-up -rotate-3 hover:rotate-0"
            />
            <PhotoCard
              imageSrc={IMG1}
              caption="Always you"
              className="animate-fade-in-up rotate-2 hover:rotate-0"
            />
            <PhotoCard
              imageSrc={IMG3}
              caption="Us"
              className="animate-fade-in-up -rotate-2 hover:rotate-0"
            />
            <PhotoCard
              imageSrc={IMG4}
              caption="Em đẹp hihi"
              className="animate-fade-in-up rotate-3 hover:rotate-0"
            />
          </div>
        </section>
      </div>

      {/* Subtle decorative gradient overlay at bottom */}
      <div className="fixed bottom-0 left-0 right-0 h-32 bg-linear-to-t from-valentine-bg to-transparent pointer-events-none z-20" />
    </div>
  );
}

export default App;
