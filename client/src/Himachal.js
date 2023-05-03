import React,{useEffect,useState} from 'react'
// import '../../App.css'
import { useNavigate,Link } from 'react-router-dom'
import HimCSS from './Festivals.module.css'

import { Navbar } from './components/Navbar';
export function Himachal()
{
    return(
        <>
        <head>
    <title>timeline</title>
</head>

<body className={HimCSS.hpbg}>

    <div className={HimCSS.header}>
    <br/><br/><br/><br/>
        <h1 className={HimCSS.header1}>HIMACHAL PRADESH</h1>
    </div>

<div className={HimCSS.products}>
    <div className={HimCSS.product}>
        <h2 className={HimCSS.head2}>Sazo Pema Festival</h2>
        <div className={HimCSS.image}>
            <img className={HimCSS.img1} src="https://northeastlive.s3.amazonaws.com/media/uploads/2023/04/ARUNACHAL-1024x577.png" alt=""/>
        </div>
        <div className={HimCSS.namePrice}>
            <h2 className={HimCSS.head2}>Reckong Peo, Kalpa, Sangla, and Nichar</h2>
            <span className={HimCSS.span}>January*, 3 Days</span>
        </div>
    <br/>
        <p className={HimCSS.para}>The Sazo Pema Festival in Kinnaur, Himachal Pradesh honors the local deity, Goddess Durga, with traditional attire, folk dances, music, and religious rituals. The festival strengthens community bonds and showcases Kinnaur's rich cultural heritage.</p>
<br/>
        <div className={HimCSS.stars}>
            <i className={HimCSS.fasolidfastar}></i>
            <i className={HimCSS.fasolidfastar}></i>
            <i className={HimCSS.fasolidfastar}></i>
            <i className={HimCSS.fasolidfastar}></i>
            <i className={HimCSS.fasolidfastar}></i>
        </div>
        <div className={HimCSS.bay}>
            {/* <div className={HimCSS.infopopup} onclick={event=>popupFunction(event)}> */}
            <div className={HimCSS.infopopup}>
            <button className={HimCSS.infobutton}> Read more </button>
            <span className={HimCSS.popupText}>The Sazo Pema Festival is celebrated to honor the local deity, Goddess Durga, who is believed to protect the people of Kinnaur from all kinds of evils. The festival is usually held in the month of February or March and is celebrated with great enthusiasm and fervor.
                
                During the festival, people of Kinnaur dress up in traditional attire and participate in cultural events like folk dances, music, and religious rituals. The Tashi Jongpa dance is a famous traditional dance performed during the festival. People also offer prayers and sacrifices to Goddess Durga to seek her blessings for a prosperous and healthy life. The festival provides an opportunity for people to come together and strengthen community bonds. It also showcases the rich cultural heritage of the Kinnaur district, including their unique customs and traditions. Bringing religious trevor and spiritual ecstasy to the whole valley of Kinnaur is the ancient Sazo festival. Being one of the beautiful festivals of Himachal Pradesh, Sazo rooted in the strong belief that during this time, the deities ascend back to heaven for some time. Their departure is considered a huge event. The locals in the valley follow strict rituals regarding the celebration. The Sazo Pema Festival is an essential part of the cultural fabric of Kinnaur and is celebrated with great joy and enthusiasm every year.</span>
            </div>
        </div>
    </div>

    {/* <div id={HimCSS.modal} onclick={event=>closeModal(event)}> */}
    <div id={HimCSS.modal}>
        <div className={HimCSS.body}></div>
      </div>



    <div className={HimCSS.product}>
        <h2 className={HimCSS.head2}>Losar Festival</h2>
        <div className={HimCSS.image}>
            <img className={HimCSS.img1} src="https://i0.wp.com/www.tusktravel.com/blog/wp-content/uploads/2021/02/Losar-Festival-Ladakh.jpg?fit=1024%2C683&ssl=1" alt=""/>
        </div>
        <div className={HimCSS.namePrice}>
            <h2 className={HimCSS.head2}>Districts of Kinnaur, Lahaul-Spiti and some parts of Mandi</h2>
            <span className={HimCSS.span}>February-March*, 15 Days</span>
        </div>
    <br/>
        <p className={HimCSS.para}>Losar is the Tibetan New Year celebrated in late January or early February. The 15-day festival features cultural activities, religious rituals, and traditional dishes. The highlight is the Mystery Play, a colorful traditional Tibetan opera.</p>
<br/>
        <div className={HimCSS.stars}>
            <i className={HimCSS.fasolidfastar}></i>
            <i className={HimCSS.fasolidfastar}></i>
            <i className={HimCSS.fasolidfastar}></i>
            <i className={HimCSS.fasolidfastar}></i>
            <i className={HimCSS.fasolidfastar}></i>
        </div>
        <div className={HimCSS.bay}>
            {/* <div className={HimCSS.infopopup} onclick={event=>popupFunction(event)}> */}
            <div className={HimCSS.infopopup}>
            <button className={HimCSS.infobutton}> Read more </button>
            <span className={HimCSS.popupText}>The festival marks the Tibetan New Year and is usually celebrated in late January or early February, depending on the lunar calendar. Losar, a religious himachal festival to celebrate the uniqueness of Tibetan ethnicity in Himachal Pradesh. the new year according to the Tibetan calendar. The festival is celebrated over a span of fifteen days but its true grandeur is seen from February 24 to February 26. 
                
                The word "Losar" translates to "new year" in Tibetan. The festival is filled with various cultural activities and religious rituals. The celebrations are believed to help purify the old year's ill deeds and welcome the new year with positivity and good fortune. During Losar, people decorate their homes with colorful prayer flags and prepare traditional dishes. The traditional dish includes "Guthuk," a soup made of barley flour dough balls stuffed with meat or vegetable filling. They also prepare a variety of sweets and offer them to the family and guests.
                
                On the first day of Losar, people gather in the monasteries to offer prayers and seek blessings from the lamas. They also perform a traditional dance called the "Cham Dance" to chase away the evil spirits and welcome the new year. The highlight of the Losar festival is the "Mystery Play" or "Ache Lhamo" in Tibetan. It is a traditional Tibetan opera that features colorful costumes, masks, and dances depicting various historical and mythological stories. The Mystery Play is usually performed on the third day of Losar and continues for several days. Overall, Losar is a vibrant and joyous festival celebrated with great enthusiasm by the people of Tibet and neighboring regions. It is an excellent opportunity to experience the rich cultural heritage of the region and witness the colorful and fascinating celebrations firsthand.</span>
            </div>
        </div>
    </div>



    <div className={HimCSS.product}>
        <h2 className={HimCSS.head2}>Kullu Dussehra</h2>
        <div className={HimCSS.image}>
            <img className={HimCSS.img1} src="https://navbharattimes.indiatimes.com/thumb/91462617/kullu-dussehra-2021-91462617.jpg?imgsize=161190&width=540&height=405&resizemode=75" alt=""/>
        </div>
        <div className={HimCSS.namePrice}>
            <h2 className={HimCSS.head2}>Kullu Valley</h2>
            <span className={HimCSS.span}>October*, 10 Days</span>
        </div>
    <br/>
        <p className={HimCSS.para}>Kullu Dussehra is a ten-day festival in the Kullu Valley of Himachal Pradesh, India, celebrating the victory of Lord Rama and dedicated to Lord Raghunath. The celebrations include cultural activities, processions, dance performances, and music shows. The festival culminates with the burning of an effigy of Ravana, symbolizing the victory of good over evil.</p>
<br/>
        <div className={HimCSS.stars}>
            <i className={HimCSS.fasolidfastar}></i>
            <i className={HimCSS.fasolidfastar}></i>
            <i className={HimCSS.fasolidfastar}></i>
            <i className={HimCSS.fasolidfastar}></i>
            <i className={HimCSS.fasolidfastar}></i>
        </div>
        <div className={HimCSS.bay}>
            {/* <div className={HimCSS.infopopup} onclick={event=>popupFunction(event)}> */}
            <div className={HimCSS.infopopup}>
            <button className={HimCSS.infobutton}> Read more </button>
            <span className={HimCSS.popupText}>Kullu Dussehra is a ten-day-long festival celebrated in the Kullu Valley of Himachal Pradesh, India. It is one of the most famous and vibrant festivals in the state, drawing thousands of visitors from around the world every year. The festival begins on Vijayadashami day and continues for ten days. The celebrations involve various cultural activities, including processions, dance performances, and music shows. The festival is unique in that it celebrates the victory of Lord Rama over Ravana, but it is also dedicated to Lord Raghunath, the presiding deity of the Kullu Valley. 
                
                The idol of Lord Raghunath is taken out in a procession from his temple in Sultanpur to the Dhalpur grounds in Kullu town, where it is placed on a beautifully decorated chariot. The procession is accompanied by devotees dressed in traditional attire, playing traditional instruments and dancing. The entire town is adorned with colorful lights and decorations, and the air is filled with the sounds of music and chanting. During the ten days of the festival, various cultural programs and competitions are organized, including folk music and dance performances, wrestling matches, and traditional sports. 
                
                The festival culminates with the burning of an effigy of Ravana, symbolizing the victory of good over evil. Overall, Kullu Dussehra is a vibrant and joyous festival that celebrates the cultural heritage of the Kullu Valley. It is an excellent opportunity to experience the unique traditions and customs of the region and witness the colorful and fascinating celebrations firsthand.</span>
            </div>
        </div>
    </div>



    <div className={HimCSS.product}>
        <h2 className={HimCSS.head2}>Manali Winter Carnival</h2>
        <div className={HimCSS.image}>
            <img className={HimCSS.img1} src="https://himachalwatcher.com/wp-content/uploads/2015/01/manali-winter-carnival-2014.jpg" alt=""/>
        </div>
        <div className={HimCSS.amePrice}>
            <h2 className={HimCSS.head2}>Town Of Manali</h2>
            <span className={HimCSS.span}>January*, 10 Days</span>
        </div>
    <br/>
        <p className={HimCSS.para}>The Winter Carnival in Manali is a vibrant festival celebrating the winter season and local traditions. Held in January for 10 days, it features cultural performances, adventure sports, food and craft stalls, and more. The festival attracts visitors from all over the world, making it a lively celebration.</p>
<br/>
        <div className={HimCSS.stars}>
            <i className={HimCSS.fasolidfastar}></i>
            <i className={HimCSS.fasolidfastar}></i>
            <i className={HimCSS.fasolidfastar}></i>
            <i className={HimCSS.fasolidfastar}></i>
            <i className={HimCSS.fasolidfastar}></i>
        </div>
        <div className={HimCSS.bay}>
            {/* <div className={HimCSS.infopopup} onclick={event=>popupFunction(event)}> */}
            <div className={HimCSS.infopopup}>
            <button className={HimCSS.infobutton}> Read more </button>
            <span className={HimCSS.popupText}>The Winter Carnival in Manali is an annual festival held in the picturesque town of Manali . The festival is a celebration of the winter season and the unique culture and traditions of the region. The Winter Carnival is usually held in January, and it lasts for around ten days. The festival is marked by a range of activities and events, including cultural performances, music shows, and adventure sports competitions. The carnival kicks off with a procession, which sees locals dressed in colorful traditional attire walking through the town's streets. The procession is followed by a series of cultural performances, which showcase the unique folk music and dance traditions of the region. One of the highlights of the festival is the adventure sports competitions, which include skiing, snowboarding, and ice skating. 
                
                The festival also features food and craft stalls, where visitors can sample local delicacies and purchase handmade souvenirs. The Winter Carnival is a great opportunity for tourists to experience the unique culture and traditions of the Kullu Valley, and to enjoy the beautiful scenery of Manali during the winter season. The festival attracts visitors from all over the world, making it a lively and vibrant celebration of the winter season. The Manali Winter Carnival is Himachal Pradesh's way of welcoming the new year. It started in 1977 and had become an annual feature since then. The Winter Carnival in Manali opens an opportunity to witness the beauty of slushy snow and enjoy the events and celebrations that it puts forth. Initially, it only comprised of the Skiing competition, but now it has come to include band performances, food festivals, street plays, folk dances, adventure sports and much more.</span>
            </div>
        </div>
    </div>



    <div className={HimCSS.product}>
        <h2 className={HimCSS.head2}>Mandi Shivaratri Fair</h2>
        <div className={HimCSS.image}>
            <img className={HimCSS.img1} src="https://yesicannes.com/wp-content/uploads/2014/03/nice-carnival-2014-finale-feat.jpg" alt=""/>
        </div>
        <div className={HimCSS.namePrice}>
            <h2 className={HimCSS.head2}>Town of Mandi</h2>
            <span className={HimCSS.span}>February/March*</span>
        </div>
    <br/>
        <p className={HimCSS.para}>The Mandi Shivaratri Fair is an annual festival in honor of Lord Shiva, held in Mandi, Himachal Pradesh. The seven-day festival features cultural activities, a parade with local deities, and handicraft and food stalls. It's a vibrant celebration of the region's unique culture and traditions.</p>
<br/>
        <div className={HimCSS.stars}>
            <i className={HimCSS.fasolidfastar}></i>
            <i className={HimCSS.fasolidfastar}></i>
            <i className={HimCSS.fasolidfastar}></i>
            <i className={HimCSS.fasolidfastar}></i>
            <i className={HimCSS.fasolidfastar}></i>
        </div>
        <div className={HimCSS.bay}>
            {/* <div className={HimCSS.infopopup} onclick={event=>popupFunction(event)}> */}
            <div className={HimCSS.infopopup}>
            <button className={HimCSS.infobutton}> Read more </button>
            <span className={HimCSS.popupText}>Mandi Shivaratri Fair is an annual festival held in the town of Mandi in the state of Himachal Pradesh, India. The festival is celebrated in honor of Lord Shiva, and it is one of the most significant and vibrant festivals in the state. The Mandi Shivaratri Fair is held in the month of February or March, on the occasion of Shivratri, which is the night when Lord Shiva is believed to have performed the Tandav dance. The festival lasts for seven days and attracts thousands of devotees from across the country. The fair is marked by a range of cultural activities, including traditional dance performances, music shows, and processions. The festival also features a colorful parade, in which Lord Shiva's idol is carried through the streets on a beautifully decorated palanquin.
                
                One of the highlights of the festival is the participation of various local deities, who are carried on palanquins from their respective temples to the main procession. The local deities are an essential part of the festival, and their participation is believed to bring good luck and prosperity to the town and its people. The Mandi Shivaratri Fair is also famous for its handicrafts and food stalls, where visitors can sample local delicacies and purchase handmade souvenirs. Overall, the Mandi Shivaratri Fair is a vibrant and joyous celebration of Lord Shiva and the unique culture and traditions of the Kullu Valley. It is an excellent opportunity for tourists to experience the rich cultural heritage of the region and witness the colorful and fascinating celebrations firsthand.</span>
            </div>
        </div>
    </div>
</div>
<br/><br/><br/><br/><br/><br/><br/>
<h3 className={HimCSS.head3}>* The dates are subject to change depending upon the local calendars and auspicious timings.</h3>



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