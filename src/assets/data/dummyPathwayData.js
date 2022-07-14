import financialForest from "../images/financial-forest.svg";
import businessBonanza from "../images/business-bonanza.svg";
import divineDesign from "../images/divine-design.svg";
import magicMarketing from "../images/margin-marketing.svg";
import codingCamp from "../images/coding-camp.svg";
import epicEngineering from "../images/epic-engineering.svg";

//Percentage data will eventually have to be stored in userData as users progression will vary -- see dummy user data for example
const cardData = [{header: "Financial Forest", topics: "Banking, Investments", image: financialForest, percentage: 90},
{header: "Business Bonanza", topics: "Business, Strategy", image: businessBonanza, percentage: 35},
{header: "Divine Design", topics: "UI/UX, Motion, Graphic Design", image: divineDesign, percentage: 1},
{header: "Magic Marketing", topics: "Digital Marketing, Copywriting", image: magicMarketing, percentage: 5},
{header: "Coding Camp", topics: "Software, Web Development", image: codingCamp, percentage: 0},
{header: "Epic Engineering", topics: "Civil, Aerospace Engineering", image: epicEngineering, percentage: 0}];


export default cardData;