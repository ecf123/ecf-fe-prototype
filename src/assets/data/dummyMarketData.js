const marketData = [
  {
    image:
      "https://firebasestorage.googleapis.com/v0/b/ecf-future-hub.appspot.com/o/market-place%2Famazon-logo.png?alt=media&token=0c9914b9-b020-421c-acaa-e87ff25be8a0",
    heading: "Earn a £5 Amazon Voucher",
    overview:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic placeat quis blanditiis. Debitis placeat sunt, sapiente, a iste repudiandae hic necessitatibus natus inventore maxime, perspiciatis sed distinctio praesentium blanditiis ipsa? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic placeat quis blanditiis. Debitis placeat sunt, sapiente, a iste repudiandae hic necessitatibus natus inventore maxime, perspiciatis sed distinctio praesentium blanditiis ipsa? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic placeat quis blanditiis. Debitis placeat sunt, sapiente, a iste repudiandae hic necessitatibus natus inventore maxime, perspiciatis sed distinctio praesentium blanditiis ipsa?",
    id: 1,
    skillPoints: 400,
    trophies: 1,
    isLocked: false,
  },
  {
    image:
      "https://firebasestorage.googleapis.com/v0/b/ecf-future-hub.appspot.com/o/market-place%2Fadidas-gift-voucher.svg?alt=media&token=839c18e1-cbe7-478d-8424-f77913d5c403",
    heading: "Earn a £5 Adidas Gift Voucher",
    overview:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic placeat quis blanditiis. Debitis placeat sunt, sapiente, a iste repudiandae hic necessitatibus natus inventore maxime, perspiciatis sed distinctio praesentium blanditiis ipsa? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic placeat quis blanditiis. Debitis placeat sunt, sapiente, a iste repudiandae hic necessitatibus natus inventore maxime, perspiciatis sed distinctio praesentium blanditiis ipsa? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic placeat quis blanditiis. Debitis placeat sunt, sapiente, a iste repudiandae hic necessitatibus natus inventore maxime, perspiciatis sed distinctio praesentium blanditiis ipsa?",
    id: 2,
    skillPoints: 450,
    trophies: 1,
    isLocked: false,
  },
  {
    image:
      "https://firebasestorage.googleapis.com/v0/b/ecf-future-hub.appspot.com/o/market-place%2Fthorpe-park.svg?alt=media&token=24d5f247-0722-4da9-8172-4f91246567b2",
    heading: "Get tickets to Thorpe Park for you and two others",
    overview:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic placeat quis blanditiis. Debitis placeat sunt, sapiente, a iste repudiandae hic necessitatibus natus inventore maxime, perspiciatis sed distinctio praesentium blanditiis ipsa? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic placeat quis blanditiis. Debitis placeat sunt, sapiente, a iste repudiandae hic necessitatibus natus inventore maxime, perspiciatis sed distinctio praesentium blanditiis ipsa? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic placeat quis blanditiis. Debitis placeat sunt, sapiente, a iste repudiandae hic necessitatibus natus inventore maxime, perspiciatis sed distinctio praesentium blanditiis ipsa?",
    id: 3,
    skillPoints: 300,
    trophies: 2,
    isLocked: true,
  },
  {
    image:
      "https://firebasestorage.googleapis.com/v0/b/ecf-future-hub.appspot.com/o/market-place%2Fasos-logo.png?alt=media&token=76d6f04f-a182-4e20-bebe-f2995b1b00b2",
    heading: "Earn a £40 Asos Gift Voucher",
    overview:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic placeat quis blanditiis. Debitis placeat sunt, sapiente, a iste repudiandae hic necessitatibus natus inventore maxime, perspiciatis sed distinctio praesentium blanditiis ipsa? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic placeat quis blanditiis. Debitis placeat sunt, sapiente, a iste repudiandae hic necessitatibus natus inventore maxime, perspiciatis sed distinctio praesentium blanditiis ipsa? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic placeat quis blanditiis. Debitis placeat sunt, sapiente, a iste repudiandae hic necessitatibus natus inventore maxime, perspiciatis sed distinctio praesentium blanditiis ipsa?",
    id: 4,
    skillPoints: 450,
    trophies: 3,
    isLocked: true,
  },
  {
    image:
      "https://firebasestorage.googleapis.com/v0/b/ecf-future-hub.appspot.com/o/market-place%2Famazon-logo.png?alt=media&token=0c9914b9-b020-421c-acaa-e87ff25be8a0",
    heading: "Earn a £5 Amazon Voucher",
    overview:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic placeat quis blanditiis. Debitis placeat sunt, sapiente, a iste repudiandae hic necessitatibus natus inventore maxime, perspiciatis sed distinctio praesentium blanditiis ipsa? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic placeat quis blanditiis. Debitis placeat sunt, sapiente, a iste repudiandae hic necessitatibus natus inventore maxime, perspiciatis sed distinctio praesentium blanditiis ipsa? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic placeat quis blanditiis. Debitis placeat sunt, sapiente, a iste repudiandae hic necessitatibus natus inventore maxime, perspiciatis sed distinctio praesentium blanditiis ipsa?",
    id: 5,
    skillPoints: 50,
    trophies: 1,
    isLocked: true,
  },
  {
    image:
      "https://firebasestorage.googleapis.com/v0/b/ecf-future-hub.appspot.com/o/market-place%2Fadidas-gift-voucher.svg?alt=media&token=839c18e1-cbe7-478d-8424-f77913d5c403",
    heading: "Earn a £5 Adidas Gift Voucher",
    overview:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic placeat quis blanditiis. Debitis placeat sunt, sapiente, a iste repudiandae hic necessitatibus natus inventore maxime, perspiciatis sed distinctio praesentium blanditiis ipsa? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic placeat quis blanditiis. Debitis placeat sunt, sapiente, a iste repudiandae hic necessitatibus natus inventore maxime, perspiciatis sed distinctio praesentium blanditiis ipsa? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic placeat quis blanditiis. Debitis placeat sunt, sapiente, a iste repudiandae hic necessitatibus natus inventore maxime, perspiciatis sed distinctio praesentium blanditiis ipsa?",
    id: 6,
    skillPoints: 75,
    trophies: 1,
    isLocked: false,
  },
  {
    image:
      "https://firebasestorage.googleapis.com/v0/b/ecf-future-hub.appspot.com/o/market-place%2Fasos-logo.png?alt=media&token=76d6f04f-a182-4e20-bebe-f2995b1b00b2",
    heading: "Earn a £40 Asos Gift Voucher",
    overview:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic placeat quis blanditiis. Debitis placeat sunt, sapiente, a iste repudiandae hic necessitatibus natus inventore maxime, perspiciatis sed distinctio praesentium blanditiis ipsa? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic placeat quis blanditiis. Debitis placeat sunt, sapiente, a iste repudiandae hic necessitatibus natus inventore maxime, perspiciatis sed distinctio praesentium blanditiis ipsa? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic placeat quis blanditiis. Debitis placeat sunt, sapiente, a iste repudiandae hic necessitatibus natus inventore maxime, perspiciatis sed distinctio praesentium blanditiis ipsa?",
    id: 7,
    skillPoints: 150,
    trophies: 3,
    isLocked: true,
  },
  {
    image:
      "https://firebasestorage.googleapis.com/v0/b/ecf-future-hub.appspot.com/o/market-place%2Famazon-logo.png?alt=media&token=0c9914b9-b020-421c-acaa-e87ff25be8a0",
    heading: "Earn a £5 Amazon Voucher",
    overview:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic placeat quis blanditiis. Debitis placeat sunt, sapiente, a iste repudiandae hic necessitatibus natus inventore maxime, perspiciatis sed distinctio praesentium blanditiis ipsa? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic placeat quis blanditiis. Debitis placeat sunt, sapiente, a iste repudiandae hic necessitatibus natus inventore maxime, perspiciatis sed distinctio praesentium blanditiis ipsa? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic placeat quis blanditiis. Debitis placeat sunt, sapiente, a iste repudiandae hic necessitatibus natus inventore maxime, perspiciatis sed distinctio praesentium blanditiis ipsa?",
    id: 8,
    skillPoints: 120,
    trophies: 1,
    isLocked: false,
  },
];

export default marketData;
