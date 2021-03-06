import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./HomePage.css";
import TheNavigationBar from "../Components/TheNavigationBar";
import herosectionimg from "../Resources/Images/herosection.png";

import last from "../Resources/Images/last.svg";
import menu from "../Resources/Images/menu.png";
import reservation from "../Resources/Images/reservation.png";

import cabir_sm_logo from "../Resources/Images/cabir_sm_logo.svg";
import MarhabArrawo from "../Resources/Images/marhaba_arrow.svg";

import ltus_spa from "../Resources/Images/ltus_spa.svg";

import odlar_bedroom from "../Resources/Images/oldar_bedroom.png";
import eating_women from "../Resources/Images/eating_women.png";

import star from "../Resources/Images/star.svg";

import Left_arrow from "../Resources/Images/Left_arrow.png";
import right_arrow from "../Resources/Images/Right_arrow.svg";

import walking_men from "../Resources/Images/walking_men.png";
import insta from "../Resources/Images/insta.svg";

import ice from "../Resources/Images/ice.png";
import alma_bed from "../Resources/Images/alma_bed.png";
import alma_light from "../Resources/Images/alma_light.png";

import alma_brown from "../Resources/Images/alma_brown.png";

import footer from "../Resources/Images/Footer.svg";
import footer_icon from "../Resources/Images/Footer_icon.png";
import footer__ from "../Resources/Images/FooterI.png";
import alma_house from "../Resources/Images/alma_house.png";
import alma_green from "../Resources/Images/alma_green.png";
import alma_chair from "../Resources/Images/alma_chair.png";
import alma_beach from "../Resources/Images/alma-beach.png";

import co_house from "../Resources/Images/co_house.png";
import co_flower from "../Resources/Images/co_flower.png";
import co_room from "../Resources/Images/co_room.png";
import co_door from "../Resources/Images/co_door.png";

import call___ from "../Resources/Images/call___.svg";
import call from "../Resources/Images/call.svg";

import icons from "../Resources/Images/icons.png";
import vertical_bar from "../Resources/Images/vertical_bar.png";

import Vertical_long_bar from "../Resources/Images/Vertical_long_bar.png";

import extra_long from "../Resources/Images/extra_long.png";
import Horizontal_Line from "../Resources/Images/Horizontal_Line.svg";
import V from "../Resources/Images/V.png";

import Zoom from "react-reveal/Zoom";
import Fade from "react-reveal/Fade";

import Spin from "react-reveal/Spin";

import Flash from "react-reveal/Flash";
import Slide from "react-reveal/Slide";
import LightSpeed from "react-reveal/LightSpeed";

import Reveal from "react-reveal/Reveal";
import Wobble from "react-reveal/Wobble";
function HomePage() {
  return (
    <Container fluid className="px-0" style={{ overflow: "hidden" }}>
      <Row className="px-0 mx-0">
        <Col className="px-0 mx-0">
          <div className="homepage-wrapper">
            <div className="hero_section_wrapper">
              <Row className="px-0">
                <Col className="px-0 d-flex justify-content-center">
                  <div className="d-flex justify-content-center  text-center herosection col-lg-7 herosectionmargin">
                    <p>
                      ????k ve G??zlerden Uzak <br /> Ailenizle Konforlu ve
                      Kaliteli Tatil Deneyimine Haz??r Olun
                    </p>
                  </div>
                </Col>
              </Row>
              <Row className="px-0">
                <Col className="px-0 d-flex justify-content-center">
                  <div className="d-flex justify-content-center  text-center herosection col-lg-7 ">
                    <img src={herosectionimg} alt="..." />
                  </div>
                </Col>
              </Row>
              <Row className="px-0">
                <Col className="px-0 d-flex justify-content-center">
                  <div className="d-flex justify-content-center  text-center herosection col-lg-7 ">
                    <p>Sapanca'da Yepyeni Bir Spa Oteli </p>
                  </div>
                </Col>
              </Row>
              <div className="hero_btn_wrapper">
                <LightSpeed>
                  <button id="hero-reserve-bt">
                    REZERVASYON
                    <img src={reservation} alt="..." />
                  </button>
                  <button id="hero-menu-btn">
                    MENU
                    <img src={menu} alt="..." />
                  </button>
                </LightSpeed>
              </div>
            </div>
            <div className="home_vertical_bar">
              <Flash>
                <img src={vertical_bar} alt="..." />
              </Flash>
            </div>
          </div>
        </Col>
      </Row>
      <Row>
        <Col style={{ width: "100%" }}>
          <div className="merhaba_top_section_wrapper">
            <div className="merhaba_top_section"></div>
            <div className="merhaba_section_logo">
              <img src={cabir_sm_logo} alt="..." />
            </div>
            <Row>
              <Col
                lg={7}
                className="d-flex justify-content-center"
                style={{ paddingBottom: "100px" }}
              >
                <Col lg={7}>
                  <div>
                    <p id="merhaba_section_Spa">
                      Sapanca'da Yepyeni Bir Spa Oteli
                    </p>
                    <p id="merhaba_section_Cabir">
                      Cabir Deluxe Hotel Sapanca???n??n 5 Y??ld??zl?? Yeni Oteli
                      Konfor Anlay??????n??z?? De??i??tirecek
                    </p>
                    <p id="merhaba_section_sanati">
                      Misafirperverli??in Antik Sanat??.
                    </p>
                    <p id="merhaba_section_sihri">
                      Cazibeyi ya??ay??n, sihri ve tarihi soluyun. Hayal kurmak.
                      Sorrento tarihinin ve k??lt??r??n??n en zengin yerlerinden
                      biri olan Lorelei Londres'teki konaklaman??zda size e??lik
                      edecek duygulardan baz??lar?? bunlar olacak.
                    </p>
                    <img id="marhaba_img" src={MarhabArrawo} alt="..." />
                  </div>

                  <div className="Marhaba_heading"></div>
                </Col>

                <div className="Marhaba_heading_wrapper">
                  <Fade top>
                    <h4>Merhaba</h4>
                  </Fade>
                </div>
              </Col>
              <Col lg={5}>
                <div className="marhaba_bg"></div>
              </Col>
            </Row>{" "}
            <div className="Vertical_long_bar">
              <Fade top>
                <img src={Vertical_long_bar} alt="..." />
              </Fade>
            </div>
          </div>
        </Col>
      </Row>
      <Row className="spa_wraper">
        <div className="spa_text_top">
          <Spin>
            <h4>Spa</h4>
          </Spin>
        </div>
        <Col lg={6} className="px-0">
          <div className="spa_bg"></div>
        </Col>
        <Col lg={6} className="px-0">
          <div className="spa_text_wrapper">
            <div>
              <p id="spa_Lotus">Lotus Spa ile yenilenin</p>
            </div>
            <div className="col-lg-9">
              <p id="spa_Cazibeyi">
                Cazibeyi ya??ay??n, sihri ve tarihi soluyun. Hayal kurmak.
                Sorrento tarihinin ve k??lt??r??n??n en zengin yerlerinden biri olan
                Lorelei Londres'teki konaklaman??zda size e??lik edecek
                duygulardan baz??lar?? bunlar olacak.
              </p>
            </div>
            <div>
              <img src={ltus_spa} alt="..." />
            </div>
            <div
              className="d-flex justify-content-end"
              style={{ marginTop: "11px" }}
            >
              <Wobble>
                <button id="spa_REZERVASYON">REZERVASYON</button>
                <button id="spa_G??R">DETALARI G??R</button>
              </Wobble>
            </div>
            <div className="Vertical_long_second">
              <Fade top>
                {" "}
                <img src={Vertical_long_bar} alt="..." />
              </Fade>
            </div>
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <div className="Odalar_main_wrapper">
            <Zoom>
              {" "}
              <h5>Odalar&Suitler</h5>
            </Zoom>
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <div className="Odalar_konforlu">
            <h6>Ailenizle konforlu ve kaliteli tatil deneyimine haz??r olun.</h6>
          </div>
        </Col>
      </Row>
      <Row>
        <Col
          lg={6}
          className="px-0"
          style={{ display: "block", margin: "auto" }}
        >
          {" "}
          <Zoom left>
            <Col
              lg={12}
              className=" odlar_div_wrapper"
              style={{ display: "block", margin: "auto" }}
            >
              <div className="odlar_KE??FED??N">
                <h6>KE??FED??N</h6>
              </div>
              <div className="odlar_Deluxe">
                <h5>Deluxe King Oda</h5>
              </div>
              <div className="odla_Cazibeyi col-lg-9">
                <p>
                  Cazibeyi ya??ay??n, sihri ve tarihi soluyun. Hayal kurmak.
                  Sorrento tarihinin ve k??lt??r??n??n en zengin yerlerinden biri
                  olan Lorelei Londres'teki konaklaman??zda size e??lik edecek
                  duygulardan baz??lar?? bunlar olacak.
                </p>
              </div>
              <div>
                <button id="odla_REZERVASYON">REZERVASYON</button>
                <button id="spa_G??R">DETALARI G??R</button>
              </div>
              <div className="Vertical_long_third">
                <img src={Vertical_long_bar} alt="..." />
              </div>
            </Col>
            <Col
              lg={12}
              className="d-flex justify-content-end"
              style={{ paddingRight: "24px" }}
            >
              <img src={MarhabArrawo} alt="...." />
            </Col>
          </Zoom>
        </Col>

        <Col lg={6} className="px-0">
          <Zoom right>
            <div className="odlar_bg_sction"></div>
          </Zoom>
        </Col>
      </Row>
      <Row>
        <Col
          className="px-0 d-flex justify-content-center odlar_bedromm_img"
          lg={12}
        >
          <Slide right>
            <img src={odlar_bedroom} alt="..." />
          </Slide>{" "}
        </Col>
      </Row>
      <Row>
        <Col>
          <div className="Konaklamalar??">
            <Row>
              <Col className="text-center" lg={12}>
                <div className="Konaklamalar??_text_heading text-center">
                  <h4>???? Konaklamalar?? & Etkinlik Alanlar??</h4>
                </div>

                <div className="Konaklamalar??_text_para ">
                  <p>
                    Etkinlikleriniz burada emin ellerde 440 ki??i kapasiteli yedi
                    toplant?? odas?? ve son teknoloji olanaklar sunarken, ??zel
                    ekip havaalan?? seyahatinden ??zelle??tirilmi?? men??lere ve
                    ??eviriye kadar her ??eyi ayarlayabilir .
                  </p>
                </div>
                <div>
                  <button id="DETALARI_Konaklamalar??">DETALARI G??R</button>
                </div>
              </Col>
            </Row>
            <div className="Vertical_long_four">
              <img src={extra_long} alt="..." />
            </div>
          </div>
        </Col>
      </Row>
      <Row>
        <Col lg={12}>
          <div className="Yemek_wrapper">
            <div className="Yemek_Deneyimi_heading">
              <LightSpeed right>
                <h4>Yemek Deneyimi</h4>
              </LightSpeed>
              <p>Ailenizle konforlu ve kaliteli tatil deneyimine haz??r olun.</p>
            </div>
            <div className="eating_women">
              <img src={eating_women} alt="..." />
            </div>
          </div>
          <div className="Yemek_wrapper_img"></div>
        </Col>
      </Row>
      <Row>
        <Col
          className="px-0"
          lg={6}
          style={{
            marginLeft: "71px",
            marginTop: "18px",
            position: "relative",
          }}
        >
          <div className="Restoran_text">
            <h3>Restoran & ??zel Men??ler</h3>
          </div>
          <div className="Ak??ama_Para col-lg-8">
            <p>
              Ak??ama dalgalar??n ahenkli sesi e??lik ediyor ve G??l?? ayd??nlatan
              par??ldayan ??????klar g??l??n kenar??nda unutulmaz bir romantik ak??am
              yeme??i i??in ortam olu??turuyor
            </p>
          </div>
          <div>
            <button id="Restoran_btn">DETALARI G??R</button>
          </div>
          <div className="Vertical_long_five">
            <img src={Vertical_long_bar} alt="..." />
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <div className="night_room_wrapper text-center ">
            <div>
              <h3 id="Dinlenme_heading">
                {" "}
                <div>
                  <img src={star} />
                </div>
                sKonaklama & Dinlenme
              </h3>
            </div>
            <div
              className="col-lg-6 "
              style={{ display: "block", margin: "auto" }}
            >
              <p id="Dinlenmetext_para">
                Her konaklama sapanca g??l?? dekorunu birle??tiren ayr?? bir l??ks
                duygusuna sahiptir
              </p>
            </div>
            <div className="vertical_bar_six">
              <img src={vertical_bar} alt="...." />
            </div>
          </div>
        </Col>
      </Row>
      <Row style={{ background: "#F0F0F4" }}>
        <Col style={{ position: "relative" }}>
          <div className="Etkinlikler_section col-lg-5">
            <h3>Etkinlikler</h3>
          </div>
          <div className="tkinlikler_section_para col-lg-6">
            <p>Ailenizle konforlu ve kaliteli tatil deneyimine haz??r olun.</p>
          </div>
          <div className="Vertical_long_seven">
            <img src={Vertical_long_bar} alt="..." />
          </div>
        </Col>
      </Row>
      <Row style={{ background: "#F0F0F4", paddingBottom: "53px" }}>
        <Col lg={2}>
          <div className="text-center" style={{ marginTop: "33px" }}>
            <img src={Left_arrow} alt="..." id="Left_arrow__" />
            <img src={right_arrow} alt="..." />
          </div>
        </Col>
        <Col lg={8} className="Treking_heading_wrapper">
          <div
            className="text-center"
            style={{
              marginTop: "33px",
            }}
          >
            <img src={walking_men} alt="..." />
          </div>
          <div className=" col-lg-6">
            <div className="tr_1  col-lg-6">
              <h3>Sapanca Orman??nda Treking</h3>
            </div>
            <div className="tr_2 col-lg-6">
              <Slide left>
                {" "}
                <p>
                  Ak??ama dalgalar??n ahenkli sesi e??lik ediyor ve G??l?? ayd??nlatan
                  par??ldayan ??????klar g??l??n kenar??nda unutulmaz bir romantik
                  ak??am yeme??i i??in ortam olu??turuyor
                </p>
              </Slide>
            </div>
            <div className="tr_3 col-lg-6">
              <button id="DETALAR___G??R">DETALARI G??R</button>
            </div>
          </div>
        </Col>
        <Col
          lg={2}
          className="d-flex justify-content-end"
          style={{ marginTop: "33px" }}
        >
          <div>
            <img src={ice} alt="..." />
          </div>
        </Col>
      </Row>
      <Row>
        <Col lg={6}>
          <div
            className="d-flex justify-content-center col-lg-12"
            style={{
              marginTop: "102px",
              marginBottom: "62px",
              position: "relative",
            }}
          >
            <div>
              <img src={insta} alt=".." />
            </div>
            <div className="Anlar??n??z?? col-lg-7">
              <h3>Anlar??n??z?? payla????n</h3>
              <p>
                Misafirlerimizin otellerimizde m??kemmel g??nlerini nas??l
                tan??mlad??klar??n?? g??r??n ve kendinizinkini payla????n!
              </p>
            </div>
            <div className="Vertical_long_eight">
              <img src={Vertical_long_bar} alt="..." />
            </div>
          </div>
        </Col>
        <Col lg={6}>
          <div
            className="d-flex justify-content-end col-lg-8"
            style={{ marginTop: "102px", marginBottom: "62px" }}
          >
            <div>
              <div className="cabirdeluxe">
                <h3>#cabirdeluxe</h3>
              </div>
              <div className="cabirdeluxe">
                <h3>#cabirdeyenibirg??n</h3>
              </div>
            </div>
          </div>
        </Col>
      </Row>
      <Row style={{ paddingBottom: "100px", paddingLeft: "120px" }}>
        <Col
          lg={7}
          style={{
            position: "relative",
            top: "0",
            left: "0",
          }}
        >
          <div className="text-center">
            <img src={alma_light} alt="..." />
          </div>
          <div className="text-center">
            <button id="B??Z??_alma">B??Z?? TAK??P ED??N</button>
            <button id="B??Z??_alma__">@CAB??RDELUXE</button>
          </div>
          <div className="alma_brown_img">
            <Zoom>
              {" "}
              <img src={alma_brown} alt="..." />
            </Zoom>
          </div>
          <div className="alma_house_img">
            <img src={alma_house} alt="..." />
          </div>
          <div className="alma_green_img">
            <img src={alma_green} alt="..." />
          </div>
          <div className="alma_chair">
            <Zoom>
              <img src={alma_chair} alt="..." />
            </Zoom>
          </div>
        </Col>
        <Col lg={5} style={{ position: "relative", top: "10px", left: "0" }}>
          <div className="alma_bed">
            <img src={alma_bed} alt="...." />
          </div>
          <div className="alma_beach">
            <img src={alma_beach} alt="...." />
          </div>
        </Col>
      </Row>
      <Row>
        <Col className="px-0" lg={12}>
          <div className="reserv_bgg">
            <Col lg={12} style={{ paddingTop: "177px" }}>
              <div>
                <div className="col-lg-12 d-flex justify-content-center Rezervasyon_heading">
                  <h4>Rezervasyon</h4>
                </div>
                <div className="col-lg-12 d-flex justify-content-center  Rezervasyon_heading">
                  <p>??ehir ya??am??na k??sa bir mola verin, yerinizi al??n</p>
                </div>
                <div>
                  <div className="col-lg-12 d-flex justify-content-center  Rezervasyon_heading">
                    <button>REZERVASYON</button>
                  </div>
                  <div className="vertical_bar_nine">
                    <Zoom>
                      <img src={vertical_bar} alt="...." />
                    </Zoom>
                  </div>
                </div>
              </div>
            </Col>
          </div>
        </Col>
      </Row>

      <Row>
        <Col lg={8} style={{ paddingTop: "189px", position: "relative" }}>
          <div className="d-flex">
            <div className="col-lg-7 text-end" style={{ paddingTop: "61px" }}>
              <img src={co_flower} alt=".." />
            </div>
            <div className="col-lg-5 text-end">
              <Zoom>
                {" "}
                <img src={co_house} alt=".." />
              </Zoom>
            </div>
            <div className="Horizontal_Line">
              <img src={Horizontal_Line} alt="..." />
            </div>
          </div>
          <div className="V">
            <img src={V} />
          </div>
          <div className="vet">
            <Reveal effect="fadeInUp">
              <img src={Vertical_long_bar} alt="..." />
            </Reveal>
          </div>
          <div className="Horizl_Line">
            <img src={Horizontal_Line} alt="..." />
          </div>
          <div className="d-flex">
            <div
              className="col-lg-4 text-end"
              style={{ paddingTop: "14px", marginRight: "-40px" }}
            >
              <img src={co_door} alt=".." />
            </div>
            <div
              className="col-lg-8 text-center"
              style={{ paddingTop: "14px", paddingBottom: "190px" }}
            >
              <Reveal effect="fadeInUp">
                <img src={co_room} alt=".." />
              </Reveal>
            </div>
          </div>
        </Col>
        <Col lg={4}>
          <div style={{ paddingTop: "354px" }}>
            <div className="col-lg-12 d-flex last_section_heading">
              <Fade>
                <h4>M????TER?? G??R????LER??</h4>
              </Fade>{" "}
            </div>
            <div className="col-lg-8 d-flex last_section_heading">
              <h5>G??r????leriniz Bizim ????in ??ok ??nemlidir.</h5>
            </div>
            <div className="col-lg-8 d-flex last_section_heading">
              <h6>Rezervasyonunuzu De??erlendirin</h6>
            </div>
            <div className="col-lg-8 d-flex last_section_heading">
              <p>
                ??ncelikle bizi tercih etti??iniz ve vakit ay??r??p hizmetimizi
                de??erlendirdi??iniz i??in ??ok te??ekk??r ederiz. Memnuniyetiniz
                bizler i??in ??ok ??nemlidir. Sizleri en k??sa s??rede tekrar
                a????rlamaktan mutluluk duyaca????z.
              </p>
            </div>
            <div className="col-lg-8 d-flex last_section_heading">
              <button>YORUM YAPIN</button>
            </div>
          </div>
        </Col>
      </Row>
      <Row
        style={{ background: "rgba(189, 154, 95, 0.11)", marginBottom: "44px" }}
      >
        <Col lg={12} className="d-flex">
          <div className="col-lg-10 px-0">
            <div className="d-flex justify-content-between">
              <div className="Yeni_h4 col-lg-7 text-center">
                <h4>Yeni bir seyahat planlamak i??in Rezervasyon Yap??n</h4>
              </div>
              <div>
                <ul className="d-flex justify-content-around call_">
                  <li>
                    <img src={call___} />
                    Rezervasyon
                  </li>
                  <li>
                    <img src={call} />
                    WHATSAPP
                  </li>
                  <li>
                    <img src={call} />
                    444 60 81
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-2 px-0 text-end">
            <button id="last_sec_id">REZERVASYON</button>
          </div>
        </Col>
      </Row>
      <Row>
        <Col lg={3}>
          <div className="text-center">
            <img src={footer} alt="..." />
            <br />
            <div style={{ paddingTop: "20px" }}>
              <img src={last} />
            </div>
          </div>
        </Col>
        <Col lg={9} className="d-flex">
          <div className="col-lg-4 text-center">
            <ul className="Detaylar??_list">
              <li id="??leti??im">??leti??im Detaylar??</li>
              <li>info@cabir.com.tr</li>
              <li> 444 60 81</li>
              <li> Yol Tarifi Al??n</li>
            </ul>
          </div>
          <div className="col-lg-4 text-center">
            <ul className="Detaylar??_list">
              <li id="??leti??im">Faydal?? Linkler</li>
              <li>Anasayfa</li>
              <li> Aktiviteler</li>
              <li> Spa & Wellnes </li>
              <li>Hakk??m??zda </li>
              <li> ??leti??im</li>
              <li>
                <img src={footer_icon} />
                <img src={footer__} />
              </li>
            </ul>
          </div>
          <div className="col-lg-4">
            <ul className="Detaylar??_list">
              <li id="??leti??im">FAdres Yol Tarifi</li>
              <li>Yavuz Selim Mahallesi,</li>
              <li> Ba?? Sokak, No:35. Sapanca / Sakarya</li>
            </ul>
            <ul className="Detaylar??_list">
              <li id="??leti??im">??leti??imde Kal??n</li>
              <li>
                <img src={icons} alt="..." />
              </li>
              <li>#cabirdeluxe #cabirdeyenibirg??n</li>
            </ul>
          </div>
        </Col>
      </Row>
      <Row
        style={{
          height: "59px",
          background: "rgba(243, 243, 243, 0.35)",
          paddingTop: "16px",
        }}
      >
        <Col className="text-center _Fotter_">
          <h4>?? 2021 Cabir Deluxe. All rights reserved</h4>
        </Col>
        <Col className="text-center _Fotter_">
          <h4>Gizlilik Politikas?? / KVKK / Rezervasyon / ??ptal Ko??ullar??</h4>
        </Col>
      </Row>
    </Container>
  );
}

export default HomePage;
