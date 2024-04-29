import React, { useState } from "react";
import { IonIcon } from '@ionic/react';
import { searchOutline, heartOutline, diamondOutline, cardOutline, saveOutline } from 'ionicons/icons';

const Footer = () => {
  const Menus = [
    { name: "Search", icon: searchOutline, dis: "translate-x-0" },
    { name: "Suggestions", icon: saveOutline, dis: "translate-x-16" },
    { name: "Premium", icon: diamondOutline, dis: "translate-x-32" },
    { name: "CardPay", icon: cardOutline, dis: "translate-x-48" },
    { name: "Saved", icon:  heartOutline, dis: "translate-x-64" },
  ];
  const [active, setActive] = useState(0);
  return (
    <footer className="fixed bottom-0 left-0 w-full py-0 bg-slate-300">
      <div className="max-h-[4.4rem] px-6 rounded-t-xl">
        <ul className="flex justify-between items-center h-16">
          {Menus.map((menu, i) => (
            <li key={i} className="flex-1 text-center">
              <a
                className={`flex flex-col items-center justify-center h-full ${
                  active === i ? "text-red-600" : ""
                }`}
                onClick={() => setActive(i)}
              >
                <IonIcon icon={menu.icon} size="small" />
                <span className="mt-1">{menu.name}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
