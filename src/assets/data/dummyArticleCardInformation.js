import image from "../images/cv-pic.jpg";

const articleContent = [
	{
	heading: "Heading 1",
	paragraph: "Lorem ipsum..."
	},
	{
	heading: "Heading 2",
	paragraph: "Lorem ipsum..."
	}
]

const articleInfo = [
    {
        title: "Want a winning CV? Follow these 5 tips",
        category: "Professional Development",
        thumbnail: image,
        id: 1,
        isActive: false,
        readTime: "5 mins",
        date: "23 May 2022",
        articleContent: articleContent
    },
    {
        category: "test 2 category",
        thumbnail: image,
        id: 2,
        isActive: false,
        title: "Want a winning CV? Folow these 7 tips",
        readTime: "5 mins",
        date: "23 May 2022",
        articleContent: articleContent
    },
    {
        category: "test 3 category",
        thumbnail: image,
        id: 3,
        isActive: false,
        title: "Want a winning CV? Folow these 8 tips",
        readTime: "5 mins",
        date: "23 May 2022",
        articleContent: articleContent
    }
]

export default articleInfo;