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
