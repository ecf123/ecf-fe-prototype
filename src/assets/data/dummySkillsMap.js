import barclays from "../images/barclays.svg";
import hsbc from "../images/hsbc.svg";
import goldmanSachs from "../images/goldman-sachs.svg";
import halifax from "../images/halifax.svg";
import santander from "../images/santander.svg";
import play from "../images/play.svg";

export const data = [
  {
    id: "play",
    link: "/courses/0",
    title: "play",
    icon: play,
    locked: false,
    description: "Lorem ipsum dolor sit amet. Ea nisi accusamus 33 Quis quidem ut quia obcaecati ex modi dolore 33 suscipit labore. Ut aliquid molestias aut voluptate incidunt nam assumenda quis et iste vero sit dolor dicta At iusto sunt suscipit nulla.",
    children: [
      {
        id: "barclays",
        title: "Commercial Banking with Barclays",
        link: "/courses/0",
        icon: barclays,
        description: "Lorem ipsum dolor sit amet. Ea nisi accusamus 33 Quis quidem ut quia obcaecati ex modi dolore 33 suscipit labore. Ut aliquid molestias aut voluptate incidunt nam assumenda quis et iste vero sit dolor dicta At iusto sunt suscipit nulla.",
        locked: false,
        parentId: "play",

        children: [
          {
            id: "goldman sachs",
            icon: goldmanSachs,
            link: "/courses/0",
            description: "Lorem ipsum dolor sit amet. Ea nisi accusamus 33 Quis quidem ut quia obcaecati ex modi dolore 33 suscipit labore. Ut aliquid molestias aut voluptate incidunt nam assumenda quis et iste vero sit dolor dicta At iusto sunt suscipit nulla.",
            title: "Goldman Sachs",
            parentId: "barclays",
            children: [],
          },
          {
            id: "hsbc",
            icon: hsbc,
            link: "/courses/0",
            title: "HSBC",
            description: "Lorem ipsum dolor sit amet. Ea nisi accusamus 33 Quis quidem ut quia obcaecati ex modi dolore 33 suscipit labore. Ut aliquid molestias aut voluptate incidunt nam assumenda quis et iste vero sit dolor dicta At iusto sunt suscipit nulla.",
            parentId: "barclays",
            children: [
              {
                id: "santander",
                icon: santander,
                link: "/courses/0",
                locked:false,
                description: "Lorem ipsum dolor sit amet. Ea nisi accusamus 33 Quis quidem ut quia obcaecati ex modi dolore 33 suscipit labore. Ut aliquid molestias aut voluptate incidunt nam assumenda quis et iste vero sit dolor dicta At iusto sunt suscipit nulla.",
                title: "Santander",
                parentId: "hsbc",
                children: [],
              },
            ],
          },
          {
            id: "halifax",
            icon: halifax,
            link: "/courses/0",
            description: "Lorem ipsum dolor sit amet. Ea nisi accusamus 33 Quis quidem ut quia obcaecati ex modi dolore 33 suscipit labore. Ut aliquid molestias aut voluptate incidunt nam assumenda quis et iste vero sit dolor dicta At iusto sunt suscipit nulla.",
            title: "Halifax",
            parentId: "barclays",
            children: [],
          },
        ],
      },
    ],
  },
];
