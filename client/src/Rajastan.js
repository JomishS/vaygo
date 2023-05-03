import React,{useEffect,useState} from 'react'
// import '../../App.css'
import { useNavigate,Link } from 'react-router-dom'
import RajCSS from './Festivals.module.css'

import { Navbar } from './components/Navbar';
export function Rajastan()
{
    return(
        <>
        <head>
    <title>timeline</title>
</head>

<body className={RajCSS.rjbg}>

    <div className={RajCSS.header}>
    <br/><br/><br/><br/>
        <h1 className={RajCSS.header1}>RAJASTHAN</h1>
    </div>

<div className={RajCSS.products}>
    <div className={RajCSS.product}>
        <h2 className={RajCSS.head2}>Teej Festival</h2>
        <div className={RajCSS.image}>
            <img className={RajCSS.img1} src="https://www.tourmyindia.com/socialimg/teej-festival-rajasthan.jpg" alt=""/>
        </div>
        <div className={RajCSS.namePrice}>
            <h2 className={RajCSS.head2}>Chaugan Stadium, Jaipur</h2>
            <span className={RajCSS.span}>August or September*, 3 Days</span>
        </div>
    <br/>
        <p className={RajCSS.para}>Teej is a Hindu festival celebrating a woman's love for her husband and the monsoon season. Women dress up, fast, and pray for their husbands' well-being. It's celebrated with zeal in India, especially Rajasthan, and involves traditional folk songs and cultural revelry.</p>
<br/>
        <div className={RajCSS.stars}>
            <i className={RajCSS.fasolidfastar}></i>
            <i className={RajCSS.fasolidfastar}></i>
            <i className={RajCSS.fasolidfastar}></i>
            <i className={RajCSS.fasolidfastar}></i>
            <i className={RajCSS.fasolidfastar}></i>
        </div>
        <div className={RajCSS.bay}>
            {/* <div className={RajCSS.infopopup} onclick={event=>popupFunction(event)}> */};
            <div className={RajCSS.infopopup}>
            <button className={RajCSS.infobutton}> Read more </button>
            <span className={RajCSS.popupText}>Teej is a Hindu festival celebrated in India, primarily by women. It falls on the third day of the bright half of the lunar month of Shraavana. One of west India's biggest festivals, Teej commemorates two things - a woman's love for her husband and the advent of the monsoon season. The festival is marked by colourful celebrations and it also mark the union of Lord Shiva and Goddess Parvati. During Teej, women dress up in traditional attire, apply mehndi on their hands, and participate in various cultural activities. They fast and pray for the long life and well-being of their husbands. The fast is broken only after offering prayers to Lord Shiva and Goddess Parvati.
                
                The festival is celebrated with great enthusiasm and zeal in various parts of India, especially in Rajasthan, Uttar Pradesh, Bihar, and Madhya Pradesh. The festivities typically last for three days, during which women gather to sing and dance to traditional folk songs, known as Teej geet. These songs celebrate the beauty of nature, the love between husband and wife, and the joy of life. Teej is a significant festival for women as it symbolizes their love and devotion for their husbands. It is also a time for them to celebrate their womanhood and bond with other women in the community. The markets and bazaars of Jaipur are filled to the brim with attractive clothes, jewellery and sweets like Ghewar and Malpua. A procession of a decorated idol of Goddess Parvati is carried through Jaipur, and thousands of devotees and tourists throng to see the procession and the antique palanquins, chariots, bands, folk music and dance and soak in the cultural revelry.
                </span>
            </div>
        </div>
    </div>

    {/* <div id={RajCSS.modal} onclick={event=>closeModal(event)}> */}
    <div id={RajCSS.modal}>
        <div className={RajCSS.body}></div>
      </div>



    <div className={RajCSS.product}>
        <h2 className={RajCSS.head2}>World Sufi Spirit Festival</h2>
        <div className={RajCSS.image}>
            <img className={RajCSS.img1} src="https://magikindia.com/wp-content/uploads/2015/03/festival-jodhpur.jpg" alt=""/>
        </div>
        <div className={RajCSS.namePrice}>
            <h2 className={RajCSS.head2}>Mehrangarh Fort,Gangaur</h2>
            <span className={RajCSS.span}>February*, 3-4 Days</span>
        </div>
    <br/>
        <p className={RajCSS.para}>The annual World Sufi Spirit Festival in Jodhpur, India, celebrates Sufi music and poetry with performances by musicians from around the world. The festival promotes cultural heritage and includes workshops and discussions on Sufism and its message of love, peace, and harmony.</p>
<br/>
        <div className={RajCSS.stars}>
            <i className={RajCSS.fasolidfastar}></i>
            <i className={RajCSS.fasolidfastar}></i>
            <i className={RajCSS.fasolidfastar}></i>
            <i className={RajCSS.fasolidfastar}></i>
            <i className={RajCSS.fasolidfastar}></i>
        </div>
        <div className={RajCSS.bay}>
            {/* <div className={RajCSS.infopopup} onclick={event=>popupFunction(event)}> */}
            <div className={RajCSS.infopopup}>
            <button className={RajCSS.infobutton}> Read more </button>
            <span className={RajCSS.popupText}>The World Sufi Spirit Festival is an annual music festival that celebrates the rich tradition of Sufi music and poetry. It takes place in the city of Jodhpur, located in the state of Rajasthan, India, usually in the month of February. The festival was founded in 2006 by the Maharaja of Jodhpur, Gaj Singh II, as a way to promote and preserve the cultural heritage of Sufism. It is organized by the Mehrangarh Museum Trust in partnership with the Jaipur Virasat Foundation. The festival features performances by renowned Sufi musicians and singers from around the world. The music is a fusion of various Sufi traditions, including qawwali, ghazals, and sufi rock, among others. The performances are held in some of the most historic and beautiful locations in Jodhpur, including the Mehrangarh Fort and Umaid Bhawan Palace. In addition to the music, the festival also includes workshops, lectures, and discussions on Sufism and its role in promoting peace and harmony among people of different cultures and religions.
                
                The festival attracts visitors from all over the world and has become a major cultural event in India. The World Sufi Spirit Festival provides a platform for artists and musicians to showcase their talent and to promote the message of love, peace, and harmony that is at the heart of Sufism.It celebrates the rich cultural heritage of Sufism and brings together people from different parts of the world to share their love of music, poetry, and spirituality.</span>
            </div>
        </div>
    </div>



    <div className={RajCSS.product}>
        <h2 className={RajCSS.head2}>Kite Festival</h2>
        <div className={RajCSS.image}>
            <img className={RajCSS.img1} src="https://upload.wikimedia.org/wikipedia/commons/b/b8/Washington_State_International_Kite_Festival_2008.jpg" alt=""/>
        </div>
        <div className={RajCSS.namePrice}>
            <h2 className={RajCSS.head2}>Jaipur</h2>
            <span className={RajCSS.span}>January 14-16, 3 Days</span>
        </div>
    <br/>
        <p className={RajCSS.para}>The Kite Festival or Makar Sankranti is a vibrant and popular festival celebrated in Rajasthan, India every January 14th. People of all ages come together to fly kites, participate in cultural activities, and enjoy traditional food. The festival is celebrated in Jaipur, attracting kite flyers from all over the world.</p>
<br/>
        <div className={RajCSS.stars}>
            <i className={RajCSS.fasolidfastar}></i>
            <i className={RajCSS.fasolidfastar}></i>
            <i className={RajCSS.fasolidfastar}></i>
            <i className={RajCSS.fasolidfastar}></i>
            <i className={RajCSS.fasolidfastar}></i>
        </div>
        <div className={RajCSS.bay}>
            {/* <div className={RajCSS.infopopup} onclick={event=>popupFunction(event)}> */}
            <div className={RajCSS.infopopup}>
            <button className={RajCSS.infobutton}> Read more </button>
            <span className={RajCSS.popupText}>The Kite Festival, also known as Makar Sankranti or Uttarayan, is a major festival celebrated in Rajasthan, India. The festival is celebrated on January 14th every year, marking the end of winter and the beginning of spring. In Rajasthan, the Kite Festival is celebrated with great enthusiasm and fervor, and it is one of the most popular festivals in the state. People of all ages come together to fly kites, enjoy traditional food and snacks, and participate in various cultural activities. Jaipur, the capital city of Rajasthan, is known for hosting one of the most famous Kite Festivals in the state. The festival attracts kite flyers from all over the world and is held at the Jal Mahal Palace and other venues across the city.
                
                During the festival, the sky over Jaipur is filled with colorful kites of various shapes and sizes. The festival usually starts early in the morning and continues until late in the evening. People gather on rooftops and open fields to fly kites and participate in friendly competitions. In addition to kite-flying, the festival also features traditional Rajasthani music, dance performances, and other cultural activities. People also enjoy traditional food and snacks such as til laddoo, gajak, and chikki. The Kite Festival in Rajasthan is a time for people to come together, celebrate, and enjoy the simple pleasure of flying kites. It is a vibrant and joyous festival that reflects the rich cultural heritage of the state.</span>
            </div>
        </div>
    </div>



    <div className={RajCSS.product}>
        <h2 className={RajCSS.head2}>Urs Festival</h2>
        <div className={RajCSS.image}>
            <img className={RajCSS.img1} src="https://www.travel-rajasthan.com/images/experiance-in-rajsthan/fairs-festivals/urs-festival.jpg" alt=""/>
        </div>
        <div className={RajCSS.namePrice}>
            <h2 className={RajCSS.head2}>Ajmer Sharif Dargah, Diggi Bazaar, Ajmer</h2>
            <span className={RajCSS.span}>Month Of Rajab*, 6 Days</span>
        </div>
    <br/>
        <p className={RajCSS.para}>The Urs Festival of Ajmer is a six-day Muslim festival in Rajasthan, India, honoring Sufi saint Moinuddin Chishti. It features devotional music, poetry readings, and a grand procession attracting thousands of devotees.</p>
<br/>
        <div className={RajCSS.stars}>
            <i className={RajCSS.fasolidfastar}></i>
            <i className={RajCSS.fasolidfastar}></i>
            <i className={RajCSS.fasolidfastar}></i>
            <i className={RajCSS.fasolidfastar}></i>
            <i className={RajCSS.fasolidfastar}></i>
        </div>
        <div className={RajCSS.bay}>
            {/* <div className={RajCSS.infopopup} onclick={event=>popupFunction(event)}> */}
            <div className={RajCSS.infopopup}>
            <button className={RajCSS.infobutton}> Read more </button>
            <span className={RajCSS.popupText}>The Urs Festival of Ajmer is one of the most important Muslim festivals in India, celebrated in the city of Ajmer, Rajasthan, at the shrine of the Sufi saint, Moinuddin Chishti. The festival marks the death anniversary of the saint and is celebrated every year in the Islamic month of Rajab. The Urs Festival of Ajmer is a time of spiritual devotion and attracts thousands of devotees from all over the world. During the festival, the city of Ajmer comes alive with colorful decorations, music, and dance performances.
                
                The festival usually lasts for six days and is celebrated with various activities, such as recitations of Quranic verses, qawwalis (Sufi devotional music), and poetry readings. The main attraction of the festival is a grand procession called the "Jannati Darwaza," which starts from the Dargah Sharif (the shrine of Moinuddin Chishti) and ends at the Ana Sagar Lake. During the Urs Festival, the shrine of Moinuddin Chishti is illuminated with thousands of lamps and decorated with flowers and incense. Devotees offer flowers, sweets, and other offerings at the shrine and seek blessings from the saint. The Urs Festival of Ajmer is a time for people of all faiths to come together and celebrate the legacy of Moinuddin Chishti, who is revered for his teachings of love, compassion, and tolerance. The festival is a reflection of India's rich cultural and religious diversity and is a symbol of communal harmony and unity.</span>
            </div>
        </div>
    </div>



    <div className={RajCSS.product}>
        <h2 className={RajCSS.head2}>Brij Holi</h2>
        <div className={RajCSS.image}>
            <img className={RajCSS.img1} src="https://www.rajasthantourtrip.com/images/braj-holi.jpg" alt=""/>
        </div>
        <div className={RajCSS.namePrice}>
            <h2 className={RajCSS.head2}>Brij, Bharatpur</h2>
            <span className={RajCSS.span}>March*, 7 Days</span>
        </div>
    <br/>
        <p className={RajCSS.para}>Brij Holi, celebrated in Rajasthan's Brij region, is a colorful blend of religious, cultural, and folk traditions that showcases love and devotion towards Lord Krishna. Celebrants enjoy playing with colors, flowers, traditional food, and performing the unique Raslila dance.</p>
<br/>
        <div className={RajCSS.stars}>
            <i className={RajCSS.fasolidfastar}></i>
            <i className={RajCSS.fasolidfastar}></i>
            <i className={RajCSS.fasolidfastar}></i>
            <i className={RajCSS.fasolidfastar}></i>
            <i className={RajCSS.fasolidfastar}></i>
        </div>
        <div className={RajCSS.bay}>
            {/* <div className={RajCSS.infopopup} onclick={event=>popupFunction(event)}> */}
            <div className={RajCSS.infopopup}>
            <button className={RajCSS.infobutton}> Read more </button>
            <span className={RajCSS.popupText}>Brij Holi is a colorful and vibrant festival celebrated in the Brij region of Rajasthan, which is believed to be the birthplace of Lord Krishna. The festival is celebrated with great enthusiasm and fervor, and is a unique blend of religious, cultural and folk traditions. Brij Holi celebrations begin with the Lathmar Holi, which is a prelude to the main festival. In Lathmar Holi, women playfully beat men with sticks and men try to protect themselves from the blows with shields. This tradition is believed to have originated from the story of Radha and Krishna, where Radha playfully hits Krishna with a stick. The main day of Brij Holi is called Phoolon wali Holi, which is a flower Holi celebration. In this celebration, people throw colorful flowers and gulal (colored powder) on each other, and sing and dance to the tunes of traditional songs.
                
                Braj Holi is also known for its unique Raslila dance, which depicts the love story of Radha and Krishna. The dance is performed by groups of men and women, who dress up as Radha and Krishna, and enact various scenes from their love story. The festival is also a time for people to indulge in traditional food, such as gujias, mathris, and sweets. It is a time for people to come together and celebrate the spirit of love, friendship, and brotherhood. Brij Holi is a unique and colorful festival that showcases the rich cultural heritage of Rajasthan and the deep-rooted love and devotion of the people towards Lord Krishna.</span>
            </div>
        </div>
    </div>
</div>
<br/><br/><br/><br/><br/><br/><br/>
<h3 className={RajCSS.head3}>* The dates are subject to change depending upon the local calendars and auspicious timings.</h3>



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