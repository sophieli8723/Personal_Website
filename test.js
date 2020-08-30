var mongoose = require("mongoose");
var Illustration = require("./models/illustration");
var Website = require("./models/website");


 
var data = [
    {
        caption: "Personal Website. Having self-taught myself full-stack web development, I coded this site from scratch over summer quarantine 2020, from designing to coding, hosting to deploying. I use HTML, CSS, Javascript, Node, Express, jQuery, Boostrap, and more. You may find the code on my GitHub.",
        image: "https://i.imgur.com/QPQeVCV.png",
        url: "/home",
        type: "webpage"
    },
    {
        caption: "Princeton Computer Science Council Website. As the Tech Chair of Princeton University's Computer Science Council, a group of undergraduates who serve as liaisons between students and the Computer Science Deparment, I established our first official website where I post news, upcoming events, and featured students. I created and maintain this site with a website builder application.",
        image: "https://i.imgur.com/QZjlsk9.png",
        url: "https://www.princetoncoscouncil.com",
        type: "webpage"
    },
    {
        caption: "iGEM Wiki Page. A leader for my high schools International Genetically Engineered Machine (iGEM) Biology Comptetition, I created the design for our wiki page, which would be used to judge our project. The judges were impressed by both our project and wiki, and awarded us bronze honors.",
        image: "https://i.imgur.com/QK3a4m5.png",
        url: "http://2018.igem.org/Team:SHSID_China",
        type: "webpage"
    }
    
    // {
    //     caption: "Computer Science Council Sticker Design 1. Created using Krita, this design won the council's votes and will be used for our stickers!", 
    //     image: "https://i.imgur.com/0Vqagej.png",
    //     type: "COS"
    // },
    // {
    //     caption: "Computer Science Council Sticker Design 2. Created using Krita, this design was entered into our voting process.", 
    //     image: "https://i.imgur.com/G6dRY5U.png",
    //     type: "COS"
    // },
    // {
    //     caption: "Computer Science Council Sticker Design 3. Created using Krita, this design was entered into our voting process.", 
    //     image: "https://i.imgur.com/dERNb2n.png",
    //     type: "COS"
    // },
    // {
    //     caption: "Computer Science Council Meet & Greet Post. To help students meet their peers during the remote semester, I designed this post for our social media using Canva.", 
    //     image: "https://i.imgur.com/mqGckmX.png",
    //     type: "COS"
    // },
    // {
    //     caption: "Computer Science Council Puzzle Hunt Post. To encourage incoming freshmen to participate in our virtual puzzle hunt, I designed this post for our social media using Canva.", 
    //     image: "https://i.imgur.com/5L23TQM.png",
    //     type: "COS"
    // },
    // {
    //     caption: "Computer Science Council Info Session. To promote our upcoming Q&A session regarding the Computer Science Department, I designed this post for our social media using Canva.", 
    //     image: "https://i.imgur.com/0GoxDnl.png",
    //     type: "COS"
    // },
    // {
    //     caption: "Laiye Brochure Front. Laiye, a company based in China, was beginning to expand globally. I helped with designing many English promotional materials. I designed this brochure using Canva.", 
    //     image: "https://i.imgur.com/TRof7je.png",
    //     type: "Laiye"
    // },
    // {
    //     caption: "Laiye Brochure Back. Laiye, a company based in China, was beginning to expand globally. I helped with designing many English promotional materials. I designed this brochure using Canva.", 
    //     image: "https://i.imgur.com/xPN0ES0.png",
    //     type: "Laiye"
    // },
    // {
    //     caption: "Laiye Landing Page. This is one of the 10 landing page designs I created for Laiye's RPA product UiBot, using Axure 9.", 
    //     image: "https://i.imgur.com/fRcVAKP.png",
    //     type: "Laiye"
    // },
    // {
    //     caption: "Promotional Poster for Ball. As an ASB designer, I created this poster to promote our Chinese New Year ball.", 
    //     image: "https://i.imgur.com/OKd7rZ3.png",
    //     type: "hs"
    // },
    // {
    //     caption: "Promotional Poster for Senior Promenade. As an ASB designer, I created this poster to promote our Senior Promenade.", 
    //     image: "https://i.imgur.com/RsTghpQ.jpg",
    //     type: "hs"
    // },
    // {
    //     caption: "Senior Promenade Logo. Created with Adobe Illustrator, this design was chosen out of ~10 candidates for the prom logo.", 
    //     image: "https://i.imgur.com/zg2onpp.png",
    //     type: "hs"
    // },
    // {
    //     caption: "Project SNAP Charity Logo. As the cofounder and co-president of SNAP charity, dedicated to empowering intellectually disabled children and adults in Shanghai, I designed the logo with Adobe Illustrator. This logo would go on our t-shirts, awareness campaigns, and more.", 
    //     image: "https://i.imgur.com/00MVgfH.png",
    //     type: "hs"
    // },
    // {
    //     caption: "Digital Illustration: Tiger. After my acceptence into Princeton, I drew their mascot, the tiger, in celebration.", 
    //     image: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/a7f170ca-c336-4446-977f-95ca71c31493/dd5t2ms-c45000b6-0ca0-4eb7-a57e-5fdcb5274ee6.jpg/v1/fill/w_783,h_1021,q_70,strp/prince_by_realitatis_dd5t2ms-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3siaGVpZ2h0IjoiPD0xMzM1IiwicGF0aCI6IlwvZlwvYTdmMTcwY2EtYzMzNi00NDQ2LTk3N2YtOTVjYTcxYzMxNDkzXC9kZDV0Mm1zLWM0NTAwMGI2LTBjYTAtNGViNy1hNTdlLTVmZGNiNTI3NGVlNi5qcGciLCJ3aWR0aCI6Ijw9MTAyNCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.RQuQQ5kZHbnvnOjpfQ93XJofNW7O7RYBOBGb1QRHuZ8",
    //     type: "personal"
    // },
    // {
    //     caption: "Digital Illustration: Sunrise. This digital painting features the main character of the novel I am currently writing.", 
    //     image: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/a7f170ca-c336-4446-977f-95ca71c31493/de1gyga-ff560bf8-c027-4542-9991-aafc09e5a3d9.jpg/v1/fill/w_707,h_1131,q_70,strp/sunrise_by_realitatis_de1gyga-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3siaGVpZ2h0IjoiPD00MDAwIiwicGF0aCI6IlwvZlwvYTdmMTcwY2EtYzMzNi00NDQ2LTk3N2YtOTVjYTcxYzMxNDkzXC9kZTFneWdhLWZmNTYwYmY4LWMwMjctNDU0Mi05OTkxLWFhZmMwOWU1YTNkOS5qcGciLCJ3aWR0aCI6Ijw9MjUwMCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.hVkPE37TcqHjSpYbW-G6oA9hzT9RoCnIg-g462O3kTg",
    //     type: "personal"
    // },
    // {
    //     caption: "Digital Illustration: Character Portrait. This digital portrait is a realistic rendition of my novel's main character.", 
    //     image: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/a7f170ca-c336-4446-977f-95ca71c31493/de1gyii-d5f5e83f-54a2-40ff-9b2c-871796835c55.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvYTdmMTcwY2EtYzMzNi00NDQ2LTk3N2YtOTVjYTcxYzMxNDkzXC9kZTFneWlpLWQ1ZjVlODNmLTU0YTItNDBmZi05YjJjLTg3MTc5NjgzNWM1NS5qcGcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.kBrUmqTQA391IZX-SKMMVbTf2MLeFTD3qbsvgOX9MAw",
    //     type: "personal"
    // },
    // {
    //     caption: "Digital Illustration: Dog. This digital painting features my pet dog, Snowball.", 
    //     image: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/a7f170ca-c336-4446-977f-95ca71c31493/ddw4tsp-4b70256e-493e-46a7-bed1-5c06801fc490.jpg/v1/fill/w_894,h_894,q_70,strp/snowball_by_realitatis_ddw4tsp-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3siaGVpZ2h0IjoiPD0yODAwIiwicGF0aCI6IlwvZlwvYTdmMTcwY2EtYzMzNi00NDQ2LTk3N2YtOTVjYTcxYzMxNDkzXC9kZHc0dHNwLTRiNzAyNTZlLTQ5M2UtNDZhNy1iZWQxLTVjMDY4MDFmYzQ5MC5qcGciLCJ3aWR0aCI6Ijw9MjgwMCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.53aWA82I_ThamBn6Dar1db2ooarCNdOOXnDn482dgLk",
    //     type: "personal"
    // }   

]

 
function seedDB(){
//    Illustration.remove({}, function(err){
//         if(err){
//             console.log(err);
//         }
//         console.log("removed illustrations!");
//         data.forEach(function(seed){
//             Illustration.create(seed, function(err, illustration){
//                 if(err){
//                     console.log(err)
//                 } else {
//                     console.log("added an illustration");
//                     //create a comment
//             }
//         });
//     });
// });
Website.remove({}, function(err){
    if(err){
        console.log(err);
    }
    console.log("removed websites!");
    data.forEach(function(seed){
        Website.create(seed, function(err, website){
            if(err){
                console.log(err)
            } else {
                console.log("added an website");
                //create a comment
        }
    });
});
});
}

 
module.exports = seedDB;