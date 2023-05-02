import React,{useEffect,useState} from 'react'
// import '../../App.css'
import { useNavigate,Link } from 'react-router-dom'
import TamilCSS from './Festivals.module.css'

import { Navbar } from './components/Navbar';
export function TamilNadu()
{
    return(
        <>
        <head>
    <title>timeline</title>
</head>

<body className={TamilCSS.tnbg}>

    <div className={TamilCSS.header}>
    <br/><br/><br/><br/>
        <h1 className={TamilCSS.header1}>TAMIL NADU</h1>
    </div>

<div className={TamilCSS.products}>
    <div className={TamilCSS.product}>
        <h2 className={TamilCSS.head2}>Pongal</h2>
        <div className={TamilCSS.image}>
            <img className={TamilCSS.img1} src="https://www.sikkimexpress.com/uploads/news/750-380/ccedce0673591a57e4e424a7a328c236.jpg" alt=""/>
        </div>
        <div className={TamilCSS.namePrice}>
            <h2 className={TamilCSS.head2}>Throughout Tamil Nadu</h2>
            <span className={TamilCSS.span}>2nd or 3rd week of January*</span>
        </div>
    <br/>
        <p className={TamilCSS.para}>Pongal is a harvest festival celebrated in Tamil Nadu and southern India in mid-January. The four-day festival involves cleaning homes, cooking traditional dishes, worshiping cows, and spending time with family.</p>
<br/>
        <div className={TamilCSS.stars}>
            <i className={TamilCSS.fasolidfastar}></i>
            <i className={TamilCSS.fasolidfastar}></i>
            <i className={TamilCSS.fasolidfastar}></i>
            <i className={TamilCSS.fasolidfastar}></i>
            <i className={TamilCSS.fasolidfastar}></i>
        </div>
        {/* <div className={TamilCSS.bay} onclick={event=>popupFunction(event)}> */}
        <div className={TamilCSS.bay}>
        <div className={TamilCSS.infopopup}>
            <button className={TamilCSS.infobutton}> Read more </button>
            <span className={TamilCSS.popupText}>Pongal is a harvest festival celebrated in the Indian state of Tamil Nadu and some parts of southern India. The festival is typically held in the second or third week of January, and it marks the beginning of the Tamil calendar year. Pongal is a four-day festival and is celebrated with great enthusiasm and joy. The festival is dedicated to the Sun God, Surya, and is a celebration of the harvest season. The name "Pongal" means "boiling over," and it refers to the boiling of rice and milk in a pot, which is a traditional practice during the festival.
                
                The first day of the festival is called Bhogi, and it is dedicated to the cleaning of homes and getting rid of old and unwanted items. On the second day, known as Surya Pongal, people cook a traditional sweet dish made of rice, milk, and jaggery, and offer it to the Sun God. The third day is called Mattu Pongal, and it is dedicated to the worship of cows, which are considered sacred animals in Hinduism. The final day of the festival, called Kaanum Pongal, is a day for family get-togethers and outings. During the festival, people decorate their homes with rangolis (intricate patterns made with colored rice flour), wear new clothes, and participate in various cultural activities such as traditional dances, music, and games. The festival is a time for people to come together and celebrate the abundance and prosperity of the harvest season.
                
                Overall, Pongal is a vibrant and colorful festival that celebrates the rich cultural heritage of Tamil Nadu and southern India.</span>
            </div>
        </div>
    </div>

    {/* <div id={TamilCSS.modal} onclick={event=>closeModal(event)}> */}
    <div id={TamilCSS.modal}>
        <div className={TamilCSS.body}></div>
      </div>



    <div className={TamilCSS.product}>
        <h2 className={TamilCSS.head2}>Natyanjali Festival</h2>
        <div className={TamilCSS.image}>
            <img className={TamilCSS.img1} src="https://3.bp.blogspot.com/-ktUrOG_YO5Y/T0trXFPsexI/AAAAAAAAAJk/hAUXOldk0Pc/s1600/16dfr_konark_864021f.jpg" alt=""/>
        </div>
        <div className={TamilCSS.namePrice}>
            <h2 className={TamilCSS.head2}>Town of Chidambaram</h2>
            <span className={TamilCSS.span}>Mid-February to mid-March*</span>
        </div>
    <br/>
        <p className={TamilCSS.para}>The Natyanjali Festival is an annual dance festival held in Chidambaram, Tamil Nadu, dedicated to Lord Nataraja. Classical Indian dance forms, especially Bharatanatyam, are performed in the ancient Nataraja temple. The festival also features music, crafts exhibitions, and local delicacies.</p>
<br/>
        <div className={TamilCSS.stars}>
            <i className={TamilCSS.fasolidfastar}></i>
            <i className={TamilCSS.fasolidfastar}></i>
            <i className={TamilCSS.fasolidfastar}></i>
            <i className={TamilCSS.fasolidfastar}></i>
            <i className={TamilCSS.fasolidfastar}></i>
        </div>
        <div class={TamilCSS.bay}>
            {/* <div class={TamilCSS.infopopup} onclick={event=>popupFunction(event)}> */}
            <div className={TamilCSS.infopopup}>
            <button class={TamilCSS.infobutton}> Read more </button>
            <span class={TamilCSS.popupText}>Natyanjali Festival is an annual dance festival celebrated in the town of Chidambaram in the Indian state of Tamil Nadu. The festival is held in the month of February or March and is dedicated to Lord Nataraja, the cosmic dancer and a form of Lord Shiva. The festival is a celebration of classical Indian dance forms, especially Bharatanatyam, and attracts thousands of dancers, dance enthusiasts, and tourists from all over India and the world. The festival is held in the Nataraja temple, which is one of the most ancient and significant temples in Tamil Nadu.
                
                
                During the festival, dancers from different parts of India and abroad perform classical dances to the accompaniment of traditional music and recitation of hymns. The performances are held in the temple premises, in front of the sanctum sanctorum of Lord Nataraja, and the dancers offer their performances as a tribute to the deity.The highlight of the festival is the group dance performance, known as "Natyanjali," where hundreds of dancers perform together in front of the deity. The dancers wear traditional costumes and jewelry, and their performances are synchronized to create a beautiful visual spectacle.
                
                Apart from the dance performances, the festival also includes a variety of cultural programs, including music concerts, traditional crafts exhibitions, and food stalls offering local delicacies. The Natyanjali Festival is a celebration of the rich cultural heritage of India and is an important event in the cultural calendar of Tamil Nadu.</span>
            </div>
        </div>
    </div>



    <div class={TamilCSS.product}>
        <h2 className={TamilCSS.head2}>Thiruvaiyaru Festival</h2>
        <div class={TamilCSS.image}>
            <img className={TamilCSS.img1} src="https://th-i.thgim.com/public/news/national/tamil-nadu/rwdbem/article26094583.ece/alternates/FREE_1200/26THTHYAGA" alt=""/>
        </div>
        <div className={TamilCSS.namePrice}>
            <h2 className={TamilCSS.head2}>Town of Thiruvaiyaru</h2>
            <span className={TamilCSS.span}>January*</span>
        </div>
    <br/>
        <p className={TamilCSS.para}>Thiruvaiyaru Festival is an annual music festival in Tamil Nadu, dedicated to Saint Thyagaraja and a celebration of Carnatic music. Held in January at the Thyagaraja Temple, it features music concerts, competitions, and cultural programs.</p>
<br/>
        <div className={TamilCSS.stars}>
            <i className={TamilCSS.fasolidfastar}></i>
            <i className={TamilCSS.fasolidfastar}></i>
            <i className={TamilCSS.fasolidfastar}></i>
            <i className={TamilCSS.fasolidfastar}></i>
            <i className={TamilCSS.fasolidfastar}></i>
        </div>
        <div className={TamilCSS.bay}>
            {/* <div className={TamilCSS.infopopup} onclick={event=>popupFunction(event)}> */}
            <div className={TamilCSS.infopopup}>
            <button className={TamilCSS.infobutton}> Read more </button>
            <span className={TamilCSS.popupText}>Thiruvaiyaru Festival is an annual music festival held in the town of Thiruvaiyaru in the Indian state of Tamil Nadu. The festival is held in the month of January and is a tribute to the famous saint, poet, and musician, Saint Thyagaraja, who lived in Thiruvaiyaru during the 18th century. The festival is a celebration of Carnatic music, which is a traditional classical music form of South India. The festival attracts thousands of musicians and music lovers from all over India and the world. During the festival, musicians and music students from various parts of the country come to Thiruvaiyaru to perform and pay homage to Saint Thyagaraja.
                
                The festival is held in the Thyagaraja Temple, which is one of the most important shrines dedicated to Saint Thyagaraja. The temple is known for its architectural grandeur and is believed to have been built by the Chola dynasty during the 9th century. The festival includes various cultural events such as music concerts, dance performances, and lectures on music. The highlight of the festival is the grand music concerts held in the temple premises, where renowned Carnatic musicians from all over India perform classical music. The festival also includes competitions for young musicians and music students. Apart from the music concerts, the festival also includes a variety of cultural programs, including traditional crafts exhibitions, food stalls offering local delicacies, and a range of other cultural activities. The Thiruvaiyaru Festival is a celebration of the rich cultural heritage of India and is an important event in the cultural calendar of Tamil Nadu.</span>
            </div>
        </div>
    </div>



    <div className={TamilCSS.product}>
        <h2 className={TamilCSS.head2}>Thaipusam Festival</h2>
        <div className={TamilCSS.image}>
            <img className={TamilCSS.img1} src="https://ychef.files.bbci.co.uk/live/624x351/p014mrxy.jpg" alt=""/>
        </div>
        <div className={TamilCSS.namePrice}>
            <h2 className={TamilCSS.head2}>Palani, Tiruchendur, and Batu Caves</h2>
            <span className={TamilCSS.span}>January*</span>
        </div>
    <br/>
        <p className={TamilCSS.para}>Thaipusam is an annual Hindu festival celebrated in honor of Lord Murugan. Tamil-speaking communities carry kavadis, pierce their skin, and perform rituals to seek the deity's blessings.</p>
<br/>
        <div className={TamilCSS.stars}>
            <i className={TamilCSS.fasolidfastar}></i>
            <i className={TamilCSS.fasolidfastar}></i>
            <i className={TamilCSS.fasolidfastar}></i>
            <i className={TamilCSS.fasolidfastar}></i>
            <i className={TamilCSS.fasolidfastar}></i>
        </div>
        <div className={TamilCSS.bay}>
            {/* <div className={TamilCSS.infopopup} onclick={event=>popupFunction(event)}> */}
            <div className={TamilCSS.infopopup}>
            <button className={TamilCSS.infobutton}> Read more </button>
            <span className={TamilCSS.popupText}>Thaipusam is an annual Hindu festival that is celebrated in the Tamil month of Thai, in honor of Lord Murugan, the Hindu god of war and victory. The festival is mainly celebrated by Tamil-speaking communities in India, Sri Lanka, Singapore, Malaysia, and other parts of the world. The festival is characterized by elaborate processions, colorful decorations, and various rituals. It usually starts with devotees taking a vow to Lord Murugan and observing a period of fasting and penance. On the day of the festival, devotees gather at temples and start a procession carrying kavadis, which are decorative wooden or metal structures, often decorated with flowers, peacock feathers, and other ornate items.
                
                The kavadis are carried by devotees on their shoulders, and they often have hooks and spikes piercing their skin, tongue, or cheeks. This is done as an act of penance or devotion to Lord Murugan, and it is believed that the act of piercing the skin will help to cleanse the body and mind.The procession usually culminates in the temple, where the devotees offer their kavadis and perform various rituals such as abhishekam (anointing the deity with holy water), archana (offering prayers), and offering of flowers and fruits. The festival is also marked by the playing of traditional music, chanting of hymns, and the distribution of food and sweets to devotees.
                
                Thaipusam is a significant festival for the Tamil community, and it is a time for devotion, purification, and seeking the blessings of Lord Murugan. The festival is also a time for unity, as people of different castes, classes, and backgrounds come together to celebrate and participate in the rituals.
                </span>
            </div>
        </div>
    </div>
</div>
<br/><br/><br/><br/><br/><br/><br/>
<h3 className={TamilCSS.head3}>* The dates are subject to change depending upon the local calendars and auspicious timings.</h3>

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