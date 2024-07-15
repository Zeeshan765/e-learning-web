import {
  Degree,
  BillingImage,
  CourseCuilder,
  Document,
  Forum,
  JobBoard,
  Quizz,
  Setting,
  Team,
} from "../images";

export const CardData = [
  {
    id: 1,
    title: "My Learning",
    description: "Continue your learning or start a new course",
    isNew: false,
    src: Degree,
  },
  {
    id: 2,
    title: "My Teams",
    description: "Manage your team's learning and development",
    isNew: false,
    src: Team,
  },
  {
    id: 3,
    title: "Job Board",
    description: "Try our new Job board. Here you can post a Job in Minutes.",
    isNew: false,
    src: JobBoard,
  },
  {
    id: 4,
    title: "Quizzes ",
    description: "Check on your team's knowledge and skills",
    isNew: true,
    src: Quizz,
  },
  {
    id: 5,
    title: "Forum",
    description: "Get the latest goings on for your company",
    isNew: false,
    src: Forum,
  },
  {
    id: 6,
    title: "Documents",
    description: "Share documents with your team members",
    isNew: false,
    src: Document,
  },
  {
    id: 7,
    title: "Course Builder",
    description: "Create online courses for your team or to sell",
    isNew: false,
    src: CourseCuilder,
  },
  {
    id: 8,
    title: "Company Settings",
    description: "Manage admins and update your company details",
    isNew: false,
    src: Setting,
  },
  {
    id: 9,
    title: "Company Billing",
    description: "Update payment details and view billing history",
    isNew: false,
    src: BillingImage,
  },
];

export const myLearning = [
  {
    id: 1,
    title: "Your Status",
    status: "All Good",
  },
  {
    id: 2,
    title: "So far you've done...",
    lastWeek: "00 mins of CPD in the last 7 days",
    lastMonth: "20 mins of CPD in the last 30 days",
    sinceBeginning: "40 mins of CPD since the beginning",
  },
  {
    id: 3,
    title: "And you've got...",
    currentCertificate: "2 current certificates",
    expiredCertificate: "1 expired certificate",
    registrationStatus: "Your SSSC status is Registered",
  },
];

export const coursesData = [
  {
    id: 1,
    title: "Encouraging Physical Activity in the Early Years",
    src: "https://azilolive.s3.eu-west-2.amazonaws.com/uploads/uploaded_image/image/1443/square_soccer-72932__340.jpg",
  },
  {
    id: 2,
    title: "Food Safety - Cross Contamination",
    src: "https://azilolive.s3.eu-west-2.amazonaws.com/uploads/uploaded_image/image/1043/square_LH02005-Thumbnail-Enablement-350x250px-Cross-Contamination.png",
  },
  {
    id: 3,
    title: "Mental Capacity",
    src: "https://azilolive.s3.eu-west-2.amazonaws.com/uploads/uploaded_image/image/1411/square_face-535769_960_720.jpg",
  },
  {
    id: 4,
    title: "What is Depression?",
    src: "https://azilolive.s3.eu-west-2.amazonaws.com/uploads/uploaded_image/image/1311/square_consulting-1739639_960_720.jpg",
  },
  {
    id: 5,
    title: "Slef Directed Support (SDS)",
    src: "https://azilolive.s3.eu-west-2.amazonaws.com/uploads/uploaded_image/image/1172/handshake-2009195_960_720.png",
  },
];

export const currentCourses = [
  {
    id: 1,
    title: "Adult Support and Protection",
    src: "https://azilolive.s3.eu-west-2.amazonaws.com/uploads/uploaded_image/image/1307/square_hand-1917895_1280.png",
  },
  {
    id: 2,
    title: "Allergen Awareness",
    src: "https://azilolive.s3.eu-west-2.amazonaws.com/uploads/uploaded_image/image/853/square_Food_Allergy_Awareness-Thumbnail-Enablement-350x250px.png",
  },
  {
    id: 3,
    title: "Child Protection",
    src: "https://azilolive.s3.eu-west-2.amazonaws.com/uploads/uploaded_image/image/11/square_child-protection.jpg",
  },
];

export const completedCourses = [
  {
    id: 1,
    title: "COVID-19 Guidance: Reopening Childcare and Early Years Settings",
    src: "https://azilolive.s3.eu-west-2.amazonaws.com/uploads/uploaded_image/image/2050/square_covid-19-5372014_1920.jpg",
  },
  {
    id: 2,
    title: "Encouraging Physical Activity in the Early Years",
    src: "https://azilolive.s3.eu-west-2.amazonaws.com/uploads/uploaded_image/image/1443/square_soccer-72932__340.jpg",
  },
];

export const certificates = [
  {
    id: 1,
    title: "COVID-19 Guidance: Reopening Childcare and Early Years Settings",
    expiryDate: "Expires 01/01/2022",
  },
  {
    id: 1,
    title: "Encouraging Physical Activity in the Early Years ",
    expiryDate: null,
  },
];

export const allCoursesData = [
  {
    id: 1,
    category: "Health and Social Care",
    description:
      "Develop your skills and understanding to hep you deliver the best possible care",
    src: "https://s3.eu-west-2.amazonaws.com/azilositeimages/course_categories/care.jpg",
    totalCourses: 37,
    courses: [
      {
        id: 1,
        title: "Adult Support and Protection",
        description:
          "Learn more about Adult Support and Protection with this interactive awareness course.",
        src: "https://azilolive.s3.eu-west-2.amazonaws.com/uploads/uploaded_image/image/1307/square_hand-1917895_1280.png",
        location: "Glasgow",
        duration: "25 mins",
        progress: "continue",
        info: "Supporting and protecting adults despite their physical, emotional and mental needs is important as not all adults are able to safeguard themselves and/or their possessions.",
        whoIsThisFor:
          "This course is for all people working within residential or community-based adult care environments in Scotland.",
        premiumStatus: "Paid",
      },
    ],
  },
  {
    id: 2,
    category: "Essential Childcare",
    description:
      "Children learn best when they are safe and happy. Find out which of our courses will help you create the ideal environment for them as they grow.",
    src: "https://s3.eu-west-2.amazonaws.com/azilositeimages/course_categories/Generic+(2).jpg",
    totalCourses: 35,
    courses: [
      {
        id: 1,
        title: "Advanced Child Protection Awareness",
        description: "Protecting children is everyone's responsibility.",
        src: "https://azilolive.s3.eu-west-2.amazonaws.com/uploads/uploaded_image/image/1019/hands-918774_1920.jpg",
        location: "Scotland",
        duration: "40 mins",
        progress: "Get Started",
      },
    ],
  },
  {
    id: 3,
    category: "Food Safety",
    description:
      "Learn how to handle food safely, understand allergens and more",
    src: "https://s3.eu-west-2.amazonaws.com/azilositeimages/course_categories/potatoes-french-mourning-funny-162971.jpeg",
    totalCourses: 3,
    courses: [
      {
        id: 1,
        title: "Adult Support and Protection",
        description:
          "Learn more about Adult Support and Protection with this interactive awareness course.",
        src: "https://azilolive.s3.eu-west-2.amazonaws.com/uploads/uploaded_image/image/1307/square_hand-1917895_1280.png",
        location: "Glasgow",
        duration: "25 mins",
        progress: "continue",
        info: "Supporting and protecting adults despite their physical, emotional and mental needs is important as not all adults are able to safeguard themselves and/or their possessions.",
        whoIsThisFor:
          "This course is for all people working within residential or community-based adult care environments in Scotland.",
        premiumStatus: "Paid",
      },
    ],
  },
  {
    id: 4,
    category: "Data and Cyber Security",
    description:
      "Being safe online and managing your data correctly is essential for the security of you and your organisation",
    src: "https://s3.eu-west-2.amazonaws.com/azilositeimages/course_categories/pexels-photo-392018.jpeg",
    totalCourses: 4,
    courses: [
      {
        id: 1,
        title: "Adult Support and Protection",
        description:
          "Learn more about Adult Support and Protection with this interactive awareness course.",
        src: "https://azilolive.s3.eu-west-2.amazonaws.com/uploads/uploaded_image/image/1307/square_hand-1917895_1280.png",
        location: "Glasgow",
        duration: "25 mins",
        progress: "continue",
        info: "Supporting and protecting adults despite their physical, emotional and mental needs is important as not all adults are able to safeguard themselves and/or their possessions.",
        whoIsThisFor:
          "This course is for all people working within residential or community-based adult care environments in Scotland.",
        premiumStatus: "Paid",
      },
    ],
  },
  {
    id: 5,
    category: "Working Safely",
    description:
      "Make sure you and your team are working safely and according to best practice",
    src: "https://s3.eu-west-2.amazonaws.com/azilositeimages/course_categories/medium_mark-944004_1280.jpg",
    totalCourses: 11,
    courses: [
      {
        id: 1,
        title: "Adult Support and Protection",
        description:
          "Learn more about Adult Support and Protection with this interactive awareness course.",
        src: "https://azilolive.s3.eu-west-2.amazonaws.com/uploads/uploaded_image/image/1307/square_hand-1917895_1280.png",
        location: "Glasgow",
        duration: "25 mins",
        progress: "continue",
        info: "Supporting and protecting adults despite their physical, emotional and mental needs is important as not all adults are able to safeguard themselves and/or their possessions.",
        whoIsThisFor:
          "This course is for all people working within residential or community-based adult care environments in Scotland.",
        premiumStatus: "Free",
      },
    ],
  },
  {
    id: 6,
    category: "Project Management",
    description:
      "Help keep things on track with our guides to Project Management",
    src: "https://s3.eu-west-2.amazonaws.com/azilositeimages/checklist-2077019_1280.jpg",
    totalCourses: 3,
    courses: [
      {
        id: 1,
        title: "Adult Support and Protection",
        description:
          "Learn more about Adult Support and Protection with this interactive awareness course.",
        src: "https://azilolive.s3.eu-west-2.amazonaws.com/uploads/uploaded_image/image/1307/square_hand-1917895_1280.png",
        location: "Glasgow",
        duration: "25 mins",
        progress: "continue",
        info: "Supporting and protecting adults despite their physical, emotional and mental needs is important as not all adults are able to safeguard themselves and/or their possessions.",
        whoIsThisFor:
          "This course is for all people working within residential or community-based adult care environments in Scotland.",
        premiumStatus: "Free",
      },
    ],
  },
  {
    id: 7,
    category: "Advance Your Career",
    description:
      "Getting ahead at work can be tough. Azilo makes it simple with our comprehensive list of short courses, all designed to make you the very best you can be.",
    src: "https://s3.eu-west-2.amazonaws.com/azilositeimages/checklist-2077019_1280.jpg",
    totalCourses: 25,
    courses: [
      {
        id: 1,
        title: "Adult Support and Protection",
        description:
          "Learn more about Adult Support and Protection with this interactive awareness course.",
        src: "https://azilolive.s3.eu-west-2.amazonaws.com/uploads/uploaded_image/image/1307/square_hand-1917895_1280.png",
        location: "Glasgow",
        duration: "25 mins",
        progress: "continue",
        info: "Supporting and protecting adults despite their physical, emotional and mental needs is important as not all adults are able to safeguard themselves and/or their possessions.",
        whoIsThisFor:
          "This course is for all people working within residential or community-based adult care environments in Scotland.",
        premiumStatus: "Premium",
      },
    ],
  },
  {
    id: 8,
    category: "Become a Leader",
    description:
      "Stepping into a new leadership role can sometimes make you feel daunted and uncertain. Find your feet quicker with our concise guides to management.",
    src: "https://s3.eu-west-2.amazonaws.com/azilositeimages/course_categories/lego-1205178_1280.jpg",
    totalCourses: 19,
    courses: [
      {
        id: 1,
        title: "Adult Support and Protection",
        description:
          "Learn more about Adult Support and Protection with this interactive awareness course.",
        src: "https://azilolive.s3.eu-west-2.amazonaws.com/uploads/uploaded_image/image/1307/square_hand-1917895_1280.png",
        location: "Glasgow",
        duration: "25 mins",
        progress: "continue",
        info: "Supporting and protecting adults despite their physical, emotional and mental needs is important as not all adults are able to safeguard themselves and/or their possessions.",
        whoIsThisFor:
          "This course is for all people working within residential or community-based adult care environments in Scotland.",
        premiumStatus: "Premium",
      },
    ],
  },
  {
    id: 9,
    category: "Learn Computer Skills",
    description:
      "Being part of modern society demands a certain degree of technical knowhow. With our  courses, what can seem like technobabble will soon feel like your native tongue.",
    src: "https://s3.eu-west-2.amazonaws.com/azilositeimages/course_categories/blogging-336376_1280.jpg",
    totalCourses: 4,
    courses: [
      {
        id: 1,
        title: "Adult Support and Protection",
        description:
          "Learn more about Adult Support and Protection with this interactive awareness course.",
        src: "https://azilolive.s3.eu-west-2.amazonaws.com/uploads/uploaded_image/image/1307/square_hand-1917895_1280.png",
        location: "Glasgow",
        duration: "25 mins",
        progress: "continue",
        info: "Supporting and protecting adults despite their physical, emotional and mental needs is important as not all adults are able to safeguard themselves and/or their possessions.",
        whoIsThisFor:
          "This course is for all people working within residential or community-based adult care environments in Scotland.",
        premiumStatus: "Paid",
      },
    ],
  },
  {
    id: 10,
    category: "Live Well",
    description:
      "It can be tough to be happy & successful if you don't get your life balance right. Let Azilo guide you on a stress-free path, with our helpful strategies to live happily & healthily",
    src: "https://s3.eu-west-2.amazonaws.com/azilositeimages/course_categories/apple-256263_1920.jpg",
    totalCourses: 10,
    courses: [
      {
        id: 1,
        title: "Adult Support and Protection",
        description:
          "Learn more about Adult Support and Protection with this interactive awareness course.",
        src: "https://azilolive.s3.eu-west-2.amazonaws.com/uploads/uploaded_image/image/1307/square_hand-1917895_1280.png",
        location: "Glasgow",
        duration: "25 mins",
        progress: "continue",
        info: "Supporting and protecting adults despite their physical, emotional and mental needs is important as not all adults are able to safeguard themselves and/or their possessions.",
        whoIsThisFor:
          "This course is for all people working within residential or community-based adult care environments in Scotland.",
        premiumStatus: "Paid",
      },
    ],
  },
  {
    id: 11,
    category: "Improve Your Business",
    description:
      "Understanding business law & etiquette can be tough, especially when you're already running a business! Azilo offers no nonsense, legally astute courses to help you run your business better.",
    src: "https://s3.eu-west-2.amazonaws.com/azilositeimages/course_categories/document-428338_1280.jpg",
    totalCourses: 20,
    courses: [
      {
        id: 1,
        title: "Adult Support and Protection",
        description:
          "Learn more about Adult Support and Protection with this interactive awareness course.",
        src: "https://azilolive.s3.eu-west-2.amazonaws.com/uploads/uploaded_image/image/1307/square_hand-1917895_1280.png",
        location: "Glasgow",
        duration: "25 mins",
        progress: "continue",
        info: "Supporting and protecting adults despite their physical, emotional and mental needs is important as not all adults are able to safeguard themselves and/or their possessions.",
        whoIsThisFor:
          "This course is for all people working within residential or community-based adult care environments in Scotland.",
        premiumStatus: "Free!",
      },
    ],
  },
];
