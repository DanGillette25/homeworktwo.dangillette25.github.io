$(document).ready(function () {

const modal = document.getElementById("myModal");

const descriptions = [
    {name: "EmployeeDB (Runs in Terminal)",
     repoLink: "https://github.com/DanGillette25/homeworkthree.dangillette25.github.io",
     deployed: "https://dangillette25.github.io/homeworkthree.dangillette25.github.io/"
    },
    {
     name: "Coding Quiz",
     repoLink: "https://github.com/DanGillette25/homeworkfour.dangillette25.github.io",
     deployed: "https://dangillette25.github.io/homeworkfour.dangillette25.github.io/?"
    },
    {
    name: "BreakAway",
    repoLink: "https://github.com/MVC-5/breakaway",
    deployed: "https://breakaway-vacay.herokuapp.com/",
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
    },

    {
    name: "Note Taker",
    repoLink: "https://github.com/DanGillette25/notetaker",
    deployed: "https://dg-notetaker-app.herokuapp.com"
    },


]



    $(".pic").on("click", function(){
        
        
        let descriptionNumber = parseInt($(this).attr('value'));
        

        modal.style.display = "block";

        $("#app-title").text(descriptions[descriptionNumber].name);
        $("#repo").attr('href', descriptions[descriptionNumber].repoLink)
        $("#repo").attr('target', "_blank")
        $("#deploy").css('display', 'block')
        $("#deploy").attr('href', descriptions[descriptionNumber].deployed)
        $("#deploy").attr('target', '_blank')



        $(".close").on("click", function(){

            modal.style.display = "none";

        })

        

    
    })

    $(".nodepic").on("click", function(){
        
        
        let descriptionNumber = parseInt($(this).attr('value'));
        

        modal.style.display = "block";

        $("#app-title").text(descriptions[descriptionNumber].name);
        $("#repo").attr('href', descriptions[descriptionNumber].repoLink)
        $("#repo").attr('target', "_blank")
        $("#deploy").css('display', 'none')



        $(".close").on("click", function(){

            modal.style.display = "none";

        })

        

    
    })

    




})