import { SkillType } from "beautiful-skill-tree";
import barclays from "../images/barclays.svg"
import hsbc from "../images/hsbc.svg"
import goldmanSachs from "../images/goldman-sachs.svg"
import halifax from "../images/halifax.svg"
import santander from "../images/santander.svg"
import play from "../images/play.svg"

export const data: SkillType = [
    {
      id: "play",
      title: "play",
      icon: play,
      tooltip: {
        content: "Lorem ipsum dolor sit amet. Ut quia recusandae et ipsam sint ea dolores facilis sit nihil quia.",
      },
      children: [
        {
          id: "barclays",
          title: "Barclays",
          icon: barclays,
          tooltip: {
            content: "Lorem ipsum dolor sit amet. Ut quia recusandae et ipsam sint ea dolores facilis sit nihil quia.",
          },
          children: [
            {
              id: "goldman sachs",
              icon: goldmanSachs,
              title: "Goldman Sachs",
              tooltip: {
                content: "Lorem ipsum dolor sit amet. Ut quia recusandae et ipsam sint ea dolores facilis sit nihil quia.",
              },
              children: [],
            },
            {
              id: "hsbc",
              icon: hsbc,
              title: "HSBC",
              tooltip: {
                content: "Lorem ipsum dolor sit amet. Ut quia recusandae et ipsam sint ea dolores facilis sit nihil quia.",
              },
              children: [
                {
                  id: "santander",
                  icon: santander,
                  title: "Santander",
                  tooltip: {
                    content: "Lorem ipsum dolor sit amet. Ut quia recusandae et ipsam sint ea dolores facilis sit nihil quia.",
                  },
                  children: [],
                },
              ],
            },
            {
              id: "halifax",
              icon: halifax,
              title: "Halifax",
              tooltip: {
                content: "Lorem ipsum dolor sit amet. Ut quia recusandae et ipsam sint ea dolores facilis sit nihil quia.",
              },
              children: [],
            },
          ],
        },
      ],
    },
  ]

