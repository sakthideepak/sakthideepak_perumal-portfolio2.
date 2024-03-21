document.getElementById('count2').addEventListener('submit',function(event){
    event.preventDefault();
    var data=new FormData(event.target);
    fetch("https://formspree.io/f/xjvneyov",{
        method: 'POST',
        body: data,
    }).then(Response=>{
        if(Response.ok){
            alert('message sent');
        }else{
            alert('Something went wrong try again later');
        }
    });
    document.getElementById('count2').reset();
})