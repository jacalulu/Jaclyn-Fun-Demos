import { CompanyExperience, Highlight } from './types';

export const careerHighlights: Highlight[] = [
  {
    title: "Product Growth Podcast",
    links: [
      { label: "YouTube", url: "https://youtu.be/rcz39Y0qFxw" },
      { label: "Spotify", url: "https://open.spotify.com/show/7vVEMqCSKb7I7xPk8xZtg5" },
      { label: "Apple", url: "https://podcasts.apple.com/in/podcast/product-growth-podcast/id1763555775" }
    ]
  },
  {
    title: "Sequoia Training Data Podcast",
    links: [
      { label: "Website", url: "https://sequoiacap.com/podcast/training-data-google-labs/" },
      { label: "Apple", url: "https://podcasts.apple.com/us/podcast/google-i-o-afterparty-the-future-of-human/id1750736528?i=1000710987190" },
      { label: "Spotify", url: "https://open.spotify.com/episode/23zL41bmVCGbZ611SgipKS?si=077077a018c749e4&nd=1&dlsi=de097ab92d24455c" },
      { label: "YouTube", url: "https://www.youtube.com/watch?v=exuuGrbaxxc" },
      { label: "Amazon", url: "https://music.amazon.com/podcasts/fd53b585-4779-4eba-a2a7-50d083342728/episodes/7b1bda15-713f-44ca-93bd-834c788b7fc9/training-data-google-i-o-afterparty-the-future-of-human-ai-collaboration-from-veo-to-mariner" }
    ]
  },
  {
    title: "The Information: \"AI Shopping Race Means a New Talent War Is Brewing\"",
    links: [
      { label: "Article", url: "https://www.theinformation.com/articles/leaders-ai-shopping-revolution?rc=kkolta" }
    ]
  },
  {
    title: "Google I/O Fireside Chat - Thank You TPU",
    links: []
  },
  {
    title: "Bloomberg Interview 2025: \"Google Makes AI Agent Prototype Available to US Users\"",
    links: [
      { label: "Watch", url: "https://www.bloomberg.com/news/videos/2025-05-20/google-makes-ai-agent-prototype-available-to-us-users-video" }
    ]
  },
  {
    title: "Project Mariner Launch Video",
    links: [
      { label: "X", url: "https://x.com/GoogleLabs/status/1866874399724540016" },
      { label: "YouTube", url: "https://youtu.be/2XJqLPqHtyo?si=KPXaZhA4VIqJWbFQ" }
    ]
  },
  {
    title: "Competition announcement winner",
    links: [
      { label: "YouTube", url: "https://www.youtube.com/watch?v=yeAu6ZQC0zc" }
    ]
  },
  {
    title: "Developer Keynote at Google I/O 2024",
    links: [
      { label: "Watch", url: "https://www.youtube.com/live/ddcZnW1HKUY?si=atZZNuaeNgtso4_H&t=279" }
    ]
  }
];

export const experienceData: CompanyExperience[] = [
  {
    company: "Google",
    roles: [
      {
        title: "Director of Product Management, Google Labs",
        period: "2024 – Present",
        achievements: [
          {
            text: "September 2025: My team launched Mixboard - a new way to visualize your ideas from Google Labs.",
            links: [{ label: "Google Keyword Blog", url: "https://blog.google/technology/google-labs/mixboard/#:~:text=We're%20introducing%20Mixboard%2C%20an,and%20our%20other%20Labs%20experiments." }]
          },
          {
            text: "August 2025: My team launched Stax - Stop \"vibe testing\" your LLMs. It's time for real evals.",
            links: [{ label: "Google for Developers", url: "https://developers.googleblog.com/en/streamline-llm-evaluation-with-stax/#:~:text=Stax%20helps%20you%20evolve%20from,us%20know%20what%20you%20think." }]
          },
          {
            text: "July 2025: My team launched Opal - describe, create, and share your AI mini-apps.",
            links: [{ label: "Google for Developers", url: "https://developers.googleblog.com/en/introducing-opal/#:~:text=It's%20never%20been%20easier%20to,make%20your%20ideas%20a%20reality:" }]
          },
          {
            text: "Product lead for Project Mariner - exploring the future of human-agent interactions.",
            links: []
          },
          {
            text: "December 2024: Initial launch of Project Mariner.",
            links: [
              { label: "Google Keyword Blog", url: "https://blog.google/technology/google-deepmind/google-gemini-ai-update-december-2024/#agents-for-developers" },
              { label: "X Announcement", url: "https://x.com/GoogleLabs/status/1866874399724540016" },
              { label: "YouTube", url: "https://youtu.be/2XJqLPqHtyo?si=KPXaZhA4VIqJWbFQ" },
              { label: "Forbes", url: "https://www.forbes.com/sites/chriswestfall/2024/12/12/google-launches-mariner-a-new-ai-agent-based-on-updated-gemini-20/" },
              { label: "NYT", url: "https://www.nytimes.com/2024/12/11/technology/google-ai-agent-gemini.html" },
              { label: "TechCrunch", url: "https://techcrunch.com/2024/12/11/google-unveils-project-mariner-ai-agents-to-use-the-web-for-you/" }
            ]
          },
          {
            text: "Google I/O 2025: Updated version of Project Mariner.",
            links: [
              { label: "Google Keyword Blog", url: "https://blog.google/technology/ai/io-2025-keynote/#project-mariner" },
              { label: "Bloomberg", url: "https://youtu.be/Pg0VumELQYg?si=rYp5oiQ--6K22Oyq" },
              { label: "TechCrunch", url: "https://techcrunch.com/2025/05/20/google-rolls-out-project-mariner-its-web-browsing-ai-agent/" },
              { label: "The Verge", url: "https://www.theverge.com/google/671200/google-googling-ai-mode-project-mariner-i-o-2025" }
            ]
          }
        ]
      },
      {
        title: "Group Product Manager, Google Labs",
        period: "2022 – 2024",
        achievements: [
          {
            text: "May 2024: launched Gemini 1.5 Flash, 1.5 Pro updates, and 2 new Gemma models.",
            links: [{ label: "Keyword Blog", url: "https://blog.google/technology/developers/gemini-gemma-developer-updates-may-2024/#:~:text=Developers-,Gemini%201.5%20Pro%20updates%2C%201.5%20Flash%20debut%20and%202%20new,2%20million%20token%20context%20window." }]
          },
          {
            text: "April 2024: Gemini native audio understanding.",
            links: [{ label: "Google Developer Blog", url: "https://developers.googleblog.com/en/gemini-15-pro-now-available-in-180-countries-with-native-audio-understanding-system-instructions-json-mode-and-more/" }]
          },
          {
            text: "February 2024: Gemini 1M context window.",
            links: [{ label: "Google Developer Blog", url: "https://developers.googleblog.com/en/gemini-15-our-next-generation-model-now-available-for-private-preview-in-google-ai-studio/" }]
          },
          {
            text: "December 2023: Launched Google AI Studio and the Gemini API.",
            links: [
              { label: "TechCrunch", url: "https://techcrunch.com/2023/12/13/with-ai-studio-google-launches-an-easy-to-use-tool-for-developing-apps-and-chatbots-based-on-its-gemini-model/#:~:text=With%20AI%20Studio%2C%20Google%20launches,on%20its%20Gemini%20model%20%7C%20TechCrunch" },
              { label: "Keyword Blog", url: "https://blog.google/technology/ai/google-gemini-pro-imagen-duet-ai-update/#:~:text=Company%20news-,Gemini%20API%20and%20more%20new%20AI%20tools%20for%20developers%20and,Cloud%20customers%20in%20the%20U.S." }
            ]
          }
        ]
      },
      {
        title: "Product Manager, Google Assistant",
        period: "2017 – 2022",
        description: "Worked on various speech and perception features.",
        achievements: [
          {
            text: "2022: Quick Phrases - launched at I/O.",
            links: [
              { label: "Android Police", url: "https://www.androidpolice.com/pixel-6-quick-phrases-feature-arrives-on-the-nest-hub-max/" },
              { label: "Droid Life", url: "https://www.droid-life.com/2022/09/06/quick-phrases-arrive-on-nest-hub-max-with-no-ok-google-needed/" }
            ]
          },
          {
            text: "2020: Voice Filter Speech Modelling Advancements.",
            links: [{ label: "Google Research Blog", url: "https://research.google/blog/improving-on-device-speech-recognition-with-voicefilter-lite/" }]
          },
          {
            text: "2019: Quick Gestures & Face Match.",
            links: [
              { label: "I/O Keynote (Gestures)", url: "https://www.youtube.com/live/TQSaPsKHPqs?si=BTsIFA0K98DwiHzM&t=4607" },
              { label: "I/O Keynote (Face Match)", url: "https://www.youtube.com/live/TQSaPsKHPqs?si=pHGhS0Gc3RzAD-NG&t=4485" },
              { label: "TechCrunch", url: "https://techcrunch.com/2019/09/09/google-nest-hub-max-review/" }
            ]
          },
          {
            text: "2019: Simple Stop.",
            links: [
              { label: "Business Insider", url: "https://www.businessinsider.com/stop-alarms-on-google-assistant2019-5" },
              { label: "Time", url: "https://time.com/5585259/google-io-2019/" }
            ]
          },
          {
            text: "2018: Multilingual Assistant - first voice assistant to support multilingual capabilities.",
            links: [
              { label: "MIT Tech Review", url: "https://www.technologyreview.com/2018/09/04/140497/google-released-the-first-bilingual-ai-assistant/" },
              { label: "VentureBeat", url: "https://venturebeat.com/ai/google-assistant-can-now-speak-two-languages-at-once/" }
            ]
          },
          {
            text: "2017: Continued Conversation.",
            links: [
              { label: "Google Keyword Blog", url: "https://blog.google/products/assistant/chatting-your-google-assistant-just-got-easier/" },
              { label: "TechCrunch", url: "https://techcrunch.com/2018/06/21/google-assistants-continued-conversation-feature-is-now-live/" }
            ]
          }
        ]
      }
    ]
  },
  {
    company: "Weebly",
    roles: [
      {
        title: "Group Product Manager",
        period: "2016 – 2017",
        achievements: [
          { text: "Led five product areas, including eCommerce and international expansion, launching key features like real-time shipping rates and gift cards." }
        ]
      },
      {
        title: "Senior Product Manager",
        period: "2014 – 2016",
        achievements: [
          { text: "Initiated the Weebly App Center and enhanced core features, collaborating with partners like Google and Square." }
        ]
      }
    ]
  },
  {
    company: "Amulyte (Y Combinator W13)",
    roles: [
      {
        title: "Co-Founder",
        period: "2013 – 2014",
        achievements: [
          { text: "Developed a modern emergency response device, participated in Y Combinator, and secured seed funding." }
        ]
      }
    ]
  },
  {
    company: "Microsoft",
    roles: [
      {
        title: "Program Manager, Outlook",
        period: "2010 – 2012",
        achievements: [
          { text: "Designed and implemented new features for Outlook, focusing on user experience and interface optimization." }
        ]
      }
    ]
  }
];
