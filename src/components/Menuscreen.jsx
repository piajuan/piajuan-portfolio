import React, { useRef, useState } from "react";
import data from "../data.json";
import Logo from "../components/IntroScreen/Logo";
import MenuCard from "../components/MenuScreen/MenuCard";
import FadeMask from "../components/ui/FadeMask";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import MenuDetails from "../components/MenuScreen/MenuDetails";
import close from "../assets/Bt_Close.svg";
import arrowUp from "../assets/Bt_Previous.svg";
import arrowDown from "../assets/Bt_Next.svg";
import Filters from "../components/Filters";

gsap.registerPlugin(useGSAP);

export const filters = ['All', 'The Campus', 'Workspaces'];

const MenuScreen = () => {
  const container = useRef();
  const [showDetails, setShowDetails] = useState(false);
  const [selectedItemIndex, setSelectedItemIndex] = useState(null);
  const [items, setItems] = useState(data.items);
  const [filteredItems, setFilteredItems] = useState(items);
  const [activeFilter, setActiveFilter] = useState(filters[0]);


  useGSAP(
    () => {
      gsap.from("#menu", { opacity: 0, y: 80, duration: 1.8,});
    },
    { scope: container }
  );

  const handleCardClick = (index) => {
    setSelectedItemIndex(index === selectedItemIndex ? null : index);
    setShowDetails(true);

    setTimeout(() => {
      const el = document.getElementById(`item-${index}`);
  
      if (el) {
        el.scrollIntoView({
          behavior: 'smooth',
          block: 'center',
        });
      }
    }, 50);
  };

  const filterItems = (category) => {
    if (category === 'All') {
      setFilteredItems(items);
    } else {
      const filtered = items.filter(item => item.category === category);
      setFilteredItems(filtered);
    }

    setActiveFilter(category);
  }

  return (
    <section className="w-full h-screen px-[7vw] py-[4.32431vh]" ref={container}>
      <FadeMask position="top" />
      <Logo className="z-20 fixed left-0 pointer-events-none"/>
      <div id="menu" aria-label="Menu items list" className="h-full flex flex-col">
        {filteredItems.map((item, i) => {
          return (
            <div
              id={`item-${i}`}
              key={i}
              className="relative pt-[2.162161vh] pb-[4.32431vh] border-solid border-b border-white/50 last:border-b-0"
            >
              <MenuCard
                category={item.category}
                name={item.name}
                thumbnail={item.thumbnail}
                onClick={() => handleCardClick(i)}
                showDetails={showDetails}
              />
              {showDetails && (
                <>
                  <div
                    className="w-[5.41vw] absolute top-[2.162161vh] right-0"
                    onClick={() => setShowDetails(false)}
                  >
                    <img src={close} alt="Close" className="w-full" />
                  </div>
                  <MenuDetails
                    index={i}
                    location={item.location}
                    description={item.description}
                    gallery={item.gallery}
                  />
                  <div className="flex gap-[2.162161vh] absolute bottom-[2.162161vh] right-0">
                    <div className="w-[5.41vw]">
                      <img src={arrowUp} alt="Previous" className="w-full" />
                    </div>
                    <div className="w-[5.41vw]">
                      <img src={arrowDown} alt="Next" className="w-full" />
                    </div>
                  </div>
                </>
              )}
            </div>
          );
        })}
      </div>
      <FadeMask position="bottom" />
      <Filters className="fixed left-0 bottom-[3vh] w-full z-20" filterItems={filterItems} activeFilter={activeFilter} />
    </section>
  );
};

export default MenuScreen;
