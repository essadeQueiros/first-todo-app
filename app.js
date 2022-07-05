

const addBtn = document.querySelector('#add')

addBtn.addEventListener('click', add)

function add(){

    const addInput = document.getElementById('title')

    if(addInput.value.length <= 0){
        console.log('ola')
    }

    else{
        var tasks = document.querySelector('.tasks')
        var task = document.createElement('li')
            task.className = "task"
        
        const title = document.createElement('span')
            title.className = 'title'
                let taskTitle = document.getElementById('title')             
                        title.innerText = taskTitle.value

        const titles = document.querySelector('.title')  
                
        title.addEventListener('dblclick', function () {
           const tkTitle = document.querySelector('.title') 
           title.style.textDecoration = 'line-through'
        })  

        const btns = document.createElement('span')
            btns.className = 'btns'
    
                const del = document.createElement('button')
                    del.className = 'delete_btn'
                        del.innerText = 'Delete'  
                del.addEventListener('click', () => {
                    tasks.removeChild(task)
                })  

        tasks.appendChild(task)
            task.append(title, btns)
                btns.append(del)
         addInput.value = ""

    }
   
}

