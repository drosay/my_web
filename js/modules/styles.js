const designs = `
.content{
    display: flex;
    width: 100%;
}

.slider__container{
    width: 90%;
    max-width: 900px;
    margin: auto;
    position: relative;
    background-color: rgba(0,0,0,.3);
    border-radius: 15px;
    border-width: 8px;
    border-color: rgba(0,0,0,.2);
    border-style: solid;
    overflow: hidden;
}

.slider{
    display: flex;
    width: 400%;
    height: 70vmin;
    padding: 10px;
    margin-left: -100%;
}

.slider__section{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    padding: 0 40px;
    width: 100%;
    height: 100%;
}

.section__img{
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
}

.slider__img{
    max-width: 95%;
    max-height:100%;
    object-fit: cover;

}

.section__description{
    width: 50%;
    height: 100%;
    padding: 20px;
}
.description__container{
    border-radius: 10px;
    padding: 15% 5%;
    width: 100%;
    height: 100%;
    background-color: #523365;
    font-size: 2.3vmin;
}
.description__container h2{
    font-family: open-sans-extrabold, sans-serif;
}
.description__container p{
    text-align: justify;
}

.description__container .desc{
    font-weight: bold;
}
.slider__btn{
    display: flex;
    align-items: center;
    justify-content: space-around;
    position:absolute;
    height: 100%;
    width: 2em;
    font-size: 1em;
    text-align: center;
    top: 50%;
    border-radius: 10px;
    background-color: transparent;
    transform: translateY(-50%);
    cursor: pointer;
    transition: all .3s;
}

.slider__btn:hover{
    background-color: rgba(82,51,101,.3);
}

.slider__btn--right{
    right: 0;
}

.slider__btn--left{
    left: 0;
}


@media (max-width:700px){
    .slider{
        height: 80vmax;
    }
    .slider__section{
        flex-direction: column;
        justify-content:initial;
        padding:5px;
    }
    .section__img{
        justify-content: space-around;
        width: 90%;
        max-height: 40%;
    }
    .section__description{
        width: 110%;
        margin:0px;
        height: 100%;
        padding: 12px;
    }
    .description__container{
        padding:3%;
        font-size: 2vmax;
    }

    .description__container h2{
        margin-bottom: -15px;
    }
}
`
const resume = `
ol{margin:0;padding:0}table td,table th{padding:0}.c8{margin-left:0.9pt;padding-top:13.6pt;text-indent:-0.2pt;padding-bottom:0pt;line-height:0.9579512476921082;text-align:justify;margin-right:68.2pt}.c17{margin-left:0.2pt;padding-top:0pt;text-indent:0.6pt;padding-bottom:0pt;line-height:0.9579501748085022;text-align:justify;margin-right:68.4pt}.c23{margin-left:36pt;padding-top:0.6pt;text-indent:-17.5pt;padding-bottom:0pt;line-height:1.0162609815597534;text-align:justify;margin-right:68.1pt}.c28{margin-left:36pt;padding-top:0.6pt;text-indent:-17.5pt;padding-bottom:0pt;line-height:1.0162609815597534;text-align:left;margin-right:68.1pt}.c1{color:#000000;font-weight:400;text-decoration:none;vertical-align:baseline;font-size:12pt;font-family:"Arial";font-style:normal}.c0{color:#000000;font-weight:400;text-decoration:none;vertical-align:baseline;font-size:10pt;font-family:"Arial";font-style:normal}.c4{margin-left:1.1pt;padding-top:13.6pt;text-indent:-0.4pt;padding-bottom:0pt;line-height:0.957949161529541;text-align:justify;margin-right:68pt}.c6{margin-left:36.5pt;padding-top:14.4pt;text-indent:-18.1pt;padding-bottom:0pt;line-height:0.9579501748085022;text-align:justify;margin-right:68.1pt}.c26{padding-top:13.6pt;text-indent:0.9pt;padding-bottom:0pt;line-height:0.957949161529541;text-align:justify;margin-right:68.1pt}.c27{margin-left:0pt;padding-top:0.3pt;padding-bottom:0pt;line-height:1.0;text-align:center;height:11pt}.c33{margin-left:0pt;padding-top:0.3pt;padding-bottom:0pt;line-height:1.0;text-align:justify}.c9{color:#000000;font-weight:700;text-decoration:none;vertical-align:baseline;font-family:"Arial"}.c13{color:#000000;font-weight:400;text-decoration:none;vertical-align:baseline;font-family:"Arial"}.c37{margin-left:0pt;padding-top:0.3pt;padding-bottom:0pt;line-height:1.0;text-align:center}.c7{margin-left:182.7pt;padding-top:0pt;padding-bottom:0pt;line-height:1.0;text-align:left}.c25{margin-left:0.9pt;padding-top:0.3pt;padding-bottom:0pt;line-height:1.0;text-align:left}.c2{margin-left:0.7pt;padding-top:25.1pt;padding-bottom:0pt;line-height:1.0;text-align:left}.c15{margin-left:0.7pt;padding-top:13.5pt;padding-bottom:0pt;line-height:1.0;text-align:left}.c12{margin-left:0.4pt;padding-top:0.3pt;padding-bottom:0pt;line-height:1.0;text-align:left}.c29{margin-left:0.4pt;padding-top:0.3pt;padding-bottom:0pt;line-height:1.0;text-align:justify}.c18{margin-left:18.5pt;padding-top:0.6pt;padding-bottom:0pt;line-height:1.0;text-align:left}.c16{padding-top:27.9pt;padding-bottom:0pt;line-height:1.0;text-align:left}.c21{text-decoration-skip-ink:none;-webkit-text-decoration-skip:none;color:#1155cc;text-decoration:underline}.c34{color:#000000;font-weight:400;vertical-align:baseline;font-family:"Arial"}.c35{padding-top:0pt;padding-bottom:0pt;line-height:1.0;text-align:left}.c36{background-color:#ffffff;max-width:60vmax;margin:0 auto;padding:0.1pt 0.5pt 53.8pt 72.2pt}.c22{color:#000000;text-decoration:none;vertical-align:baseline}.c31{text-decoration-skip-ink:none;-webkit-text-decoration-skip:none;text-decoration:underline}.c24{color:inherit;text-decoration:inherit}.c11{font-family:"Noto Sans Symbols";font-weight:400}.c14{font-style:normal}.c3{font-size:12pt}.c30{height:11pt}.c19{font-size:10pt}.c32{margin-left:0.7pt}.c10{font-weight:700}.c20{font-size:18pt}.c5{font-style:italic}.title{padding-top:24pt;color:#000000;font-weight:700;font-size:36pt;padding-bottom:6pt;font-family:"Arial";line-height:1.15;page-break-after:avoid;orphans:2;widows:2;text-align:left}.subtitle{padding-top:18pt;color:#666666;font-size:24pt;padding-bottom:4pt;font-family:"Georgia";line-height:1.15;page-break-after:avoid;font-style:italic;orphans:2;widows:2;text-align:left}li{color:#000000;font-size:11pt;font-family:"Arial"}p{margin:0;color:#000000;font-size:11pt;font-family:"Arial"}h1{padding-top:24pt;color:#000000;font-weight:700;font-size:24pt;padding-bottom:6pt;font-family:"Arial";line-height:1.15;page-break-after:avoid;orphans:2;widows:2;text-align:left}h2{padding-top:18pt;color:#000000;font-weight:700;font-size:18pt;padding-bottom:4pt;font-family:"Arial";line-height:1.15;page-break-after:avoid;orphans:2;widows:2;text-align:left}h3{padding-top:14pt;color:#000000;font-weight:700;font-size:14pt;padding-bottom:4pt;font-family:"Arial";line-height:1.15;page-break-after:avoid;orphans:2;widows:2;text-align:left}h4{padding-top:12pt;color:#000000;font-weight:700;font-size:12pt;padding-bottom:2pt;font-family:"Arial";line-height:1.15;page-break-after:avoid;orphans:2;widows:2;text-align:left}h5{padding-top:11pt;color:#000000;font-weight:700;font-size:11pt;padding-bottom:2pt;font-family:"Arial";line-height:1.15;page-break-after:avoid;orphans:2;widows:2;text-align:left}h6{padding-top:10pt;color:#000000;font-weight:700;font-size:10pt;padding-bottom:2pt;font-family:"Arial";line-height:1.15;page-break-after:avoid;orphans:2;widows:2;text-align:left}
`
export const styles = {designs, resume}