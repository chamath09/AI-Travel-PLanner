import { GoogleGenerativeAI } from "@google/generative-ai";


  
  const apiKey = import.meta.env.VITE_GOOGLE_GEMINI_AI_API_KEY;
  const genAI = new GoogleGenerativeAI(apiKey);
  
  const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
    systemInstruction: "Generate Travel Plan for Location : Las Vegas, for 3 Days for Couple with a Cheap budget, Give me a Hotels options list with HotelName, Hotel address, Price, hotel image url, geo coordinates, rating, descriptions and suggest itinerary with placeName, placeDetails, Place Image Url, Geo Coordinates, ticket Pricing, rating, time travel each of the location for 3 days with each day plan with best time to visit in JSON format.",
  });
  
  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 40,
    maxOutputTokens: 8192,
    responseMimeType: "application/json",
  };
  

    export const chatSession = model.startChat({
      generationConfig,
      history: [
        {
          role: "user",
          parts: [
            {text: "Generate Travel Plan for Location : Las Vegas, for 3 Days for Couple with a Cheap budget, Give me a Hotels options list with HotelName, Hotel address, Price, hotel image url, geo coordinates, rating, descriptions and suggest itinerary with placeName, placeDetails, Place Image Url, Geo Coordinates, ticket Pricing, rating, time travel each of the location for 3 days with each day plan with best time to visit in JSON format."},
          ],
        },
        {
          role: "model",
          parts: [
            {text: "```json\n{\n  \"hotelOptions\": [\n    {\n      \"hotelName\": \"Circus Circus Hotel & Casino\",\n      \"hotelAddress\": \"2880 S Las Vegas Blvd, Las Vegas, NV 89109\",\n      \"price\": {\n        \"low\": 30,\n        \"high\": 80\n      },\n      \"hotelImageUrl\": \"https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/CircusCircusLasVegasSign.jpg/1280px-CircusCircusLasVegasSign.jpg\",\n      \"geoCoordinates\": {\n        \"latitude\": 36.1215,\n        \"longitude\": -115.1725\n      },\n      \"rating\": 3.5,\n      \"description\": \"A budget-friendly option with a circus theme, offering various entertainment options.\"\n    },\n    {\n      \"hotelName\": \"The D Las Vegas\",\n      \"hotelAddress\": \"300 Fremont St, Las Vegas, NV 89101\",\n      \"price\": {\n        \"low\": 40,\n        \"high\": 100\n      },\n      \"hotelImageUrl\": \"https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/The_D_Las_Vegas.jpg/1280px-The_D_Las_Vegas.jpg\",\n      \"geoCoordinates\": {\n        \"latitude\": 36.1699,\n        \"longitude\": -115.1401\n      },\n      \"rating\": 4.0,\n      \"description\": \"Downtown location with a retro vibe, offering reasonable rates.\"\n    },\n    {\n      \"hotelName\": \"Main Street Station Casino, Brewery & Hotel\",\n      \"hotelAddress\": \"200 N Main St, Las Vegas, NV 89101\",\n      \"price\": {\n        \"low\": 50,\n        \"high\": 120\n      },\n      \"hotelImageUrl\": \"https://www.mainstreetstationcasino.com/wp-content/uploads/2022/02/Main-Street-Station-Hotel-Exterior.jpg\",\n      \"geoCoordinates\": {\n        \"latitude\": 36.1704,\n        \"longitude\": -115.1386\n      },\n      \"rating\": 3.8,\n      \"description\": \"Historic hotel in downtown Las Vegas with a brewery on-site.\"\n    }\n  ],\n  \"itinerary\": {\n    \"day1\": [\n      {\n        \"placeName\": \"Fremont Street Experience\",\n        \"placeDetails\": \"A pedestrian mall with light shows and street performers.\",\n        \"placeImageUrl\": \"https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Fremont_Street_Experience_at_night.jpg/1280px-Fremont_Street_Experience_at_night.jpg\",\n        \"geoCoordinates\": {\n          \"latitude\": 36.1699,\n          \"longitude\": -115.1402\n        },\n        \"ticketPricing\": \"Free\",\n        \"rating\": 4.5,\n        \"timeToSpend\": \"3-4 hours\",\n        \"bestTime\": \"Evening\"\n      },\n      {\n        \"placeName\": \"Neon Museum\",\n        \"placeDetails\": \"Outdoor museum showcasing vintage Las Vegas signs.\",\n        \"placeImageUrl\": \"https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Neon_Museum_Las_Vegas_Nevada.jpg/1280px-Neon_Museum_Las_Vegas_Nevada.jpg\",\n        \"geoCoordinates\": {\n          \"latitude\": 36.1778,\n          \"longitude\": -115.1472\n        },\n        \"ticketPricing\": \"$25-$30\",\n        \"rating\": 4.0,\n        \"timeToSpend\": \"1-2 hours\",\n        \"bestTime\": \"Late Afternoon\"\n      }\n    ],\n    \"day2\": [\n      {\n        \"placeName\": \"The Strip (walking tour)\",\n        \"placeDetails\": \"Walk the length of the Strip, admiring the hotels and casinos.\",\n        \"placeImageUrl\": \"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Las_Vegas_Strip_panorama.jpg/1280px-Las_Vegas_Strip_panorama.jpg\",\n        \"geoCoordinates\": {\n          \"latitude\": 36.1146,\n          \"longitude\": -115.1729\n        },\n        \"ticketPricing\": \"Free\",\n        \"rating\": 5.0,\n        \"timeToSpend\": \"4-5 hours\",\n        \"bestTime\": \"Daytime\"\n      },\n      {\n        \"placeName\": \"Bellagio Fountains\",\n        \"placeDetails\": \"Free water show with music and lights.\",\n        \"placeImageUrl\": \"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Bellagio_Fountains_at_Night.jpg/1280px-Bellagio_Fountains_at_Night.jpg\",\n        \"geoCoordinates\": {\n          \"latitude\": 36.1146,\n          \"longitude\": -115.1728\n        },\n        \"ticketPricing\": \"Free\",\n        \"rating\": 4.8,\n        \"timeToSpend\": \"30 minutes - 1 hour\",\n        \"bestTime\": \"Evening\"\n      }\n    ],\n    \"day3\": [\n      {\n        \"placeName\": \"Seven Magic Mountains\",\n        \"placeDetails\": \"Public art installation south of Las Vegas.\",\n        \"placeImageUrl\": \"https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Seven_Magic_Mountains_2018_edit.jpg/1280px-Seven_Magic_Mountains_2018_edit.jpg\",\n        \"geoCoordinates\": {\n          \"latitude\": 36.0042,\n          \"longitude\": -115.0186\n        },\n        \"ticketPricing\": \"Free\",\n        \"rating\": 4.2,\n        \"timeToSpend\": \"1-2 hours\",\n        \"bestTime\": \"Daytime\"\n      },\n      {\n        \"placeName\": \"Red Rock Canyon National Conservation Area\",\n        \"placeDetails\": \"Scenic desert landscape with hiking trails.\",\n        \"placeImageUrl\": \"https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Red_Rock_Canyon_National_Conservation_Area.jpg/1280px-Red_Rock_Canyon_National_Conservation_Area.jpg\",\n        \"geoCoordinates\": {\n          \"latitude\": 36.1797,\n          \"longitude\": -115.5655\n        },\n        \"ticketPricing\": \"$15 per vehicle\",\n        \"rating\": 4.5,\n        \"timeToSpend\": \"3-4 hours\",\n        \"bestTime\": \"Morning or Late Afternoon\"\n      }\n    ]\n  }\n}\n```\n\n**Note:** Prices are estimates and can vary depending on the season and availability.  Always check current prices before booking. Image URLs are examples; you might find better quality images through a search engine.  Geocoordinates are approximate and may need refinement for precise location.  Ratings are subjective averages. This plan prioritizes free or low-cost activities.  Consider transportation costs (rental car might be needed for Day 3) when budgeting.\n"},
          ],
        },
      ],
    });
  