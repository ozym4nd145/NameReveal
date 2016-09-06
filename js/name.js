var namesList = ["SHINGI SIDDHANT NAVIN", "SOUMYA SHARMA", "DEEPANSHU JINDAL", "SARVAGYA VINAYAK SHARMA", "SUNIL KUMAR", "AKSHAT KHARE", "DIVYANSHU SAXENA", "SHUBHAM JAIN", "VARADA PAVAN SAI", "HARSHIT GOEL", "RAYALA HARICHANDAN", "ARPAN MANGAL", "SRIJAN SINHA", "AKSHAY NEEMA", "R JAYANTH REDDY", "ANUGU SAI KIRAN REDDY", "SARANSH VERMA", "UDIT JAIN", "SHASHWAT SHIVAM", "RATHI SUSHANT SHYAM", "KONUGANTI SAI KUMAR REDDY", "ADITYA JETHA", "SHASHANK GOEL", "PARTH SHAH", "TAMOGHNA GHOSH", "ADITYA JAIN", "SARTHAK R VISHNOI", "YASH RAJ GUPTA", "G S M RISHIKESH REDDY", "DONAPATI HARDHIK", "KULKARNI NIKHIL DILIP", "PULKIT GUAR", "ANKIT AKASH JHA", "CHETAN MITTAL", "RAHUL BANSAL", "VINAYAK RASTOGI", "MAYANK SHUKLA", "PUSHPAM ANAND", "HIMANSHU", "GOLLA VENKATA SAI DHEERAJ", "SHASHWAT BANCHHOR", "ADIGOPULA SAI TEJA", "RIYA SINGH", "PRANAV BHAGAT", "KORAKOPPULA SURESH", "MINHAJ SHAKEEL", "SACHIN KUMAR PRAJAPATI", "JAY KUMAR MODI", "ABHINASH KUMAR", "KURMAPU VENKATA VIJAYA SAI PRASANTH", "TARUN KUMAR YADAV", "DANGETI BHARADWAJ", "AVINASH KUMAR", "KHAMMAMPATI ANIRUDH", "MANISH TANWAR", "DANAM HARSHITH CHANDRA", "VADDADI SAI ROHAN", "SAMPAT KHINCHI", "ANSH PRAKASH", "ANUBHAV PALWAY", "PRANAV BAURASIA", "RAHUL V", "SHUBHAM", "RAVINDER SINGH", "SHANTANU VERMA", "AYUSH VERMA", "PRADYUMNA MEENA", "BRAJMOHAN", "ADITHYA ANAND", "J SRI HARSHA VARDHAN SAI", "MANAS MEENA", "RAJAS BANSAL", "JAYANT JAIN", "PRAKHAR AGRAWAL", "AVALJOT SINGH", "SINGAMSETTY SANJEEVA KRISHNA SAI DI", "MANKARAN SINGH", "ANSH SAPRA", "ATISHYA JAIN", "MAYANK SINGH CHAUHAN", "SAMARTH AGGARWAL", "AYUSH PATEL", "ANIKET KUMAR", "ANIKET KUMAR", "ABHISHEK MADERANA", "SUMIT KUMAR GHOSH", "ANKIT SOLANKI", "HIRE SANKET SANJAYPANT", "YASH MALVIYA", "HARDIK KHICHI", "MUKESH BHAGAT", "ANIMESH SINGH"];

var isCalled = [];
for(i=0;i<namesList.length;i++)
{
    isCalled[i]=false;
}


var controlBtn = document.querySelector("#control");
var text = document.querySelector("#name");
var counter = 0;
var s = ["█", "▓", "▒", "░", "█", "▓", "▒", "░", "█", "▓", "▒", "░", "<", ">", "/", "_","漢","字"];
var t = ["汉","字","/","漢","字","_",">","<"];
var fuzzy = baffle(text, {characters: s, speed: 75}).start();

document.addEventListener('keydown',function(event)
{
    console.log(event.code);
    if(event.code === "Space")
    {
        event.preventDefault();
        toggle();
    }
});

document.addEventListener("click", toggle);

function toggle()
{
    if(counter % 2 === 0)
    {
        index = Math.floor(Math.random() * namesList.length);

        while(isCalled[index])
        {
            index = Math.floor(Math.random() * namesList.length);
        }

        isCalled[index] = true;

        fuzzy.text(function(n){
            return namesList[index];
        });

        fuzzy.reveal(1000);
    }
    else {
        fuzzy.text(function(n){
            return "< ACES_ACM />";
        });
        fuzzy.start();
    }
    counter++;
}
