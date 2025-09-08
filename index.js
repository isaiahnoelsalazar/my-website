const script = document.createElement("script");
script.type = "speculationrules";
const speculationRules = {
    prefetch: [
        {
            urls: [
                "https://isaiahnoelsalazar.github.io/bad-phone-number-inputs/",
                "https://isaiahnoelsalazar.github.io/black/",
                "https://isaiahnoelsalazar.github.io/chatbot/",
                "https://isaiahnoelsalazar.github.io/codenotes/",
                "https://isaiahnoelsalazar.github.io/doc-to-pdf/",
                "http://openweb.fwh.is/e-commerce.php/",
                "https://isaiahnoelsalazar.github.io/electronic-gadget-store/",
                "https://isaiahnoelsalazar.github.io/live-html/",
                "http://openweb.fwh.is/",
                "https://isaiahnoelsalazar.github.io/multiplication-table/",
                "https://isaiahnoelsalazar.github.io/thml/",
                "https://isaiahnoelsalazar.github.io/personal-webpage/",
                "https://isaiahnoelsalazar.github.io/pdf-to-doc/",
                "https://isaiahnoelsalazar.github.io/qr-generator/",
                "https://isaiahnoelsalazar.github.io/rainbow/",
                "https://isaiahnoelsalazar.github.io/simple-web-calculator/",
                "https://isaiahnoelsalazar.github.io/my-website_old/",
                "https://isaiahnoelsalazar.github.io/typey/",
                "https://isaiahnoelsalazar.github.io/webbook/",
                "https://isaiahnoelsalazar.github.io/website-observation-1/",
                "https://isaiahnoelsalazar.github.io/women-with-baskets/",
                "https://isaiahnoelsalazar.github.io/basabasa-download/",
                "https://github.com/isaiahnoelsalazar/Basalt/",
                "https://isaiahnoelsalazar.github.io/billcalculator-download/",
                "https://github.com/isaiahnoelsalazar/BusSeatingArrangementExample/",
                "https://github.com/isaiahnoelsalazar/CaptainsCupPOS/",
                "https://isaiahnoelsalazar.github.io/compass-download/",
                "https://isaiahnoelsalazar.github.io/htmleditor-download/",
                "https://isaiahnoelsalazar.github.io/matchupgame-download/",
                "https://github.com/isaiahnoelsalazar/Monay/",
                "https://isaiahnoelsalazar.github.io/note-download/",
                "https://github.com/isaiahnoelsalazar/PacmanAndroid/",
                "https://isaiahnoelsalazar.github.io/qr-generator-download/",
                "https://github.com/isaiahnoelsalazar/saia_ProjectA/",
                "https://github.com/isaiahnoelsalazar/sAP/",
                "https://isaiahnoelsalazar.github.io/shoppinglist-download/",
                "https://github.com/isaiahnoelsalazar/SkillSwap/",
                "https://isaiahnoelsalazar.github.io/squulite-download/",
                "https://isaiahnoelsalazar.github.io/studentregistrationapp-download/",
                "https://github.com/isaiahnoelsalazar/Ulap/",
                "https://github.com/isaiahnoelsalazar/AutoClicker/",
                "https://github.com/isaiahnoelsalazar/AUTOLANDIA-Sales-and-Revenue-Report-Generation-System/",
                "https://github.com/isaiahnoelsalazar/Base64_Encoder_Decoder/",
                "https://github.com/isaiahnoelsalazar/ScreenRecorder/",
                "https://github.com/isaiahnoelsalazar/POS-System-Prototype/",
                "https://github.com/isaiahnoelsalazar/WebBrowser/",
                "https://github.com/isaiahnoelsalazar/SamplePythonTurtleKeyInput/",
                "https://github.com/isaiahnoelsalazar/SamplePythonTurtleYellowDucky/",
                "https://isaiahnoelsalazar.github.io/ball-download/",
                "https://isaiahnoelsalazar.github.io/ball/",
                "https://isaiahnoelsalazar.github.io/dice-download/",
                "https://isaiahnoelsalazar.github.io/dice/",
                "https://isaiahnoelsalazar.github.io/multiple-dice-download/",
                "https://isaiahnoelsalazar.github.io/multiple-dice/",
                "https://github.com/isaiahnoelsalazar/SalazarIsaiahNoel_BSIT701P_Lab2/",
                "https://github.com/isaiahnoelsalazar/Almond/",
                "https://github.com/isaiahnoelsalazar/Bread/",
                "https://github.com/isaiahnoelsalazar/Cod/",
                "https://github.com/isaiahnoelsalazar/SimpleFunctions/",
                "https://github.com/isaiahnoelsalazar/CSSimpleFunctions/",
                "https://www.facebook.com/profile.php?id=100085006483044",
                "https://x.com/IsaiahNoelSal16"
            ]
        }
    ]
};
script.textContent = JSON.stringify(speculationRules);
document.body.append(script);

const tabs = document.querySelectorAll(".tab");
const tab_containers = document.querySelectorAll(".tab-container");
const contents = document.querySelectorAll(".content");

function mouseEnter(index){
    tabs[index].style.textDecoration = "underline";
}

function mouseLeave(index){
    tabs[index].style.textDecoration = "none";
}

function mouseClick(index){
    tabs.forEach(tab => {
        tab.classList.remove("selected");
    })
    if (index == 0){
        tab_containers[0].style.borderRadius = "16px 16px 0 0";
        tab_containers[1].style.borderRadius = "16px 16px 16px 0";
        tab_containers[2].style.borderRadius = "16px";
        tabs[0].style.borderRadius = "16px 16px 0 0";
        tabs[1].style.borderRadius = "0 0 0 16px";
        tabs[2].style.borderRadius = "0";
    }
    if (index == 1){
        tab_containers[0].style.borderRadius = "16px 16px 0 16px";
        tab_containers[1].style.borderRadius = "16px 16px 0 0";
        tab_containers[2].style.borderRadius = "16px 16px 16px 0";
        tabs[0].style.borderRadius = "0 0 16px 0";
        tabs[1].style.borderRadius = "16px 16px 0 0";
        tabs[2].style.borderRadius = "0 0 0 16px";
    }
    if (index == 2){
        tab_containers[0].style.borderRadius = "16px";
        tab_containers[1].style.borderRadius = "16px 16px 0 16px";
        tab_containers[2].style.borderRadius = "16px 16px 0 0";
        tabs[0].style.borderRadius = "0";
        tabs[1].style.borderRadius = "0 0 16px 0";
        tabs[2].style.borderRadius = "16px 16px 0 0";
    }
    tabs[index].classList.add("selected");
    contents.forEach((content, i) => {
        content.style.display = i == index ? "flex" : "none";
    });
}

window.onload = function() {
    mouseClick(0);
}