import barclays from "../images/barclays.svg";
import hsbc from "../images/hsbc.svg";
import goldmanSachs from "../images/goldman-sachs.svg";
import halifax from "../images/halifax.svg";
import santander from "../images/santander.svg";
import play from "../images/play.svg";

export const data = [
  {
    id: "play",
    title: "play",
    icon: play,
    locked: false,

    children: [
      {
        id: "barclays",
        title: "Barclays",
        icon: barclays,
        locked: false,
        parentId: "play",

        children: [
          {
            id: "goldman sachs",
            icon: goldmanSachs,
            title: "Goldman Sachs",
            locked: true,
            parentId: "barclays",
            children: [],
          },
          {
            id: "hsbc",
            icon: hsbc,
            title: "HSBC",
            parentId: "barclays",
            children: [
              {
                id: "santander",
                icon: santander,
                nodeState: "unlocked",
                title: "Santander",
                parentId: "hsbc",
                locked: true,
                children: [],
              },
            ],
          },
          {
            id: "halifax",
            icon: halifax,
            nodeState: "unlocked",
            title: "Halifax",
            parentId: "barclays",
            children: [],
          },
        ],
      },
    ],
  },
];
