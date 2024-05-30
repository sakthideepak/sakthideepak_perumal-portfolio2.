  AOS.init();


document.getElementById('count2') .addEventListener('submit', function(event){
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

const text = document.querySelector(".second_one");

const textload=()=>{
    setTimeout(()=>{
        text.textContent="Web Developer";
    },0);
    setTimeout(()=>{
        text.textContent="Front-End Developer";
    },4000);
    // setTimeout(()=>{
    //     text.textContent="Data Analyst";
    // },8000);
}
textload();
setInterval(textload, 8000);
