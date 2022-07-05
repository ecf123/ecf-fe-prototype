const topics = {
  js: [
    {
      id: "hello-world",
      title: "Introduction",
      tooltip: {
        content: "An introduction and overview to Javascript.",
      },
      children: [
        {
          id: "variables",
          title: "Variables",
          tooltip: {
            content: "Understanding variables and javascript data types.",
          },
          children: [],
        },
        {
          id: "hello-stars",
          title: "Control Flow",
          tooltip: {
            content: "Control flow in javascript.",
          },
          children: [],
        },
      ],
    },
  ],
  css: [
    {
      id: "hello-world",
      title: "Introduction",
      tooltip: {
        content: "An introduction to CSS and course syllabus.",
      },
      children: [
        {
          id: "positioning",
          title: "Positioning",
          tooltip: {
            content: "How to deftly position elements on the page with CSS.",
          },
          children: [],
        },
        {
          id: "selectors",
          title: "CSS Selectors",
          tooltip: {
            content: "Learn how selectors work in CSS.",
          },
          children: [],
        },
      ],
    },
  ],
  html: [
    {
      id: "hello-world",
      title: "Introduction",
      tooltip: {
        content:
          "This node is the top most level, and will be unlocked, and ready to be clicked.",
      },
      children: [
        {
          id: "dom-structure",
          title: "DOM Structure",
          tooltip: {
            content: "How the web page is represented in memory.",
          },
          children: [],
        },
        {
          id: "browser-api",
          title: "Browser APIs",
          tooltip: {
            content: "How we can interact with the browser.",
          },
          children: [],
        },
      ],
    },
  ],
};

function App() {
  return (
    <div className="App">
      <SkillProvider>
        <SkillTreeGroup>
          {({ skillCount }) => (
            <>
              <SkillTree
                treeId="first-tree"
                title="CSS"
                data={topics.css}
                collapsible
                description="CSS Skill Tree"
              />
              <SkillTree
                treeId="first-tree"
                title="HTML"
                data={topics.html}
                collapsible
                description="HTML Skill Tree"
              />
              <SkillTree
                treeId="first-tree"
                title="Javascript"
                data={topics.js}
                collapsible
                description="Javascript skill tree."
              />
            </>
          )}
        </SkillTreeGroup>
      </SkillProvider>
    </div>
  );
}
