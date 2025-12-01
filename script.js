let data = [
  {
    name: "Arpita",
    age: 22,
    img: "https://images.unsplash.com/photo-1631947430066-48c30d57b943?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Z2lybHxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    name: "Muskan",
    age: 24,
    img: "https://images.unsplash.com/photo-1609505848912-b7c3b8b4beda?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGdpcmx8ZW58MHx8MHx8fDA%3D",
  },
  {
    name: "Anvi",
    age: 20,
    img: "https://images.unsplash.com/photo-1597898111396-f149999e08f7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGdpcmx8ZW58MHx8MHx8fDA%3D",
  },
  {
    name: "Kiara",
    age: 26,
    img: "https://images.unsplash.com/photo-1635488640163-e5f6782cda6e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGdpcmx8ZW58MHx8MHx8fDA%3D",
  },
  {
    name: "Nidhi",
    age: 22,
    img: "https://images.unsplash.com/photo-1604004555489-723a93d6ce74?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGdpcmx8ZW58MHx8MHx8fDA%3D",
  },
  {
    name: "Aaru",
    age: 20,
    img: "https://images.unsplash.com/photo-1613005798967-632017e477c8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGdpcmx8ZW58MHx8MHx8fDA%3D",
  },
  {
    name: "Aashu",
    age: 22,
    img: "https://plus.unsplash.com/premium_photo-1668319914124-57301e0a1850?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Z2lybHxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    name: "Mini",
    age: 24,
    img: "https://images.unsplash.com/photo-1586351012965-861624544334?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Z2lybHxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    name: "Ankita",
    age: 20,
    img: "https://plus.unsplash.com/premium_photo-1670282393309-70fd7f8eb1ef?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Z2lybHxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    name: "Kiran",
    age: 26,
    img: "https://images.unsplash.com/photo-1602233158242-3ba0ac4d2167?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z2lybHxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    name: "Nishu",
    age: 22,
    img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Z2lybHxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    name: "Avni",
    age: 20,
    img: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGdpcmx8ZW58MHx8MHx8fDA%3D",
  },
];

let section = document.querySelector("section");
let cluter = "";
data.forEach((val) => {
  cluter += ` <div class="card">
 <img src=${val.img} alt="">
 <h5 class="name">${val.name}</h5>
 <h3 class="age">${val.age}</h3>
  </div>`;
});
section.innerHTML = cluter;

let body = document.querySelector("body");

body.addEventListener("mousemove", (val) => {
  body.style.setProperty("--x", val.clientX + "px");
  body.style.setProperty("--y", val.clientY + "px");
});
