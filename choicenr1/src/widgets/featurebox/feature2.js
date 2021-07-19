import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Feature2 extends Component {
    render() {
        return (
            <div className="container text-center">
                <h2 className="text-light">Vår metode</h2>
                <div className="row">
                    <div className="col-12">
                        <div className="p-7 rounded">
                            <div className="row align-items-center">
                                <div className="col-xl-4 col-lg-4 mb-8 mb-lg-0">
                                    <div>
                                        <div>
                                            <img
                                                className="img-fluid"
                                                src={require(`../../assets/images/services/01.png`)}
                                                alt=""
                                            />
                                        </div>
                                        <h5 className="mt-4 mb-3 text-light">
                                            Foreldre
                                        </h5>
                                        <p>
                                            La barnet ditt spille seg god i alle
                                            fag! Ingenting er som å se barna
                                            oppleve mestring. Hold deg i loopen
                                            og følg barnets faglige progresjon
                                            imens de spiller seg gode.
                                        </p>
                                        <Link className="btn-link" to="/">
                                            Les mer
                                        </Link>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-lg-4 col-sm-6">
                                    <div>
                                        <div>
                                            <img
                                                className="img-fluid"
                                                src={require(`../../assets/images/services/02.png`)}
                                                alt=""
                                            />
                                        </div>
                                        <h5 className="mt-4 mb-3 text-light">
                                            Lærere
                                        </h5>
                                        <p>
                                            Overrask elevene dine med en helt
                                            annerledes læringsopplevelse. Mens
                                            barna jobber med ditt fag, kan du
                                            som lærer se at elevene har det gøy
                                            når de lærer.
                                        </p>
                                        <Link className="btn-link" to="/">
                                            Les mer
                                        </Link>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-lg-4 col-sm-6 mt-6 mt-sm-0">
                                    <div>
                                        <div>
                                            <img
                                                className="img-fluid"
                                                src={require(`../../assets/images/services/03.png`)}
                                                alt=""
                                            />
                                        </div>
                                        <h5 className="mt-4 mb-3 text-light">
                                            Barna
                                        </h5>
                                        <p>
                                            Hvem har sagt at matematikk må være
                                            kjedelig? Gjennom en spennende
                                            applikasjoner viser vi deg at det
                                            både er nyttig og moro med fag.
                                        </p>
                                        <Link className="btn-link" to="/">
                                            Les mer
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Feature2;
