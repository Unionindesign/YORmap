import React, { useState, useRef } from "react";
import MapGL, { Marker, NavigationControl } from "react-map-gl";
import gsap, { Power3 } from "gsap"
import IconHome from "@material-ui/icons/Home";
import { Link } from "react-router-dom";
import "./style.css"

//data
import { schools, libraries, workshops } from "./data/map_data.js"

const YORWorkshopMap = () => {
    const schoolMarkers = useRef([])
    const libraryMarkers = useRef([])
    const yorRef = useRef()
    const [viewport, setViewport] = useState(
        {
            width: window.innerWidth,
            height: window.innerHeight,
            latitude: 39.75,
            longitude: -104.97,
            zoom: 11.5,
            pitch: 75
        }
    )
    const viewportChanger = viewport => {
        setViewport(viewport)
    }
    //TODO: Add a hover method to show just the title
    //TODO: so many methods? aybe try an HTML data-attribute and check for it to set target?
    const handleOpenSchoolPopup = i => evt => {
        gsap.fromTo(schoolMarkers.current[i], 1, {
            autoAlpha: 0,
            scale: 0,
            visibility: "hidden",
            x: -100,
            y: -220

        }, {
            autoAlpha: 0.98,
            scale: 1, visibility: "visible",
            ease: Power3.easeInOut,
            y: -200
        })
    }
    const handleCloseSchoolPopup = i => evt => {
        gsap.to(schoolMarkers.current[i], 1, {
            autoAlpha: 0,
            scale: 0,
            visibility: "hidden"
        })
    }
    const handleOpenLibraryPopup = i => evt => {
        gsap.fromTo(libraryMarkers.current[i], 1, {
            autoAlpha: 0,
            scale: 0,
            visibility: "hidden",
            x: -100,
            y: -220
        }, {
            autoAlpha: 0.98,
            scale: 1, visibility: "visible",
            ease: Power3.easeInOut,
            y: -200
        })
    }
    const handleCloseLibraryPopup = i => evt => {
        gsap.to(libraryMarkers.current[i], 1, {
            autoAlpha: 0,
            scale: 0,
            visibility: "hidden"
        })
    }
    const handleOpenYORPopup = evt => {
        gsap.fromTo(yorRef.current, 1, {
            autoAlpha: 0,
            scale: 0,
            visibility: "hidden",
            x: -100,
            y: -420
        }, {
            autoAlpha: 0.98,
            scale: 1, visibility: "visible",
            ease: Power3.easeInOut,
            y: -500
        })
    }
    const handleCloseYORPopup = evt => {
        gsap.to(yorRef.current, 1, {
            autoAlpha: 0,
            scale: 0,
            visibility: "hidden"
        })
    }
    return (
        <div className="map-container">
            <MapGL
                mapboxApiAccessToken="pk.eyJ1Ijoic3RlcGhlbi1tYXJzaGFsbCIsImEiOiJjanB2aWxlNWMwMHV3NDJrajNqN3Jueml4In0.s4SlplYZB-deWizN2jBF8g"
                mapStyle={"mapbox://styles/mapbox/dark-v9"}
                {...viewport}
                onViewportChange={viewportChanger}
            >
                <div className="nav-links">
                    <br />
                    <a className="yor-link" href="https://www.youthonrecord.org/">Return to youthonrecord.org </a>
                    <br />
                    <br /><br /><br />
                    <div className="nav-control"><NavigationControl /></div>
                </div>
               
                {/* SCHOOLS */}
                {schools.map((school, i) => (
                    <Marker
                        key={i}
                        latitude={school.latitude}
                        longitude={school.longitude}
                    >
                        <div className="marker-container">
                            <div className="school-marker" onClick={handleOpenSchoolPopup(i)}>
                            </div>
                            <div className="marker-popup" ref={el => schoolMarkers.current[i] = el}>
                                <h4 className="marker-popup-header">{school.name} </h4>
                                <hr style={{ width: "90%" }} />
                                <p>{school.address}</p>
                                <h5 className="marker-popup-subheader">Teacher:</h5>
                                {school.teachers.map((teacher, i) => (
                                    <ul className="marker-popup-list" key={i}>
                                        <li><a href={teacher.teacher_link}>{teacher.teacher_name}</a></li>
                                    </ul>
                                ))}
                                <h5 className="marker-popup-subheader">Class:</h5>
                                {school.classes.map((classes, i) => (
                                    <ul className="marker-popup-list" key={i}>
                                        <li><a href={classes.class_link}>{classes.class_title}</a></li>
                                    </ul>
                                ))}
                                <hr style={{ width: "90%" }} />
                                <em><a href={school.url}>Website&nbsp;&nbsp;&nbsp;</a></em>
                                <span className="marker-popup-close" onClick={handleCloseSchoolPopup(i)} >&nbsp;&nbsp;&nbsp;Close </span>
                            </div>
                        </div>

                    </Marker>
                ))}
                {/* LIBRARIES */}
                {libraries.map((lib, i) => (
                    <Marker
                        key={i}
                        latitude={lib.latitude}
                        longitude={lib.longitude}
                    >
                        <div className="marker-container">
                            <div className="library-marker" onClick={handleOpenLibraryPopup(i)}>
                            </div>
                            <div className="marker-popup" ref={el => libraryMarkers.current[i] = el}>
                                <h4 className="marker-popup-header">{lib.name} </h4>
                                <hr style={{ width: "90%" }} />
                                <img src={lib.img_src} alt="library" style={{ width: "75%" }} />
                                <p>{lib.address}</p>
                                <h5 className="marker-popup-subheader">Teacher:</h5>
                                {lib.teachers.map((teacher, i) => (
                                    <ul className="marker-popup-list" key={i}>
                                        <li><a href={teacher.teacher_link}>{teacher.teacher_name}</a></li>
                                    </ul>
                                ))}
                                <h5 className="marker-popup-subheader">Class:</h5>
                                {lib.classes.map((classes, i) => (
                                    <ul className="marker-popup-list" key={i}>
                                        <li><a href={classes.class_link}>{classes.class_title}</a></li>
                                    </ul>
                                ))}
                                <hr style={{ width: "90%" }} />
                                <em><a href={lib.url}>Website&nbsp;&nbsp;&nbsp;</a></em>
                                <span className="marker-popup-close" onClick={handleCloseLibraryPopup(i)} >&nbsp;&nbsp;&nbsp;Close </span>
                            </div>
                        </div>

                    </Marker>
                ))}
                 {/* YOR */}
                <Marker
                    latitude={39.7323489}
                    longitude={-105.0045854}
                    offsetRight={35}
                >   <div className="marker-container">
                        <div className="school-marker" onClick={handleOpenYORPopup}/>
                        <div className="marker-popup" ref={el => yorRef.current = el} style={{ minWidth: "350px", maxWidth: "500px" }}>
                            <h4 className="marker-popup-header">Youth On Record </h4>
                            <hr style={{ width: "90%" }} />
                      
                            <p>1301 W 10th Ave, Denver, CO 80204</p>
                            <h4 className="marker-popup-subheader">2019 Workshops @ Youth Media Studio:</h4>
                            <div className="marker-table-wrapper">
                                <table className="marker-popup-table" >
                                    <thead>
                                        <tr>
                                            <th>Partner</th>
                                            <th>Date</th>
                                            <th>Youth Served</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {workshops.map((wrk, i) => (
                                            <tr key={i}>
                                                <td style={{ maxWidth: "250px", fontWeight: "bold" }}>{wrk.partner}</td>
                                                <td>{wrk.date}</td>
                                                <td>{wrk.students_served}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                            <hr style={{ width: "90%" }} />
                            <em><a href="https://www.youthonrecord.org/">Website&nbsp;&nbsp;&nbsp;</a></em>
                            <span className="marker-popup-close" onClick={handleCloseYORPopup} >&nbsp;&nbsp;&nbsp;Close </span>
                        </div>
                    </div>
                </Marker>
            </MapGL>
        </div >
    )
}
export default YORWorkshopMap

