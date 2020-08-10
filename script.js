$(document).ready(function () {

const modal = document.getElementById("myModal");

const descriptions = [
    {name: "Password Generator",
     repoLink: "https://github.com/DanGillette25/homeworkthree.dangillette25.github.io",
     deployed: "https://dangillette25.github.io/homeworkthree.dangillette25.github.io/"
    },
    {
     name: "Coding Quiz",
     repoLink: "https://github.com/DanGillette25/homeworkfour.dangillette25.github.io",
     deployed: "https://dangillette25.github.io/homeworkfour.dangillette25.github.io/?"
    },
    {
    name: "Day Planner",
    repoLink: "https://github.com/DanGillette25/homeworkfive.dangillette25.github.io",
    deployed: "https://dangillette25.github.io/homeworkfive.dangillette25.github.io/",
    },
    {
     name: "Weather Dashboard",
     repoLink: "https://github.com/DanGillette25/weather.dangillette25.github.io",
     deployed: "https://dangillette25.github.io/weather.dangillette25.github.io/"
    },

    {
    name: "DiscoverSerenity",
    repoLink: "https://github.com/calebkirkish/discover-serenity",
    deployed: "https://calebkirkish.github.io/discover-serenity/"
    }
]



    $(".pic").on("click", function(){
        
        
        let descriptionNumber = parseInt($(this).attr('value'));
        

        modal.style.display = "block";

        $("#app-title").text(descriptions[descriptionNumber].name);
        $("#repo").attr('href', descriptions[descriptionNumber].repoLink)
        $("#repo").attr('target', "_blank")
        $("#deploy").attr('href', descriptions[descriptionNumber].deployed)
        $("#deploy").attr('target', '_blank')



        $(".close").on("click", function(){

            modal.style.display = "none";

        })

        

    
    })

    




})