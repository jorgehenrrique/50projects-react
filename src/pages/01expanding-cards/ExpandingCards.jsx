import "./ExpandingCards.css";
import { useState } from "react";

export default function ExpandingCards() {
  document.title = 'Expanding Cards';

  const [panels, setPanels] = useState([
    {
      active: true,
      title: "Explore The World",
      url:
        "https://images.unsplash.com/photo-1558979158-65a1eaa08691?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
    },
    {
      active: false,
      title: "Wild Forest",
      url:
        "https://images.unsplash.com/photo-1572276596237-5db2c3e16c5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
    },
    {
      active: false,
      title: "Sunny Beach",
      url:
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1353&q=80",
    },
    {
      active: false,
      title: "City on Winter",
      url:
        "https://images.unsplash.com/photo-1551009175-8a68da93d5f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80",
    },
    {
      active: false,
      title: "Mountains - Clouds",
      url:
        "https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
    },
  ]);

  function toggleImage(currentIndex) {
    const newPanels = panels.map((panel, index) => {
      panel.active = (currentIndex === index); // retorna, true se o currentIndex for igual ao index, e false caso contrário.
      return panel;
    });
    setPanels(newPanels);
  }

  return (
    <div className="container-01">
      {panels.map((panel, index) => {
        return (
          <div onClick={() => toggleImage(index)}
            className={`panel ${panel.active ? "active" : ""}`}
            style={{ backgroundImage: `url("${panel.url}")` }} key={index}>
            <h3>{panel.title}</h3>
          </div>
        )
      })}
    </div>
  );
}
