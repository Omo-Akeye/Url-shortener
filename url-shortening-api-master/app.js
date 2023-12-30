const btn = document.getElementById('btn');
const input = document.getElementById('input');
const ul = document.querySelector('article ul');
const para = document.getElementById('para');

  btn.addEventListener('click', async (e)=> {
    e.preventDefault();
    const inputValue = input.value;
    if (!inputValue) {
      para.style.visibility ='visible';
      input.classList.add('warning')
    } else {
      const apikey = "c6b6549aec274a028cf130976ac04680"
      const api = `https://api.rebrandly.com/v1/links/new?apikey=${apikey}&destination=${encodeURIComponent(inputValue)}`;
      try{
        const response = await fetch(api);
        const data = await response.json();
        console.log(data)
        const list = document.createElement('li');
        list.innerHTML = `
        <div><a href=${inputValue} class='full-link'>${inputValue}</a></div>
        <span>
          <a href="${data.shortURL}"><h4 class="shortened-link">${data.shortURL}</h4></a>
          <button class="copy">Copy</button>
        </span>
       `
       console.log(data.shortURL);
       input.value ="";
       ul.appendChild(list);
       para.style.visibility ='hidden';
      } catch(e){
        return null;
      }}
    }
    );


   // Event handler for copy button
  
  ul.addEventListener('click', (e) => {
    if (e.target.classList.contains('copy')) {
     const linkElement = e.target.parentNode.querySelector('.shortened-link');
      navigator.clipboard.writeText(linkElement.textContent);
      e.target.textContent = 'Copied';
      e.target.classList.add('copied');
      setTimeout(function () {
        e.target.textContent = 'Copy';
        e.target.classList.remove('copied');
      }, 2000);
    }
  });

    
  // Event handler for navbar

  const navbar = document.querySelector('.subnav3 i')
  const miniMenu = document.querySelector('.mini-nav')
  navbar.addEventListener('click',()=>{
    miniMenu.classList.toggle('visible');
    const visible = miniMenu.classList.contains('visible');
    if (visible) {
      navbar.classList.remove('fa-bars'); 
      navbar.classList.add('fa-times'); 
    } else {
      navbar.classList.remove('fa-times'); 
      navbar.classList.add('fa-bars'); 
    }
  })
