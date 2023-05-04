import React,{useEffect,useState} from 'react'
// import '../../App.css' 
import { useNavigate,Link } from 'react-router-dom'
import KeralaCSS from './Festivals.module.css'

import { Navbar } from './components/Navbar'
export function Kerala()
{

    const $ = document.querySelector.bind(document);
const mdl = $('#modal');


    const popupFunction=(event)=>{
        const targ = event.target;
        const prnt = targ.closest('div.popup');
        const chldn = prnt.childNodes;
        const txt = [...chldn].filter((d) => d.className == 'popupText');
        const msg = txt[0].innerText;
        $('#modal .body').innerText = msg;
        $('#modal').classList.add('modalHasContent')
    }

      const closeModal=(e)=>{
        e.target.classList.remove('modalHasContent');
      }
    return(
        <>
        <head>
            <title>timeline</title>
        </head>

    <body className={KeralaCSS.klbg}>

        <div className={KeralaCSS.header}>
        <br/><br/><br/><br/>
            <h1 className={KeralaCSS.header1}>KERALA</h1>
        </div>

    <div className={KeralaCSS.products}>
        <div className={KeralaCSS.product}>
            <h2 className={KeralaCSS.head2}>Cochin Carnival</h2>
            <div className={KeralaCSS.image}>
                <img className={KeralaCSS.img1} src="https://yesicannes.com/wp-content/uploads/2014/03/nice-carnival-2014-finale-feat.jpg" alt=""/>
            </div>
            <div className={KeralaCSS.namePrice}>
                <h2 className={KeralaCSS.head2}>Fort Kochi, Ernakulam</h2>
                <span className={KeralaCSS.span}>December 31</span>
            </div>
        <br/>
            <p className={KeralaCSS.para}>Cochin Carnival, the visual extravaganza that is celebrated in the last two weeks of December, is a peek into the glorious hybrid history of Fort Kochi.</p>
        <br/>
            <div className={KeralaCSS.stars}>
                <i className={KeralaCSS.fasolidfastar}></i>
                <i className={KeralaCSS.fasolidfastar}></i>
                <i className={KeralaCSS.fasolidfastar}></i>
                <i className={KeralaCSS.fasolidfastar}></i>
                <i className={KeralaCSS.fasolidfastar}></i>
            </div>
            <div className={KeralaCSS.bay}>
                {/* <div className={KeralaCSS.infopopup} onclick={popupFunction(event)}> */}
                <div className={KeralaCSS.infopopup} onClick={event=>{popupFunction(event)}}>
                <button className={KeralaCSS.infobutton}> Read more </button>
                <span className={KeralaCSS.popupText}>Fork Kochi welcomes every New Year in the most grandiose way possible with much fervour and panache. Cochin Carnival, the visual extravaganza that is celebrated in the last two weeks of December, is a peek into the glorious hybrid history of Fort Kochi. Organised by the District Tourism Promotion Council (DTPC), Ernakulam, the fiesta showcases flea markets, cultural shows, food fests, bike and cycle races, rallies, beach football, arts and games. The carnival is a time of joy and revelry for locals and visitors alike. It is an opportunity to experience the vibrant culture and hospitality of Kochi, as well as to ring in the New Year with friends and family. The Cochin Carnival is a unique celebration that has become an integral part of the city's cultural fabric, and it continues to draw crowds from around the world every year.

                    The festival is marked by the burning of a giant ‘Pappanji’, the model of an old man with a suit and a beard, at zero hour on the 31st of December, bidding adieu to the past year.</span>
                </div>
            </div>
        </div>

        <div id={KeralaCSS.modal} onclick={event=>{closeModal(event)}}>
        {/* <div id={KeralaCSS.modal}> */}
            <div className={KeralaCSS.body}></div>
        </div>



        <div className={KeralaCSS.product}>
            <h2 className={KeralaCSS.head2}>Nenmara Vallangi Vela</h2>
            <div className={KeralaCSS.image}>
                <img className={KeralaCSS.img1} src="https://www.keralatourism.org/images/festivals/large/20170227135547_248_1.jpg" alt=""/>
            </div>
            <div className={KeralaCSS.namePrice}>
                <h2 className={KeralaCSS.head2}>Nellikulangara Bhagavathy Temple, Palakkad</h2>
                <span className={KeralaCSS.span}>February or March*</span>
            </div>
        <br/>
            <p className={KeralaCSS.para}>Nenmara Vallangi Vela is a grand festival celebrated annually in the Nellikulangara Bhagavathy Temple in Kerala. The festival features a friendly competition between two villages, traditional art forms and a procession of caparisoned elephants.</p>
        <br/>
            <div className={KeralaCSS.stars}>
                <i className={KeralaCSS.fasolidfastar}></i>
                <i className={KeralaCSS.fasolidfastar}></i>
                <i className={KeralaCSS.fasolidfastar}></i>
                <i className={KeralaCSS.fasolidfastar}></i>
                <i className={KeralaCSS.fasolidfastar}></i>
            </div>
            <div className={KeralaCSS.bay}>
            <div className={KeralaCSS.infopopup} onClick={event=>{popupFunction(event)}}>
                {/* <div className={KeralaCSS.infopopup}> */}
                <button className={KeralaCSS.infobutton}> Read more </button>
                <span className={KeralaCSS.popupText}>A festival celebrated annually in the Nellikulangara Bhagavathy Temple in Palakkad, Nenmara Vallangi Vela is among the most beautiful celebrations held on these shores. The vivid colours, lights, fireworks and art forms on display make for an entertaining and unforgettable experience. The Vela festival of Nenmara and Vallangi villages of Chittur taluk, situated on the lap of the hills surrounding the Nelliyampathy forest, is famous for its grandeur and rituals. The friendly competition between the villages to outdo each other spices up the entire festival and many a unique sight are on display during this time. The Vela is celebrated after the paddy harvest. The festival is believed to be the birthday of the presiding deity of Nellikulangara Bhagavathy and falls on the 20th day of the Malayalam month of Meenam. The two competing villages, the Nenmara and the Vallangi, have their own temples but converge at the common Nellikulangara Bhagavathy Temple for the Vela.
                    
                    One gets to witness some wonderful art forms like Kummatti, Karivela and Andivela during this time period. The 20th day sees magnificent processions with caparisoned elephants being taken out from the two villages to the Nellikulangara Temple. Once they reach the temple, the two sides perform the panchavadyam (traditional Kerala orchestra). Villagers from both sides stand facing each other beneath the utsavapandal (festival stage) and enthusiastically perform several traditional percussion ensembles in a bid to outshine each other. People are also enamoured by the beautifully decorated aanapandal which are used to house the elephants.</span>
                </div>
            </div>
        </div>



        <div className={KeralaCSS.product}>
            <h2 className={KeralaCSS.head2}>Pulikalii</h2>
            <div className={KeralaCSS.image}>
                <img className={KeralaCSS.img1} src="https://irisholidays.com/keralatourism/wp-content/uploads/2015/08/pulikali.gif" alt=""/>
            </div>
            <div className={KeralaCSS.namePrice}>
                <h2 className={KeralaCSS.head2}>Swaraj Round, Thrissur</h2>
                <span className={KeralaCSS.span}>September 1</span>
            </div>
        <br/>
            <p className={KeralaCSS.para}>Pulikali is a tiger dance performed on the fourth day of Onam festival in Kerala. Performers paint themselves like tigers and wear elaborate costumes, imitating tiger movements to traditional music.</p>
        <br/>
            <div className={KeralaCSS.stars}>
                <i className={KeralaCSS.fasolidfastar}></i>
                <i className={KeralaCSS.fasolidfastar}></i>
                <i className={KeralaCSS.fasolidfastar}></i>
                <i className={KeralaCSS.fasolidfastar}></i>
                <i className={KeralaCSS.fasolidfastar}></i>
            </div>
            <div className={KeralaCSS.bay}>
            <div className={KeralaCSS.infopopup} onClick={event=>{popupFunction(event)}}>
                {/* <div className={KeralaCSS.infopopup}> */}
                <button className={KeralaCSS.infobutton}> Read more </button>
                <span className={KeralaCSS.popupText}>Pulikali (Tiger Dance) is one among the folk art forms of Kerala. On the fourth day of Onam festival, artists paint their bodies like tigers with stripes of yellow, red and black and dance to the rhythm of traditional percussion instruments such as thakil, udukku and chenda. The Swaraj Ground in Thrissur district plays host to this carnival that has people appearing in various unique hues and masks, with the locals and visitors alike joining in on the revelry.
                    
                    The main theme of this folk art is tiger hunting with participants playing the role of tiger and hunter. The make-up for the same is applied using oil paints and is said to be extremely hard to remove. Regardless, every year during Onam, the streets of Thrissur attract people from across the State and the world to view this special event. The name Pulikali comes from the words "puli," meaning tiger, and "kali," meaning play or performance. The performers, usually men, dress up as tigers, with painted faces and bodies, and wear elaborate costumes that resemble the stripes and colors of a tiger. During the performance, the dancers imitate the movements of tigers, jumping and prowling to the sound of the drums. The performance is accompanied by traditional music and is often performed during Onam, the annual harvest festival of Kerala.
                    
                    The origins of Pulikali can be traced back to the 18th century, and the art form has since become an important part of Kerala's cultural heritage. The performance is a unique and vibrant celebration of the region's rich cultural traditions and is popular among tourists and locals alike. Pulikali is not only a form of entertainment, but also has cultural significance, as it is believed to bring good luck and prosperity. The festival also serves as a platform for social commentary, as the dancers often incorporate current events and social issues into their performances.</span>
                </div>
            </div>
        </div>



        <div className={KeralaCSS.product}>
            <h2 className={KeralaCSS.head2}>Aranmula Uthrathi</h2>
            <div className={KeralaCSS.image}>
                <img className={KeralaCSS.img1} src="https://upload.wikimedia.org/wikipedia/commons/4/4f/Kerala_boatrace.jpg" alt=""/>
            </div>
            <div className={KeralaCSS.namePrice}>
                <h2 className={KeralaCSS.head2}>Aranmula, Pathanamthitta</h2>
                <span className={KeralaCSS.span}>August/September*</span>
            </div>
        <br/>
            <p className={KeralaCSS.para}>Aranmula Uthrathi is a festival celebrated in Kerala, India, which includes the Aranmula Boat Race. The boats used in the race are made of wood and powered by rowers who sing traditional songs. The festival also features cultural events, music, and dance performances.</p>
        <br/>
            <div className={KeralaCSS.stars}>
                <i className={KeralaCSS.fasolidfastar}></i>
                <i className={KeralaCSS.fasolidfastar}></i>
                <i className={KeralaCSS.fasolidfastar}></i>
                <i className={KeralaCSS.fasolidfastar}></i>
                <i className={KeralaCSS.fasolidfastar}></i>
            </div>
            <div className={KeralaCSS.bay}>
            <div className={KeralaCSS.infopopup} onClick={event=>{popupFunction(event)}}>
                {/* <div className={KeralaCSS.infopopup}> */}
                <button className={KeralaCSS.infobutton}> Read more </button>
                <span className={KeralaCSS.popupText}>Aranmula Uthrathi is an annual festival celebrated in the Aranmula Parthasarathy Temple, located in the Pathanamthitta district of Kerala, India. The festival is held on the Uthrathi day, which falls in the Malayalam month of Chingam (August/September) and is an important event in the cultural calendar of Kerala. The festival is a celebration of the installation of the idol of Lord Parthasarathy in the temple. The highlight of the festival is the Aranmula Boat Race, which takes place on the Pamba River. The boat race is known as the "Aranmula Vallamkali" and is a spectacular event that attracts thousands of spectators from around the world. The boat race is unique in that the boats used in the race are made of wood, without the use of nails or screws. They are decorated with colorful umbrellas and are powered by rowers who sing traditional songs and chants to the rhythm of the oars.The Aranmula Boat Race is not just a competition, but also a religious and cultural event. It is believed that the boat race is a tribute to Lord Krishna, who is said to have traveled in a boat similar to those used in the race.
                    
                    Apart from the boat race, the festival also includes traditional music and dance performances, processions, and a variety of cultural events. The Aranmula Uthrathi is a symbol of Kerala's rich cultural heritage and is an important event in the state's cultural calendar.</span>
                </div>
            </div>
        </div>



        <div className={KeralaCSS.product}>
            <h2 className={KeralaCSS.head2}>Thrissur poooram</h2>
            <div className={KeralaCSS.image}>
                <img className={KeralaCSS.img1} src="https://upload.wikimedia.org/wikipedia/commons/9/9b/Kudamatom_at_thrissur_pooram_2013_7618.JPG" alt=""/>
            </div>
            <div className={KeralaCSS.namePrice}>
                <h2 className={KeralaCSS.head2}>Vadakkunnathan Temple, Thekkinkadu Maidanam, Thrissur</h2>
                <span className={KeralaCSS.span}>April/May*</span>
            </div>
        <br/>
            <p className={KeralaCSS.para}>Thrissur Pooram is a festival held in the city of Thrissur, Kerala, featuring a grand procession of decorated elephants, traditional music and dance performances, fireworks, and food and craft stalls. It is a celebration of the collective spirit of the people and is a major tourist attraction.</p>
        <br/>
            <div className={KeralaCSS.stars}>
                <i className={KeralaCSS.fasolidfastar}></i>
                <i className={KeralaCSS.fasolidfastar}></i>
                <i className={KeralaCSS.fasolidfastar}></i>
                <i className={KeralaCSS.fasolidfastar}></i>
                <i className={KeralaCSS.fasolidfastar}></i>
            </div>
            <div className={KeralaCSS.bay}>
            <div className={KeralaCSS.infopopup} onClick={event=>{popupFunction(event)}}>
                {/* <div className={KeralaCSS.infopopup}> */}
                <button className={KeralaCSS.infobutton}> Read more </button>
                <span className={KeralaCSS.popupText}>Thrissur Pooram is an annual festival celebrated in the city of Thrissur, located in the central part of Kerala, India. The festival is held in the Malayalam month of Medam and is one of the most famous and spectacular cultural festivals of Kerala.The highlight of the festival is a grand procession of beautifully decorated elephants, accompanied by traditional percussion instruments such as chenda, ilathalam, and kuzhal. The procession starts from the Vadakkunnathan Temple, and goes through the streets of Thrissur, ending at the Thekkinkadu Maidanam.
                    
                    The festival is a celebration of the collective spirit of the people of Thrissur, and it is organized by the various Hindu temples in the city. The major participants in the festival are two neighboring temples, the Paramekkavu Bhagavathy Temple and the Thiruvambady Sri Krishna Temple, who compete with each other in terms of the number and decoration of the elephants in their procession.
                    
                    Apart from the elephant procession, the festival also includes other cultural events such as traditional music and dance performances, fireworks display, and a variety of food and craft stalls. The Thrissur Pooram is a colorful and vibrant celebration of Kerala's rich cultural heritage, and is a major tourist attraction, drawing thousands of visitors every year.</span>
                </div>
            </div>
        </div>
    </div>
    <br/><br/><br/><br/><br/><br/><br/>
    <h3 className={KeralaCSS.head3}>* The dates are subject to change depending upon the local calendars and auspicious timings.</h3>



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