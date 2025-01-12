import React, { useState } from "react";
import "./DestinationPage.css";
import DestinationCard from "./DestinationCard";
import DestinationDetail from "./DestinationDetail";
import penanghill1Img from "../../assets/header-penang-hill.jpg";
import koksitemple1Img from "../../assets/kekloksitemple.jpg";
import batufringgi1Img from "../../assets/batu feringgi.jpg";
import ppark1Img from "../../assets/penang park.jpg";
import pperanakan1Img from "../../assets/penang peranakan mantion.jpg";
import sejid1Img from "../../assets/sejid.jpg";
import padangkota1Img from "../../assets/padang kota.jpg";
import streetart1Img from "../../assets/street art.jpg";
import museum1Img from "../../assets/penang state museum.jpg";
import penanghill2Img from "../../assets/penanghill2.jpg";
import batufringgi2Img from "../../assets/bajufringgi2.jpg";
import koksitemple2Img from "../../assets/keklok2.jpg";
import ppark2Img from "../../assets/p.park2.jpg";
import pperanakan2Img from "../../assets/p.peranakan2.jpg";
import sejid2Img from "../../assets/sejid2.jpg";
import padangkota2Img from "../../assets/p.kota2.jpg";
import streetart2Img from "../../assets/s.art2.jpg";
import museum2Img from "../../assets/museum2.jpg";



const destinations = [
   
   
    {
        id: 1,
        name: "Penang Hill",
        description: "A hill resort with panoramic views and cool weather.",
        story: "Penang Hill, also known as Bukit Bendera, is a hill resort comprising a group of peaks on Penang Island, Malaysia. Located in Air Itam, approximately 6 kilometers west of George Town, it stands as the oldest British hill station in Southeast Asia, dating back to the late 1700s. The highest point, Western Hill, reaches 833 meters above sea level. Visitors can enjoy panoramic views of the city and the island, along with a cooler climate that offers a refreshing escape from the tropical heat.",
        image: penanghill1Img,
        additionalInfo: [
            "Features include the Penang Hill Railway and The Habitat for nature walks.",
            "The cooler climate makes it a favorite retreat for locals and tourists."
        ],
        extraImages: [penanghill2Img]
    },
    {
        id: 2,
        name: "Kek Lok Si Temple",
        description: "The largest Buddhist temple in Malaysia.",
        story: "Kek Lok Si Temple, situated in the Air Itam suburb of George Town, is the largest Buddhist temple in Malaysia and one of the most significant in Southeast Asia. Built between 1890 and 1930, the temple complex features a seven-story pagoda adorned with 10,000 Buddhas and a towering bronze statue of the Goddess of Mercy, Kuan Yin. The temple's architecture blends Chinese, Thai, and Burmese styles, creating a harmonious and visually stunning experience.",
        image: koksitemple1Img,
        additionalInfo: [
            "Don't miss the statue of Kuan Yin and the stunning views of Penang.",
            "The temple is a major pilgrimage site for Buddhists in the region."
        ],
        extraImages: [koksitemple2Img]
    },
   
    {
        id: 3,
        name: "Batu Ferringhi",
        description: "A beautiful beach with water sports and night markets.",
        story: "Batu Ferringhi is a popular beach destination in Penang, known for its pristine sandy shores, clear waters, and a wide range of water sports activities. The area comes alive in the evenings with a bustling night market offering local handicrafts, souvenirs, and street food. It's an ideal spot for both relaxation and adventure, catering to families, couples, and solo travelers alike.",
        image: batufringgi1Img,
        additionalInfo: [
            "Activities include jet-skiing, parasailing, and banana boat rides.",
            "The night market offers a variety of local delicacies and souvenirs."
        ],
        extraImages: [batufringgi2Img]
    },
    {
        id: 4,
        name: "Penang National Park",
        description: "A haven for nature enthusiasts and wildlife lovers.",
        story: "Penang National Park, located on the northwest corner of Penang Island, is a haven for nature enthusiasts and wildlife lovers. The park encompasses diverse ecosystems, including mangroves, rainforests, and coral reefs. Visitors can explore various trails leading to secluded beaches, a lighthouse, and enjoy activities like hiking, bird watching, and snorkeling. The park is home to a variety of flora and fauna, some of which are endemic to the region.",
        image: ppark1Img,
        additionalInfo: [
            "Notable attractions include Monkey Beach and the Penang Turtle Sanctuary.",
            "A canopy walk offers breathtaking views of the rainforest."
        ],
        extraImages: [ppark2Img]
    },
    {
        id: 5,
        name: "Penang Peranakan Mansion",
        description: "A museum showcasing Peranakan culture and heritage.",
        story: "The Penang Peranakan Mansion offers a glimpse into the opulent lifestyle and rich culture of the Straits Chinese community, also known as the Peranakans. The museum is housed in a restored mansion that showcases a vast collection of antiques, artifacts, and traditional costumes. Visitors can learn about the unique blend of Chinese and Malay cultures, evident in the architecture, cuisine, and customs of the Peranakan people.",
        image: pperanakan1Img,
        additionalInfo: [
            "Features intricately carved furniture and lavish decor.",
            "Guided tours provide deeper insights into Peranakan history."
        ],
        extraImages: [pperanakan2Img]
    },
    {
        id: 6,
        name: "Masjid Terapung Penang",
        description: "A stunning floating mosque by the sea.",
        story: "Masjid Terapung Pulau Pinang, located in Tanjung Bungah, is a remarkable floating mosque built over the sea. Completed in 2005, this mosque combines modern and traditional Islamic architectural styles. Visitors can marvel at the unique design, especially during high tide, when it appears to float on water, making it an iconic symbol of faith and culture in Penang.",
        image:sejid1Img,
        additionalInfo: [
            "The mosque accommodates up to 1,500 worshippers.",
            "It's particularly picturesque during sunrise and sunset."
        ],
        extraImages: [sejid2Img]
    },
    {
        id: 7,
        name: "Padang Kota Pulau Penang",
        description: "A historic waterfront esplanade in George Town.",
        story: "Padang Kota Lama, or Esplanade, is a historic landmark in George Town, offering scenic views of the sea and a vibrant atmosphere. This waterfront area is surrounded by colonial-era buildings, local eateries, and Fort Cornwallis. It's a popular spot for locals and tourists to relax, enjoy street food, or take in cultural performances and festivals.",
        image: padangkota1Img,
        additionalInfo: [
            "Known for local delights like Penang laksa and char kway teow.",
            "Home to Fort Cornwallis, Malaysia's largest standing fort."
        ],
        extraImages: [padangkota2Img]
    },
    {
        id: 8,
        name: "Street Art Pulau Penang",
        description: "Vibrant street murals showcasing Penang's culture.",
        story: "The street art in George Town is a key attraction for visitors, featuring murals and sculptures that depict the local culture, history, and everyday life in Penang. Initiated by Lithuanian artist Ernest Zacharevic, these artworks have turned the city's walls into an open-air gallery, making it a favorite destination for art enthusiasts and photographers alike.",
        image: streetart1Img,
        additionalInfo: [
            "Don't miss the famous 'Boy on a Bicycle' and 'Kids on a Swing' murals.",
            "Street art walking tours are available for enthusiasts."
        ],
        extraImages: [streetart2Img]
    },
    {
        id: 9,
        name: "Penang State Museum and Art Gallery",
        description: "A cultural hub preserving Penang's heritage.",
        story: "The Penang State Museum and Art Gallery, located in George Town, houses an impressive collection of artifacts, artworks, and historical documents that showcase Penang's rich history and culture. Established in 1821, the museum offers visitors an in-depth look at the island's colonial past, local traditions, and artistic achievements.",
        image: museum1Img,
        additionalInfo: [
            "Highlights include galleries on Penang's colonial and maritime history.",
            "Temporary exhibitions often feature local artists' works."
        ],
        extraImages: [museum2Img]
    }
    
  ];  

const DestinationPage = () => {
    const [selectedDestination, setSelectedDestination] = useState(null);

    return (
        <div className="des-destination-page">
            {selectedDestination? (
                <DestinationDetail
                destination={selectedDestination}
                    onBack={() => setSelectedDestination(null)}
                />
            ) : (
                <>
                    <h1 className="des-page-title">Your Penang Bucket List: Attractions You Can't Miss</h1>
                    <div className="des-card-grid">
                        {destinations.map((destination) => (
                            <DestinationCard
                                key={destination.id}
                                destination={destination}
                                onClick={() => setSelectedDestination(destination)}
                            />
                        ))}
                    </div>
                </>
            )}
        </div>
    );
};

export default DestinationPage;
