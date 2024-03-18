CreateGrid(16);


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

document.querySelector(".container").addEventListener("mouseover", (e)=>
{
    if(e.target.classList.contains("cell"))
        e.target.style.background = create_random_color();
});

function create_random_color()
{
    let arrayOfColors = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];

    let color_string = "";

    for(let i = 0; i < 6; i++)
    {
        color_string += arrayOfColors[Math.floor(Math.random()* 15)];
    }
    return `#${color_string}`;
}