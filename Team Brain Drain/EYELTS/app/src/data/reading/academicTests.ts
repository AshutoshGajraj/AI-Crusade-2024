interface Question {
  id: number;
  text: string;
  type: 'multiple-choice' | 'true-false-not-given' | 'short-answer';
  options?: string[];
  answer: string;
}

interface ReadingTest {
  id: number;
  title: string;
  introduction: string;
  passage: string;
  questions: Question[];
  timeLimit: number; // in minutes
}

export const academicTests: ReadingTest[] = [
  {
    id: 1,
    title: "The Evolution of Urban Agriculture",
    introduction: "Read the passage and answer questions that follow. You should spend about 20 minutes on Questions 1-13.",
    passage: `Urban agriculture, the practice of cultivating food within city limits, has evolved significantly over the past century. While growing food in cities is not a new phenomenon, its role and importance have transformed dramatically in response to changing urban landscapes and societal needs.

    Historically, urban agriculture emerged as a necessity during times of crisis. During World War II, for instance, "victory gardens" became popular in many countries as civilians were encouraged to grow their own food to support the war effort. These gardens appeared in private yards, public parks, and even on rooftops, demonstrating the adaptability of urban spaces for food production.

    In recent decades, urban agriculture has experienced a renaissance, driven by different factors than its historical counterparts. Contemporary urban farmers are often motivated by concerns about food security, environmental sustainability, and the desire for fresher, locally-sourced produce. The movement has spawned innovative approaches to farming, including vertical gardens, hydroponic systems, and community-supported agriculture programs.

    Research indicates that urban agriculture can provide significant benefits to cities. Studies have shown that urban farms can reduce urban heat island effects, improve air quality, and increase biodiversity. Additionally, they can help reduce food transportation distances, thereby decreasing carbon emissions associated with food distribution. Community gardens, in particular, have been linked to improved mental health outcomes and stronger social connections among urban residents.

    However, urban agriculture faces several challenges. Limited space, soil contamination, and restrictive zoning laws can all impede the development of urban farming initiatives. Access to water and adequate sunlight can also be problematic in densely built urban environments. Despite these obstacles, cities worldwide are increasingly incorporating urban agriculture into their development plans, recognizing its potential to contribute to sustainable urban food systems.

    The economic impact of urban agriculture should not be underestimated. Small-scale urban farms can create jobs, provide training opportunities, and generate income for local communities. In some cities, urban farming initiatives have been integrated into social programs, offering employment and skills development for disadvantaged populations. Furthermore, local food production can help stabilize food prices and improve food security in urban areas.

    Looking ahead, technological innovations may help address some of the challenges facing urban agriculture. Advances in vertical farming technology, automated irrigation systems, and LED growing lights are making it possible to grow more food in smaller spaces with greater efficiency. Some cities are experimenting with "smart" urban farming systems that use sensors and data analytics to optimize growing conditions and resource use.

    The future of urban agriculture will likely involve a combination of traditional growing methods and cutting-edge technology. As cities continue to grow and climate change poses new challenges to food security, urban agriculture may become an increasingly important component of sustainable urban development. Its ability to provide fresh, local food while contributing to environmental and social goals makes it an attractive option for cities looking to build more resilient and sustainable food systems.`,
    questions: [
      {
        id: 1,
        text: "What was the primary reason for the emergence of 'victory gardens' during World War II?",
        type: "multiple-choice",
        options: [
          "To beautify urban spaces",
          "To support the war effort",
          "To improve environmental sustainability",
          "To strengthen social connections"
        ],
        answer: "To support the war effort"
      },
      {
        id: 2,
        text: "Urban agriculture provides environmental benefits by reducing urban heat island effects.",
        type: "true-false-not-given",
        answer: "true"
      },
      {
        id: 3,
        text: "According to the passage, what are TWO main challenges that urban agriculture faces? (Use no more than 5 words for each challenge)",
        type: "short-answer",
        answer: "Limited space, soil contamination"
      },
      {
        id: 4,
        text: "Modern urban farmers are primarily motivated by environmental concerns.",
        type: "true-false-not-given",
        answer: "false"
      },
      {
        id: 5,
        text: "Which of the following is NOT mentioned as a benefit of community gardens?",
        type: "multiple-choice",
        options: [
          "Improved mental health",
          "Stronger social connections",
          "Better physical fitness",
          "Environmental benefits"
        ],
        answer: "Better physical fitness"
      },
      {
        id: 6,
        text: "Urban farming initiatives are being used to provide employment opportunities for disadvantaged populations.",
        type: "true-false-not-given",
        answer: "true"
      }
    ],
    timeLimit: 20
  }
];