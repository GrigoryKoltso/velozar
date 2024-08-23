import Navbar from "./components/Navbar.jsx";
import logo from "./assets/logo.png";
import DinoSection from "./components/DinoSection.jsx";
import imageSrc from './assets/dino.png'
import OfferSection from "./components/OfferSection.jsx";
import imgSrc from './assets/img1.png';
import DescriptionSection from "./components/DescriptionSection.jsx";
import ServiceSection from "./components/ServiceSection.jsx";
import RentalSection from "./components/RentalSection.jsx";
import imgSsrc from "./assets/img2.jpg"

function App() {
  const menuItems = ["О нас", "Услуги", "Арена"];
  return (
    <div className="wrapper">
      <div className="murapper">
      <Navbar
        logo={logo}
        menuItems={menuItems}
      />
      <DinoSection
        title={'ВЕЛОМАСТЕРСКАЯ "ВЕЛОЗАР"'}
        description={'Мы, мастера веломастерской «Велозар», как раз те самые счастливые люди, которые смогли превратить свое увлечение и хобби в профессию. Мы сами любим кататься и хотим чтобы Ваш двухколесный друг приносил Вам только радость и удовольствие от езды.'}
        imageSrc={imageSrc}
      />
        <OfferSection
        title='Что мы предлагаем'
        description='В нашей мастерской можно выполнить комплексное техническое обслуживание велосипеда, ремонт и настройку всех его узлов, шиномонтажные работы. Вовремя проведенное ТО велосипеда помогает избежать многих проблем и дорогого ремонта. Все работы выполняем качественно и с душой.'
        imageSrc={imgSrc}
        />
      </div>
        <DescriptionSection
        descriptionOne='Приехав к нам однажды, многие наши клиенты становятся постоянными, а часть из них даже друзьями.'
        descriptionTwo='А также в нашей мастерской можно отремонтировать электросамокат и электровелосипед.'
        />
        <ServiceSection/>
        <RentalSection
         imageSrc={imgSsrc}
         title='Прокат велосипедов'
         description='У нас вы можете взять на прокат хорошо обслуженные и настроенные велосипеды. Как раз мы находимся в прекрасном парке!'
         />
    </div>
  );
}

export default App;
