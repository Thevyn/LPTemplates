import React, { Component } from 'react';
import { Progress } from 'reactstrap';
import Feature2 from '../../widgets/featurebox/feature2';
import Herosection7 from '../../widgets/herosection/herosection7';
import Clientlogo from '../../widgets/common/Clientlogo';
import Testimonial3 from '../../widgets/testimonial/testimonial3';
import Feature1 from '../../widgets/featurebox/feature1';
import OwlCarousel from 'react-owl-carousel';
import Pricingplan4 from '../../widgets/pricingplan/pricingplan4';
import Blog1 from '../../widgets/blog/blog1';
import Featureskill from '../../widgets/featurebox/featureskill';
import Counter4 from '../../widgets/counter/counter4';
window.fn = OwlCarousel;
class Index8 extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        window.scrollTo(0, 0);
    }
    render() {
        return (
            <div>
                <section>
                    <div className="container">
                        <Herosection7 />
                    </div>
                </section>
                {/*body content start*/}
                <div className="page-content">
                    {/*client start*/}
                    {/* <section className="text-center p-0">
            <div className="container">
              <div className="row text-center">
                <div className="col-12 ">
                  <Clientlogo logoitems={6} margintop={10} />
                </div>
              </div>
            </div>
          </section> */}
                    {/*client end*/}
                    {/*testimonial start*/}
                    {/* <Testimonial3 /> */}
                    {/*testimonial end*/}
                    {/*about start*/}
                    <section className="pt-0">
                        <div className="container">
                            <div className="row align-items-center justify-content-between">
                                <div className="col-12 col-lg-6 col-xl-5">
                                    <div>
                                        <span className="badge badge-primary-soft p-2">
                                            <i className="la la-sort-numeric-asc ic-3x rotation" />
                                        </span>
                                        <h2 className="mt-3">Hva er Moth?</h2>
                                        <p className="lead">
                                            Moth jobber med å utvikle en
                                            læringsplatform i form av apper som
                                            fylle hullene skolen og foreldre
                                            ikke klarer å dekke. Moth skal være
                                            en fin skoleressurs, og det er helt
                                            topp at man kan gå løs på en digital
                                            app. Med våre undervisningsmetoder
                                            utviklet av pedagog Heidi Iren
                                            Trulsen med lang erfaring som lærer
                                            har vi som mål å gjøre det lettere
                                            for barn og voksne å knekke koden i
                                            matematikk.
                                        </p>
                                        <h4>Vårt mål</h4>
                                        <ul>
                                            <li>
                                                <p>
                                                    Tilby informasjon som gjør
                                                    det lettere å legge til
                                                    rette for å gi barn og unge
                                                    gode og nyttige
                                                    skjermopplevelser.
                                                </p>
                                            </li>
                                            <li>
                                                <p>
                                                    Skape en tydelig forståelse
                                                    for hvilken målgruppe en app
                                                    egner seg best for
                                                </p>
                                            </li>
                                            <li>
                                                <p>
                                                    Stimulere kompetanseheving
                                                    gjennom å skape større
                                                    forståelse for bredden og
                                                    det pedagogiske potensialet
                                                    i barn og unges skjermbruk
                                                </p>
                                            </li>
                                        </ul>
                                        <h2 className="mt-3">Kommende apper</h2>
                                        <p className="lead">
                                            Å lære barna hvordan man forteller
                                            tiden kan være overraskende
                                            vanskelig. Denne timevisende appen
                                            vil hjelpe barna dine å bli kjent
                                            med både analoge og digitale
                                            klokker. Lær klokka med Moth skal
                                            være en slags avstikker fra den
                                            digitale skoleressursen. Her vil man
                                            kjenne igjen oppsettet og
                                            læringslinjen, samt de fine figurene
                                            og intuitive oppgavene
                                        </p>

                                        {/* TOTO: Legg til egne bilder av app */}
                                        <div className="col-12 col-lg-6 mb-6 mb-lg-0">
                                            <div class="row align-items-center no-gutters">
                                                <div class="col">
                                                    <img
                                                        src={require(`../../assets/images/about/09.png`)}
                                                        alt="Image"
                                                        class="img-fluid"
                                                    />
                                                </div>
                                                <div class="col">
                                                    <img
                                                        src={require(`../../assets/images/about/09.png`)}
                                                        alt="Image"
                                                        class="img-fluid"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/*about end*/}
                    {/*video start*/}
                    <section
                        className="custom-py-2 position-relative bg-dark parallaxie"
                        data-bg-img="assets/images/bg/02.png"
                    >
                        <Feature2 />

                        <div
                            className="shape-1"
                            style={{ height: '200px', overflow: 'hidden' }}
                        >
                            <svg
                                viewBox="0 0 500 150"
                                preserveAspectRatio="none"
                                style={{ height: '100%', width: '100%' }}
                            >
                                <path
                                    d="M0.00,49.98 C150.00,150.00 271.49,-50.00 500.00,49.98 L500.00,0.00 L0.00,0.00 Z"
                                    style={{ stroke: 'none', fill: '#fff' }}
                                />
                            </svg>
                        </div>
                        <div
                            className="shape-1 bottom"
                            style={{ overflow: 'hidden' }}
                        >
                            <svg
                                viewBox="0 0 500 150"
                                preserveAspectRatio="none"
                                style={{ height: '100%', width: '100%' }}
                            >
                                <path
                                    d="M0.00,49.98 C150.00,150.00 349.20,-50.00 500.00,49.98 L500.00,150.00 L0.00,150.00 Z"
                                    style={{ stroke: 'none', fill: '#fff' }}
                                />
                            </svg>
                        </div>
                    </section>
                    {/*video end*/}
                    {/*services start*/}
                    <section className="p-0">
                        <div className="container">
                            <div className="row justify-content-center text-center">
                                <div className="col-12 col-md-12 col-lg-8 mb-8">
                                    <div>
                                        {' '}
                                        <span className="badge badge-primary-soft p-2">
                                            <i className="la la-cubes ic-3x rotation" />
                                        </span>
                                        <h2 className="mt-3">
                                            Awesome Bootsland App Feature
                                        </h2>
                                        <p className="lead mb-0">
                                            All types of businesses need access
                                            to development resources, so we give
                                            you the option to decide how much
                                            you need to use.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <Featureskill />
                        </div>
                    </section>
                    {/*screenshots start*/}
                    <section className="p-0">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-12 col-md-12 col-lg-4 mb-8 mb-lg-0">
                                    <div className="mb-0">
                                        {' '}
                                        <span className="badge badge-primary-soft p-2">
                                            <i className="la la-file-image-o ic-3x rotation" />
                                        </span>
                                        <h2 className="mt-3">
                                            See Our Bootsland App Screenshots
                                        </h2>
                                        <p className="lead mb-0">
                                            All types of businesses need access
                                            to development resources, so we give
                                            you the option to decide how much
                                            you need to use.
                                        </p>
                                    </div>
                                </div>
                                <div className="col-12 col-md-12 col-lg-8">
                                    <OwlCarousel
                                        className="owl-carousel owl-center no-pb"
                                        dotData={false}
                                        dots={false}
                                        center={true}
                                        items={3}
                                        autoplay={true}
                                        loop={true}
                                    >
                                        <div className="item">
                                            <img
                                                className="img-fluid"
                                                src={require(`../../assets/images/app/01.png`)}
                                                alt=""
                                            />
                                        </div>
                                        <div className="item">
                                            <img
                                                className="img-fluid"
                                                src={require(`../../assets/images/app/02.png`)}
                                                alt=""
                                            />
                                        </div>
                                        <div className="item">
                                            <img
                                                className="img-fluid"
                                                src={require(`../../assets/images/app/03.png`)}
                                                alt=""
                                            />
                                        </div>
                                        <div className="item">
                                            <img
                                                className="img-fluid"
                                                src={require(`../../assets/images/app/01.png`)}
                                                alt=""
                                            />
                                        </div>
                                        <div className="item">
                                            <img
                                                className="img-fluid"
                                                src={require(`../../assets/images/app/02.png`)}
                                                alt=""
                                            />
                                        </div>
                                        <div className="item">
                                            <img
                                                className="img-fluid"
                                                src={require(`../../assets/images/app/03.png`)}
                                                alt=""
                                            />
                                        </div>
                                    </OwlCarousel>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/*screenshots end*/}
                    {/*pricing start*/}
                    <section>
                        <div className="container">
                            <Pricingplan4 />
                        </div>
                        {/* / .container */}
                    </section>
                    {/*pricing end*/}
                    {/*blog start*/}
                    <section>
                        <div className="container">
                            <div className="row align-items-end mb-5">
                                <div className="col-12 col-md-12 col-lg-4">
                                    <div>
                                        {' '}
                                        <span className="badge badge-primary-soft p-2">
                                            <i className="la la-bold ic-3x rotation" />
                                        </span>
                                        <h2 className="mt-4 mb-0">
                                            From Our Blog List Latest Feed
                                        </h2>
                                    </div>
                                </div>
                                <div className="col-12 col-md-12 col-lg-6 ml-auto">
                                    <div>
                                        <p className="lead mb-0">
                                            All types of businesses need access
                                            to development resources, so we give
                                            you the option to decide how much
                                            you need to use.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            {/* / .row */}
                            <Blog1 />
                        </div>
                    </section>
                    {/*blog end*/}
                </div>
                {/*body content end*/}
            </div>
        );
    }
}

export default Index8;
