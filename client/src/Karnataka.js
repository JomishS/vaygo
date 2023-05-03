import React,{useEffect,useState} from 'react'
// import '../../App.css'
import { useNavigate,Link } from 'react-router-dom'
import KarnCSS from './Festivals.module.css'

import { Navbar } from './components/Navbar';
export function Karnataka()
{
    return(
        <>
        <head>
    <title>timeline</title>
</head>

<body className={KarnCSS.knbg}>

    <div className={KarnCSS.header}>
    <br/><br/><br/><br/>
        <h1 className={KarnCSS.header1}>KARNATAKA</h1>
    </div>

<div className={KarnCSS.products}>
    <div className={KarnCSS.product}>
        <h2 className={KarnCSS.head2}>Mysuru Dussehra</h2>
        <div className={KarnCSS.image}>
            <img className={KarnCSS.img1} src="https://thestrongtraveller.com/wp-content/uploads/2022/10/mysore-dussehra-festival-procession.jpg" alt=""/>
        </div>
        <div className={KarnCSS.namePrice}>
            <h2 className={KarnCSS.head2}>Mysuru Palace</h2>
            <span className={KarnCSS.span}>September – October*, 10 Days</span>
        </div>
    <br/>
        <p className={KarnCSS.para}>Mysuru Dussehra, a 10-day festival in Karnataka, India, features cultural and religious events, ending with a grand procession culminating with the immersion of the idol of goddess Chamundeshwari.</p>
<br/>
        <div className={KarnCSS.stars}>
            <i className={KarnCSS.fasolidfastar}></i>
            <i className={KarnCSS.fasolidfastar}></i>
            <i className={KarnCSS.fasolidfastar}></i>
            <i className={KarnCSS.fasolidfastar}></i>
            <i className={KarnCSS.fasolidfastar}></i>
        </div>
        <div className={KarnCSS.bay}>
            {/* <div className={KarnCSS.infopopup} onclick={event=>popupFunction(event)}> */}
            <div className={KarnCSS.infopopup}>
            <button className={KarnCSS.infobutton}> Read more </button>
            <span className={KarnCSS.popupText}>Mysuru Dussehra, also known as Mysuru Dasara, is a ten-day-long festival celebrated in the city of Mysuru in the southern state of Karnataka, India. It is one of the most famous and grand Dussehra celebrations in India and is renowned for its pomp and grandeur. The festival dates back to the 15th century when it was started by the rulers of the Vijayanagara Empire, and it has been celebrated in Mysuru ever since. During the ten days of the festival, the entire city is decked up with lights, flowers, and decorations, and there are various cultural and religious programs organized by the government and local organizations.

                The festival culminates with a grand procession on the tenth day, which is known as Vijayadashami. The procession starts from the Mysuru Palace and goes through the city, with beautifully decorated elephants, horses, and other animals, as well as dance groups and musicians performing along the way. The highlight of the procession is the idol of the goddess Chamundeshwari, who is the presiding deity of the Mysuru region, carried on a beautifully decorated elephant. 
                
                The procession ends with the immersion of the idol in the nearby Banni Mantapa grounds, marking the end of the festival. Apart from the procession, there are also other cultural programs such as music and dance performances, sports events, and a flower show, which attract tourists from all over the world. The festival is an important cultural event for the people of Mysuru, and it reflects the rich cultural heritage of the region.</span>
            </div>
        </div>
    </div>

    {/* <div id={KarnCSS.modal} onclick={event=>closeModal(event)}> */}
    <div id={KarnCSS.modal}>
        <div className={KarnCSS.body}></div>
      </div>



    <div className={KarnCSS.product}>
        <h2 className={KarnCSS.head2}>Hampi Utsav</h2>
        <div className={KarnCSS.image}>
            <img className={KarnCSS.img1} src="https://www.karnataka.com/wp-content/uploads/2014/01/hampi-utsav-2.jpg" alt=""/>
        </div>
        <div className={KarnCSS.namePrice}>
            <h2 className={KarnCSS.head2}>Hampi</h2>
            <span> First Week of November*, 3 Days</span>
        </div>
    <br/>
        <p className={KarnCSS.para}>Hampi Utsav is an annual cultural festival celebrated in the UNESCO World Heritage site of Hampi, Karnataka, India. It features cultural programs, a procession, decorated chariots, horses, and troupes. The festival highlights the local cuisine and provides a platform for artisans and craftsmen.</p>
<br/>
        <div className={KarnCSS.stars}>
            <i className={KarnCSS.fasolidfastar}></i>
            <i className={KarnCSS.fasolidfastar}></i>
            <i className={KarnCSS.fasolidfastar}></i>
            <i className={KarnCSS.fasolidfastar}></i>
            <i className={KarnCSS.fasolidfastar}></i>
        </div>
        <div className={KarnCSS.bay}>
            {/* <div className={KarnCSS.infopopup} onclick={event=>popupFunction(event)}> */}
            <div className={KarnCSS.infopopup}>
            <button className={KarnCSS.infobutton}> Read more </button>
            <span className={KarnCSS.popupText}>Hampi Utsav, also known as Hampi Festival, is a cultural festival celebrated annually in Hampi, a UNESCO World Heritage site located in the northern part of Karnataka state in India. The festival is held in the first week of November every year and is a celebration of the cultural heritage of Hampi and the surrounding region. During the three-day festival, the entire Hampi town is decorated with colorful lights and decorations, and there are various cultural programs organized by the government and local organizations. The festival attracts thousands of visitors from across India and around the world who come to witness the cultural extravaganza.
                
                The highlight of the festival is the procession, which takes place on the second day of the festival. The procession starts from the Hampi Bazaar and goes through the main streets of the town. It features beautifully decorated chariots, horses, and cultural troupes representing different parts of the region. Apart from the procession, there are also various cultural programs such as music and dance performances, puppet shows, and a food festival, which showcases the local cuisine of the region. The festival provides a platform for local artisans and craftsmen to showcase their skills and products.
                
                The Hampi Utsav is an important cultural event for the people of Hampi and the surrounding region, and it helps in promoting the cultural heritage of the region. The festival is a must-visit for anyone interested in experiencing the rich cultural traditions of India.
                </span>
            </div>
        </div>
    </div>



    <div className={KarnCSS.product}>
        <h2 className={KarnCSS.head2}>Ugadi festival</h2>
        <div className={KarnCSS.image}>
            <img className={KarnCSS.img1} src="https://www.oneindia.com/img/2021/04/ugadi-1618052786.jpg" alt=""/>
        </div>
        <div className={KarnCSS.namePrice}>
            <h2 className={KarnCSS.head2}>Throughout Karnataka</h2>
            <span className={KarnCSS.span}>March or April*</span>
        </div>
    <br/>
        <p className={KarnCSS.para}>Ugadi is a Hindu New Year festival celebrated with new clothes, decorations, and special food, including the Ugadi Pachadi dish. It's a time for prayers, blessings, and family gatherings, and also marks the start of the spring season.</p>
<br/>
        <div className={KarnCSS.stars}>
            <i className={KarnCSS.fasolidfastar}></i>
            <i className={KarnCSS.fasolidfastar}></i>
            <i className={KarnCSS.fasolidfastar}></i>
            <i className={KarnCSS.fasolidfastar}></i>
            <i className={KarnCSS.fasolidfastar}></i>
        </div>
        <div className={KarnCSS.bay}>
            {/* <div className={KarnCSS.infopopup} onclick={event=>popupFunction(event)}> */}
            <div className={KarnCSS.infopopup}>
            <button className={KarnCSS.infobutton}> Read more </button>
            <span className={KarnCSS.popupText}>The festival marks the beginning of a new year according to the Hindu calendar The word "Ugadi" is derived from two Sanskrit words - "Yuga" meaning era, and "adi" meaning beginning. The festival symbolizes new beginnings, growth, and prosperity. On the day of Ugadi, people wake up early, take a bath, wear new clothes, and decorate their houses with mango leaves and flowers. They prepare special dishes like "Ugadi Pachadi," a traditional dish made with jaggery, tamarind, neem leaves, and raw mango, which symbolizes the various emotions of life, including happiness, sadness, bitterness, and surprise. People also visit temples to offer prayers and seek blessings for a prosperous year ahead. The festival is celebrated with great enthusiasm and is an occasion for families and friends to come together and exchange greetings and gifts.
                
                In addition to its cultural significance, Ugadi also has astronomical importance. The festival falls on the day when the sun enters the Aries zodiac sign, marking the beginning of the spring season. It is believed that the position of the sun, moon, and planets on this day has a significant influence on the lives of people and determines the events of the coming year. Overall, Ugadi is a joyous occasion that marks the beginning of a new year, and is celebrated with great fervor and enthusiasm in various parts of India.
                </span>
            </div>
        </div>
    </div>



    <div className={KarnCSS.product}>
        <h2 className={KarnCSS.head2}>Kambala Festival</h2>
        <div className={KarnCSS.image}>
            <img className={KarnCSS.img1} src="https://images.livemint.com/img/2022/12/15/1600x900/Kambala_1671083608660_1671083608906_1671083608906.webp" alt=""/>
        </div>
        <div className={KarnCSS.namePrice}>
            <h2 className={KarnCSS.head2}>Moodabidri, Mangalore, Surathkal, and Mulki</h2>
            <span className={KarnCSS.span}>November-March*</span>
        </div>
    <br/>
        <p className={KarnCSS.para}>Kambala festival in Karnataka, India, is a celebration of rural life and traditions featuring buffalo races, cultural events, music, dance, food, handicrafts, and sports. The event attracts large crowds and is a must-see for anyone interested in Indian culture.</p>
<br/>
        <div className={KarnCSS.stars}>
            <i className={KarnCSS.fasolidfastar}></i>
            <i className={KarnCSS.fasolidfastar}></i>
            <i className={KarnCSS.fasolidfastar}></i>
            <i className={KarnCSS.fasolidfastar}></i>
            <i className={KarnCSS.fasolidfastar}></i>
        </div>
        <div className={KarnCSS.bay}>
            {/* <div className={KarnCSS.infopopup} onclick={event=>popupFunction(event)}> */}
            <div className={KarnCSS.infopopup}>
            <button className={KarnCSS.infobutton}> Read more </button>
            <span className={KarnCSS.popupText}>Kambala festival is a traditional sporting and cultural festival celebrated in the state of Karnataka, India. It is a unique festival that showcases the rural life and traditions of the region. The main highlight of the festival is the buffalo race, where teams of two buffaloes race through a paddy field with one person riding on the back of each buffalo. The buffaloes are specially trained and bred for this event, and their owners take great pride in their performance. The race is a test of skill, strength, and agility, and attracts large crowds of spectators.
                
                Apart from the buffalo race, Kambala festival also features a variety of cultural events, including music and dance performances, traditional food and handicrafts, and other sporting events. The festival is an opportunity for people to come together and celebrate their culture, and it is an important part of the social fabric of the region. Overall, Kambala festival is a colorful and vibrant celebration of the rural life and traditions of Karnataka, and it is a must-see event for anyone interested in Indian culture and traditions.</span>
            </div>
        </div>
    </div>



    <div className={KarnCSS.product}>
        <h2 className={KarnCSS.head2}>Pattadakal Dance Festival</h2>
        <div className={KarnCSS.image}>
            <img className={KarnCSS.img1} src="https://img.traveltriangle.com/blog/wp-content/uploads/2019/06/og-for-Festivals-In-Karnataka.jpg" alt=""/>
        </div>
        <div className={KarnCSS.namePrice}>
            <h2 className={KarnCSS.head2}>Town of Pattadakal</h2>
            <span>January/February*</span>
        </div>
    <br/>
        <p className={KarnCSS.para}>The Pattadakal Dance Festival is a three-day celebration of classical Indian dance and music that takes place against the backdrop of ancient temples in northern Karnataka, India. It attracts leading performers and visitors from across the country and offers an opportunity to immerse oneself in the rich cultural heritage of the region.</p>
<br/>
        <div className={KarnCSS.stars}>
            <i className={KarnCSS.fasolidfastar}></i>
            <i className={KarnCSS.fasolidfastar}></i>
            <i className={KarnCSS.fasolidfastar}></i>
            <i className={KarnCSS.fasolidfastar}></i>
            <i className={KarnCSS.fasolidfastar}></i>
        </div>
        <div className={KarnCSS.bay}>
            {/* <div className={KarnCSS.infopopup} onclick={event=>popupFunction(event)}> */}
            <div className={KarnCSS.infopopup}>
            <button className={KarnCSS.infobutton}> Read more </button>
            <span className={KarnCSS.popupText}>Pattadakal is a small town located in the Bagalkot district of northern Karnataka, India. It is home to a group of 8th century temples that are renowned for their exquisite architecture and intricate carvings, and are recognized as a UNESCO World Heritage Site. The town is a popular destination for tourists interested in exploring the rich cultural heritage of Karnataka.
                
                The Pattadakal Dance Festival is a celebration of classical Indian dance and music that takes place against the backdrop of these ancient temples. The festival is usually held over a period of three days in January or February, and it attracts leading dancers and musicians from across India, as well as a large audience of locals and tourists. The performances at the festival typically feature classical Indian dance forms such as Bharatanatyam, Kuchipudi, Kathak, and Mohiniyattam, as well as classical music forms such as Hindustani and Carnatic. The dancers perform in front of the ancient temples, with the temples serving as a stunning backdrop to the performances. In addition to the performances, the festival also features food stalls selling local cuisine and handicrafts stalls selling traditional handicrafts from the region. 
                
                The festival provides an opportunity for visitors to immerse themselves in the rich culture of Karnataka, and to witness the beauty and grandeur of Indian classical dance and music against the backdrop of an ancient architectural wonder. Overall, the Pattadakal Dance Festival is a celebration of the rich cultural heritage of Karnataka, and it is a must-visit event for anyone interested in Indian classical arts, architecture, and culture.
                </span>
            </div>
        </div>
    </div>
</div>
<br/><br/><br/><br/><br/><br/><br/>
<h3 className={KarnCSS.head3}>* The dates are subject to change depending upon the local calendars and auspicious timings.</h3>



</body>

        </>
    )
}

{/* <script>
    const $ = document.querySelector.bind(document);
const mdl = $('#modal');

function popupFunction(e) {
  const targ = e.target;
  const prnt = targ.closest('div.popup');
  const chldn = prnt.childNodes;
  const txt = [...chldn].filter((d) => d.className === 'popupText');
  const msg = txt[0].innerText;
  $('#modal .body').innerText = msg;
  $('#modal').classList.add('modalHasContent');
}
function closeModal(e){
  e.target.classList.remove('modalHasContent');
}
  </script> */}