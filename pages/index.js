import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
    return (
      <div>
        <title>GNR</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Lato" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
        <style dangerouslySetInnerHTML={{__html: "\nbody {font-family: \"Lato\", sans-serif}\n.mySlides {display: none}\n" }} />
        {/* Navbar */}
        <div className="w3-top">
          <div className="w3-bar w3-black w3-card">
            <a className="w3-bar-item w3-button w3-padding-large w3-hide-medium w3-hide-large w3-right" href="javascript:void(0)" onclick="myFunction()" title="Toggle Navigation Menu"><i className="fa fa-bars" /></a>
            <a href="#" className="w3-bar-item w3-button w3-padding-large">HOME</a>
            <a href="#tour" className="w3-bar-item w3-button w3-padding-large w3-hide-small">TOUR</a>
            <a href="#contact" className="w3-bar-item w3-button w3-padding-large w3-hide-small">SORTEIO</a>
          </div>
        </div>
        <a href="javascript:void(0)" className="w3-padding-large w3-hover-red w3-hide-small w3-right"><i className="fa fa-search" /></a>
        {/* Navbar on small screens (remove the onclick attribute if you want the navbar to always show on top of the content when clicking on the links) */}
        <div id="navDemo" className="w3-bar-block w3-black w3-hide w3-hide-large w3-hide-medium w3-top" style={{marginTop: '46px'}}>
          <a href="#tour" className="w3-bar-item w3-button w3-padding-large" onclick="myFunction()">TOUR</a>
          <a href="#contact" className="w3-bar-item w3-button w3-padding-large" onclick="myFunction()">CONTATO</a>
        </div>
        {/* Page content */}
        <div className="w3-content" style={{maxWidth: '2000px', marginTop: '46px'}}>
          {/* Automatic Slideshow Images */}
          <div className="mySlides w3-display-container w3-center">
            <img src="/download.jpg" style={{width: '100%'}} />
          </div>
          <div className="mySlides w3-display-container w3-center">
            <img src="/gnr.jpg" style={{width: '100%'}} />
          </div>
          {/* The Band Section */}
          <div className="w3-container w3-content w3-center w3-padding-64" style={{maxWidth: '800px'}} id="band">
            <h2 className="w3-wide">Guns n'Roses </h2>
            <p className="w3-opacity"><i>Quem São</i></p>
            <p className="w3-justify">Guns N' Roses, banda americana que revigorou o heavy metal do final dos anos 1980 com sua energia bruta. Os membros principais eram Axl Rose (nome original William Bailey; nascido em 6 de fevereiro de 1962, Lafayette, Indiana, EUA), Slash (nome original Saul Hudson; nascido em 23 de julho de 1965, Stoke-on-Trent, Staffordshire, Inglaterra) , Duff McKagan (nome original Michael McKagan; nascido em 5 de fevereiro de 1964, Seattle, Washington, EUA), Izzy Stradlin (nome original Jeff Isbell; nascido em 8 de abril de 1962, Lafayette, Indiana), Steve Adler (nascido em 22 de janeiro , 1965, Cleveland, Ohio, EUA), Matt Sorum (nascido em 19 de novembro de 1960, Long Beach, Califórnia, EUA), Dizzy Reed (nome original Darren Reed; nascido em 18 de junho de 1963, Hinsdale, Illinois, EUA), e Gilby Clarke (nascido em 17 de agosto de 1962, Cleveland, Ohio).
              O Guns N' Roses foi formado em Los Angeles em 1985 por Rose e Stradlin. Após mudanças no pessoal, a formação da banda se estabilizou com Rose como vocalista, McKagan no baixo, Adler na bateria e Slash e Stradlin na guitarra. Assinando com a Geffen Records, eles lançaram o extended play Live ?!*@ Like a Suicide em 1986, seguido pelo álbum Appetite for Destruction em 1987. o álbum um grande sucesso, com vendas de mais de 17 milhões.</p>
            <div className="w3-row w3-padding-32">
              <div className="w3-third">
                <p>Axel</p>
                <img src="/axel.jpg" className="w3-round w3-margin-bottom" alt="Random Name" style={{width: '60%'}} />
              </div>
              <div className="w3-third">
                <p>slash</p>
                <img src="/slash.jpg" className="w3-round w3-margin-bottom" alt="Random Name" style={{width: '60%'}} />
              </div>
            </div>
          </div>
          {/* The Tour Section */}
          <div className="w3-black" id="tour">
            <div className="w3-container w3-content w3-padding-64" style={{maxWidth: '800px'}}>
              <h2 className="w3-wide w3-center">TOUR DATES</h2>
              <p className="w3-opacity w3-center"><i>COMPRE SEUS INGRESSOS</i></p><br />
              <ul className="w3-ul w3-border w3-white w3-text-grey">
                <li className="w3-padding">SETEMBRO <span className="w3-tag w3-red w3-margin-left">Esgotado</span></li>
                <li className="w3-padding">OUTUBRO <span className="w3-tag w3-red w3-margin-left">Esgotado</span></li>
                <li className="w3-padding">NOVEMBRO <span className="w3-badge w3-right w3-margin-right">3</span></li>
              </ul>
              <div className="w3-row-padding w3-padding-32" style={{margin: '0 -16px'}}>
                <div className="w3-third w3-margin-bottom">
                  <div className="w3-container w3-white">
                    <p><b>Chile</b></p>
                    <p className="w3-opacity">27 set 2022</p>
                    <button className="w3-button w3-black w3-margin-bottom" onclick="document.getElementById('ticketModal').style.display='block'">COMPRE INGRESSOS</button>
                  </div>
                </div>
                <div className="w3-third w3-margin-bottom">
                  <div className="w3-container w3-white">
                    <p><b>Brasil</b></p>
                    <p className="w3-opacity">28 out 2022</p>
                    <button className="w3-button w3-black w3-margin-bottom" onclick="document.getElementById('ticketModal').style.display='block'">COMPRE INGRESSOS</button>
                  </div>
                </div>
                <div className="w3-third w3-margin-bottom">
                  <div className="w3-container w3-white">
                    <p><b>Argentina</b></p>
                    <p className="w3-opacity">29 Nov 2022</p>
                    <button className="w3-button w3-black w3-margin-bottom" onclick="document.getElementById('ticketModal').style.display='block'">	COMPRE INGRESSOS</button>
                  </div>S
                </div>
              </div>
            </div>
          </div>
          {/* Ticket Modal */}
          <div id="ticketModal" className="w3-modal">
            <div className="w3-modal-content w3-animate-top w3-card-4">
              <header className="w3-container w3-teal w3-center w3-padding-32"> 
                <span onclick="document.getElementById('ticketModal').style.display='none'" className="w3-button w3-teal w3-xlarge w3-display-topright">×</span>
                <h2 className="w3-wide"><i className="fa fa-suitcase w3-margin-right" />Ingressos</h2>
              </header>
              <div className="w3-container">
                <p><label><i className="fa fa-shopping-cart" /> Ingresso, R$500 por pessoa</label></p>
                <input className="w3-input w3-border" type="text" placeholder="Nome" />
                <p><label><i className="fa fa-user" />ENVIAR</label></p>
                <input className="w3-input w3-border" type="text" placeholder="Email" />
                <button className="w3-button w3-block w3-teal w3-padding-16 w3-section w3-right">PAGUE <i className="fa fa-check" /></button>
                <button className="w3-button w3-red w3-section" onclick="document.getElementById('ticketModal').style.display='none'">Fechar <i className="fa fa-remove" /></button>
                <p className="w3-right">Precisa de  <a href="#" className="w3-text-blue">ajuda?</a></p>
              </div>
            </div>
          </div>
          {/* The Contact Section */}
          <div className="w3-container w3-content w3-padding-64" style={{maxWidth: '800px'}} id="contact">
            <h2 className="w3-wide w3-center">PREENCHA SEUS DADOS</h2>
            <p className="w3-opacity w3-center"><i>Fã? deixe uma mensagem</i></p>
            <div className="w3-row w3-padding-32">
              <div className="w3-col m6 w3-large w3-margin-bottom">
              </div>
              <div className="w3-col m6">
                <form action="/action_page.php" target="_blank">
                  <div className="w3-row-padding" style={{margin: '0 -16px 8px -16px'}}>
                    <div className="w3-half">
                      <input className="w3-input w3-border" type="text" placeholder="Nome" required name="Nome" />
                    </div>
                    <div className="w3-half">
                      <input className="w3-input w3-border" type="text" placeholder="Email" required name="Email" />
                    </div>
                  </div>
                  <input className="w3-input w3-border" type="text" placeholder="Message" required name="Message" />
                  <button className="w3-button w3-black w3-section w3-right" type="submit">MANDAR</button>
                </form>
              </div>
            </div>
          </div>
          {/* End Page Content */}
        </div>
        {/* Image of location/map */}
        <img src="/w3images/map.jpg" className="w3-image w3-greyscale-min" style={{width: '100%'}} />
        {/* Footer */}
        <footer className="w3-container w3-padding-64 w3-center w3-opacity w3-light-grey w3-xlarge">
          <i className="fa fa-facebook-official w3-hover-opacity" />
          <i className="fa fa-instagram w3-hover-opacity" />
          <i className="fa fa-snapchat w3-hover-opacity" />
          <i className="fa fa-pinterest-p w3-hover-opacity" />
          <i className="fa fa-twitter w3-hover-opacity" />
          <i className="fa fa-linkedin w3-hover-opacity" />
          <p className="w3-medium">Feito por <a href="https://www.w3schools.com/w3css/default.asp" target="_blank">David e Ryan</a></p>
        </footer>
      </div>
    );
 }