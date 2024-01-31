"use client";
import React, { useState } from "react";

function MenuContainer() {
  const [activeMenu, setActiveMenu] = useState("Eat");

  const openMenu = (menuName: any) => {
    setActiveMenu(menuName);
  };



  return (
    <>
      <div className="w3-container" id="menu">
        <div className="w3-content" style={{ maxWidth: "700px" }}>
          <h5 className="w3-center w3-padding-48">
            <span className="w3-tag w3-wide">THE MENU</span>
          </h5>
          <div className="w3-row w3-center w3-card w3-padding">
            <div
              className={`w3-col s6 tablink${
                activeMenu === "Eat" ? " w3-dark-grey" : ""
              }`}
              onClick={() => openMenu("Eat")}
            >
              Eat
            </div>
            <div
              className={`w3-col s6 tablink${
                activeMenu === "Drinks" ? " w3-dark-grey" : ""
              }`}
              onClick={() => openMenu("Drinks")}
            >
              Drink
            </div>
          </div>
          {activeMenu === "Eat" ? (
            <div
              id="Eat"
              className={`w3-container menu w3-padding-48 w3-card${
                activeMenu === "Eat" ? "" : " hidden"
              }`}
            >
              {/* ... Conteúdo da seção 'Eat' ... */}
              <h5>Bread Basket</h5>
              <p className="w3-text-grey">
                Assortment of fresh baked fruit breads and muffins 5.50
              </p>
              <br />

              <h5>Honey Almond Granola with Fruits</h5>
              <p className="w3-text-grey">
                Natural cereal of honey toasted oats, raisins, almonds and dates
                7.00
              </p>
              <br />

              <h5>Belgian Waffle</h5>
              <p className="w3-text-grey">
                Vanilla flavored batter with malted flour 7.50
              </p>
              <br />

              <h5>Scrambled eggs</h5>
              <p className="w3-text-grey">
                Scrambled eggs, roasted red pepper and garlic, with green onions
                7.50
              </p>
              <br />

              <h5>Blueberry Pancakes</h5>
              <p className="w3-text-grey">
                With syrup, butter and lots of berries 8.50
              </p>
            </div>
          ) : (
            <div
              id="Drinks"
              className={`w3-container menu w3-padding-48 w3-card${
                activeMenu === "Drinks" ? "" : " hidden"
              }`}
            >
              {/* ... Conteúdo da seção 'Drinks' ... */}
              <h5>Coffee</h5>
              <p className="w3-text-grey">Regular coffee 2.50</p>
              <br />

              <h5>Chocolato</h5>
              <p className="w3-text-grey">Chocolate espresso with milk 4.50</p>
              <br />

              <h5>Corretto</h5>
              <p className="w3-text-grey">Whiskey and coffee 5.00</p>
              <br />

              <h5>Iced tea</h5>
              <p className="w3-text-grey">Hot tea, except not hot 3.00</p>
              <br />

              <h5>Soda</h5>
              <p className="w3-text-grey">Coke, Sprite, Fanta, etc. 2.50</p>
            </div>
          )}
          <img style={{ width: "100%" }}   className="w3-margin-top" src="/coffeehouse.jpg"></img>

        </div>
      </div>
    </>
  );
}

export default MenuContainer;
