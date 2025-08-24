let live_websites = [
    "https://isaiahnoelsalazar.github.io/bad-phone-number-inputs/", "Bad Phone Number Inputs",
    "https://isaiahnoelsalazar.github.io/black/", "Black",
    "https://isaiahnoelsalazar.github.io/codenotes/", "Code Notes",
    "https://isaiahnoelsalazar.github.io/doc-to-pdf/", "DOC to PDF",
    "http://openweb.fwh.is/e-commerce.php/", "E-Commerce Prototype",
    "https://isaiahnoelsalazar.github.io/electronic-gadget-store/", "Electronic Gadget Store | School Work",
    "https://isaiahnoelsalazar.github.io/live-html/", "Live HTML",
    "http://openweb.fwh.is/", "Live PHP Pages",
    "https://isaiahnoelsalazar.github.io/multiplication-table/", "Multiplication Table | School Work",
    "https://isaiahnoelsalazar.github.io/thml/", "My old HTML practice website",
    "https://isaiahnoelsalazar.github.io/personal-webpage/", "Personal Webpage | School Work",
    "https://isaiahnoelsalazar.github.io/pdf-to-doc/", "PDF to DOC",
    "https://isaiahnoelsalazar.github.io/simple-web-calculator/", "Simple Web Calculator",
    "https://isaiahnoelsalazar.github.io/typey/", "Typey",
    "https://isaiahnoelsalazar.github.io/webbook/", "WebBook",
    "https://isaiahnoelsalazar.github.io/website-observation-1/", "Website Observation 1 | School Work",
    "https://isaiahnoelsalazar.github.io/women-with-baskets/", "Women with Baskets | School Work"
];
let android_applications = [
    "https://isaiahnoelsalazar.github.io/basabasa-download/", "Basabasa: Free Manga Reader App (Android 7.1+)",
    "https://isaiahnoelsalazar.github.io/billcalculator-download/", "Bill Calculator (Android 4.1+)",
    "https://github.com/isaiahnoelsalazar/BusSeatingArrangementExample/", "BusSeatingArrangementExample (Android 4.1+)",
    "https://isaiahnoelsalazar.github.io/compass-download/", "Compass (Android 4.2+)",
    "https://isaiahnoelsalazar.github.io/htmleditor-download/", "HTML Editor (Android 4.2+)",
    "https://isaiahnoelsalazar.github.io/matchupgame-download/", "Match Up Game (Android 7.0+) | School Work",
    "https://github.com/isaiahnoelsalazar/Monay/", "Monay (Android 7.0+) | School Work",
    "https://isaiahnoelsalazar.github.io/note-download/", "Note (Android 4.1+)",
    "https://github.com/isaiahnoelsalazar/saia_ProjectA/", "saia_ProjectA (Android 6.0+)",
    "https://github.com/isaiahnoelsalazar/sAP/", "sAP (Android 6.0+)",
    "https://isaiahnoelsalazar.github.io/shoppinglist-download/", "Shopping List App (Android 7.0+)",
    "https://github.com/isaiahnoelsalazar/SkillSwap/", "SkillSwap (Android 7.0+)",
    "https://isaiahnoelsalazar.github.io/squulite-download/", "SQuuLite (Android 7.0+)",
    "https://isaiahnoelsalazar.github.io/studentregistrationapp-download/", "Student Registration App (Android 7.0+)",
    "https://github.com/isaiahnoelsalazar/Ulap/", "Ulap (Android 7.0+)"
];
let csharp_programs = [
    "https://github.com/isaiahnoelsalazar/AUTOLANDIA-Sales-and-Revenue-Report-Generation-System/", "AUTOLANDIA Sales and Revenue Report Generation System | Capstone Project",
    "https://github.com/isaiahnoelsalazar/ScreenRecorder/", "Screen Recorder",
    "https://github.com/isaiahnoelsalazar/POS-System-Prototype/", "POS System Prototype"
];
let python_programs = [
    "https://github.com/isaiahnoelsalazar/SamplePythonTurtleKeyInput/", "Sample Python Turtle - Key Input | School Work",
    "https://github.com/isaiahnoelsalazar/SamplePythonTurtleYellowDucky/", "Sample Python Turtle - Yellow Ducky | School Work"
];
let unity_games = [
    "https://github.com/isaiahnoelsalazar/SalazarIsaiahNoel_BSIT701P_Lab2/", "SalazarIsaiahNoel_BSIT701P_Lab2 | School Work"
];
let android_dependencies = [
    "https://github.com/isaiahnoelsalazar/SimpleFunctions/", "SimpleFunctions (Android 7.1+)"
];
let nuget_packages = [
    "https://github.com/isaiahnoelsalazar/CSSimpleFunctions/", "CSSimpleFunctions (.NET 6.0+ | .NET Framework 4.5+)"
];
let categories = [
    "Live Websites", live_websites,
    "Android Applications", android_applications,
    "C# Programs", csharp_programs,
    "Python Programs", python_programs,
    "Unity Games", unity_games,
    "Android Dependencies", android_dependencies,
    "NuGet Packages", nuget_packages
];
let my_works_div = document.getElementById("my-works-div-1");
let switcher = false;
let h2 = document.createElement("h2");
categories.forEach(category => {
    if (!switcher){
        h2.textContent = category;
        switcher = true;
    } else {
        h2.textContent += ` (${category.length / 2})`;
        my_works_div.appendChild(h2);
        h2 = document.createElement("h2");
        let switcher1 = false;
        let div = document.createElement("div");
        div.classList.add("link-list");
        let a = document.createElement("a");
        category.forEach(item => {
            if (!switcher1){
                a.href = item;
                switcher1 = true;
            } else {
                a.textContent = item;
                div.appendChild(a);
                a = document.createElement("a");
                switcher1 = false;
            }
        });
        my_works_div.appendChild(div);
        if (categories.indexOf(category) === categories.length - 1){
            return;
        }
        let spacer = document.createElement("div");
        let separator = document.createElement("div");
        spacer.id = "spacer";
        separator.id = "separator";
        div.appendChild(spacer);
        div.appendChild(separator);
        div.appendChild(spacer.cloneNode());
        switcher = false;
    }
});