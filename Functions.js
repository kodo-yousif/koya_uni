function yalla(){
    var x = document.getElementById("garann").value;
    var y = document.getElementsByClassName("axir");
    for(var f=0 ; f<y.length ; f++){
        if( y[f].getElementsByTagName("h3")[0].innerHTML.search(x) < 0 ){
            document.getElementById("garann").value = "";
            y[f].style.display= "none";
        }else{
            document.getElementById("garann").value = "";
            y[f].style.display= "block";
        }
    }
    

}

function yakam(obj){
        document.getElementsByClassName("subscribe")[0].innerHTML = "Subscribe";
    }

function yakams(obj){
        document.getElementsByClassName("subscribe")[0].innerHTML = "News room";
    }

function safe(){
    if(document.getElementById("abcfr").value.length >0 && document.getElementById("abcfr").value.search("@")>0){
    document.getElementById("abcfr").value = '';
    alert("registered successfully");

}else{
        alert("please enter email in correct format");
    }
 }    

 function kyakam(obj){
        document.getElementsByClassName("subscribe")[0].innerHTML = "بەشداری کردن";
    }

function kyakams(obj){
        document.getElementsByClassName("subscribe")[0].innerHTML = "ژووری زانیاری";
    }

function ksafe(){
    if(document.getElementById("abcfr").value.length >0 && document.getElementById("abcfr").value.search("@")>0){
    document.getElementById("abcfr").value = '';
    alert("بە سەرکەوتوی تۆمار کرا");

}else{
        alert("تکایە ئیمەیڵەکە بە شیوەکی ڕاست داخل بکە");
    }
 }  
function english(){
    try{document.getElementById("menu").style.flexDirection = "row";}catch(err){}
    try{document.getElementById("hkoya").href = "about.html";}catch(err){}
    try{document.getElementById("hkoya2").href = "about.html";}catch(err){}
    try{document.getElementById("garann").placeholder = "Search...";}catch(err){}
    try{document.getElementsByClassName("dagra")[0].href = "home.html";}catch(err){}
    try{document.getElementById("home").innerHTML = "Home";}catch(err){}
    try{document.getElementById("about").innerHTML = "About";}catch(err){}
    try{document.getElementById("study").innerHTML = "Study at Koya";}catch(err){}
    try{document.getElementById("faculty").innerHTML = "Faculties";}catch(err){}
    try{document.getElementById("research").innerHTML = "Research";}catch(err){}
    try{document.getElementById("library").innerHTML = "Library & Musseum";}catch(err){}
    try{document.getElementById("life").innerHTML = "Life on Campus";}catch(err){}
    try{document.getElementById("events").innerHTML = "Events";}catch(err){}
    try{document.getElementById("en").innerHTML = "Engineering";}catch(err){}
    try{document.getElementById("scc").innerHTML = "Science & Health";}catch(err){}
    try{document.getElementById("hu").innerHTML = "Humanity & Social";}catch(err){}
    try{document.getElementById("dxtor").innerHTML = "School of Medicine";}catch(err){}
    try{document.getElementById("ed").innerHTML = "Education";}catch(err){}
    try{document.getElementById("arch").innerHTML = "Architectural";}catch(err){}
    try{document.getElementById("civi").innerHTML = "Civil";}catch(err){}
    try{document.getElementById("geo").innerHTML = "Geotechnical";}catch(err){}
    try{document.getElementById("chem").innerHTML = "Chemical";}catch(err){}
    try{document.getElementById("pet").innerHTML = "Petroleum";}catch(err){}
    try{document.getElementById("softwaree").innerHTML = "Software";}catch(err){}
    try{document.getElementById("manu").innerHTML = "Manufacturing";}catch(err){}
    try{document.getElementById("bio").innerHTML = "Biology";}catch(err){}
    try{document.getElementById("chemm").innerHTML = "Chemistry";}catch(err){}
    try{document.getElementById("math").innerHTML = "Mathematics";}catch(err){}
    try{document.getElementById("phy").innerHTML = "Physics";}catch(err){}
    try{document.getElementById("cli").innerHTML = "Clinical Psychology";}catch(err){}
    try{document.getElementById("micro").innerHTML = "Med. Microbiology";}catch(err){}
    try{document.getElementById("law").innerHTML = "Law";}catch(err){}
    try{document.getElementById("econ").innerHTML = "Economy";}catch(err){}
    try{document.getElementById("inglizy").innerHTML = "English";}catch(err){}
    try{document.getElementById("kurdii").innerHTML = "Kurdish";}catch(err){}
    try{document.getElementById("arabii").innerHTML = "Arabic";}catch(err){}
    try{document.getElementById("histo").innerHTML = "History";}catch(err){}
    try{document.getElementById("geooo").innerHTML = "Geography";}catch(err){}
    try{document.getElementById("din").innerHTML = "Religious";}catch(err){}
    try{document.getElementById("baxcha").innerHTML = "Kindergarten";}catch(err){}
    try{document.getElementById("psyy").innerHTML = "Psychology";}catch(err){}
    try{document.getElementById("fizia").innerHTML = "Physical";}catch(err){}
    try{document.getElementById("disanenglizi").innerHTML = "English";}catch(err){}
    try{document.getElementById("basicc").innerHTML = "Basic Education";}catch(err){}
    try{document.getElementById("home").href = "Home.html";}catch(err){}
    try{document.getElementById("about").href = "about.html";}catch(err){}
    try{document.getElementById("study").href = "sakoya.html";}catch(err){}
    try{document.getElementById("faculty").href = "types.html";}catch(err){}
    try{document.getElementById("en").href = "en.html";}catch(err){}
    try{document.getElementById("softwaree").href = "software.html";}catch(err){}
    try{document.getElementById("scc").href = "sc.html";}catch(err){}
    try{document.getElementById("hu").href = "hu.html";}catch(err){}
    try{document.getElementById("ed").href = "ed.html";}catch(err){}
    try{document.getElementById("dxtor").href = "school.html";}catch(err){}
    try{document.getElementById("research").href = "r.html";}catch(err){}
    try{document.getElementById("library").href = "lam.html";}catch(err){}
    try{document.getElementById("life").href = "life.html";}catch(err){}
    try{document.getElementById("events").href = "e.html";    }catch(err){}
    try{document.getElementById("szanko1").innerHTML = "President @ Koya";
    document.getElementById("szanko1").style.direction = "ltr";}catch(err){}
    try{document.getElementById("szanko2").innerHTML = "Developing a vision for an academic institution, such as a university needs to be based on knowledge about the actual general conditions of the university.";
    document.getElementById("szanko2").style.direction = "ltr";}catch(err){}
    try{document.getElementById("szanko3").innerHTML = "Read More";
    document.getElementById("szanko3").href = "sarok.html";
    document.getElementById("szanko3").style.direction = "ltr";}catch(err){}
    try{document.getElementById("aro1").innerHTML = "The scientific journal of Koya University will provide a credible academic platform for the publication of articles covering a wide range of scientific disciplines.";
    document.getElementById("aro1").style.direction = "ltr";}catch(err){}
    try{document.getElementById("e1").innerHTML = "our latest news.";
    document.getElementById("e1").style.direction = "ltr";}catch(err){}
    try{document.getElementById("abcfr").placeholder = "Your Email";
    document.getElementById("abcfr").style.direction = "ltr";}catch(err){}
    try{document.getElementById("e3").innerHTML = "News Room";
    document.getElementById("e3").style.direction = "ltr";}catch(err){}
    try{document.getElementsByClassName("oo")[0].innerHTML = "Online Learning";
    document.getElementsByClassName("oo")[0].style.direction = "ltr";}catch(err){}
    try{document.getElementsByClassName("nn")[0].innerHTML = "Nwcha Nama";
    document.getElementsByClassName("nn")[0].style.direction = "ltr";}catch(err){}
    try{document.getElementsByClassName("elo2")[0].style.textAlign  = "left"; 
    document.getElementsByClassName("elo2")[0].style.direction = "ltr";
    document.getElementsByClassName("ff")[0].innerHTML  = "Tags";
    document.getElementsByClassName("ff")[1].innerHTML  = "Koya University";
    document.getElementsByClassName("ff")[2].innerHTML  = "University Park";
    document.getElementsByClassName("ff")[3].innerHTML  = "Danielle Mitterrand Boulevard";
    document.getElementsByClassName("ff")[4].innerHTML  = "Koya KOY45";
    document.getElementsByClassName("ff")[5].innerHTML  = "Kurdistan Region, Iraq";
    document.getElementsByClassName("ff")[6].innerHTML  = "Mobile: +964 (0)748 026 258";
    document.getElementsByClassName("ff")[7].innerHTML  = "it.office@koyauniversity.org";
    document.getElementsByClassName("ff")[8].innerHTML  = "URL: koya.university";}catch(err){}
    try{document.getElementsByClassName("opqq")[0].style.textAlign  = "left";
    document.getElementsByClassName("opqq")[0].style.direction = "ltr";
    document.getElementsByClassName("opq")[0].innerHTML  = "BEHAR Center";
    document.getElementsByClassName("opq")[1].innerHTML = "Koya University English Language Centre (BEHAR) is a commercial unit at Koya University campus which is run by leading qualified English language instructors who are trained at the University of Arkansas specifically for English lecturers. Join BEHAR centre.";
    }catch(err){}
    try{document.getElementsByClassName("shex1")[0].style.textAlign  = "left";
    document.getElementsByClassName("shex1")[0].style.left = "79.5vw";
    document.getElementsByClassName("shex1")[0].innerHTML = "get an inspiring education"}catch(err){}
    try{document.getElementsByClassName("dagra")[0].innerHTML = "Home";
    document.getElementsByClassName("abab")[0].innerHTML = "The University";
    document.getElementsByClassName("abab")[1].style.direction = "ltr";
    document.getElementsByClassName("abab")[2].innerHTML = "<img src='about/about1.jpg' style='float: right;' >Koya University is located in the city of Koya (Koysinjaq),which is 1.0 hr drive to the East of the Kurdistan Region capital Erbil (Arbil, Hewlér) in Kurdistan Region of F.R. Iraq. It is on the foothills of beautiful high mountain. Its campus has been carefully laid out to embrace the beautiful mountainous nature.";
    document.getElementsByClassName("abab")[3].innerHTML = "The Koya University was established in 2003 and has developed noticeably. In 2010, Koya University was restructured from colleges to faculty systems to enhance the interactions between similar academic fields. Today the University has 4 faculties -Engineering, Sciences and Health, Humanities and Social Sciences, Education and a School of Medicine which consist of 25 departments in different fields, such as Petroleum Engineering, Geotechnical Engineering, Clinical Psychology, Social Science and Medical Microbiology as well as Sport Education.";
    document.getElementsByClassName("abab")[4].innerHTML = "After the Kurdish uprising of 1991 and the liberation of large parts of Iraqi Kurdistan, the process of promoting education become the stream policy of Kurdish establishment. Kurdistan regional government (KRG) played a vital role in setting up academic institutions. In addition to developing Salahaddin University, the KRG reopened the Sulaimani University as well as establishing Duhok University.";
    document.getElementsByClassName("abab")[5].innerHTML = "<img src='about/about2.jpg' style='margin-left: 13vw;'>Continuing to promoting education as a milestone in nation building process the KRG opened both colleges of Education, Sharia and Law during academic year of 2000-2001 in the city of Koya which were affiliated to Sulaimani University. Later, they became the foundation for Koya University. On the 11 October 2003 in the presence of the Prime Minister Dr Barham Salah, the Minister of Higher Education Ministry, students and teachers, the foundation of Koya University was laid by Mr Jalal Talabani.";
    document.getElementsByClassName("abab")[6].innerHTML = "In accordance with the ministerial order issued by the Ministry of Higher Education and Scientific Research / Decree No.370/1/6 on 28//1/ 2004 and in compliance with the article(1) of Council of Ministers, Presidency decree No.(218) on 29 November 2003 Koya University was established for the academic year (2003–2004). The first graduation ceremony of Koya University was held on July, 20th, 2006.";}catch(err){}
    try{document.getElementsByClassName("jjj")[0].innerHTML = "Koya University Events Calendar"}catch(err){}
    try{document.getElementsByClassName("ppp")[1].style.direction = "ltr";
    document.getElementsByClassName("ppp")[1].innerHTML = "<h2 style='font-size: 1.7vw; margin-top: 5vw; margin-bottom: 0vw; ' class='jwan'>Life on Campus</h2>                <p style='font-size: 1.4vw;  line-height: 2vw; margin: 0vw;' >Aside from its proximity to classes, the library, and University events, on-campus housing gives students the chance to meet others and participate in school-sponsored activities.</p>                <h2 style='font-size: 1.7vw; margin-top: 5vw; margin-bottom: 0vw; ' class='jwan'>Freshman Housing </h2>                <p style='font-size: 1.4vw;  line-height: 2vw; margin: 0vw;' >Incoming freshmen are required to live on campus and have a choice between some our Student high rises. Freshmen are housed together, and most freshmen will share a double room with another freshman student. All the residence halls of Koya University are on Campus and are provided with regular administrative and security services. Koya University has five multistory residence halls, two for boys and three for girls. All undergraduate students who study at Koya University and whom their original place of residence is outside Koya city, are eligible for residence in the halls. </p>                <p style='font-size: 1.4vw;  line-height: 2.1vw;'>In each residence hall there is an administrative unit with some staff to respond to the students' needs and problems within the limits of their authority; otherwise, raise the issue to the Directorate of Residence Halls. Urgent issues are raised immediately via mobile phone or wireless, while non-urgent ones are raised by email sent via university aproved student email.</p>                                <p style='font-size: 1.4vw;  line-height: 2.1vw;'>In addition to raising students' environmental awareness, the Directorate of the Residence Halls is responsible for ensuring a clean and healthy environment for the resident students. To this end, all the cleaning work of the buildings has been contracted out through tendering to a company which is responsible for cleaning the buildings on daily basis, collecting and removing garbage from the buildings and taking it to garbage dumps outside the university campus.</p>                <p style='font-size: 1.4vw;  line-height: 2.1vw;'>Each building consists of five storeys plus basement; on each floor, there are 25 shared rooms i.e. there is a total of 125 room in each building. Each floor has also two small rooms provided with washing machines and used as laundry. Total number of laundry rooms in each building is 10.Each floor also contains four computer halls. Total computer rooms are 20 in each buildingThere is also a special room for the Resident Assistant/ Resident Mentor on each floor.On the ground floor of each building there is a big sports hall equipped with different sporting facilities for students who are interested in sports.On the second floor of each building there is a big students' cafeteria which is annually hired out with its income used for the benefit of the students.On the third floor of each building there is a big hall for reading.On each floor there is a communal kitchen shared by 4 rooms. It includes all kitchen appliances like cookers, refrigerators and other kitchen tools.There is a communal bath and toilet shared by every 4 rooms on each floor.On the ground floor of each building there is an administrative unit with some staff to respond to look after students' affairs and respond to their comments and needs if they can, or raise them to the people concerned.</p>                <h2 style='font-size: 1.7vw; margin-top: 5vw; margin-bottom: 0vw; ' class='jwan'>Non-Smoking Housing </h2>                <p style='font-size: 1.4vw;  line-height: 2vw; margin: 0vw;' >All College housing is smoke free. If you or your roommate choose to smoke, it must be 30 feet from any building. We still ask you to indicate your smoking status and preference for a smoking or nonsmoking pairing on the housing application.</p>                <h2 style='font-size: 1.7vw; margin-top: 5vw; margin-bottom: 0vw; ' class='jwan'>Sport Facilities</h2>                <p style='font-size: 1.4vw;  line-height: 2vw; margin: 0vw;' >The centre has been built to ensure University students and staff continue to enjoy access to sporting and recreational opportunities on campus.</p>               <p style='font-size: 1.4vw;  line-height: 2.1vw;'>                    The sports centre will house the following sports areas and facilities:                    <ul style='font-family: 'Lora', serif; font-size: 1.4vw; line-height: 2vw;'>                        <li>a multi-purpose sports hall suitable for a range of sporting activities up to national level, including badminton, volleyball, table tennis and netball</li>                        <li>two multi-purpose studios, suitable for a range of sports, group exercise and dance activities</li>                        <li>a floodlit 3G pitch suitable for football</li>                        <li>Restaurants and cafeterias</li>                    </ul>                </p>                <img src='wide.jpg' style='width: 60vw; height: 20vw; margin-left: 5.5vw;'>";}catch(err){}
    try{document.getElementsByClassName("ppp")[0].innerHTML = "Life on Campus";}catch(err){}
    try{document.getElementsByClassName("zxz")[0].innerHTML = "Study At Koya";
    document.getElementsByClassName("zxz")[1].style.direction = "ltr";
    document.getElementsByClassName("zxz")[1].innerHTML = "<p style='font-size: 1.4vw;  line-height: 2vw;' >Studying at The Koya University is likely to be different from your previous experiences, especially if you have not studied independently on your own. We educate individuals to become critical/independent thinker and pushing the limit when needed. You will be expected to organize your own time and manage your own work. You will experience different styles of teaching and be expected to spend significant amounts of time studying independently. Also, the University schedule of terms and semesters might be different to what you are familiar with. It is important to remember that there is always help available if you have questions. </p>                <p style='font-size: 1.4vw;  line-height: 2vw;' >                    Our main stream policy based on knowledge transferring for a brighter future. Our academic community encourage students to learn how they can mobiles for                      <a href='https://www.nottingham.ac.uk/studyingeffectively/home.aspx' style='text-decoration: none; color:blue; text-shadow: none;'> Studying Effectively.</a>               </p>                <h2 style='font-size: 1.7vw; margin-top: 5vw; margin-bottom: 0vw; ' class='jwan'>Academic year</h2>                <p style='font-size: 1.4vw;  line-height: 2.1vw;'>The academic year in Kurdistan Region runs from September to June and is split into two semesters:                    <ul style='font-size: 1.4vw; font-family: 'Lora', serif;'>                        <li>Autumn Semester (Semester 1) September – January</li>                        <li>Spring Semester (Semester 2) January – June</li>                    </ul>                </p>                              <h2 style='font-size: 1.7vw; margin-top: 5vw; margin-bottom: 0vw; ' class='jwan'>Exams</h2>               <p style='font-size: 1.4vw;  line-height: 2.1vw;'>All exams for taught courses (excluding research) are at the end of each semester. Dates are available from the faculties' Exams Office.</p>                <h2 style='font-size: 1.7vw; margin-top: 5vw; margin-bottom: 0vw; ' class='jwan'>Course Modules</h2>                <p style='font-size: 1.4vw;  line-height: 2.1vw; margin: 0vw;'>At the beginning of each academic year you will be informed about any compulsory course modules which build up your total program credits.</p>                <h2 style='font-size: 1.7vw; margin-top: 5vw; margin-bottom: 0vw; ' class='jwan'>Student Handbook</h2>                <p style='font-size: 1.4vw;  line-height: 2.1vw; margin: 0vw;'>The Student Handbook is published by The Office of the Vice President for Scientific and Student Affairs at Koya University. The information in this Handbook is collected and compiled continuously. Since the included programs and services are subject to continuous review and evaluation, the University reserves the right to make changes at any time without notice.</p>                <p style='font-size: 1.4vw;  line-height: 2.1vw;'>Details on how to study different routes at Koya University is given on the page linked below.</p>                <img src='sa/sa.jpg' style='margin-left:15vw ; height: 20vw; width: 40vw;'>"}catch(err){}
    try{document.getElementsByClassName("cvc")[0].innerHTML = "Research";
    document.getElementsByClassName("cvc")[1].style.direction ="ltr";
    document.getElementsByClassName("cvc")[1].innerHTML = "Many students, but not all, may have undertaken some research as part of their education, training or employment to date. Koya University values students engagement in project based research of industrial and community issues to increase local and international academic relations.";
    document.getElementsByClassName("cvc")[2].innerHTML = "Please visit Koya University Conferences listed at";
    document.getElementsByClassName("cvc")[2].style.marginLeft = "17vw";}catch(err){}
    try{document.getElementById("e3").onmouseover = function() { yakam(); };
    document.getElementById("e3").onmouseout = function() { yakams(); };
    document.getElementById("e3").onclick = function() { safe(); };}catch(err){}
}


function kurdish(){
    try{document.getElementById("e3").onmouseover = function() { kyakam(); };
    document.getElementById("e3").onmouseout = function() { kyakams(); };
    document.getElementById("e3").onclick = function() { ksafe(); };}catch(err){}
    try{document.getElementsByClassName("cvc")[0].innerHTML = "لێکۆڵینەوەکان";
        document.getElementsByClassName("cvc")[1].style.direction ="rtl";
        document.getElementsByClassName("cvc")[1].innerHTML = "پڕۆپاگەندە چییە؟<br>زاراوەی( پڕۆپاگەندە) ڕەگوڕیشەیەکی ئاینیی هەیەو لە زمانی لاتینیدا هەمان ئەو واتایەی هەبووە کە دواتر لە سەردەمانێکدا بۆتە پیشەو ئامانجی کەسانێک کە بە (میسیۆنێری مەسیحی : موژدەبەخشی کرستیانی) و (الداعیة ) ی ئیسلامی لە زمانی عەرەبیداو لە زمانی سەردەمیانەی کوردیشدا بە (بانگخواز) ناسراون. بەگوێرەی فەرهەنگی کامبریدج : ( بریتییە لە کۆی ئەو زانیاری، بیروباوەڕ، ڕاوبۆچوون یان وێنانەی کە زۆربەی جار تەنیا دیوێکی بەڵگەو ڕاستییەکان دەخەنەڕوو، بە مەبەستی کاریگەری خستنەسەر ڕاوبۆچوونی کەسانی تر).";
        document.getElementsByClassName("cvc")[2].innerHTML = "تکایە سەردانی ئەم ڵینکە بکە"
        document.getElementsByClassName("cvc")[2].style.marginLeft = "27vw";
}catch(err){}
    try{document.getElementsByClassName("zxz")[0].innerHTML = "خوێندن لە کۆیە";
    document.getElementsByClassName("zxz")[1].style.direction = "rtl";
    document.getElementsByClassName("zxz")[1].innerHTML = "                <p style='font-size: 1.4vw;  line-height: 2vw;' >رووداو - هەولێر<br>وەزارەتی تەندروستیی حکومەتی هەرێمی کوردستان ئاماری 24 کاژێری رابردووی بڵاوکردەوە و رایگەیاندووە، 224 کەسی دیکە تووشی ڤایرۆسی کۆرۆنا بوون، بەمەش تووشبووانی کۆرۆنا سێ هەزار کەسی تێپەڕاند.<br>ەزارەتی تەندروستی لە راگەیێندراوی ژمارە 114ی تایبەت بە ڤایرۆسی کۆرۆنا بڵاویکردووەتەوە، لە 24 کاژێری رابردوودا دوو هەزار و 106 پشکنینی کۆرۆنا ئەنجامدراون، ئەنجامی پشکنینی 224 کەسیان پۆزەتیڤ بووە، تووشبووە نوێیەکانیش 134یان لە سلێمانی، 25یان لە گەرمیان، 47یان لە هەولێر، 14یان لە هەڵەبجە و چواریشیان لە دهۆک بوون.</p><br>                <h2 style='font-size: 1.7vw; margin-top: 5vw; margin-bottom: 0vw; ' class='jwan'>ئافرەتێک بە جلی کوردییەوە شەوانە لە هەولێر شەربەت دەفرۆشێت</h2>                <p style='font-size: 1.4vw;  line-height: 2.1vw;'>دیلان و مەسعود دوو هاوژینی هەولێرن و چوار ساڵە ژیانی هاوژینییان پێکهێناوە، دوای ئەوەی مەسعود کارەکەی لە دەستدەدات، هاوژینەکەی بڕیاردەدات ئەرکی بەخێوکردنی خێزانەکەی بگرێتە ئەستۆ و لەسەر عەرەبانەیەک شەربەتی سرووشتی بفرۆشێت. <br>یلان دایکی منداڵێکی سێ ساڵانە، لەسەر شەقامێکی گەڕەکی بەختیاری لە هەولێر عەرەبانەیەکی داناوە و ئێواران لە کاژێر 07:00 تاوەکو 12:00ـی شەو شەربەتی جۆراوجۆری سرووشتی دەفرۆشێت. دەڵێت 'ەم کارەی من دەیکەم هەم بۆ بژێوی خۆمە، هەم شتێکی باشیش دەدەمە خەڵک کە سرووشتیە و سوودی بۆ تەندروستیان هەیە'.  <br>ەو دوو هاوژینە بۆ ماوەی ساڵێکە ئەو کارە دەکەن، مەسعود کە هاوژینی دیلانە دەڵێت، لە کافتریایەک کاری کردووە، بەڵام کارەکەی لەدەستداوە. 'کاتێک دیلانی هاوژینم ئەم بیرۆکەیەی دانا من پشتگیریم کرد. ئێستا ئەو کاردەکات و من چاودێریی منداڵەکەمان دەکەم' </p>                <img src='sa/sa.jpg' style='margin-left:15vw ; height: 20vw; width: 40vw;'>";}catch(err){}
    try{document.getElementsByClassName("ppp")[0].innerHTML = "ژیان لە زانکۆ";}catch(err){}
    try{document.getElementsByClassName("ppp")[1].style.direction = "rtl";
    document.getElementsByClassName("ppp")[1].innerHTML = "<h2 style='font-size: 1.7vw; margin-top: 5vw; margin-bottom: 0vw; ' class='jwan'>کوردێک ئۆتۆمبێلەکەی سەرۆکوەزیرانی بەریتانیا دەقوپێنێت</h2><p style='font-size: 1.4vw;  line-height: 2vw; margin: 0vw;' > رووداو - هەولێر<br>دوای ئەوەی کوردێک لە بەریتانیا بەمەبەستی ناڕەزایی دەربڕین دژی هێرشەکانی تورکیا دەچێتە بەردەم کاروانی ئۆتۆمبێلەکانی سەرۆکوەزیرانی ئەو وڵاتە، ئۆتۆمبێلی پێشەوەی کاروانەکە لەناکاو دەوەستێت، بەوهۆیەشەوە پێکدادان لەنێوان دوو ئۆتۆمبێلی کاروانەکە روودەدات. <br>وەکو لە گرتەیەکی ڤیدیۆییدا دەردەکەوێت، ئەو کوردە لەناکاو دەچێتە بەردەم کاروانی ئۆتۆمبێلەکانی بۆریس جۆنسن، سەرۆکوەزیرانی بەریتانیا، بەهۆی پێکدادانی دوو ئۆتۆمبێلی کاروانەکەشەوە ئۆتۆمبێلی سەرۆکوەزیران دەقوپێت.</p>                <h2 style='font-size: 1.7vw; margin-top: 5vw; margin-bottom: 0vw; ' class='jwan'>وەزیری تەندروستی: رێژەی مردن بە کۆرۆنا گەیشتووەتە 3.7٪</h2>                <p style='font-size: 1.4vw;  line-height: 2vw; margin: 0vw;' > رووداو-هەولێر<br>وەزیری تەندروستی هەرێمی کوردستان دۆخی کۆرۆنا لە هەرێمی کوردستان بە مەترسیدار ناودەبات و دەڵێت، ژمارەی تووشبووان رۆژ لە دوای رۆژ زیاتر دەبێت و رێژەی مردن بە کۆرۆنا گەیشتووەتە 3.7٪. هەروەها دەڵێت، زۆربەی تووشبووان و مردووانی کۆرۆناش لە سنووری سلێمانین. <br> دکتۆر سامان بەرزنجی، وەزیری تەندروستیی هەرێمی کوردستان کۆنفرانسێکی رۆژنامەڤانی لەبارەی دوایین ئامارەکانی کۆرۆنا لە هەرێمی کوردستان ئەنجامدا و گوتی، لەدوای رۆژانی جەژنی رەمەزانی ئەمساڵ بڵاوبوونەوەی ڤایرۆسی کۆرۆنا لە هەرێمی کوردستان رووی لە هەڵکشان کردووە و بەپێی دوایین ئاماری وەزارتی تەندروستی تاوەکو ئێستا 2872 تووشبووی کۆرۆنا تۆمارکراون و 1525 تووشبوو لە نەخۆشخانەکان ماونەتەوە و 82 کەسیش گیانیان لەدەستداوە. </p>                <img src='wide.jpg' style='width: 60vw; height: 20vw; margin-left: 5.5vw;'>            </div>";}catch(err){}
    try{document.getElementsByClassName("jjj")[0].innerHTML = "خشتەی چالاکیەکانی زانکۆی کۆیە"}catch(err){}
    try{document.getElementsByClassName("dagra")[0].innerHTML = "سەرەتا";
    document.getElementsByClassName("abab")[0].innerHTML = "زانکۆکەمان";
    document.getElementsByClassName("abab")[1].style.direction = "rtl";
    document.getElementsByClassName("abab")[2].innerHTML = "<img src='about/about1.jpg' style='float: right;' >زانکۆی کۆیه‌ که‌وتۆته‌ شاری کۆیه‌ ( کۆیسنجاق )، که‌ کاتژمێرێک ڕێ دووره‌ له‌ ڕۆژهه‌ڵاتی هه‌ولێری پایته‌ختی هه‌رێمی کوردستانه‌وه‌ له‌ باکوری عێراق. زانکۆکه‌ که‌وتۆته‌ دامێنی چیایه‌کی به‌رزی دڵڕفێن. کامپه‌سی زانکۆی کۆیه‌ به‌جۆرێک داڕێژراوه‌ که‌ هه‌موو دیمه‌نه‌ سه‌رنجڕاکێشه‌کانی سروشتێکی شاخاوی له‌خۆبگرێت.زانکۆی کۆیه‌ ساڵی 2003 دامه‌زراو تائێستاش به‌شێوه‌یه‌کی به‌رچاو گه‌شه‌ی کردووه‌. له‌ساڵی 2010 دا هه‌یکه‌لیه‌تی زانکۆی کۆیه‌ گۆڕانکاری به‌سه‌ردا هات و له‌ سیسته‌می کۆلیژیه‌وه‌ گۆڕدرا بۆ سیسته‌می فه‌که‌ڵتی به‌مه‌به‌ستی زیادکردن و به‌ره‌وپێشبردنی کارلێکی نێوان بواره‌ ئه‌کادیمیه‌ وێکچوه‌کان.";
    document.getElementsByClassName("abab")[3].innerHTML = "له‌ئێستادا زانکۆی کۆیه‌ له‌چوار فه‌که‌ڵتی پێک هاتووه‌، ئه‌وانیش بریتین له‌هه‌ریه‌ک له‌ فه‌که‌ڵتیه‌کانی ( ئه‌ندازیاری، زانست و ته‌ندروستی، مرۆڤایه‌تیه‌کان و زانسته‌ کۆمه‌ڵایه‌تیه‌کان وه‌هه‌روه‌ها فه‌که‌ڵتی په‌روه‌رده‌ ) له‌گه‌ڵ 25 به‌ش له‌بواره‌ جیاوازه‌کاندا، وه‌کو  به‌شی ئه‌ندازیاری نه‌وت، ئه‌ندازیاری جیۆته‌کنیکی، ده‌رونناسی پزیشکی، زانستی کۆمه‌ڵایه‌تی و مایکڕۆبایه‌لۆجی پزیشکی له‌گه‌ڵ په‌روه‌رده‌ی وه‌رزش.وابه‌دوای ڕاپه‌ڕینه‌ مه‌زنه‌که‌ی به‌هاری ساڵی 1991 و ئازادکردنی به‌شێکی زۆری کوردستانی عێڕاق، پڕۆسه‌ی به‌ره‌وپێش بردنی که‌رتی په‌روه‌رده‌ بووه‌ پلانێک و سیاسه‌تێکی به‌رده‌وام له‌ دامه‌زراوه‌ی کوردیدا. له‌م نێوه‌نده‌دا حکومه‌تی هه‌رێمی کوردستان ڕۆڵێکی به‌رچاوی بینی له‌ بنیادنانی دامه‌زراوه‌ ئه‌کادیمیه‌کاندا. سه‌رباری گه‌شه‌پێدانی زانکۆی سه‌ڵاحه‌دین، حکومه‌تی هه‌رێمی کوردستان دوباره‌ زانکۆی سلێمانی کرده‌وه‌ و زانکۆی دهۆکیشی دامه‌زراند. ";
    document.getElementsByClassName("abab")[4].innerHTML = "له‌پڕۆسه‌ی به‌‌ده‌وامبونی گرنگی پێدانی زیاتر به‌ خوێندنی باڵا وه‌کو پێویستیه‌کی بابه‌تی و زانستی، حومه‌ت هه‌ردوو کۆلێژی په‌روه‌رده‌ و شه‌ریعه‌ی له‌ کۆیه‌ کرده‌وه‌ که‌ سه‌ربه‌ زانکۆی سلێمانی بوون. دواتر ئه‌م دوو کۆلێژه‌ بوونه‌ به‌ردی بناغه‌ی دامه‌زراندنی زانکۆی کۆیه‌.";
    document.getElementsByClassName("abab")[5].innerHTML = "<img src='about/about2.jpg' style='margin-left: 13vw;'> به‌م شێوه‌یه‌ له‌ 11 ی تشرینی یه‌که‌می ساڵی 2003 به‌ئاماده‌بوونی سه‌رۆکی حکومه‌تی هه‌رێمی کوردستان د. به‌رهه‌م ساڵح و خوێندکاران و مامۆستایان، به‌ردی بناغه‌ی زانکۆی کۆیه‌ له‌لایه‌ن به‌ڕێز جه‌لال تاله‌بانیه‌وه‌ دانرا.";
    document.getElementsByClassName("abab")[6].innerHTML = "به‌پێی فه‌رمانێکی وزاری ژماره‌ 370/1/6 له‌به‌رواری 28 ی کانوونی دووه‌می ساڵی 2004 که‌له‌لایه‌ن وه‌زیری خوێندنی باڵاو توێژینه‌وه‌یه‌ی زانستی ده‌رکرا وه‌ به‌گوێره‌ی ماده 1ی فه‌رمانی سه‌روکایه‌تی ئه‌نجومه‌نی وه‌زیران ژماره‌ ( 218 ) له‌به‌رواری 29 ی تشرینی دووه‌می 2003 زانکۆی کۆیه‌ بۆساڵی خوێندنی 2003-2004 دامه‌زرا. له‌کۆتایی ساڵی خوێندنی 2003-2004، یه‌که‌م ئاهه‌نگی خولی ده‌رچوونی خوێندکارانی زانکۆی کۆیه‌ له‌به‌رواری 20 ی ته‌موزی ساڵی 2006 به‌ڕێوه‌چوو.";
    }catch(err){}
    try{document.getElementsByClassName("shex1")[0].style.textAlign  = "right";
    document.getElementsByClassName("shex1")[0].style.left = "82.5vw";
    document.getElementsByClassName("shex1")[0].innerHTML = "بخوێنە بە ورەی بەرز"}catch(err){}
    try{document.getElementsByClassName("opqq")[0].style.textAlign  = "right";
    document.getElementsByClassName("opqq")[0].style.direction = "rtl";
    document.getElementsByClassName("opq")[0].innerHTML  = "سەنتەری بەهار";
    document.getElementsByClassName("opq")[1].innerHTML = "دوای ئەوەی وەزارەتی خوێندنی باڵای هەرێمی کوردستان بڕیاریدا کۆتایی بە پرۆسەی خوێندن بهێنێت و رایگەیاند؛ ئەو قوتابیانەی لە خولی یەکەمی ئەمساڵ دەرنەچوون دەتوانن وەک قەرەبوو لێکۆڵینەوە یان راپۆرتێک ئامادەبکەن تاوەکو بە دەرچوو هەژمار بکرێن، بازاڕی کڕینی نایاسایی راپۆرتی زانستی لە هەرێمی کوردستان زیادیکردووە.";
}catch(err){} 
    try{document.getElementsByClassName("elo2")[0].style.textAlign  = "right"; 
    document.getElementsByClassName("elo2")[0].style.direction = "rtl";
    document.getElementsByClassName("ff")[0].innerHTML  = "تاگەکان";
    document.getElementsByClassName("ff")[1].innerHTML  = "زانکۆی کۆیە";
    document.getElementsByClassName("ff")[2].innerHTML  = "پاڕکی زانکۆ";
    document.getElementsByClassName("ff")[3].innerHTML  = "دانیاڵ ئینگلیزی";
    document.getElementsByClassName("ff")[4].innerHTML  = "کۆیە کۆی٤٥";
    document.getElementsByClassName("ff")[5].innerHTML  = "هەرێمی کوردستان ئیراق";
    document.getElementsByClassName("ff")[6].style.direction = "rtl";
    document.getElementsByClassName("ff")[6].innerHTML  = "ژمارە تەلەفۆن: +٩٦٤ ٧٤٨ ٠٢٦ ٢٥٨";
    document.getElementsByClassName("ff")[7].innerHTML  = "ئیمەیڵ بە کوردی نانوسرێ";
    document.getElementsByClassName("ff")[8].innerHTML  = "لەناو وێبسایتەکەمانی";}catch(err){}
    try{document.getElementsByClassName("nn")[0].innerHTML = "نوچە نامە";
    document.getElementsByClassName("nn")[0].style.direction = "rtl";}catch(err){}
    try{document.getElementsByClassName("oo")[0].innerHTML = "خوێندنی ئۆنڵاین";
    document.getElementsByClassName("oo")[0].style.direction = "rtl";}catch(err){}
    try{document.getElementById("abcfr").placeholder = "داخل کردنی ئیمەیڵ";
    document.getElementById("abcfr").style.direction = "rtl";}catch(err){}
    try{document.getElementById("e3").innerHTML = "ژووری زانیاری";
    document.getElementById("e3").style.direction = "rtl";}catch(err){}
    try{document.getElementById("e1").innerHTML = "نوێترین زانیاری ئێمە";
    document.getElementById("e1").style.direction = "rtl";}catch(err){}
    try{document.getElementById("aro1").innerHTML = "ئەو رێکارەی بۆ پاراستنی ڤلادیمیر پووتین، سەرۆکی رووسیا دەگیرێتە بەر زۆر جیاوازە لە هی سەرۆکانی دیکەش، بۆ نموونە دۆناڵد ترەمپ، سەرۆکی ئەمریکا. ئەو کەسانەی کە پێویستە پووتین ببینن دەبێت بە دوو توونێلدا تێپەڕن،";
    document.getElementById("aro1").style.direction = "rtl";}catch(err){}
    try{document.getElementById("szanko3").innerHTML = "بینینی بابەت";
    document.getElementById("szanko3").href = "ksarok.html";
    document.getElementById("szanko3").style.direction = "rtl";}catch(err){}
    try{document.getElementById("szanko2").innerHTML = "کۆرۆنا بە زۆربەی وڵاتانی جیهاندا بڵاوبووەتەوە، لە بەشێک لە وڵاتان ئامارەکانی تووشبوون و گیانلەدەستدان لە هەڵکشاندان، هەموو تەمەن و چین و توێژێک بە هەژار و دەوڵەمەند هەوڵدەدەن خۆیان لە کۆرۆنا بپارێزن،";
    document.getElementById("szanko2").style.direction = "rtl";}catch(err){}
    try{document.getElementById("szanko1").innerHTML = "سەرۆکی زانکۆ";
    document.getElementById("szanko1").style.direction = "rtl";}catch(err){}
    try{document.getElementById("menu").style.flexDirection = "row-reverse";}catch(err){}
    try{document.getElementById("hkoya").href = "kabout.html";}catch(err){}
    try{document.getElementById("hkoya2").href = "kabout.html";}catch(err){}
    try{document.getElementById("garann").placeholder = "...گەڕان";}catch(err){}
    try{document.getElementById("home").innerHTML = "دەستپێک";}catch(err){}
    try{document.getElementById("about").innerHTML = "لەبارەی ئێمە";}catch(err){}
    try{document.getElementById("study").innerHTML = "خوێندن لە کۆیە";}catch(err){}
    try{document.getElementById("faculty").innerHTML = "بەشەکان";}catch(err){}
    try{document.getElementById("research").innerHTML = "لێکۆڵینەوەکان";}catch(err){}
    try{document.getElementById("library").innerHTML = "کتێبخانە و شوێنەوار";}catch(err){}
    try{document.getElementById("life").innerHTML = "ژیان لە زانکۆ";}catch(err){}
    try{document.getElementById("events").innerHTML = "چالاکی"; }catch(err){}
    try{document.getElementById("en").innerHTML = "ئەندازیاری";}catch(err){}
    try{document.getElementById("scc").innerHTML = "زانست و تەندروستی";}catch(err){}
    try{document.getElementById("hu").innerHTML = "مرۆڤایەتی";}catch(err){}
    try{document.getElementById("dxtor").innerHTML = "دکتۆر";}catch(err){}
    try{document.getElementById("ed").innerHTML = "پەروەردە";}catch(err){}
    try{document.getElementById("arch").innerHTML = "ڕەسام";}catch(err){}
    try{document.getElementById("civi").innerHTML = "مەدەنی";}catch(err){}
    try{document.getElementById("geo").innerHTML = "جیۆ";}catch(err){}
    try{document.getElementById("chem").innerHTML = "کیمیاوی";}catch(err){}
    try{document.getElementById("pet").innerHTML = "نەوت";}catch(err){}
    try{document.getElementById("softwaree").innerHTML = "پڕۆگرامسازی";}catch(err){}
    try{document.getElementById("manu").innerHTML = "مادهوبالا";}catch(err){}
    try{document.getElementById("bio").innerHTML = "بادۆلۆجی";}catch(err){}
    try{document.getElementById("chemm").innerHTML = "کیمیا";}catch(err){}
    try{document.getElementById("math").innerHTML = "بیرکاری";}catch(err){}
    try{document.getElementById("phy").innerHTML = "فیزیا";}catch(err){}
    try{document.getElementById("cli").innerHTML = "نازانم";}catch(err){}
    try{document.getElementById("micro").innerHTML = "مایکڕۆ";}catch(err){}
    try{document.getElementById("law").innerHTML = "قانون";}catch(err){}
    try{document.getElementById("econ").innerHTML = "ئابوری";}catch(err){}
    try{document.getElementById("inglizy").innerHTML = "ئینگلیزی";}catch(err){}
    try{document.getElementById("kurdii").innerHTML = "کوردی";}catch(err){}
    try{document.getElementById("arabii").innerHTML = "عربي";}catch(err){}
    try{document.getElementById("histo").innerHTML = "مێژوو";}catch(err){}
    try{document.getElementById("geooo").innerHTML = "جوگرافیا";}catch(err){}
    try{document.getElementById("din").innerHTML = "شەریعە";}catch(err){}
    try{document.getElementById("baxcha").innerHTML = "باخچەی ساوایان";}catch(err){}
    try{document.getElementById("psyy").innerHTML = "دەرون ناسی";}catch(err){}
    try{document.getElementById("fizia").innerHTML = "فیزیا";}catch(err){}
    try{document.getElementById("disanenglizi").innerHTML = "ئینگلیزی";}catch(err){}
    try{document.getElementById("basicc").innerHTML = "سەرەتایی";}catch(err){}
    try{document.getElementById("home").href = "kHome.html";}catch(err){}
    try{document.getElementById("about").href = "kabout.html";}catch(err){}
    try{document.getElementById("study").href = "ksakoya.html";}catch(err){}
    try{document.getElementById("faculty").href = "ktypes.html";}catch(err){}
    try{document.getElementById("en").href = "ken.html";}catch(err){}
    try{document.getElementById("softwaree").href = "ksoftware.html";}catch(err){}
    try{document.getElementById("scc").href = "ksc.html";}catch(err){}
    try{document.getElementById("hu").href = "khu.html";}catch(err){}
    try{document.getElementById("ed").href = "ked.html";}catch(err){}
    try{document.getElementById("dxtor").href = "kschool.html";}catch(err){}
    try{document.getElementById("research").href = "kr.html";}catch(err){}
    try{document.getElementById("library").href = "klam.html";}catch(err){}
    try{document.getElementById("life").href = "klife.html";}catch(err){}
    try{document.getElementById("events").href = "ke.html";  }catch(err){}
    try{document.getElementsByClassName("dagra")[0].href = "khome.html";}catch(err){}
} 