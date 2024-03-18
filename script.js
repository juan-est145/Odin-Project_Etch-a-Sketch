CreateGrid(16);

document.querySelector(".container").addEventListener("mouseover", (e)=>
{
    if(e.target.classList.contains("cell"))
        e.target.style.background = CreateRandomColor();
});

document.querySelector("#reset").addEventListener("click", () =>
{
    const container = document.querySelector(".container");
    let answer = NaN;
    while(isNaN(answer) == true)
    {
        answer = prompt("Enter a number between 1 and 100 to resize the grid");
        if (answer <= 0 || answer > 100)
            answer = NaN;
    }
    while (container.firstChild != null)
        container.removeChild(container.firstChild);
    CreateGrid(answer);
});

function CreateGrid(size) 
{
    const container = document.querySelector(".container");
    for (let index = 0; index < size; index++) 
    {
        const column = document.createElement("div");
        column.setAttribute("class", "column");
        for (let index = 0; index < size; index++)
        {
            const cell = document.createElement("div");
            cell.setAttribute("class", "cell");
            column.appendChild(cell);
        }
        container.appendChild(column);
    }    
}



function CreateRandomColor()
{
    const arrayOfColors = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];

    let color_string = "";

    for(let i = 0; i < 6; i++)
        color_string += arrayOfColors[Math.floor(Math.random()* 15)];
    return `#${color_string}`;
}