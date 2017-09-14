// var namesList = ["SHINGI SIDDHANT NAVIN", "SOUMYA SHARMA", "DEEPANSHU JINDAL", "SARVAGYA VINAYAK SHARMA", "SUNIL KUMAR", "AKSHAT KHARE", "DIVYANSHU SAXENA", "SHUBHAM JAIN", "VARADA PAVAN SAI", "HARSHIT GOEL", "RAYALA HARICHANDAN", "ARPAN MANGAL", "SRIJAN SINHA", "AKSHAY NEEMA", "R JAYANTH REDDY", "ANUGU SAI KIRAN REDDY", "SARANSH VERMA", "UDIT JAIN", "SHASHWAT SHIVAM", "RATHI SUSHANT SHYAM", "KONUGANTI SAI KUMAR REDDY", "ADITYA JETHA", "SHASHANK GOEL", "PARTH SHAH", "TAMOGHNA GHOSH", "ADITYA JAIN", "SARTHAK R VISHNOI", "YASH RAJ GUPTA", "G S M RISHIKESH REDDY", "DONAPATI HARDHIK", "KULKARNI NIKHIL DILIP", "PULKIT GUAR", "ANKIT AKASH JHA", "CHETAN MITTAL", "RAHUL BANSAL", "VINAYAK RASTOGI", "MAYANK SHUKLA", "PUSHPAM ANAND", "HIMANSHU", "GOLLA VENKATA SAI DHEERAJ", "SHASHWAT BANCHHOR", "ADIGOPULA SAI TEJA", "RIYA SINGH", "PRANAV BHAGAT", "KORAKOPPULA SURESH", "MINHAJ SHAKEEL", "SACHIN KUMAR PRAJAPATI", "JAY KUMAR MODI", "ABHINASH KUMAR", "KURMAPU VENKATA VIJAYA SAI PRASANTH", "TARUN KUMAR YADAV", "DANGETI BHARADWAJ", "AVINASH KUMAR", "KHAMMAMPATI ANIRUDH", "MANISH TANWAR", "DANAM HARSHITH CHANDRA", "VADDADI SAI ROHAN", "SAMPAT KHINCHI", "ANSH PRAKASH", "ANUBHAV PALWAY", "PRANAV BAURASIA", "RAHUL V", "SHUBHAM", "RAVINDER SINGH", "SHANTANU VERMA", "AYUSH VERMA", "PRADYUMNA MEENA", "BRAJMOHAN", "ADITHYA ANAND", "J SRI HARSHA VARDHAN SAI", "MANAS MEENA", "RAJAS BANSAL", "JAYANT JAIN", "PRAKHAR AGRAWAL", "AVALJOT SINGH", "SINGAMSETTY SANJEEVA KRISHNA SAI DI", "MANKARAN SINGH", "ANSH SAPRA", "ATISHYA JAIN", "MAYANK SINGH CHAUHAN", "SAMARTH AGGARWAL", "AYUSH PATEL", "ANIKET KUMAR", "ANIKET KUMAR", "ABHISHEK MADERANA", "SUMIT KUMAR GHOSH", "ANKIT SOLANKI", "HIRE SANKET SANJAYPANT", "YASH MALVIYA", "HARDIK KHICHI", "MUKESH BHAGAT", "ANIMESH SINGH"];
var namesList = [
    "Abhishek Burnwal",
    "Abhyuday Bhartiya",
    "Adarsha Aman",
    "Aditya Panwar",
    "Aditya Senthilnathan",
    "Akhilesh",
    "Amal Prasad",
    "Anant Kashyap",
    "Ananye Agarwal",
    "Anil Kumar Uchadiya",
    "Ankit Kumar Singh",
    "Anshul Kumar Kurmi",
    "Arsh Gautam",
    "Ayyadevara Venkata Sai Nikhil Sriva",
    "Banavathu Ajith Naik",
    "Bruce Lesieur",
    "Devendra Kumar Ahirwar",
    "Dhananjay Kajla",
    "Divyanshu Mandowara",
    "Divyanshu Sharma",
    "Gohil Dwijeshkumar Navinbhai",
    "Harkanwar Singh",
    "Harkirat Singh Dhanoa",
    "Harsh Yadav",
    "Hrithik Maheshwari",
    "Jay Prakash Meena",
    "Kaashika Prajaapat",
    "Kabir Tomer",
    "Kailash Kumawat",
    "Kaivalya Subhash Swami",
    "Kaladi Lalith Satya Srinivas",
    "Kamalesh Neerasa",
    "Karan Tanwar",
    "Kartik Sharma",
    "Kokku Chinmai Sai Nagendra",
    "Kondeti Aashish",
    "Lakshay Saggi",
    "Lavi Choudhary",
    "M Veeramakali Vignesh",
    "Mayank Dubey",
    "Mayank Kumar",
    "Mayank Singh Kushwaha",
    "Mayur Solanki",
    "Medha Kant",
    "Meenal Meena",
    "Musunuru Saurav",
    "Namrata Priyadarshani",
    "Navneel Mandal",
    "Nisarg Bhatt",
    "Paranjape Jay Nitin",
    "Parth Porwal",
    "Pendem Chanakya",
    "Prakhar Mangal",
    "Prashit Raj",
    "Prateek Garg",
    "Pratheek D Souza Rebello",
    "Priyanshu Gautam",
    "Putta Nikhila Reddy",
    "Rachit Kumar",
    "Rahul Choudhary",
    "Rajat Jaiswal",
    "Rajbir Malik",
    "Raval Vedant Sanjay",
    "Raviraj Singh Dhakad",
    "Ravneesh Kumar",
    "Ravuri M V S R Prafful",
    "Ritvik Vij",
    "Romain Gendreau",
    "Saksham Dhull",
    "Sameer Vivek Pande",
    "Sanjay Meena",
    "Sanjay P Lal",
    "Sanskar Pareta",
    "Shashank Shekhar",
    "Shayan Aslam Saifi",
    "Shivam Bansal",
    "Shivam Goyal",
    "Shivam Sheshrao Jadhav",
    "Shourya Aggarwal",
    "Shubh Jaroria",
    "Shubham Sondhi",
    "Siddhant Mago",
    "Tammireddi Venkata Sesha Sai Datta",
    "Tanmay Kaushal Patel",
    "Uddesh Katyayan",
    "Vaibhav",
    "Vankala Sai Vijay",
    "Vardhan Jain",
    "Vasu Jain",
    "Vedant Vijay",
    "Vidit Jain",
    "Vijay Kumar Meena",
    "Vusse Sravyasri",
    "Yash Jain"
];

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
