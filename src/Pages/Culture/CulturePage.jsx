import React, { useState } from "react";
import "./CulturePage.css";
import CultureCard from "./CultureCard";
import CultureDetail from "./CultureDetail";
import georgetown1Img from "../../assets/georgetown1.jpg";
import georgetown2Img from "../../assets/georgetown2.jpg";
import georgetown3Img from "../../assets/georgetown3.jpg";
import georgetown4Img from "../../assets/georgetown4.jpg";
import streetArt1Img from "../../assets/streetArt1.jpg";
import streetArt2Img from "../../assets/streetArt2.jpg";
import streetArt3Img from "../../assets/streetArt3.jpg";
import streetArt4Img from "../../assets/streetArt4.jpg";
import streetArt5Img from "../../assets/streetArt5.jpg";
import streetArt6Img from "../../assets/streetArt6.jpg";
import streetArt7Img from "../../assets/streetArt7.jpg";
import worship1Img from "../../assets/worship1.jpg";
import worship2Img from "../../assets/worship2.jpg";
import worship3Img from "../../assets/worship3.jpg";
import worship4Img from "../../assets/worship4.jpg";
import worship5Img from "../../assets/worship5.jpg";
import festival1Img from "../../assets/festival1.jpg";
import festival2Img from "../../assets/festival2.jpg";
import festival3Img from "../../assets/festival3.jpg";
import festival4Img from "../../assets/festival4.jpg";
import festival5Img from "../../assets/festival5.jpg";
import peranakan1Img from "../../assets/peranakan1.jpg";
import peranakan2Img from "../../assets/peranakan2.jpg";
import peranakan3Img from "../../assets/peranakan3.jpg";
import peranakan4Img from "../../assets/peranakan4.jpg";
import localCulture1Img from "../../assets/local-culture1.jpg";
import localCulture2Img from "../../assets/local-culture2.jpg";
import localCulture3Img from "../../assets/local-culture3.jpg";
import localCulture4Img from "../../assets/local-culture4.jpg";

const cultures = [
    {
        id: 1,
        name: "George Town Heritage",
        description: "A UNESCO World Heritage Site preserving Penang’s rich history.",
        story: "George Town, the capital of Penang, is celebrated as a UNESCO World Heritage Site for its remarkable preservation of colonial-era buildings, vibrant street art, and multicultural heritage. The city reflects a harmonious blend of Chinese, Indian, Malay, and European influences, showcasing the island's diverse past. Visitors can explore historical landmarks, temples, mosques, and clan houses, each with its own unique story.",
        image: georgetown1Img,
        additionalInfo: [
            "Key landmarks include the Pinang Peranakan Mansion, Khoo Kongsi, and Kapitan Keling Mosque.",
            "The Clan Jetties, home to historic stilt houses, provide a glimpse into the lives of early Chinese settlers.",
            "George Town’s street art, including murals by Ernest Zacharevic, has become a major tourist attraction.",
            "Annual events like the George Town Festival celebrate the city’s art and culture."
        ],
        extraImages: [
            { src: georgetown2Img, name: "George Town World Heritage Inc" },
            { src: georgetown3Img, name: "Penang Peranakan Mansion" },
            { src: georgetown4Img, name: "Khoo Kongsi" },
        ]
    },
    {
        id: 2,
        name: "Street Art in Penang",
        description: "A unique blend of culture, creativity, and storytelling.",
        story: "Penang's street art has become one of the island's most iconic attractions, transforming George Town into an open-air gallery. Initiated by the George Town Festival in 2012, these murals tell the stories of Penang’s heritage, daily life, and multicultural identity. The artworks are scattered across the city, turning alleyways and historic streets into immersive cultural experiences.",
        image: streetArt1Img,
        additionalInfo: [
            "Renowned artist Ernest Zacharevic's works include 'Kids on Bicycle' and 'Boy on Chair.'",
            "Street art celebrates Penang’s daily life, featuring food vendors, rickshaws, and traditional games.",
            "Metal sculptures along George Town provide humorous takes on local history and culture.",
            "The art evolves over time, with new murals and installations regularly added by local and international artists."
        ],
        extraImages: [
            { src: streetArt2Img, name: "Kids on Bicycle Mural" },
            { src: streetArt3Img, name: "Boy on Chair Mural" },
            { src: streetArt4Img, name: "Metal Sculpture in George Town" },
            { src: streetArt5Img, name: "Little Children on a Boat Mural" },
            { src: streetArt6Img, name: "Kung Fu Girl Mural" },
            { src: streetArt7Img, name: "Trishaw Mural" },
        ]
    },
    {
        id: 3,
        name: "Places of Worship in Penang",
        description: "A reflection of Penang’s religious and cultural diversity.",
        story: "Penang is home to a variety of places of worship, each showcasing unique architectural styles and spiritual significance. From majestic temples and serene mosques to historic churches and vibrant Indian shrines, these places are a testament to the island’s multicultural heritage. They serve as not only centers of faith but also as landmarks for cultural preservation.",
        image: worship1Img,
        additionalInfo: [
            "The Kapitan Keling Mosque is one of the oldest and most prominent mosques in Penang.",
            "Kek Lok Si Temple, a sprawling Buddhist temple complex, is an iconic landmark in Penang.",
            "Sri Mahamariamman Temple is the oldest Hindu temple on the island.",
            "St. George's Church, the oldest Anglican church in Southeast Asia, is a must-visit."
        ],
        extraImages: [
            { src: worship2Img, name: "Kapitan Keling Mosque" },
            { src: worship3Img, name: "Kek Lok Si Tample" },
            { src: worship4Img, name: "Sri Mahamariamman Tample" },
            { src: worship5Img, name: "St. George's Church" },
        ]
    },
    {
        id: 4,
        name: "Festivals in Penang",
        description: "A celebration of multicultural traditions and heritage.",
        story: "Penang is renowned for its vibrant festivals, reflecting the island's rich cultural diversity. These celebrations bring together communities to honor traditions, enjoy performances, and indulge in festive feasts. From Chinese New Year to Thaipusam, each festival offers a unique glimpse into the lives and customs of Penang's diverse population.",
        image: festival1Img,
        additionalInfo: [
            "Chinese New Year: A vibrant celebration with lion dances, red lanterns, and family reunions.",
            "Thaipusam: A Hindu festival featuring a grand procession to the Arulmigu Balathandayuthapani Temple.",
            "George Town Festival: An annual arts and culture event showcasing local and international talents.",
            "Deepavali: The Hindu Festival of Lights, marked by colorful rangoli and joyous gatherings."
        ],
        extraImages: [
            { src: festival2Img, name: "Chinese New Year" },
            { src: festival3Img, name: "Thaipusam" },
            { src: festival4Img, name: "George Town Festival" },
            { src: festival5Img, name: "Deepavali" },
        ]
    },
    {
        id: 5,
        name: "Peranakan Culture in Penang",
        description: "A unique blend of Chinese and Malay traditions.",
        story: "The Peranakan, or Baba Nyonya, culture in Penang is a fascinating fusion of Chinese and Malay heritage, born out of the intermarriages between Chinese immigrants and local Malays centuries ago. This culture is reflected in their colorful attire, ornate beadwork, intricate embroidery, and, most famously, their cuisine. Peranakan food is a harmonious blend of Chinese ingredients and Malay spices, creating a flavorful and distinct culinary experience.",
        image: peranakan1Img,
        additionalInfo: [
            "Peranakan cuisine includes signature dishes such as Nyonya Laksa, Assam Pedas, and Kuih-muih (traditional cakes).",
            "The Penang Peranakan Museum offers a glimpse into the lives of the Baba Nyonya community through its collection of antiques and artifacts.",
            "Peranakan fashion is known for its kebayas with intricate embroidery and colorful sarongs."
        ],
        extraImages: [
            { src: peranakan2Img, name: "Nyonya Laksa" },
            { src: peranakan3Img, name: "Peranakan Beadwork Shoes" },
            { src: peranakan4Img, name: "Traditional Peranakan Home" }
        ]
    },
    {
        id: 6,
        name: "Local Culture in Penang",
        description: "A melting pot of traditions, food, and heritage.",
        story: "Penang's local culture is a unique blend of Malay, Chinese, Indian, and other ethnic influences. The island's rich cultural diversity is reflected in its vibrant festivals, traditional practices, and everyday life. From the bustling streets of George Town to serene kampongs, Penangites are known for their warm hospitality, strong sense of community, and deep respect for heritage. Local culture comes alive in street food, colorful attire, traditional performances, and architectural styles that tell stories of Penang's past and present.",
        image: localCulture1Img,
        additionalInfo: [
            "The fusion of cultures is most evident in Penang’s cuisine, such as Nasi Kandar, Char Kway Teow, and Roti Canai.",
            "Traditional music and dances like Chinese opera, Dondang Sayang, and Bharatanatyam reflect the island's multicultural influences.",
            "Penang's kampongs preserve the simplicity of Malay lifestyle, while urban George Town showcases a mix of old-world charm and modernity.",
            "Cultural landmarks include temples like Kek Lok Si, mosques like Kapitan Keling Mosque, and clan houses such as Khoo Kongsi.",
            "Penangites celebrate a wide range of festivals, including Chinese New Year, Deepavali, Hari Raya Aidilfitri, and Thaipusam."
        ],
        extraImages: [
            { src: localCulture2Img, name: "Traditional Music Performance" },
            { src: localCulture3Img, name: "Colorful Attire" },
            { src: localCulture4Img, name: "Festive Street Scenes" },
        ]
    },
  ];  

const CulturePage = () => {
    const [selectedCulture, setSelectedCulture] = useState(null);

    return (
        <div className="cul-culture-page">
            {selectedCulture ? (
                <CultureDetail
                    culture={selectedCulture}
                    onBack={() => setSelectedCulture(null)}
                />
            ) : (
                <>
                    <h1 className="cul-page-title">Discover Penang's Cultural Highlights</h1>
                    <div className="cul-card-grid">
                        {cultures.map((culture) => (
                            <CultureCard
                                key={culture.id}
                                culture={culture}
                                onClick={() => setSelectedCulture(culture)}
                            />
                        ))}
                    </div>
                </>
            )}
        </div>
    );
};

export default CulturePage;
