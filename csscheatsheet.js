let divId = 0;
let selectedItem = 0;

function sandboxInput(buttonInput)
{
    switch(buttonInput)
    {
        case 'createDiv':
            createDiv();
        break;

        case 'deleteDiv':
            deleteDiv();
        break;
    } 
}

function createDiv()
{
    let newButton = document.createElement("button");
    newButton.style.width = "100px";
    newButton.style.height = "100px";
    newButton.style.background = document.getElementById("color").value;
    newButton.style.color = "white";
    newButton.style.margin = "1px";
    newButton.style.cursor = "pointer";
    newButton.style.border = "2px solid white";
    newButton.id = divId;

    newButton.addEventListener("click", function(){ select(this); });

    divId++;

    document.getElementById("sandbox").appendChild(newButton);
}

function deleteDiv()
{
    // prevents divid from going below 0
    if (divId <= 0)
    {
        return;
    }

    if (divId >= selectedItem)
    {
        selectedItem = 0;
    }
    
    let div = document.getElementById("sandbox").children;

    divId--;
    div[divId].remove();
    
}

function editDivs(input)
{
    switch(input)
    {
        case "1":
            document.getElementById(selectedItem).style.flexGrow = document.getElementById("growSize").value;
        break;
        case "2":
            document.getElementById(selectedItem).style.backgroundColor = document.getElementById("updateColor").value;
        break;
    }
}

// unused because broken and idk why
function justifyContent(value)
{
    switch (value)
    {
        case "1":
            document.getElementById("sandbox").style.justifyContent = "flex-start";
        break;
        case "2":
            document.getElementById("sandbox").style.justifyContent = "flex-end";
        break;
        case "3":
            document.getElementById("sandbox").style.justifyContent = "center";
        break;
        case "4":
            document.getElementById("sandbox").style.justifyContent = "space-between";
        break;
        case "5":
            document.getElementById("sandbox").style.justifyContent = "space-around";
        break;
        case "6":
            document.getElementById("sandbox").style.justifyContent = "space-evenly";
        break;
    }
}

function flexDirection(input)
{
    switch(input)
    {
        case "1":
            document.getElementById("sandbox").style.flexDirection = "row";
        break;
        case "2":
            document.getElementById("sandbox").style.flexDirection = "column";
        break;
        case "3":
            document.getElementById("sandbox").style.flexDirection = "row-reverse";
        break;
        case "4":
            document.getElementById("sandbox").style.flexDirection = "column-reverse";
        break;
    }
}

function flexWrap(input)
{
    switch(input)
    {
        case "1":
            document.getElementById("sandbox").style.flexWrap = "nowrap";
        break;
        case "2":
            document.getElementById("sandbox").style.flexWrap = "wrap";
        break;
        case "3":
            document.getElementById("sandbox").style.flexWrap = "wrap-reverse";
        break;
    }
}

function select(self)
{
    document.getElementById(selectedItem).style.border = "2px solid white";
    selectedItem = self.id;

    document.getElementById(selectedItem).style.border = "2px solid green";
}

function alignItem(input)
{
    switch(input)
    {
        case "1":
            document.getElementById("sandbox").style.alignItems = "flex-start";
        break;
        case "2":
            document.getElementById("sandbox").style.alignItems = "flex-end";
        break;
        case "3":
            document.getElementById("sandbox").style.alignItems = "center";
        break;
        case "4":
            document.getElementById("sandbox").style.alignItems = "baseline";
        break;
        case "5":
            document.getElementById("sandbox").style.alignItems = "stretch";
        break;
    }   
}
function alignSelf(input)
{
    switch(input)
    {
        case "1":
            document.getElementById(selectedItem).style.alignIt = "flex-start";
        break;
        case "2":
            document.getElementById(selectedItem).style.alignSelf = "flex-end";
        break;
        case "3":
            document.getElementById(selectedItem).style.alignSelf = "center";
        break;
        case "4":
            document.getElementById(selectedItem).style.alignSelf = "baseline";
        break;
        case "5":
            document.getElementById(selectedItem).style.alignSelf = "stretch";
        break;
    }
}