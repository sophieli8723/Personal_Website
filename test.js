var mongoose = require("mongoose");
var Illustration = require("./models/illustration");



 
var data = [
    {
        caption: "COS Council Sticker Design 1", 
        image: "https://i.imgur.com/0Vqagej.png"
    },
    {
        caption: "COS Council Sticker Design 2", 
        image: "https://i.imgur.com/G6dRY5U.png"
    },
    {
        caption: "COS Council Sticker Design 3", 
        image: "https://i.imgur.com/dERNb2n.png"
    },
    {
        caption: "Laiye Brochure Front", 
        image: "https://i.imgur.com/TRof7je.png"
    },
    {
        caption: "Laiye Brochure Back", 
        image: "https://i.imgur.com/xPN0ES0.png"
    },
    {
        caption: "Laiye Landing Page", 
        image: "https://i.imgur.com/fRcVAKP.png"
    },
    {
        caption: "Project SNAP Charity Logo", 
        image: "https://i.imgur.com/00MVgfH.png"
    },
    {
        caption: "Promotional Poster for Ball", 
        image: "https://i.imgur.com/OKd7rZ3.png"
    },
    {
        caption: "Promotional Poster for Senior Promenade", 
        image: "https://i.imgur.com/RsTghpQ.jpg"
    },
    {
        caption: "Digital Illustration - Tiger", 
        image: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/a7f170ca-c336-4446-977f-95ca71c31493/dd5t2ms-c45000b6-0ca0-4eb7-a57e-5fdcb5274ee6.jpg/v1/fill/w_783,h_1021,q_70,strp/prince_by_realitatis_dd5t2ms-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3siaGVpZ2h0IjoiPD0xMzM1IiwicGF0aCI6IlwvZlwvYTdmMTcwY2EtYzMzNi00NDQ2LTk3N2YtOTVjYTcxYzMxNDkzXC9kZDV0Mm1zLWM0NTAwMGI2LTBjYTAtNGViNy1hNTdlLTVmZGNiNTI3NGVlNi5qcGciLCJ3aWR0aCI6Ijw9MTAyNCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.RQuQQ5kZHbnvnOjpfQ93XJofNW7O7RYBOBGb1QRHuZ8"
    },
    {
        caption: "Digital Illustration - Sunset", 
        image: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/a7f170ca-c336-4446-977f-95ca71c31493/de1gyga-ff560bf8-c027-4542-9991-aafc09e5a3d9.jpg/v1/fill/w_707,h_1131,q_70,strp/sunrise_by_realitatis_de1gyga-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3siaGVpZ2h0IjoiPD00MDAwIiwicGF0aCI6IlwvZlwvYTdmMTcwY2EtYzMzNi00NDQ2LTk3N2YtOTVjYTcxYzMxNDkzXC9kZTFneWdhLWZmNTYwYmY4LWMwMjctNDU0Mi05OTkxLWFhZmMwOWU1YTNkOS5qcGciLCJ3aWR0aCI6Ijw9MjUwMCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.hVkPE37TcqHjSpYbW-G6oA9hzT9RoCnIg-g462O3kTg"
    },
    {
        caption: "Digital Illustration - Character Portrait", 
        image: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/a7f170ca-c336-4446-977f-95ca71c31493/de1gyii-d5f5e83f-54a2-40ff-9b2c-871796835c55.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvYTdmMTcwY2EtYzMzNi00NDQ2LTk3N2YtOTVjYTcxYzMxNDkzXC9kZTFneWlpLWQ1ZjVlODNmLTU0YTItNDBmZi05YjJjLTg3MTc5NjgzNWM1NS5qcGcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.kBrUmqTQA391IZX-SKMMVbTf2MLeFTD3qbsvgOX9MAw"
    }   
]

 
function seedDB(){
   Illustration.remove({}, function(err){
        if(err){
            console.log(err);
        }
        console.log("removed illustrations!");
        data.forEach(function(seed){
            Illustration.create(seed, function(err, illustration){
                if(err){
                    console.log(err)
                } else {
                    console.log("added an illustration");
                    //create a comment
            }
        });
    });
});
}

 
module.exports = seedDB;