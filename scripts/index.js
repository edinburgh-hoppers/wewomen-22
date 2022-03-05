@import url('https://fonts.googleapis.com/css2?family=Alata&display=swap');

body{
    background-color : rgba(255,215,0, 0.1);
    font-family : 'Alata', sans serif;
}
a :hover {
    color : white;
    text-decoration: none;
}

#schedule {
    display : grid;
    /*height : 90vh;*/
    grid-template-rows : 20vh auto; 
    justify-content : center;
    align-content : center;
    /* width : 95vw; */
    
}


.container{
    /* width : 95vw;
    max-width : 800px; */
    justify-content : center;
    align-content : center;
     
}
#buttonCont{
    
    display : flex;
    /*flex-direction : row;*/
  

    top : 20%;

    height : 90%;
    align-self : center;
    max-height : 20vh;
    justify-content : center;



}

.myrow{

    display : grid;
    grid-template-columns : 33% 33% 33%;
     
    
}

.circle {
    background-color : rgba(99,3,150,0.6);

    width : 10vw;
    height : 10vw;
    max-width : 90px;
    max-height : 90px;    

    border-radius :50%;
    margin : 1vw 1vw 1vw 1vw;
    display : flex;
    justify-content : center;
    align-items : center;
}

.circletxt{
    color : white;
    text-align : center;
    position : relative;
    font-family : arial;
    font-size : 1vw;
    text-transform: uppercase;
}


#sunCircle{
    background-color : whitesmoke;
    border : purple 1px dashed;
}
#sunCircleText{
    color : purple;
}
/*
#descCont{
    
    height : auto;
    justify-content : center;
    justify-items : center;
    min-height : 60vh;
    justify-self : center;
    background-color : rgba(0,0,0,0);
    border-radius : 20px;
    align-items : center;
    display : initial;
}
*/

.descBox {

    width : 100%;

    display : none;
    background-color :whitesmoke;
    border-radius : 10px;
    margin : 2vw 0vw 2vw 0vw ;

}

#sunBox{
    /*
    width : 95vw;
    height : auto;
    max-width : 800px;
    */
    display : flex;
    flex-direction : column;
    justify-content: center;
    align-content : center;
    justify-self : center;
    align-self : center;
   
}

#monBox{
    /*
    width : 95vw;
    height : auto;
    max-width : 800px;
    */
    display : none;
    flex-direction : column;
    justify-content: center;
    align-content : center;
    justify-self : center;
    align-self : center;
    margin-top : 15%; 
}

#tueBox {
   display : none;
   flex-direction : column;

}

#wedBox{
    display:none;
    flex-direction : column;
}

#thurBox{
    /*
    width : 95vw;
    height : auto;
    max-width : 800px;
    */
    display : none;
    flex-direction : column;
    justify-content: center;
    align-content : center;
    justify-self : center;
    align-self : center;
    
    
}

#friBox{
    display : none;
    flex-direction : column;
    justify-content: center;
    align-content : center;
    justify-self : center;
    align-self : center;
    padding-top : 1vh;
    padding-bottom : 1vh;
   
}

#satBox{
    /*
    width : 95vw;
    max-width : 800px;
    */
    background-color : whitesmoke;

    flex-direction : column;
    justify-content : center;
}

.event1{

    /*height : 40vh;*/
    min-height : 40vh;
    display : grid;
    grid-template-columns: 20% 80%;
    width : 93%;
    background-color : rgba(99,3,150,0.2);
    border-style : solid;
    border-color :rgba(99,3,150,0.0);
    border-width : 3px;
    margin-top : 1vh;
    border-radius : 10px;
    align-self : center;
    margin-bottom : 1vh;
    padding : 1vh 1vw 1vh 1vw;

}

.event2{

    padding : 1vh 1vw 1vh 1vw;
    /*height : 40vh;*/
    min-height : 40vh;
    display : grid;
    grid-template-columns: 20% 80%;
    width : 93%;
    background-color : rgba(255,215,0,0.3);
    border-style : solid;
    border-color :rgba(0,0,0,0);
    border-width : 3px;
    margin-top : 1vh;
    border-radius : 10px;
    align-self : center;
    margin-bottom : 1vh;
}

.eventCol1{
    background-color :rgba(0,0,0,0);
    width : 90%;
    display : flex;
    flex-direction : column;
    justify-self : center;
    justify-content : center;
    align-items : center;
    align-self : center;
    height : 30vh;
    padding-top : 1vh;
    padding-bottom : 1vh;
    font-size : 2vh;

}

.eventCol2{
    background-color :rgba(0,0,0,0);
    width : 90%;
    display : flex;
    flex-direction : column;
    justify-self : center;
    justify-content : center;
    align-items : start;
    /*height : 30vh;*/
    text-align : left;
    font-size : 2vh;
    align-self : center;
    

}
.eventTitle{
    font-size : 3vh;
}
.reg{
    font-size : 2vh;
    font-family : 'Alata', sans-serif;
    color : white;
    text-decoration : none;
    align-self : start;
    
    background-color : purple;
    padding : 1vh 1vw 1vh 1vw;
    border-radius : 10px;
    margin-top : 1vh;
    
}
#hoppersHeader{
    height : 40vh;
    display : grid;
    grid-template-columns: repeat(2,50%);
    width : 98%;
    background-color : rgba(99,3,150,0.2);
    border-style : solid;
    border-color :rgba(99,3,150,0.0);
    border-width : 3px;
    margin-top : 1vh;
    border-radius : 10px;
    align-self : center;
    margin-bottom : 1vh;
}
/*
.headerCol{
    background-color : rgba(99,3,150,0);
    width : 90%;
    display : flex;
    flex-direction : column;
    justify-self : center;
    justify-content : center;
    align-items : start;
    height : 30vh;
    text-align : left;
    font-size : 2vh;
}
*/
.learnless{
    display : none;
}
.hoppersEvent {
    height : 10vh;
    /*height : auto;*/
    display : grid;
    grid-template-columns : 10% 80% 10%;
    width : 99%;

    align-self : center;
    border-radius : 10px;
    margin-top : 1vh;
    margin-bottom : 1vh;
   
}
.eventDesc{
    display : none;
    font-weight : thin;
    color : black;
    font-size : 2vh;
}

.hE1 {
    background-color : rgba(99,3,150,0.6);
}

.hE2 {
    background-color :gold;
}

.hoppersEvent .a {
    color : purple;
}


.time{
    color : white;
    font-size : 1.5vh;
    text-align : center;
    align-self : center;
}

.learnmore{
    color : white;
    text-align : center;
    font-size : 2vh;
    align-self : center;
    /*
    width : 100%;
    height : 100%;
    display : flex;
    align-items: center;
    justify-content : center;
    */
}

.learnless {
    color : white;
    text-align : center;
    font-size : 2vh;
    align-self : center;

    /*
    width : 100%;
    height : 100%;
    display : flex;
    align-items: center;
    justify-content : center;
    */
}

#longreg{
    background-color : purple;
    text-align : center;
    color : white;
    padding : 1vh 2vw 1vh 2vw;
    border-radius : 10px;
    font-size : 2vh;
    text-decoration : none;
}

.midBox{
    
    background-color : white;
    text-align : center;
    justify-content : center;
    align-content : center;
    display : flex;
    flex-direction : column;
    padding-left : 2vw;
    padding-right : 2vw;
    padding-top : 1vh;
    padding-bottom : 1vh;
}

.hoppersLogoSchedule{
    height : 80px;
    width : auto;
    opacity : 0.8;
}

#hoppersHeader .hoppersLogoSchedule{
    width : 200px;
    height : auto;
}

.hoppersEvent .eventTitle {
    color : rgb(90, 90, 90);
}


.hands{
    /*width : 100%;
    max-width : 270px;*/
    width : 150px;
    height :auto;
    opacity : 1;

}
#eifriday{
    align-items : center;
    justify-items : center;
    height : 40vh;
}

.wibLogoSchedule{
    height : 80px; 
    width : auto;
    opacity : 0.8;
}
.wpirLogoSchedule{
    
    height : 80px;
    border-radius : 50%;
    width :auto;
    opacity : 1;
}
.wilLogoSchedule{
    height : 80px;
    /*max-width : 150px;*/
    border-radius : 50%;
    width : auto;
    opacity : 1;
}

.wistemLogoSchedule{
    /*width : 100%;
    max-width : 150px;*/
    height : 80px;
    border-radius : 50%;
    width : auto;
    opacity : 0.7;

}

@media screen and (max-width : 800px){
    #buttonCont{
        display : grid;
        grid-template-rows : repeat (2, auto);
        
    }
    /*
    .row{
        flex-direction : row;
        height : 90%;
    }
    */

    .circle{
        width : 70px;
        height : auto;
        border-radius : 8px;
    }
  
    
    .time{
        font-size : 10px;
    }
    .eventTitle{
        font-size : 2vh;
    }

    .eventDesc{
        font-size : 1.3vh;
    }
    

    .event1{
        display : flex;
        flex-direction : column;
        height : auto;
        min-height : 0px;
    }

    .event2{
        display: flex;
        flex-direction : column;
        height : auto;
        min-height : 0px;
    }

    #hoppersHeader {
        display : flex;
        flex-direction : column;
        height : auto;
    }
    .eventCol1{
        height : auto;
    }
    .eventCol2{
        font-size : 1.2vh;
        height : auto;
        text-align : center;
        justify-content : center;
        justify-items : center;
        align-items : center;
        display : flex;
        flex-direction : column;
        padding-top : 1vh;
        padding-bottom : 1vh;
    }

    .eventCol2 .reg{
        align-self : center;
    }
    .learnmore{
        font-size : 1vh;
    }

    .learnless{
        font-size : 1.2vh;
    }

    .reg{
        font-size : 1.2vh;
    }
    #hoppersEvent .eventTitle{
        font-size : 1.5vh;
    }
}


@media screen and (max-width : 800px){
    .circletxt{
        font-size : 10px;
    }
    .headercol{
        font-size : 1.5vh;
    }
}
