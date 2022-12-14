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
export const styles = {designs}