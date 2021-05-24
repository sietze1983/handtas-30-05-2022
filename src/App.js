import React from 'react';
import './App.css';
import Product from './Product'
import Tile from './Tile'
import bag1 from "./assets/bag_1.png"
import bag2 from "./assets/bag_2.png"
import bag3 from "./assets/bag_3.png"
import bag4 from "./assets/bag_4.png"
import brand from "./assets/brand.png"
import story from "./assets/our_story.png"

function App() {
  return (
      <>
        <h1>Handbags & Purses</h1>
        <nav>
          <button
              type={"button"}
              onClick={() => console.log("Jij wilt shoppen!")}>

            To The Collection
          </button>
          <button
              type={"button"}
              onClick={() => console.log("Shop All Bags")}>
            Shop All Bags
          </button>
          <button disabled
                  type={"button"}>
            pre-orders
          </button>
        </nav>
        <main>
          <Product
              image={bag1}
              span="best seller"
              name="The handy bag"
              price="€400,-"
          />
          <Product
              image={bag2}
              span="best seller"
              name="The stylish bag"
              price="€250,-"
          />
          <Product
              image={bag3}
              span="new collection"
              name="The simple bag"
              price="€300,-"
          />
          <Product
              image={bag4}
              span="new collection"
              name="The trendy bag"
              price="€150,-"
          />
        </main>
        <footer>
          <Tile
              name={"THE BRAND"}
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc volutpat dignissim diam sit amet dignissim. Suspendisse potenti. Nunc eu augue est. Nunc libero dui, mattis non magna non, iaculis sollicitudin enim. Phasellus a fermentum ante. Donec luctus mi et arcu."
          />
          <Tile
              image={brand}
          />
          <Tile
              image={story}
          />
          <Tile
              name={"OUR STORY"}
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean purus ante, venenatis quis metus imperdiet, viverra blandit ipsum. Aenean id velit sed est viverra tincidunt. Class aptent taciti sociosqu ad."
          />
        </footer>
        </>

        )
}
export default App