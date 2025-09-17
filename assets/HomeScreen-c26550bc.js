import{j as i,a as e,L as t,s as n}from"./index-19c72eea.js";function o(){return i(a,{children:[e(l,{children:i("nav",{children:[e("li",{children:e(t,{to:"teachers-page",className:"button",children:"Учителя"})}),e("li",{children:e(t,{to:"mathematics-page",className:"button",children:"Математика"})}),e("li",{children:e(t,{to:"informatics-page",className:"button",children:"Информатика"})}),e("li",{children:e(t,{to:"physics-page",className:"button",children:"Физика"})}),e("li",{children:e(t,{to:"useful-links-page",className:"button",children:"Полезные ссылки"})}),e("li",{children:e(t,{to:"mo-page",className:"button two-size",children:"Работа методического объединения"})})]})}),i(r,{children:[i("div",{className:"content",children:[i("h1",{children:["Методическое ",e("span",{children:"ОБЪЕДИНЕНИЕ"})," учителей математики и информатики"]}),e("div",{className:"actions",children:e("a",{href:"http://sch35.oktobrgrodno.gov.by/",target:"_blank",className:"button",children:"Сайт школы"})})]}),i("div",{className:"wallpaper",children:[e("div",{className:"counter-info",children:i("p",{children:["Главной целью методического объединения является ",e("span",{children:"совершенствование"})," образовательного процесса и обеспечение ",e("span",{children:"качественного"})," обучения для каждого ученика."]})}),i("div",{className:"counter",children:[e("img",{src:"/images/teachers-icon.svg",alt:"teacher"}),i("p",{children:["В методическом объединении ",e("span",{children:"участвует"})," более 8 учителей."]})]}),e("img",{src:"/assets/cover-675bdbb8.jpg",alt:"School"})]})]}),e("div",{className:"title",children:'ГУО "Средняя школа №35 имени Н.А. Волкова г. Гродно"'})]})}const a=n.div`
    max-height: 100vh;
    background-color: #FFFFFF;
    width: calc(100% - 2vw);
    padding: 1vh 1vw;
    display: flex;
    height: calc(100vh - 2vh);
    flex-direction: column;
    position: relative;

`,r=n.div`
    flex: 1;
    width: 100%;
    background: linear-gradient(45grad, rgba(33, 150, 83, 0.05) 3%, rgba(107, 191, 89, 0.005) 100.2%);
    position: relative;
    flex-direction: row;
    display: flex;
    border-radius: 50px;
    align-items: stretch;
    justify-content: stretch;
    max-width: 1600px;
    margin: 0 auto;

    & > div.content {
        display: flex;
        flex-direction: column;
        height: 100%;
        justify-content: center;
        width: auto;
        margin-left: 100px;
        flex: 1;
        position: relative;

        & > h1 {
            font-size: 55px;
            color: #232323;
            line-height: 60px;
            font-weight: bold;
            font-family: "Nunito", sans-serif !important;
            font-style: normal;
            width: 50%;

            & > span {
                color: #219653;
            }
        }

        & > div.actions {
            display: flex;
            width: 100%;
            position: relative;
            flex-direction: row;

            & > a.button {
                color: #FFFFFF;
                text-decoration: none;
                background-color: #219653;
                padding: 20px 40px;
                border-radius: 5px;
                opacity: 0.8;
                transition: all 0.3s ease-in-out;

                &:hover {
                    opacity: 1;
                    transform: translateY(-3px);
                }
            }
        }
    }

    & > div.wallpaper {
        display: flex;
        position: relative;
        height: 100%;
        width: 631px;
        justify-content: center;
        align-items: center;
        padding-right: 40px;

        & > div.counter-info {
            background-color: rgba(255, 255, 255, 0.7);
            backdrop-filter: blur(7px);
            padding: 2em;
            border-radius: 14px 14px 30px 14px;
            bottom: 30%;
            z-index: 2;
            left: -20%;
            display: block;
            position: absolute;
            filter: drop-shadow(0 0 69px rgba(70, 70, 70, 0.25));
            max-width: 40%;


            & > p {
                margin: 0;
                padding: 0;
                text-align: justify;
                font-size: 25px;
                font-weight: 500;
                line-height: 30px;

                & > span {
                    color: #219653;
                }
            }


        }

        & > div.counter {
            background-color: rgba(255, 255, 255, 0.7);
            backdrop-filter: blur(7px);
            padding: 1em;
            border-radius: 30px;
            bottom: 5%;
            z-index: 2;
            right: 10%;
            width: auto;
            height: auto;
            display: flex;
            position: absolute;
            filter: drop-shadow(0 0 69px rgba(70, 70, 70, 0.25));

            max-width: 20%;

            flex-direction: column;

            & > img {
                height: 64px;
                margin-bottom: 20px;
            }

            & > p {
                margin: 0;
                padding: 0;
                text-align: center;
                font-size: 16px;
                font-weight: 400;
                line-height: 18px;

                & > span {
                    color: #219653;
                }
            }


        }

        &::after {
            top: 0;
            z-index: 0;
            right: 0;
            display: block;
            position: absolute;
            background-color: rgba(33, 150, 83, 0.4);
            height: 100%;
            width: 207px;
            content: " ";
            border-radius: 0 50px 50px 0;
        }

        & > img {
            height: 85%;
            width: 631px;
            object-fit: cover;
            border-radius: 40px 40px 100px 40px;
            z-index: 1;
        }
    }
`,l=n.header`
    height: 100px;
    display: flex;
    flex-direction: row;
    position: relative;
    width: 100%;

    & > div.title {
        display: flex;
        height: 100%;
        position: relative;
        align-items: center;
        justify-content: center;
        font-size: 13px;
        color: #232323;
        text-align: right;
    }

    & > nav {
        display: flex;
        flex-direction: row;
        margin: 0;
        padding: 0;
        list-style: none;
        gap: 12px;
        height: 100%;
        width: 100%;
        justify-content: center;
        align-items: center;

        & > li {
            display: flex;
            position: relative;
            height: 100%;
            justify-content: center;
            align-items: center;
        }

        & > li > a {
            padding: 12px 16px;
            font-size: 16px;
            font-weight: 500;
            color: #404040;
            text-decoration: none;
            transition: all 0.3s ease;
            border-radius: 5px;
        }

        & > li > a:hover {
            color: #FFFFFF;
            background-color: #219653;
        }
    }

`;export{o as default};
//# sourceMappingURL=HomeScreen-c26550bc.js.map
