import { useState, useEffect } from "react";


function AddTask(){

    return(
        <div><label><h2>To Do List</h2></label>
        <input type="text" name="addTask" />
        <input type="submit" value="addTask" />
        <br />
        </div>
    )
}

export default AddTask